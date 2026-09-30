import { 
  PROGRAMMES_DATA, 
  SCHOLARSHIPS_DATA 
} from './data/programmes.js';
import { FACILITIES_DATA } from './data/facilities.js';

// Application State
const state = {
  programmes: [...PROGRAMMES_DATA],
  filteredProgrammes: [...PROGRAMMES_DATA],
  compareList: [],
  activeDetailProgramme: null,
  showAllCourses: false,
  filters: {
    search: '',
    faculty: 'ALL',
    level: 'Undergraduate',
    duration: 'ALL'
  },
  wizardStep: 1
};

// Dynamic Rotating Search Placeholders
const ROTATING_PLACEHOLDERS = {
  Undergraduate: [
    "Search UG degrees e.g. 'B.Sc AI & Machine Learning'...",
    "Search UG degrees e.g. 'B.Tech Cyber Security & Cloud'...",
    "Search UG degrees e.g. 'B.Com FinTech & Analytics'...",
    "Search UG degrees e.g. 'B.Des UX & Interaction Design'..."
  ],
  Postgraduate: [
    "Search PG degrees e.g. 'M.Sc Data Science & Analytics'...",
    "Search PG degrees e.g. 'MBA Financial Technology & Analytics'..."
  ],
  ALL: [
    "Search degrees e.g. 'B.Sc AI & Machine Learning'...",
    "Search degrees e.g. 'M.Sc Data Science & Analytics'...",
    "Search degrees e.g. 'B.Tech Cyber Security'...",
    "Search degrees e.g. 'MBA FinTech'..."
  ]
};

let currentPlaceholderIdx = 0;
let placeholderTimer = null;

// DOM Elements
const elements = {
  programmesGrid: document.getElementById('programmesGrid'),
  catalogCounter: document.getElementById('catalogCounter'),
  catalogSearch: document.getElementById('catalogSearch'),
  facultyFilter: document.getElementById('facultyFilter'),
  durationFilter: document.getElementById('durationFilter'),
  resetFiltersBtn: document.getElementById('resetFiltersBtn'),
  levelBtns: document.querySelectorAll('.level-btn'),

  // Hero elements
  heroSearchInput: document.getElementById('heroSearchInput'),
  heroSearchBtn: document.getElementById('heroSearchBtn'),
  chips: document.querySelectorAll('.chip-white'),

  // Containers
  scholarshipsList: document.getElementById('scholarshipsList'),

  // Modals
  detailModal: document.getElementById('detailModal'),
  compareModal: document.getElementById('compareModal'),
  applyModal: document.getElementById('applyModal'),

  // Compare elements
  openCompareBtn: document.getElementById('openCompareBtn'),
  compareCountBadge: document.getElementById('compareCountBadge'),
  mobileCompareBtn: document.getElementById('mobileCompareBtn'),
  mobileCompareCount: document.getElementById('mobileCompareCount'),
  compareTableContainer: document.getElementById('compareTableContainer'),
  clearCompareListBtn: document.getElementById('clearCompareListBtn'),
  closeCompareModalBtn: document.getElementById('closeCompareModalBtn'),
  compareCloseBtn: document.getElementById('compareCloseBtn'),

  // Detail Modal Elements
  closeDetailModalBtn: document.getElementById('closeDetailModalBtn'),
  modalProgrammeTitle: document.getElementById('modalProgrammeTitle'),
  modalLevelPill: document.getElementById('modalLevelPill'),
  modalDeptPill: document.getElementById('modalDeptPill'),
  modalDurationPill: document.getElementById('modalDurationPill'),
  modalOverviewText: document.getElementById('modalOverviewText'),
  modalHighlightsGrid: document.getElementById('modalHighlightsGrid'),
  modalEligibilityDetails: document.getElementById('modalEligibilityDetails'),
  modalFeeAnnual: document.getElementById('modalFeeAnnual'),
  modalFeeSemester: document.getElementById('modalFeeSemester'),
  modalSyllabusAccordion: document.getElementById('modalSyllabusAccordion'),
  modalCareersList: document.getElementById('modalCareersList'),
  modalPlacementRate: document.getElementById('modalPlacementRate'),
  modalAvgPackage: document.getElementById('modalAvgPackage'),
  modalHighestPackage: document.getElementById('modalHighestPackage'),
  modalRecruitersList: document.getElementById('modalRecruitersList'),
  modalFaqsList: document.getElementById('modalFaqsList'),
  modalApplyNowBtn: document.getElementById('modalApplyNowBtn'),
  modalTabBtns: document.querySelectorAll('.modal-tab-btn'),
  tabPanes: document.querySelectorAll('.tab-pane'),

  // Calculator
  calcProgrammeSelect: document.getElementById('calcProgrammeSelect'),
  calcPercentageInput: document.getElementById('calcPercentageInput'),
  calcCategorySelect: document.getElementById('calcCategorySelect'),
  calculateFeeBtn: document.getElementById('calculateFeeBtn'),
  calcResultBox: document.getElementById('calcResultBox'),
  netFeeDisplay: document.getElementById('netFeeDisplay'),
  scholarshipAppliedBadge: document.getElementById('scholarshipAppliedBadge'),

  // Apply Wizard
  headerApplyBtn: document.getElementById('headerApplyBtn'),
  aboutApplyBtn: document.getElementById('aboutApplyBtn'),
  startApplyWizardBtn: document.getElementById('startApplyWizardBtn'),
  mobileApplyBtn: document.getElementById('mobileApplyBtn'),
  closeApplyModalBtn: document.getElementById('closeApplyModalBtn'),
  appProgrammeSelect: document.getElementById('appProgrammeSelect'),
  wizStep1: document.getElementById('wizStep1'),
  wizStep2: document.getElementById('wizStep2'),
  wizStep3: document.getElementById('wizStep3'),
  wizStep4: document.getElementById('wizStep4'),
  wizNextBtn: document.getElementById('wizNextBtn'),
  wizBackBtn: document.getElementById('wizBackBtn'),
  appSummaryBox: document.getElementById('appSummaryBox'),

  // Mobile Menu
  mobileMenuToggle: document.getElementById('mobileMenuToggle'),
  navMenu: document.getElementById('navMenu'),
  submitContactBtn: document.getElementById('submitContactBtn')
};

