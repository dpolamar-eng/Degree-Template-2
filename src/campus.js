import { FACILITIES_DATA } from './data/facilities.js';

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const facilityId = urlParams.get('id');

  const facility = FACILITIES_DATA[facilityId];

  if (!facility) {
    document.getElementById('facilityApp').innerHTML = `
      <div class="container" style="text-align: center; padding: 10rem 0;">
        <h2 style="font-size: 2rem; color: var(--vanguard-navy);">Facility Not Found</h2>
        <a href="/index.html" class="btn btn-primary" style="margin-top: 1rem;">Back to Campus Life</a>
      </div>
    `;
    return;
  }

  // Populate data
  document.title = `${facility.title} | Vanguard University`;
  document.getElementById('facImage').src = facility.image;
  document.getElementById('facImage').alt = facility.title;
  document.getElementById('facKicker').textContent = facility.kicker;
  document.getElementById('facTitle').textContent = facility.title;
  
  // Stats
  document.getElementById('facStatsRow').innerHTML = facility.stats.map(s => `
    <div>
      <div style="font-size: 1.75rem; font-weight: 800; color: var(--vanguard-navy);">${s.num}</div>
      <div style="font-size: 0.8rem; font-weight: 700; color: var(--vanguard-royal); text-transform: uppercase; margin-top: 0.25rem;">${s.label}</div>
    </div>
  `).join('');

  // Overview
  document.getElementById('facOverview').textContent = facility.overview;

  // Features
  document.getElementById('facFeaturesGrid').innerHTML = facility.features.map(f => `
    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid var(--vanguard-royal); padding: 1.25rem; border-radius: var(--radius-md); display: flex; gap: 0.85rem; align-items: flex-start; box-shadow: var(--shadow-sm);">
      <i class="fa-solid fa-circle-check" style="color: var(--vanguard-royal); font-size: 1.25rem; margin-top: 0.15rem;"></i>
      <span style="font-size: 0.95rem; font-weight: 600; color: #0f172a; line-height: 1.6;">${f}</span>
    </div>
  `).join('');

  // Specs
  document.getElementById('facSpecsBox').innerHTML = facility.specs.map(spec => `
    <div style="display: flex; justify-content: space-between; padding: 0.85rem 0; border-bottom: 1px solid #e2e8f0; font-size: 0.95rem;">
      <span style="font-weight: 700; color: #475569;">${spec.label}:</span>
      <span style="font-weight: 800; color: var(--vanguard-navy); text-align: right;">${spec.val}</span>
    </div>
  `).join('');
});
