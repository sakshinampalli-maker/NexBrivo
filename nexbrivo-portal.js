/**
 * NEXBRIVO SOLUTIONS PRIVATE LIMITED
 * Official Corporate Portal Engine & Interactive Experience
 * Version: 2.5 (Enterprise Edition)
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollProgress();
  initCyberMatrixCanvas();
  initSpaRouter();
  initCounters();
  initCaseStudyFilters();
  initCaseStudyModal();
  initAmcCalculator();
  initCompanyProfileModal();
  initJobApplicationModal();
  initQuoteModal();
  initContactForm();
  initBackToTop();
});

/* ==========================================================================
   1. SCROLL PROGRESS BAR
   ========================================================================== */
function initScrollProgress() {
  const bar = document.getElementById('scrollProgressBar');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / (height || 1)) * 100;
    bar.style.width = scrolled + '%';
  }, { passive: true });
}

/* ==========================================================================
   2. HERO CYBER MATRIX PARTICLE CANVAS
   ========================================================================== */
function initCyberMatrixCanvas() {
  const canvas = document.getElementById('heroCyberCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width, height;
  let particles = [];
  const particleCount = 65;
  const maxDistance = 140;

  function resize() {
    width = canvas.width = canvas.parentElement.offsetWidth || window.innerWidth;
    height = canvas.height = canvas.parentElement.offsetHeight || 650;
  }

  window.addEventListener('resize', resize);
  resize();

  class CyberNode {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.65;
      this.vy = (Math.random() - 0.5) * 0.65;
      this.radius = Math.random() * 2 + 1.2;
      this.baseColor = Math.random() > 0.4 ? 'rgba(20, 149, 255, ' : 'rgba(8, 120, 232, ';
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.baseColor + '0.75)';
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new CyberNode());
  }

  let mouse = { x: null, y: null };
  const heroSec = document.getElementById('home');
  if (heroSec) {
    heroSec.addEventListener('mousemove', (e) => {
      const rect = heroSec.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });
    heroSec.addEventListener('mouseleave', () => {
      mouse.x = null;
      mouse.y = null;
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.hypot(dx, dy);

        if (dist < maxDistance) {
          const alpha = (1 - dist / maxDistance) * 0.28;
          ctx.strokeStyle = `rgba(20, 149, 255, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }

      if (mouse.x !== null && mouse.y !== null) {
        const mdx = particles[i].x - mouse.x;
        const mdy = particles[i].y - mouse.y;
        const mdist = Math.hypot(mdx, mdy);
        if (mdist < 180) {
          const mAlpha = (1 - mdist / 180) * 0.45;
          ctx.strokeStyle = `rgba(20, 149, 255, ${mAlpha})`;
          ctx.lineWidth = 1.3;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(render);
  }

  render();
}

/* ==========================================================================
   3. SPA MULTI-PAGE ROUTER ENGINE (Distinct Separate Pages)
   ========================================================================== */
const PAGE_TITLES = {
  'home': 'NexBrivo Solutions • Enterprise IT Consultancy & Cybersecurity',
  'services': 'Enterprise IT Services • NexBrivo Solutions',
  'solutions': 'Tailored IT Solutions • Industry Architecture',
  'industries': 'Industries We Serve • NexBrivo Solutions',
  'amc': 'AMC Plans & Cost Estimator • 24/7 Managed IT Care',
  'case-studies': 'Projects & Case Studies • Enterprise Client Impact',
  'partners': 'OEM Technology Partners • Cisco, Fortinet, Dell, HP',
  'careers': 'Careers at NexBrivo • Join Our Engineering Team',
  'contact': 'Contact Us • Get In Touch & Office Hotline',
  'about': 'About NexBrivo • Corporate Profile & Vision'
};

const VALID_PAGES = ['home', 'services', 'solutions', 'industries', 'amc', 'case-studies', 'partners', 'careers', 'contact', 'about'];

function navigateToPage(pageId, targetSelector = null) {
  let cleanId = (pageId || 'home').replace('#', '').toLowerCase();
  if (cleanId === 'top' || cleanId === '') cleanId = 'home';
  if (!VALID_PAGES.includes(cleanId)) cleanId = 'home';

  const isMulti = document.body.classList.contains('multipage-mode');

  if (isMulti) {
    // 1. Hide all pages, show target page
    const pages = document.querySelectorAll('.site-page');
    pages.forEach(p => p.classList.remove('active-page'));

    const targetPage = document.getElementById(`page-${cleanId}`);
    if (targetPage) {
      targetPage.classList.add('active-page');
    }

    // 2. Scroll to top or specific element within target page
    if (targetSelector) {
      setTimeout(() => {
        const el = document.querySelector(targetSelector);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  } else {
    // One-page continuous scroll mode
    const el = document.getElementById(cleanId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // 3. Update navbar active link
  const navLinks = document.querySelectorAll('.nav-links-wrap .nav-link-item');
  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (href === `#${cleanId}`) {
      link.classList.add('active');
    }
  });

  // 4. Update document title
  if (PAGE_TITLES[cleanId]) {
    document.title = PAGE_TITLES[cleanId];
  }

  // 5. Close mobile drawer if open
  const navLinksWrap = document.getElementById('navLinksWrap');
  const mobileToggle = document.getElementById('mobileNavToggle');
  if (navLinksWrap && navLinksWrap.classList.contains('active')) {
    navLinksWrap.classList.remove('active');
    if (mobileToggle) mobileToggle.innerHTML = '&#9776;';
  }

  // 6. Update URL hash
  if (window.location.hash !== `#${cleanId}`) {
    history.pushState(null, '', `#${cleanId}`);
  }
}

function initSpaRouter() {
  const navbar = document.getElementById('mainNavbar');
  const mobileToggle = document.getElementById('mobileNavToggle');
  const navLinksWrap = document.getElementById('navLinksWrap');

  // Sticky blur transition
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  }, { passive: true });

  // Mobile menu toggle
  if (mobileToggle && navLinksWrap) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinksWrap.classList.toggle('active');
      mobileToggle.innerHTML = navLinksWrap.classList.contains('active') ? '&times;' : '&#9776;';
    });

    // Close mobile menu when clicking outside navbar
    document.addEventListener('click', (e) => {
      if (navLinksWrap.classList.contains('active') && !navbar.contains(e.target)) {
        navLinksWrap.classList.remove('active');
        mobileToggle.innerHTML = '&#9776;';
      }
    });
  }

  // Global anchor click routing
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;

    // Skip modals with dedicated click handlers
    if (link.classList.contains('open-quote-modal') ||
        link.classList.contains('open-profile-modal') ||
        link.classList.contains('open-case-modal') ||
        link.classList.contains('open-job-modal')) {
      return;
    }

    const href = link.getAttribute('href');
    if (!href) return;

    const raw = href.substring(1).toLowerCase();
    if (raw === 'top' || raw === 'home' || raw === '') {
      e.preventDefault();
      navigateToPage('home');
    } else if (VALID_PAGES.includes(raw)) {
      e.preventDefault();
      navigateToPage(raw);
    } else if (raw === 'amccalculator') {
      e.preventDefault();
      navigateToPage('amc', '#amcCalculator');
    }
  });

  // Handle browser Back / Forward buttons
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '');
    navigateToPage(hash);
  });

  // View Mode Switcher Toggle (Separate Pages vs Single-Page Scroll)
  const viewModeToggle = document.getElementById('viewModeToggle');
  if (viewModeToggle) {
    viewModeToggle.addEventListener('click', () => {
      const isMulti = document.body.classList.contains('multipage-mode');
      if (isMulti) {
        document.body.classList.remove('multipage-mode');
        document.body.classList.add('onepage-mode');
        const icon = document.getElementById('viewModeIcon');
        const text = document.getElementById('viewModeText');
        if (icon) icon.textContent = '📜';
        if (text) text.textContent = 'One-Page Scroll';
        showToast('Switched to Continuous One-Page Scroll', 'info');
      } else {
        document.body.classList.remove('onepage-mode');
        document.body.classList.add('multipage-mode');
        const icon = document.getElementById('viewModeIcon');
        const text = document.getElementById('viewModeText');
        if (icon) icon.textContent = '📑';
        if (text) text.textContent = 'Separate Pages';
        const currentHash = window.location.hash.replace('#', '') || 'home';
        navigateToPage(currentHash);
        showToast('Switched to Distinct Separate Pages Mode', 'success');
      }
    });
  }

  // Quick service cards direct page routing
  const quickCards = document.querySelectorAll('.quick-service-card');
  quickCards.forEach(card => {
    card.addEventListener('click', () => {
      navigateToPage('services');
    });
  });

  // Initial page load detection
  const initialHash = window.location.hash.replace('#', '');
  if (initialHash && VALID_PAGES.includes(initialHash.toLowerCase())) {
    navigateToPage(initialHash.toLowerCase());
  } else {
    navigateToPage('home');
  }
}