// Rotating Placeholder Controller
function startRotatingPlaceholders() {
  if (placeholderTimer) clearInterval(placeholderTimer);

  function update() {
    const levelKey = state.filters.level && state.filters.level !== 'ALL' ? state.filters.level : 'Undergraduate';
    const list = ROTATING_PLACEHOLDERS[levelKey] || ROTATING_PLACEHOLDERS.Undergraduate;
    const placeholderText = list[currentPlaceholderIdx % list.length];

    if (elements.heroSearchInput) {
      elements.heroSearchInput.placeholder = placeholderText;
    }
    if (elements.catalogSearch) {
      elements.catalogSearch.placeholder = placeholderText;
    }

    currentPlaceholderIdx++;
  }

  update();
  placeholderTimer = setInterval(update, 2200);
}

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  applyFilters();
  renderScholarshipsList();
  populateDropdowns();
  setupEventListeners();
  updateCompareBadges();
  startRotatingPlaceholders();

  // Ensure scroll works if navigating to a hash (like #campus)
  if (window.location.hash) {
    setTimeout(() => {
      const el = document.querySelector(window.location.hash);
      if (el) {
        window.scrollTo({ top: el.offsetTop - 80, behavior: 'instant' });
        // Clear the hash so reloads go back to the top
        history.replaceState(null, null, window.location.pathname);
      }
    }, 50);
  } else {
    // Force scroll to top on fresh load
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }
});

