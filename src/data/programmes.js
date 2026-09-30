export const PROGRAMMES_DATA = [
  {
    id: "bsc-ai-ml",
    title: "B.Sc Computer Science (AI & Machine Learning)",
    shortTitle: "B.Sc AI & ML",
    level: "Undergraduate",
    code: "UG-CS-101",
    faculty: "School of Engineering & Technology",
    department: "Department of Computer Science",
    duration: "3 Years (6 Semesters)",
    durationYears: 3,
    degreeType: "B.Sc (Honours Option)",
    eligibility: "10+2 with Physics, Mathematics & CS min 60%.",
    eligibilityDetails: "Higher Secondary (10+2) or equivalent with Physics, Mathematics, and Computer Science/Chemistry with minimum 60% aggregate marks.",
    feeAnnual: 145000,
    feeSemester: 72500,
    feeFormatted: "₹1,45,000 / year",
    careerRoles: ["AI Specialist", "ML Research Engineer", "Data Architect", "Cloud AI Consultant"],
    placementRate: 98.4,
    avgPackage: "₹9.2 LPA",
    highestPackage: "₹42.5 LPA",
    topRecruiters: ["Microsoft", "Amazon", "Deloitte", "Google Cloud", "Infosys", "TCS Digital"],
    overview: "A specialized undergraduate degree engineered to provide strong mathematical foundations, deep learning frameworks, neural network design, and MLOps deployment.",
    syllabus: [
      { sem: "Semester 1", courses: ["Discrete Mathematics", "Python Programming Fundamentals", "Digital Logic Design", "Data Structures Intro", "Academic Writing"] },
      { sem: "Semester 2", courses: ["Linear Algebra & Vector Calculus", "Object-Oriented Programming (Java)", "Database Management Systems", "Statistical Inference", "Environmental Science"] },
      { sem: "Semester 3", courses: ["Supervised Machine Learning", "Algorithm Design & Analysis", "Operating Systems", "Probability & Stochastic Processes", "AI Ethics"] },
      { sem: "Semester 4", courses: ["Deep Learning & Neural Networks", "Natural Language Processing (NLP)", "Computer Networks & Cloud Defense", "Big Data Analytics", "Elective I"] },
      { sem: "Semester 5", courses: ["Computer Vision", "MLOps & System Deployment", "Reinforcement Learning", "Micro-Internship"] },
      { sem: "Semester 6", courses: ["Capstone AI Industry Project", "Peer-Reviewed Paper Publication", "Comprehensive Viva Voce"] }
    ],
    faqs: [
      { q: "Is prior coding experience required?", a: "No prior coding background is needed. Semester 1 starts from fundamental programming logic." },
      { q: "Are scholarships available?", a: "Yes, merit waivers up to 50% are awarded based on 10+2 percentage marks." }
    ]
  },
  {
    id: "btech-cyber",
    title: "B.Tech Cyber Security & Cloud Systems",
    shortTitle: "B.Tech Cyber Security",
    level: "Undergraduate",
    code: "UG-ENG-204",
    faculty: "School of Engineering & Technology",
    department: "Department of Cyber Security",
    duration: "4 Years (8 Semesters)",
    durationYears: 4,
    degreeType: "B.Tech",
    eligibility: "10+2 with Physics, Chemistry & Math min 60%.",
    eligibilityDetails: "10+2 Science Stream with Physics, Chemistry, and Mathematics with minimum 60% aggregate.",
    feeAnnual: 175000,
    feeSemester: 87500,
    feeFormatted: "₹1,75,000 / year",
    careerRoles: ["Cloud Security Architect", "SOC Analyst", "Ethical Hacker", "DevSecOps Lead"],
    placementRate: 97.5,
    avgPackage: "₹8.8 LPA",
    highestPackage: "₹34.0 LPA",
    topRecruiters: ["Cisco", "CrowdStrike", "PwC", "EY Tech", "IBM Security", "L&T Infotech"],
    overview: "Training in enterprise network defense, cloud infrastructure security (AWS/Azure), ethical hacking, digital forensics, and compliance.",
    syllabus: [
      { sem: "Semester 1", courses: ["Engineering Mathematics I", "Engineering Physics", "C/C++ Programming", "Digital Electronics"] },
      { sem: "Semester 2", courses: ["Engineering Mathematics II", "Data Structures", "Linux Systems Administration", "Applied Cryptography"] },
      { sem: "Semester 3", courses: ["Computer Networks", "Firewalls & VPNs", "Ethical Hacking", "Database Security"] },
      { sem: "Semester 4", courses: ["Cloud Security (AWS/Azure)", "Web Application Pentesting", "DevSecOps", "SOC Operations"] },
      { sem: "Semester 5", courses: ["Digital Forensics", "Identity & Access Management", "Container Security", "Mobile Security"] },
      { sem: "Semester 6", courses: ["Cyber Law & ISO 27001", "Threat Hunting", "Capstone Phase I"] },
      { sem: "Semester 7", courses: ["Full-Semester Industrial Internship"] },
      { sem: "Semester 8", courses: ["Major Capstone Defense", "Comprehensive Viva"] }
    ],
    faqs: [
      { q: "Are certifications included?", a: "Coursework prepares students for CompTIA Security+ and Certified Ethical Hacker (CEH)." }
    ]
  },
  {
    id: "msc-data-science",
    title: "M.Sc Data Science & Predictive Analytics",
    shortTitle: "M.Sc Data Science",
    level: "Postgraduate",
    code: "PG-CS-501",
    faculty: "School of Engineering & Technology",
    department: "Department of Computer Science",
    duration: "2 Years (4 Semesters)",
    durationYears: 2,
    degreeType: "M.Sc",
    eligibility: "Bachelor degree in CS, Math, Stats or B.Sc min 55%.",
    eligibilityDetails: "Recognized Bachelor's Degree (B.Sc, B.Tech, BCA, B.Math) with Mathematics/Statistics at degree level and minimum 55% aggregate marks.",
    feeAnnual: 185000,
    feeSemester: 92500,
    feeFormatted: "₹1,85,000 / year",
    careerRoles: ["Lead Data Scientist", "Senior ML Engineer", "Quantitative Research Lead"],
    placementRate: 98.8,
    avgPackage: "₹11.2 LPA",
    highestPackage: "₹38.0 LPA",
    topRecruiters: ["Microsoft", "Goldman Sachs", "Fractal Analytics", "Target Data", "Oracle"],
    overview: "Advanced postgraduate training in statistical learning theory, distributed big data architecture, neural networks, and time-series forecasting.",
    syllabus: [
      { sem: "Semester 1", courses: ["Advanced Mathematical Statistics", "Data Mining & Discovery", "Modern Software Engineering (Python/R)", "NoSQL Systems"] },
      { sem: "Semester 2", courses: ["Advanced Machine Learning", "Time Series Forecasting", "Big Data Architecture (Apache Spark)", "Optimization Techniques"] },
      { sem: "Semester 3", courses: ["Deep Learning & Cognitive Systems", "Reinforcement Learning", "NLP at Scale", "Master's Research Seminar"] },
      { sem: "Semester 4", courses: ["Master Thesis Dissertation", "Peer-Reviewed Paper Publication", "Final Defense"] }
    ],
    faqs: [
      { q: "Is master thesis publication mandatory?", a: "Yes, postgraduates co-author a publication-grade thesis with department faculty." }
    ]
  },
  {
    id: "mba-fintech",
    title: "MBA Financial Technology & Quantitative Analytics",
    shortTitle: "MBA FinTech",
    level: "Postgraduate",
    code: "PG-BIZ-602",
    faculty: "School of Business & Management",
    department: "Department of Finance",
    duration: "2 Years (4 Semesters)",
    durationYears: 2,
    degreeType: "MBA",
    eligibility: "Graduation in any stream with min 50% aggregate.",
    eligibilityDetails: "Recognized Bachelor's Degree in any discipline with minimum 50% aggregate marks.",
    feeAnnual: 220000,
    feeSemester: 110000,
    feeFormatted: "₹2,20,000 / year",
    careerRoles: ["Fintech Product Manager", "Financial Risk Analytics Lead", "Algorithmic Trader"],
    placementRate: 98.2,
    avgPackage: "₹10.8 LPA",
    highestPackage: "₹32.0 LPA",
    topRecruiters: ["JPMorgan Chase", "HSBC", "Deloitte", "Zerodha", "KPMG", "Morgan Stanley"],
    overview: "Specialized postgraduate MBA merging strategic management with quantitative financial modeling, blockchain banking, and Python financial analytics.",
    syllabus: [
      { sem: "Semester 1", courses: ["Managerial Accounting", "Corporate Finance", "Business Statistics", "Managerial Economics"] },
      { sem: "Semester 2", courses: ["Quantitative Financial Analytics", "FinTech Architecture", "Python for Financial Modeling", "Marketing Management"] },
      { sem: "Semester 3", courses: ["Algorithmic Trading Systems", "Blockchain in Banking", "Risk Management Tech", "Global Investment Banking"] },
      { sem: "Semester 4", courses: ["Corporate Master Internship", "Strategic FinTech Capstone", "Final Defense"] }
    ],
    faqs: [
      { q: "Is live market data training provided?", a: "Yes, students get hands-on access to live Bloomberg Terminals and financial analytics labs." }
    ]
  },
  {
    id: "bcom-fintech",
    title: "B.Com (Honours) Financial Technology & Analytics",
    shortTitle: "B.Com FinTech",
    level: "Undergraduate",
    code: "UG-COM-301",
    faculty: "School of Business & Management",
    department: "Department of Finance",
    duration: "3 Years (6 Semesters)",
    durationYears: 3,
    degreeType: "B.Com (Honours)",
    eligibility: "10+2 Commerce/Science with min 55% aggregate.",
    eligibilityDetails: "Passed 10+2 in Commerce or Science with Accountancy/Mathematics with minimum 55% aggregate marks.",
    feeAnnual: 115000,
    feeSemester: 57500,
    feeFormatted: "₹1,15,000 / year",
    careerRoles: ["Financial Analyst", "Fintech Product Lead", "Investment Analyst"],
    placementRate: 95.2,
    avgPackage: "₹7.2 LPA",
    highestPackage: "₹18.0 LPA",
    topRecruiters: ["Deloitte", "HSBC", "JPMorgan Chase", "KPMG", "Zerodha"],
    overview: "Merging accounting and corporate finance with quantitative modeling, financial programming in R and Python, and algorithmic trading.",
    syllabus: [
      { sem: "Semester 1", courses: ["Financial Accounting", "Business Economics", "Business Statistics", "Financial Markets"] },
      { sem: "Semester 2", courses: ["Corporate Accounting", "Cost Accounting", "Python for Finance", "Quantitative Finance"] },
      { sem: "Semester 3", courses: ["Corporate Finance", "FinTech Architecture", "Direct Taxation", "Financial Modeling"] },
      { sem: "Semester 4", courses: ["Algorithmic Trading", "Blockchain in Banking", "Portfolio Management", "Audit & Risk"] },
      { sem: "Semester 5", courses: ["Equity Research", "Financial Statement Analysis", "Derivatives", "Fintech Project"] },
      { sem: "Semester 6", courses: ["Corporate Internship", "Global Markets", "Viva Voce"] }
    ],
    faqs: [
      { q: "Does this align with CFA Level 1?", a: "Yes, the course syllabus covers CFA Level 1 foundational topics." }
    ]
  },
  {
    id: "bdes-ux",
    title: "B.Des (Honours) User Experience & Interaction Design",
    shortTitle: "B.Des UX Design",
    level: "Undergraduate",
    code: "UG-DES-101",
    faculty: "School of Design & Creative Arts",
    department: "Department of Design Studies",
    duration: "4 Years (8 Semesters)",
    durationYears: 4,
    degreeType: "B.Des (Honours)",
    eligibility: "10+2 in any stream with min 50% aggregate.",
    eligibilityDetails: "Passed 10+2 in any stream with minimum 50% aggregate. Selection based on Design Aptitude Test & Portfolio Review.",
    feeAnnual: 185000,
    feeSemester: 92500,
    feeFormatted: "₹1,85,000 / year",
    careerRoles: ["Product Designer", "UI/UX Specialist", "Design Systems Architect"],
    placementRate: 97.2,
    avgPackage: "₹9.5 LPA",
    highestPackage: "₹26.0 LPA",
    topRecruiters: ["Adobe", "Swiggy", "Figma Labs", "Flipkart", "ThoughtWorks"],
    overview: "Human-centered design research, interaction design, prototyping in Figma/Principle, cognitive ergonomics, and design system engineering.",
    syllabus: [
      { sem: "Semester 1", courses: ["Visual Arts", "Design Drawing", "Typography & Color", "Creative Thinking"] },
      { sem: "Semester 2", courses: ["Interaction Principles", "User Research", "Digital Graphics", "Ergonomics"] },
      { sem: "Semester 3", courses: ["UX Research Methods", "Wireframing", "Figma Prototyping", "Front-End Code"] },
      { sem: "Semester 4", courses: ["Design Systems", "Motion Design", "Usability Testing", "Cognitive Psychology"] },
      { sem: "Semester 5", courses: ["Mobile App UX", "Service Design", "Spatial Design", "Client Ops"] },
      { sem: "Semester 6", courses: ["Sponsored Industry Project", "Portfolio Refinement", "Design Leadership"] },
      { sem: "Semester 7", courses: ["Full-Term Placement Internship"] },
      { sem: "Semester 8", courses: ["Graduation Design Exhibition", "Jury Defense"] }
    ],
    faqs: [
      { q: "Is prior design experience required?", a: "No prior formal portfolio is mandatory. Aptitude test evaluates natural creativity." }
    ]
  },
  {
    id: "bsc-biotech",
    title: "B.Sc Applied Biotechnology & Genomics",
    shortTitle: "B.Sc Biotech",
    level: "Undergraduate",
    code: "UG-BIO-105",
    faculty: "School of Applied Sciences",
    department: "Department of Biotechnology",
    duration: "3 Years (6 Semesters)",
    durationYears: 3,
    degreeType: "B.Sc (Honours)",
    eligibility: "10+2 Biology, Chemistry & Physics min 55%.",
    eligibilityDetails: "Higher Secondary (10+2) with Physics, Chemistry, and Biology/Biotechnology with minimum 55% aggregate marks.",
    feeAnnual: 135000,
    feeSemester: 67500,
    feeFormatted: "₹1,35,000 / year",
    careerRoles: ["Genomic Data Analyst", "Biotech Research Fellow", "Molecular Biologist"],
    placementRate: 96.8,
    avgPackage: "₹7.8 LPA",
    highestPackage: "₹21.0 LPA",
    topRecruiters: ["Biocon", "Novartis", "Syngene", "Dr. Reddy's", "AstraZeneca"],
    overview: "Pioneering scientific discovery through modern experimentation, mathematical modeling, and molecular gene editing technologies.",
    syllabus: [
      { sem: "Semester 1", courses: ["Cell Biology", "Biochemistry", "Microbiology Fundamentals", "General Chemistry"] },
      { sem: "Semester 2", courses: ["Molecular Genetics", "Immunology", "Biostatistics", "Analytical Techniques"] },
      { sem: "Semester 3", courses: ["Recombinant DNA Technology", "Bioinformatics", "Plant & Animal Biotech", "Genomics"] },
      { sem: "Semester 4", courses: ["CRISPR Gene Editing", "Bioprocess Engineering", "Proteomics", "Bioethics & IPR"] }
    ],
    faqs: [
      { q: "Is lab research hands-on?", a: "Yes, students spend over 12 hours weekly in modern molecular biology and genomics suites." }
    ]
  },
  {
    id: "bba-digital",
    title: "BBA Digital Business & E-Commerce Analytics",
    shortTitle: "BBA Digital Business",
    level: "Undergraduate",
    code: "UG-BIZ-202",
    faculty: "School of Business & Management",
    department: "Department of Management",
    duration: "3 Years (6 Semesters)",
    durationYears: 3,
    degreeType: "BBA (Honours)",
    eligibility: "10+2 in any stream with min 50% aggregate.",
    eligibilityDetails: "Passed 10+2 in any stream with minimum 50% aggregate marks.",
    feeAnnual: 140000,
    feeSemester: 70000,
    feeFormatted: "₹1,40,000 / year",
    careerRoles: ["E-Commerce Operations Lead", "Growth Marketing Strategist", "Product Manager"],
    placementRate: 97.0,
    avgPackage: "₹8.2 LPA",
    highestPackage: "₹24.0 LPA",
    topRecruiters: ["Flipkart", "Amazon", "Nykaa", "Zomato", "PhonePe"],
    overview: "Transforming traditional commerce with quantitative market analysis, digital funnel analytics, and e-commerce growth strategies.",
    syllabus: [
      { sem: "Semester 1", courses: ["Principles of Management", "Microeconomics", "Business Communication", "Digital Tools"] },
      { sem: "Semester 2", courses: ["Marketing Management", "Financial Accounting", "Consumer Behavior", "SEO & Digital Ads"] }
    ],
    faqs: [
      { q: "Is startup mentorship included?", a: "Yes, final year students incubate digital business models at the Venture Hub." }
    ]
  },
  {
    id: "bca-cloud",
    title: "BCA Cloud Computing & DevOps Systems",
    shortTitle: "BCA Cloud Tech",
    level: "Undergraduate",
    code: "UG-CS-108",
    faculty: "School of Engineering & Technology",
    department: "Department of Computer Applications",
    duration: "3 Years (6 Semesters)",
    durationYears: 3,
    degreeType: "BCA (Honours)",
    eligibility: "10+2 in any stream with Math/CS min 50%.",
    eligibilityDetails: "10+2 with Mathematics, Computer Science, or Information Practices with minimum 50% aggregate.",
    feeAnnual: 125000,
    feeSemester: 62500,
    feeFormatted: "₹1,25,000 / year",
    careerRoles: ["DevOps Engineer", "Cloud Infrastructure Lead", "Site Reliability Engineer"],
    placementRate: 98.0,
    avgPackage: "₹8.5 LPA",
    highestPackage: "₹28.0 LPA",
    topRecruiters: ["AWS", "Microsoft Azure", "Google Cloud", "Red Hat", "Wipro"],
    overview: "Hands-on training in Docker, Kubernetes, AWS infrastructure, CI/CD pipelines, and cloud automated deployment.",
    syllabus: [
      { sem: "Semester 1", courses: ["Computer Architecture", "C Programming", "Linux Systems", "Discrete Math"] },
      { sem: "Semester 2", courses: ["AWS Fundamentals", "Python Automation", "Database Systems", "Docker & Containers"] }
    ],
    faqs: [
      { q: "Are AWS vouchers provided?", a: "Yes, students receive 50% discount vouchers for AWS Certified Solutions Architect exam." }
    ]
  },
  {
    id: "ba-media",
    title: "B.A (Honours) Digital Media & Communication",
    shortTitle: "B.A Digital Media",
    level: "Undergraduate",
    code: "UG-MED-303",
    faculty: "School of Design & Creative Arts",
    department: "Department of Media & Journalism",
    duration: "3 Years (6 Semesters)",
    durationYears: 3,
    degreeType: "B.A (Honours)",
    eligibility: "10+2 in any stream with min 50% aggregate.",
    eligibilityDetails: "Passed 10+2 in any stream with minimum 50% aggregate marks.",
    feeAnnual: 130000,
    feeSemester: 65000,
    feeFormatted: "₹1,30,000 / year",
    careerRoles: ["Content Producer", "Digital Media Lead", "PR & Brand Manager"],
    placementRate: 95.8,
    avgPackage: "₹7.0 LPA",
    highestPackage: "₹19.5 LPA",
    topRecruiters: ["Times Group", "NDTV", "Netflix Studios", "Edelman", "Ogilvy"],
    overview: "Mastering digital storycrafting, video production, podcasting, media ethics, and brand communications in state-of-the-art media labs.",
    syllabus: [
      { sem: "Semester 1", courses: ["Media & Society", "Visual Storytelling", "Writing for Digital Media", "Photography"] },
      { sem: "Semester 2", courses: ["Audio & Podcast Production", "Video Editing (Premiere Pro)", "Media Law & Ethics", "PR Basics"] }
    ],
    faqs: [
      { q: "Is studio production equipment provided?", a: "Yes, students record in 4K broadcast studios and podcast suites on campus." }
    ]
  }
];

export const SCHOLARSHIPS_DATA = [
  {
    name: "Vanguard Founder's Merit Scholarship",
    discount: "Up to 50% Tuition Fee Waiver",
    criteria: "Students scoring 90% or above aggregate in qualifying exam.",
    code: "SCH-FOUNDER-50"
  },
  {
    name: "Dean's Academic Excellence Award",
    discount: "25% Tuition Fee Waiver",
    criteria: "Students scoring 80.0% to 89.9% aggregate in qualifying exam.",
    code: "SCH-DEAN-25"
  },
  {
    name: "Women in STEM Leadership Grant",
    discount: "30% Annual Tuition Grant",
    criteria: "Female candidates enrolling in School of Engineering or Applied Sciences.",
    code: "SCH-WOMEN-STEM"
  },
  {
    name: "Sports & Cultural Achievers Award",
    discount: "40% Tuition Waiver",
    criteria: "State or National level sportspersons or recognized cultural achievers.",
    code: "SCH-SPORTS-40"
  }
];