/* ==========================================================================
   4. STATS COUNTER ANIMATION
   ========================================================================== */
function initCounters() {
  const counterElements = document.querySelectorAll('.counter-val');
  if (!counterElements.length) return;

  let animated = false;

  function runCounters() {
    counterElements.forEach(el => {
      const target = parseFloat(el.getAttribute('data-target'));
      const prefix = el.getAttribute('data-prefix') || '';
      const suffix = el.getAttribute('data-suffix') || '';
      const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
      const duration = 1800;
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuad = 1 - (1 - progress) * (1 - progress);
        const currentVal = easeOutQuad * target;

        el.textContent = `${prefix}${currentVal.toFixed(decimals)}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          el.textContent = `${prefix}${target.toFixed(decimals)}${suffix}`;
        }
      }

      requestAnimationFrame(update);
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        runCounters();
      }
    });
  }, { threshold: 0.25 });

  const counterBar = document.querySelector('.hero-kpi-bar');
  if (counterBar) observer.observe(counterBar);
}

/* ==========================================================================
   5. CASE STUDY FILTERS
   ========================================================================== */
function initCaseStudyFilters() {
  const filterBtns = document.querySelectorAll('.case-filter-btn');
  const caseCards = document.querySelectorAll('.case-card-box');

  if (!filterBtns.length || !caseCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      caseCards.forEach(card => {
        const category = card.getAttribute('data-category') || '';
        if (filter === 'all' || category.includes(filter)) {
          card.style.display = 'flex';
          card.style.animation = 'fadeInUp 0.35s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   7. CASE STUDY DETAIL MODAL DATA & HANDLER
   ========================================================================== */
const caseStudyData = {
  pune: {
    title: "Network Security & Next-Gen Firewall Cluster",
    location: "Manufacturing Facility &bull; Pune, Maharashtra",
    metrics: "Zero Downtime &bull; 100% Threat Isolation &bull; 40% Lower WAN Cost",
    challenge: "A precision automotive manufacturer in Pune suffered from frequent internet drops, unauthorized peripheral access on factory floor PCs, and rising ransomware threats across its production VLANs.",
    solution: "NexBrivo deployed a High-Availability pair of Fortinet Next-Gen Firewalls with deep packet inspection, automated intrusion prevention (IPS), and isolated guest and OT network segments. Zero-Trust endpoint protection was installed on 140+ workstations.",
    result: "Achieved 99.99% network uptime, blocked 12,000+ malicious intrusion attempts in the first quarter, and unified remote branch connectivity via encrypted SD-WAN."
  },
  aurangabad: {
    title: "Corporate Portal & Smart Admissions Management",
    location: "Higher Education Institute &bull; Aurangabad, Maharashtra",
    metrics: "50,000+ Concurrent Users &bull; 99.98% Uptime &bull; Instant Fee Sync",
    challenge: "The educational institute faced severe server crashes during entrance admission periods, along with fragmented data storage between departmental offices.",
    solution: "Architected a scalable cloud-hosted corporate portal with automated load-balancing, integrated payment gateway with real-time fee reconciliation, and encrypted student record repositories.",
    result: "Seamless handling of 50,000+ concurrent applicants without a single second of outage, reducing administrative processing cycle times by 65%."
  },
  nashik: {
    title: "Hospital IT Infrastructure & 24/7 AMC Support",
    location: "Multi-Speciality Healthcare Group &bull; Nashik, Maharashtra",
    metrics: "24/7 Medical Telemetry &bull; < 15 Min MTTR &bull; Zero Data Loss",
    challenge: "Critical ICU monitoring devices and hospital billing terminals experienced unmonitored network delays, risking patient care and regulatory compliance breaches.",
    solution: "Delivered an Annual Maintenance Contract (AMC) featuring dedicated resident network engineers, redundant Cisco switch fabrics, automated daily off-site backups, and 24/7 telemetry monitoring.",
    result: "Maintained 99.99% hospital equipment uptime for over 24 continuous months, with zero data loss incidents and average SLA response under 12 minutes."
  },
  beed: {
    title: "Custom Manufacturing ERP & Real-Time Production Tracking",
    location: "Industrial Agro-Processing Plant &bull; Beed, Maharashtra",
    metrics: "Real-Time Tracking &bull; Automated Invoicing &bull; 100% Audit Ready",
    challenge: "Reliance on manual ledger spreadsheets caused inventory leaks, delayed invoice deliveries, and inaccurate batch stock counts across 3 plant locations.",
    solution: "Developed a custom, secure web ERP system with role-based access, automated barcode raw-material scanning, multi-plant stock synchronization, and instant GST invoice generation.",
    result: "Eliminated raw material discrepancies by 92%, cut monthly billing closeout times from 5 days to 2 hours, and provided executives with live mobile telemetry."
  },
  jalgaon: {
    title: "Resident Network Engineer Deployment & Branch Connectivity",
    location: "Multi-Store Retail Chain &bull; Jalgaon, Maharashtra",
    metrics: "8 Retail Outlets &bull; Unified Billing &bull; 4-Hour On-Site SLA",
    challenge: "Frequent POS billing terminal freezes during peak weekend hours across retail outlets caused revenue leakage and customer walkouts.",
    solution: "Stationed certified NexBrivo network engineers across key stores, re-cabled POS network lines with Cat6 gigabit switches, and established automated 4G failover backup links.",
    result: "Zero billing terminal downtime during festival rushes and 100% centralized cloud synchronization to central warehouse headquarters."
  },
  jalna: {
    title: "Enterprise Cloud Migration & Disaster Recovery (DR)",
    location: "Steel & Manufacturing Enterprise &bull; Jalna, Maharashtra",
    metrics: "Zero Data Loss &bull; 45% Lower Hardware Capex &bull; Automated DR",
    challenge: "Aging on-premise physical servers faced high risk of hardware failure, escalating air-conditioning costs, and lack of off-site disaster backups.",
    solution: "Migrated mission-critical legacy applications to a secured Microsoft Azure / AWS hybrid cloud environment with automated point-in-time snapshots and geo-redundant DR.",
    result: "Reduced annual IT hardware capital expenses by 45%, eliminated server room cooling costs, and achieved RPO/RTO disaster recovery under 15 minutes."
  }
};

function initCaseStudyModal() {
  const modal = document.getElementById('caseStudyModal');
  const closeBtn = document.getElementById('closeCaseStudyModal');
  const detailLinks = document.querySelectorAll('.view-case-detail');

  if (!modal) return;

  function open(caseKey) {
    const data = caseStudyData[caseKey];
    if (!data) return;

    document.getElementById('csmTitle').innerHTML = data.title;
    document.getElementById('csmLocation').innerHTML = data.location;
    document.getElementById('csmMetrics').innerHTML = data.metrics;
    document.getElementById('csmChallenge').innerHTML = data.challenge;
    document.getElementById('csmSolution').innerHTML = data.solution;
    document.getElementById('csmResult').innerHTML = data.result;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  detailLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const key = link.getAttribute('data-case-key');
      open(key);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', close);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) close();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) close();
  });
}

/* ==========================================================================
   8. INTERACTIVE AMC COST ESTIMATOR CALCULATOR
   ========================================================================== */
function initAmcCalculator() {
  const wsInput = document.getElementById('calcWorkstations');
  const wsDisplay = document.getElementById('calcWsVal');
  const serverInput = document.getElementById('calcServers');
  const serverDisplay = document.getElementById('calcServerVal');
  const tierRadios = document.querySelectorAll('input[name="calcTier"]');
  const estTierBadge = document.getElementById('calcRecommendedPlan');
  const estResponseTime = document.getElementById('calcResponseTime');
  const estVisits = document.getElementById('calcPreventiveVisits');
  const btnBookEst = document.getElementById('btnApplyAmcQuote');

  if (!wsInput || !serverInput) return;

  function calculate() {
    const workstations = parseInt(wsInput.value, 10);
    const servers = parseInt(serverInput.value, 10);
    let selectedTier = 'professional';

    tierRadios.forEach(r => {
      if (r.checked) selectedTier = r.value;
    });

    if (wsDisplay) wsDisplay.textContent = `${workstations} PCs`;
    if (serverDisplay) serverDisplay.textContent = `${servers} Server${servers > 1 ? 's' : ''}`;

    let planName = "Professional Plan";
    let sla = "Guaranteed 4-Hour On-Site SLA";
    let visits = "Fortnightly Scheduled Preventive Visits";

    if (selectedTier === 'standard') {
      planName = "Standard AMC Plan";
      sla = "Next-Business-Day (NBD) SLA";
      visits = "Monthly Preventive Physical Audit";
    } else if (selectedTier === 'enterprise' || workstations > 80 || servers >= 4) {
      planName = "Enterprise Managed IT Plan";
      sla = "Instant 24/7 Hotline + Resident Engineer";
      visits = "Continuous Dedicated On-Site Engineering";
    }

    if (estTierBadge) estTierBadge.textContent = planName;
    if (estResponseTime) estResponseTime.textContent = sla;
    if (estVisits) estVisits.textContent = visits;
  }

  wsInput.addEventListener('input', calculate);
  serverInput.addEventListener('input', calculate);
  tierRadios.forEach(r => r.addEventListener('change', calculate));
  calculate();

  if (btnBookEst) {
    btnBookEst.addEventListener('click', () => {
      const workstations = wsInput.value;
      const servers = serverInput.value;
      const tier = document.querySelector('input[name="calcTier"]:checked')?.value || 'professional';
      
      // Pre-fill contact form
      const svcSelect = document.getElementById('serviceReq');
      const msgArea = document.getElementById('messageText');
      if (svcSelect) svcSelect.value = 'amc';
      if (msgArea) {
        msgArea.value = `AMC Proposal Request: Estimate based on ${workstations} Workstations, ${servers} Server(s), Preferred Coverage Tier: ${tier.toUpperCase()}. Please provide an official quotation for our office.`;
      }

      const contactSec = document.getElementById('contact');
      if (contactSec) {
        contactSec.scrollIntoView({ behavior: 'smooth' });
        showToast("AMC parameters loaded into Contact Form! Scroll down to submit.", "info");
      }
    });
  }
}

/* ==========================================================================
   9. COMPANY PROFILE BROCHURE MODAL
   ========================================================================== */
function initCompanyProfileModal() {
  const modal = document.getElementById('companyProfileModal');
  const closeBtn = document.getElementById('closeProfileModal');
  const openBtns = document.querySelectorAll('.open-profile-modal');
  const downloadBtn = document.getElementById('btnConfirmDownloadProfile');

  if (!modal) return;

  function open() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      open();
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', close);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) close();
  });

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      close();
      showToast("Downloading NexBrivo Solutions Company Profile (PDF)...", "success");
      // Simulation: open corporate profile summary in new tab or trigger synthetic download
      setTimeout(() => {
        window.open('cyber.html', '_blank');
      }, 900);
    });
  }
}

/* ==========================================================================
   10. JOB APPLICATION MODAL
   ========================================================================== */
function initJobApplicationModal() {
  const modal = document.getElementById('jobAppModal');
  const closeBtn = document.getElementById('closeJobAppModal');
  const applyBtns = document.querySelectorAll('.open-job-modal');
  const form = document.getElementById('jobAppForm');
  const roleInput = document.getElementById('jobAppRole');

  if (!modal) return;

  function open(roleName) {
    if (roleInput) roleInput.value = roleName || 'General Application';
    document.getElementById('jobAppRoleTitle').textContent = roleName || 'Position';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  applyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const role = btn.getAttribute('data-job-role');
      open(role);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', close);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) close();
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      close();
      showToast("Application submitted successfully! HR will contact you within 48 hours.", "success");
      form.reset();
    });
  }
}

/* ==========================================================================
   11. GET A QUOTE / CONSULTATION MODAL
   ========================================================================== */
function initQuoteModal() {
  const modal = document.getElementById('quoteModal');
  const closeBtn = document.getElementById('closeQuoteModal');
  const openBtns = document.querySelectorAll('.open-quote-modal');
  const form = document.getElementById('quoteModalForm');

  if (!modal) return;

  function open(preselectedService) {
    if (preselectedService) {
      const select = document.getElementById('quoteModalService');
      if (select) select.value = preselectedService;
    }
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const service = btn.getAttribute('data-service') || '';
      open(service);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', close);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) close();
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      close();
      showToast("Thank you! Your quote request has been dispatched to NexBrivo Solutions engineering leads.", "success");
      form.reset();
    });
  }
}

/* ==========================================================================
   12. MAIN CONTACT FORM SUBMISSION
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('fullName')?.value || 'Client';
    const email = document.getElementById('emailAddr')?.value || '';
    const phone = document.getElementById('phoneNum')?.value || '';
    const service = document.getElementById('serviceReq')?.value || '';

    // Validate phone number
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      showToast("Please enter a valid 10-digit phone number.", "warning");
      return;
    }

    const submitBtn = form.querySelector('.submit-form-btn');
    if (submitBtn) {
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = `<span>Sending Dispatch...</span>`;
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        form.reset();
        showToast(`Thank you, ${name}! Your dispatch request has been logged. NexBrivo engineers will call you at ${phone} within 24 hours.`, "success");
      }, 1000);
    }
  });
}

/* ==========================================================================
   13. BACK TO TOP SCROLL BUTTON
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById('backToTopBtn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 450) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ==========================================================================
   14. TOAST NOTIFICATION UTILITY
   ========================================================================== */
function showToast(message, type = 'info') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast-message toast-${type}`;

  let icon = 'ℹ️';
  if (type === 'success') icon = '✅';
  if (type === 'warning') icon = '⚠️';

  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <div class="toast-body">${message}</div>
    <button class="toast-close">&times;</button>
  `;

  container.appendChild(toast);

  // Auto remove after 5s
  const timer = setTimeout(() => {
    toast.classList.add('hide');
    setTimeout(() => toast.remove(), 350);
  }, 5000);

  toast.querySelector('.toast-close').addEventListener('click', () => {
    clearTimeout(timer);
    toast.classList.add('hide');
    setTimeout(() => toast.remove(), 350);
  });
}
window.showToast = showToast;