// Render Compact Small Programme Cards
function renderProgrammeCards() {
  const list = state.filteredProgrammes;
  const displayList = state.showAllCourses ? list : list.slice(0, 4);

  if (state.showAllCourses) {
    elements.catalogCounter.innerHTML = `Show Less Courses`;
  } else {
    elements.catalogCounter.innerHTML = `Show More Courses`;
  }

  // Update View All / More Courses Button Label if element exists
  const viewBtn = document.getElementById('viewAllCoursesBtn');
  if (viewBtn) {
    if (state.showAllCourses) {
      viewBtn.innerHTML = `<span>Show Less Courses</span> <i class="fa-solid fa-chevron-up"></i>`;
    } else {
      viewBtn.innerHTML = `<span>View More Courses</span> <i class="fa-solid fa-arrow-right"></i>`;
    }
  }

  if (list.length === 0) {
    elements.programmesGrid.innerHTML = `
      <div style="grid-column: 1 / -1; background: white; padding: 2.5rem; text-align: center; border-radius: var(--radius-lg); border: 1px solid var(--border-light);">
        <i class="fa-solid fa-folder-open" style="font-size: 2.5rem; color: var(--text-light); margin-bottom: 1rem;"></i>
        <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--vanguard-navy);">No Matching Courses Found</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.25rem;">Try adjusting search terms or resetting filters.</p>
        <button class="btn btn-primary" onclick="document.getElementById('resetFiltersBtn').click()">Reset Filters</button>
      </div>
    `;
    return;
  }

  elements.programmesGrid.innerHTML = displayList.map(prog => {
    const isCompared = state.compareList.includes(prog.id);
    return `
      <article class="programme-card">
        <div>
          <div class="card-top-tags">
            <span class="badge-level">${prog.level}</span>
            <span class="badge-code">${prog.code}</span>
          </div>

          <div class="card-dept">${prog.faculty}</div>
          <h3 class="card-title">
            <a href="#" class="prog-title-link" data-id="${prog.id}">${prog.title}</a>
          </h3>

          <p class="card-desc">${prog.overview}</p>

          <div class="card-roles">
            ${prog.careerRoles.slice(0, 2).map(r => `<span class="role-chip"><i class="fa-solid fa-user-gear"></i> ${r}</span>`).join('')}
          </div>

          <!-- Compact Placeholder Meta Chips -->
          <div class="compact-card-meta">
            <span class="meta-chip"><i class="fa-regular fa-clock"></i> ${prog.duration.split(' ')[0]} ${prog.duration.split(' ')[1]}</span>
            <span class="meta-chip"><i class="fa-solid fa-graduation-cap"></i> 10+2 Min 60%</span>
            <span class="meta-chip"><i class="fa-solid fa-briefcase"></i> ${prog.placementRate}% Placed</span>
          </div>
        </div>

        <div class="card-footer-bar">
          <div class="fee-tag">
            <span class="fee-amount">${prog.feeFormatted}</span>
          </div>
          <div class="card-actions">
            <button class="btn btn-outline btn-xs toggle-compare-btn ${isCompared ? 'active' : ''}" data-id="${prog.id}">
              ${isCompared ? '✓' : '+ Compare'}
            </button>
            <button class="btn btn-secondary btn-xs view-detail-btn" data-id="${prog.id}">Details</button>
            <button class="btn btn-primary btn-xs direct-apply-btn" data-id="${prog.id}">Apply</button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// Filter Logic
function applyFilters() {
  const { search, faculty, level, duration } = state.filters;
  state.filteredProgrammes = state.programmes.filter(prog => {
    const matchesSearch = !search || 
      prog.title.toLowerCase().includes(search.toLowerCase()) ||
      prog.overview.toLowerCase().includes(search.toLowerCase()) ||
      prog.careerRoles.some(r => r.toLowerCase().includes(search.toLowerCase()));

    const matchesFaculty = faculty === 'ALL' || prog.faculty === faculty;
    const matchesLevel = level === 'ALL' || prog.level === level;
    const matchesDuration = duration === 'ALL' || prog.durationYears === parseInt(duration);

    return matchesSearch && matchesFaculty && matchesLevel && matchesDuration;
  });

  renderProgrammeCards();
}

function populateDropdowns() {
  const options = state.programmes.map(p => `<option value="${p.id}">${p.title} (${p.level})</option>`).join('');
  if (elements.calcProgrammeSelect) elements.calcProgrammeSelect.innerHTML = options;
  if (elements.appProgrammeSelect) elements.appProgrammeSelect.innerHTML = options;
}

function renderScholarshipsList() {
  if (!elements.scholarshipsList) return;
  elements.scholarshipsList.innerHTML = SCHOLARSHIPS_DATA.map(sch => `
    <div style="background: var(--bg-slate); border-left: 4px solid var(--vanguard-gold); padding: 1.15rem; border-radius: var(--radius-md); margin-bottom: 1rem; border: 1px solid var(--border-light);">
      <div style="font-size: 0.75rem; font-weight: 800; color: var(--vanguard-crimson); text-transform: uppercase;">${sch.code}</div>
      <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--vanguard-navy); margin: 0.25rem 0;">${sch.name}</h4>
      <div style="font-size: 0.95rem; font-weight: 800; color: var(--vanguard-royal); margin-bottom: 0.35rem;">${sch.discount}</div>
      <p style="font-size: 0.85rem; color: var(--text-muted);">${sch.criteria}</p>
    </div>
  `).join('');
}

function openFacilityModal(facilityId) {
  const facility = FACILITIES_DATA[facilityId];
  if (!facility) return;

  const modalBody = document.getElementById('facilityModalBody');
  const facilityModal = document.getElementById('facilityModal');

  modalBody.innerHTML = `
    <div style="position: relative; height: 320px; width: 100%; overflow: hidden; background: #0b192c;">
      <img src="${facility.image}" alt="${facility.title}" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.65;" />
      <div style="position: absolute; inset: 0; background: linear-gradient(to top, #0b192c 0%, rgba(11, 25, 44, 0.4) 60%, transparent 100%);"></div>
      <div style="position: absolute; bottom: 1.5rem; left: 2rem; right: 2rem; color: white;">
        <span style="font-size: 0.75rem; font-weight: 800; color: var(--vanguard-gold); text-transform: uppercase; letter-spacing: 0.08em; background: rgba(245, 158, 11, 0.15); border: 1px solid rgba(245, 158, 11, 0.4); padding: 0.25rem 0.75rem; border-radius: 20px;">
          ${facility.kicker}
        </span>
        <h2 style="font-size: 2rem; font-weight: 800; color: white; margin-top: 0.5rem; text-shadow: 0 2px 10px rgba(0,0,0,0.5);">
          ${facility.title}
        </h2>
      </div>
    </div>

    <div style="padding: 2rem; background: #ffffff;">
      <!-- Stats Row -->
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 2rem; background: #eef5fc; padding: 1.25rem; border-radius: var(--radius-lg); border: 1.5px solid #cbd5e1; text-align: center;">
        ${facility.stats.map(s => `
          <div>
            <div style="font-size: 1.5rem; font-weight: 800; color: var(--vanguard-navy);">${s.num}</div>
            <div style="font-size: 0.75rem; font-weight: 700; color: var(--vanguard-royal); text-transform: uppercase;">${s.label}</div>
          </div>
        `).join('')}
      </div>

      <!-- Overview -->
      <div style="margin-bottom: 2rem;">
        <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--vanguard-navy); margin-bottom: 0.75rem;">
          Facility Overview & Purpose
        </h3>
        <p style="font-size: 0.975rem; color: #334155; line-height: 1.7;">
          ${facility.overview}
        </p>
      </div>

      <!-- Key Features Grid -->
      <div style="margin-bottom: 2rem;">
        <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--vanguard-navy); margin-bottom: 1rem;">
          Key Infrastructure & Technology Highlights
        </h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
          ${facility.features.map(f => `
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid var(--vanguard-royal); padding: 1rem; border-radius: var(--radius-md); display: flex; gap: 0.75rem; align-items: flex-start;">
              <i class="fa-solid fa-circle-check" style="color: var(--vanguard-royal); font-size: 1.1rem; margin-top: 0.15rem;"></i>
              <span style="font-size: 0.9rem; font-weight: 600; color: #0f172a; line-height: 1.5;">${f}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Specs Table -->
      <div style="margin-bottom: 2rem; background: #ffffff; border: 1.5px solid #cbd5e1; border-radius: var(--radius-lg); overflow: hidden;">
        <div style="background: var(--vanguard-navy); color: white; padding: 0.85rem 1.25rem; font-weight: 800; font-size: 0.95rem;">
          Access Guidelines & Operational Specs
        </div>
        <div style="padding: 1rem 1.25rem;">
          ${facility.specs.map(spec => `
            <div style="display: flex; justify-content: space-between; padding: 0.6rem 0; border-bottom: 1px solid #e2e8f0; font-size: 0.875rem;">
              <span style="font-weight: 700; color: #475569;">${spec.label}:</span>
              <span style="font-weight: 800; color: var(--vanguard-navy); text-align: right;">${spec.val}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Bottom Action Bar -->
      <div style="display: flex; gap: 1rem; align-items: center; justify-content: space-between; border-top: 1.5px solid #e2e8f0; padding-top: 1.5rem;">
        <button class="btn" id="facilityInnerBackBtn" style="background: #e2e8f0; color: var(--vanguard-navy); font-weight: 800; border: none; padding: 0.65rem 1.25rem; border-radius: var(--radius-md); cursor: pointer;">
          <i class="fa-solid fa-arrow-left"></i> Back to Main Page
        </button>
        <button class="btn btn-primary" id="facilityApplyAccessBtn" style="background: var(--vanguard-crimson); color: white; font-weight: 800; padding: 0.65rem 1.5rem; border-radius: var(--radius-md); cursor: pointer;">
          <i class="fa-solid fa-paper-plane"></i> Apply for Facility Access Pass
        </button>
      </div>
    </div>
  `;

  facilityModal.classList.add('active');
  document.body.style.overflow = 'hidden';

  const innerBackBtn = document.getElementById('facilityInnerBackBtn');
  if (innerBackBtn) {
    innerBackBtn.addEventListener('click', closeFacilityModal);
  }

  const applyAccessBtn = document.getElementById('facilityApplyAccessBtn');
  if (applyAccessBtn) {
    applyAccessBtn.addEventListener('click', () => {
      closeFacilityModal();
      openApplyModal();
    });
  }
}

function closeFacilityModal() {
  const facilityModal = document.getElementById('facilityModal');
  if (facilityModal) {
    facilityModal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function setupEventListeners() {
  // Hero Search
  elements.heroSearchBtn.addEventListener('click', () => {
    state.filters.search = elements.heroSearchInput.value.trim();
    elements.catalogSearch.value = state.filters.search;
    applyFilters();
    document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
  });

  elements.heroSearchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') elements.heroSearchBtn.click();
  });

  elements.chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const query = chip.dataset.query;
      elements.heroSearchInput.value = query;
      elements.heroSearchBtn.click();
    });
  });

  // Catalog Filters
  elements.catalogSearch.addEventListener('input', (e) => {
    state.filters.search = e.target.value.trim();
    applyFilters();
  });

  if (elements.facultyFilter) {
    elements.facultyFilter.addEventListener('change', (e) => {
      state.filters.faculty = e.target.value;
      applyFilters();
    });
  }

  elements.durationFilter.addEventListener('change', (e) => {
    state.filters.duration = e.target.value;
    applyFilters();
  });

  const levelBtnList = document.querySelectorAll('.level-btn');
  levelBtnList.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedLevel = btn.dataset.level;
      state.filters.level = selectedLevel;

      levelBtnList.forEach(b => {
        if (b.dataset.level === selectedLevel) {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });

      applyFilters();
      currentPlaceholderIdx = 0;
      startRotatingPlaceholders();

      // If clicked from hero, scroll to courses smoothly
      if (btn.classList.contains('hero-level-btn')) {
        document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  const viewAllBtn = document.getElementById('viewAllCoursesBtn');
  if (viewAllBtn) {
    viewAllBtn.addEventListener('click', () => {
      state.showAllCourses = !state.showAllCourses;
      renderProgrammeCards();
    });
  }

  if (elements.catalogCounter) {
    elements.catalogCounter.addEventListener('click', () => {
      state.showAllCourses = !state.showAllCourses;
      renderProgrammeCards();
    });
  }

  // Header Scroll Transition to Solid Dark Blue
  const mainHeader = document.querySelector('.main-header');
  if (mainHeader) {
    const handleHeaderScroll = () => {
      if (window.scrollY > 40) {
        mainHeader.classList.add('scrolled');
      } else {
        mainHeader.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleHeaderScroll, { passive: true });
    handleHeaderScroll();
  }

  elements.resetFiltersBtn.addEventListener('click', () => {
    state.filters = { search: '', faculty: 'ALL', level: 'Undergraduate', duration: 'ALL' };
    elements.catalogSearch.value = '';
    elements.heroSearchInput.value = '';
    elements.facultyFilter.value = 'ALL';
    elements.durationFilter.value = 'ALL';

    levelBtnList.forEach(b => {
      if (b.dataset.level === 'Undergraduate') b.classList.add('active');
      else b.classList.remove('active');
    });

    applyFilters();
    currentPlaceholderIdx = 0;
    startRotatingPlaceholders();
  });

  // Delegate Grid Click Events
  elements.programmesGrid.addEventListener('click', (e) => {
    const titleLink = e.target.closest('.prog-title-link');
    const detailBtn = e.target.closest('.view-detail-btn');
    const applyBtn = e.target.closest('.direct-apply-btn');
    const compareBtn = e.target.closest('.toggle-compare-btn');

    if (titleLink || detailBtn) {
      e.preventDefault();
      const id = (titleLink || detailBtn).dataset.id;
      openDetailModal(id);
    } else if (applyBtn) {
      const id = applyBtn.dataset.id;
      openApplyModal(id);
    } else if (compareBtn) {
      const id = compareBtn.dataset.id;
      toggleCompare(id);
    }
  });

  // Modal triggers
  elements.closeDetailModalBtn.addEventListener('click', () => closeModal(elements.detailModal));
  elements.closeCompareModalBtn.addEventListener('click', () => closeModal(elements.compareModal));
  elements.closeCompareModalBtn.addEventListener('click', () => closeModal(elements.compareModal));
  elements.closeApplyModalBtn.addEventListener('click', () => closeModal(elements.applyModal));

  // Campus Life Cards Landing Page Click Handlers
  const campusCards = document.querySelectorAll('.campus-card');
  campusCards.forEach(card => {
    card.addEventListener('click', () => {
      const facilityId = card.dataset.facility;
      if (facilityId) {
        window.location.href = `/campus.html?id=${facilityId}`;
      }
    });
  });

  const closeFacilityBackBtn = document.getElementById('closeFacilityBackBtn');
  if (closeFacilityBackBtn) {
    closeFacilityBackBtn.addEventListener('click', closeFacilityModal);
  }

  const closeFacilityModalBtn = document.getElementById('closeFacilityModalBtn');
  if (closeFacilityModalBtn) {
    closeFacilityModalBtn.addEventListener('click', closeFacilityModal);
  }

  const facilityModal = document.getElementById('facilityModal');
  if (facilityModal) {
    facilityModal.addEventListener('click', (e) => {
      if (e.target === facilityModal) {
        closeFacilityModal();
      }
    });
  }

  elements.modalTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      elements.modalTabBtns.forEach(b => b.classList.remove('active'));
      elements.tabPanes.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab).classList.add('active');
    });
  });

  elements.modalApplyNowBtn.addEventListener('click', () => {
    if (state.activeDetailProgramme) {
      closeModal(elements.detailModal);
      openApplyModal(state.activeDetailProgramme.id);
    }
  });

  // Compare Buttons
  elements.openCompareBtn.addEventListener('click', openCompareModal);
  elements.mobileCompareBtn.addEventListener('click', openCompareModal);
  elements.clearCompareListBtn.addEventListener('click', () => {
    state.compareList = [];
    updateCompareBadges();
    renderProgrammeCards();
    renderCompareTable();
  });

  // Calculator
  if (elements.calculateFeeBtn) elements.calculateFeeBtn.addEventListener('click', calculateNetFee);

  // Apply Wizard
  if (elements.headerApplyBtn) elements.headerApplyBtn.addEventListener('click', () => openApplyModal());
  if (elements.aboutApplyBtn) elements.aboutApplyBtn.addEventListener('click', () => openApplyModal());
  if (elements.startApplyWizardBtn) elements.startApplyWizardBtn.addEventListener('click', () => openApplyModal());
  if (elements.mobileApplyBtn) elements.mobileApplyBtn.addEventListener('click', () => openApplyModal());

  elements.wizNextBtn.addEventListener('click', handleWizardNext);
  elements.wizBackBtn.addEventListener('click', handleWizardBack);

  // Mobile Menu
  elements.mobileMenuToggle.addEventListener('click', () => {
    elements.navMenu.style.display = elements.navMenu.style.display === 'flex' ? 'none' : 'flex';
    elements.navMenu.style.flexDirection = 'column';
    elements.navMenu.style.position = 'absolute';
    elements.navMenu.style.top = '76px';
    elements.navMenu.style.left = '0';
    elements.navMenu.style.right = '0';
    elements.navMenu.style.background = 'white';
    elements.navMenu.style.padding = '1.5rem';
    elements.navMenu.style.boxShadow = 'var(--shadow-lg)';
  });

  elements.submitContactBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName').value;
    if (!name) {
      alert('Please enter your full name');
      return;
    }
    alert(`Thank you ${name}! Vanguard University Admissions Office will call you within 24 business hours.`);
  });
}

function toggleCompare(id) {
  const index = state.compareList.indexOf(id);
  if (index > -1) {
    state.compareList.splice(index, 1);
  } else {
    if (state.compareList.length >= 3) {
      alert('You can compare up to 3 courses at a time.');
      return;
    }
    state.compareList.push(id);
  }
  updateCompareBadges();
  renderProgrammeCards();
}

function updateCompareBadges() {
  const count = state.compareList.length;
  elements.compareCountBadge.textContent = count;
  elements.mobileCompareCount.textContent = count;
}

function openCompareModal() {
  if (state.compareList.length === 0) {
    alert('Please select at least 1 course to compare using the "+ Compare" button on course cards.');
    return;
  }
  renderCompareTable();
  openModal(elements.compareModal);
}

function renderCompareTable() {
  const progs = state.compareList.map(id => state.programmes.find(p => p.id === id)).filter(Boolean);
  if (progs.length === 0) {
    elements.compareTableContainer.innerHTML = '<p>No courses selected for comparison.</p>';
    return;
  }

  elements.compareTableContainer.innerHTML = `
    <table class="comparison-table">
      <thead>
        <tr>
          <th style="width:180px;">Metric</th>
          ${progs.map(p => `<th>${p.title}</th>`).join('')}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="feature-lbl">Level & Code</td>
          ${progs.map(p => `<td><strong>${p.level}</strong> (${p.code})</td>`).join('')}
        </tr>
        <tr>
          <td class="feature-lbl">School / Faculty</td>
          ${progs.map(p => `<td>${p.faculty}</td>`).join('')}
        </tr>
        <tr>
          <td class="feature-lbl">Duration</td>
          ${progs.map(p => `<td>${p.duration}</td>`).join('')}
        </tr>
        <tr>
          <td class="feature-lbl">Eligibility Criteria</td>
          ${progs.map(p => `<td>${p.eligibilityDetails}</td>`).join('')}
        </tr>
        <tr>
          <td class="feature-lbl">Annual Tuition Fee</td>
          ${progs.map(p => `<td><strong style="color:var(--vanguard-navy);">${p.feeFormatted}</strong></td>`).join('')}
        </tr>
        <tr>
          <td class="feature-lbl">Placement Rate</td>
          ${progs.map(p => `<td><span style="color:var(--vanguard-royal); font-weight:800;">${p.placementRate}%</span> (Highest: ${p.highestPackage})</td>`).join('')}
        </tr>
        <tr>
          <td class="feature-lbl">Target Career Roles</td>
          ${progs.map(p => `<td>${p.careerRoles.join(', ')}</td>`).join('')}
        </tr>
        <tr>
          <td class="feature-lbl">Action</td>
          ${progs.map(p => `<td><button class="btn btn-primary btn-sm" onclick="window.directApplyFromCompare('${p.id}')">Apply Now</button></td>`).join('')}
        </tr>
      </tbody>
    </table>
  `;
}

window.directApplyFromCompare = (id) => {
  closeModal(elements.compareModal);
  openApplyModal(id);
};

function openDetailModal(id) {
  const prog = state.programmes.find(p => p.id === id);
  if (!prog) return;

  state.activeDetailProgramme = prog;

  elements.modalProgrammeTitle.textContent = prog.title;
  elements.modalLevelPill.textContent = prog.level;
  elements.modalDeptPill.textContent = prog.faculty;
  elements.modalDurationPill.textContent = prog.duration;
  elements.modalOverviewText.textContent = prog.overview;

  elements.modalHighlightsGrid.innerHTML = `
    <div style="background:var(--bg-slate); padding:0.85rem; border-radius:var(--radius-sm); border:1px solid var(--border-light);">
      <span style="font-size:0.75rem; color:var(--text-light); text-transform:uppercase;">Degree Type</span>
      <div style="font-weight:700; color:var(--vanguard-navy);">${prog.degreeType}</div>
    </div>
    <div style="background:var(--bg-slate); padding:0.85rem; border-radius:var(--radius-sm); border:1px solid var(--border-light);">
      <span style="font-size:0.75rem; color:var(--text-light); text-transform:uppercase;">Department</span>
      <div style="font-weight:700; color:var(--vanguard-navy);">${prog.department}</div>
    </div>
  `;

  elements.modalEligibilityDetails.textContent = prog.eligibilityDetails;
  elements.modalFeeAnnual.textContent = prog.feeFormatted;
  elements.modalFeeSemester.textContent = `₹${prog.feeSemester.toLocaleString()} / sem`;

  elements.modalSyllabusAccordion.innerHTML = prog.syllabus.map(s => `
    <div class="sem-box">
      <div class="sem-header">${s.sem}</div>
      <ul class="sem-courses">
        ${s.courses.map(c => `<li>${c}</li>`).join('')}
      </ul>
    </div>
  `).join('');

  elements.modalCareersList.innerHTML = prog.careerRoles.map(r => `<span class="role-pill">${r}</span>`).join('');
  elements.modalPlacementRate.textContent = `${prog.placementRate}%`;
  elements.modalAvgPackage.textContent = prog.avgPackage;
  elements.modalHighestPackage.textContent = prog.highestPackage;
  elements.modalRecruitersList.innerHTML = prog.topRecruiters.map(r => `<span class="role-pill" style="background:var(--bg-slate); color:var(--vanguard-navy);">${r}</span>`).join('');

  elements.modalFaqsList.innerHTML = prog.faqs.map(f => `
    <div style="background:var(--bg-slate); padding:1rem; border-radius:var(--radius-md); border:1px solid var(--border-light);">
      <h4 style="font-size:0.95rem; font-weight:800; color:var(--vanguard-navy); margin-bottom:0.35rem;">${f.q}</h4>
      <p style="font-size:0.875rem; color:var(--text-muted);">${f.a}</p>
    </div>
  `).join('');

  elements.modalTabBtns[0].click();
  openModal(elements.detailModal);
}

function calculateNetFee() {
  const progId = elements.calcProgrammeSelect.value;
  const pct = parseFloat(elements.calcPercentageInput.value);
  const cat = elements.calcCategorySelect.value;

  if (!pct || isNaN(pct)) {
    alert('Please enter a valid qualifying percentage mark.');
    return;
  }

  const prog = state.programmes.find(p => p.id === progId);
  if (!prog) return;

  let discountPct = 0;
  let label = 'Standard Tuition Fee Structure';

  if (pct >= 90) {
    discountPct = 50;
    label = 'Vanguard Founder Merit Waiver (50% Discount)';
  } else if (pct >= 80) {
    discountPct = 25;
    label = 'Dean Academic Excellence Waiver (25% Discount)';
  }

  if (cat === 'STEM_WOMEN' && prog.faculty.includes('Engineering')) {
    if (30 > discountPct) {
      discountPct = 30;
      label = 'Women in STEM Leadership Grant (30% Discount)';
    }
  } else if (cat === 'SPORTS') {
    if (40 > discountPct) {
      discountPct = 40;
      label = 'Sports Achiever Grant (40% Discount)';
    }
  }

  const discountAmount = (prog.feeAnnual * discountPct) / 100;
  const netFee = prog.feeAnnual - discountAmount;

  elements.netFeeDisplay.textContent = `₹${netFee.toLocaleString()} / year`;
  elements.scholarshipAppliedBadge.textContent = `${label} - Saved ₹${discountAmount.toLocaleString()}/yr`;
  elements.calcResultBox.style.display = 'block';
}

function openApplyModal(progId) {
  if (progId) {
    elements.appProgrammeSelect.value = progId;
  }
  state.wizardStep = 1;
  updateWizardUI();
  openModal(elements.applyModal);
}

function handleWizardNext() {
  if (state.wizardStep === 1) {
    const fn = document.getElementById('appFirstName').value;
    const ln = document.getElementById('appLastName').value;
    const em = document.getElementById('appEmail').value;
    if (!fn || !ln || !em) {
      alert('Please fill in your contact details.');
      return;
    }
  } else if (state.wizardStep === 3) {
    const score = document.getElementById('appScore').value;
    if (!score) {
      alert('Please enter your academic score.');
      return;
    }
  } else if (state.wizardStep === 4) {
    const refId = `VUG-2026-${Math.floor(100000 + Math.random() * 900000)}`;
    alert(`Application Submitted Successfully!\nYour Application Reference ID: ${refId}\nConfirmation email sent with next instructions.`);
    closeModal(elements.applyModal);
    return;
  }

  state.wizardStep++;
  updateWizardUI();
}

function handleWizardBack() {
  if (state.wizardStep > 1) {
    state.wizardStep--;
    updateWizardUI();
  }
}

function updateWizardUI() {
  const step = state.wizardStep;

  elements.wizStep1.style.display = step === 1 ? 'block' : 'none';
  elements.wizStep2.style.display = step === 2 ? 'block' : 'none';
  elements.wizStep3.style.display = step === 3 ? 'block' : 'none';
  elements.wizStep4.style.display = step === 4 ? 'block' : 'none';

  for (let i = 1; i <= 4; i++) {
    const hdr = document.getElementById(`wizStepHeader${i}`);
    hdr.classList.remove('active', 'completed');
    if (i === step) hdr.classList.add('active');
    if (i < step) hdr.classList.add('completed');
  }

  elements.wizBackBtn.style.display = step > 1 ? 'inline-flex' : 'none';
  elements.wizNextBtn.textContent = step === 4 ? 'Submit Application' : 'Next Step';

  if (step === 4) {
    const fn = document.getElementById('appFirstName').value;
    const progId = elements.appProgrammeSelect.value;
    const prog = state.programmes.find(p => p.id === progId);
    elements.appSummaryBox.innerHTML = `
      <div style="font-size:2.5rem; color:var(--vanguard-royal); margin-bottom:0.5rem;"><i class="fa-solid fa-circle-check"></i></div>
      <h3 style="font-size:1.25rem; font-weight:800; color:var(--vanguard-navy); margin-bottom:0.5rem;">Review Application Summary, ${fn}!</h3>
      <p style="font-size:0.9rem; color:var(--text-muted);">
        Selected Course: <strong>${prog ? prog.title : 'Course'}</strong><br />
        Annual Fee: <strong>${prog ? prog.feeFormatted : ''}</strong>
      </p>
    `;
  }
}

function openModal(modal) {
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}
