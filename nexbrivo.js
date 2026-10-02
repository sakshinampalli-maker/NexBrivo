/**
 * NEXBRIVO Enterprise IT & Cybersecurity Platform
 * Production Interactive Engine & OSINT-Style Interactive Tree Framework
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Core Views & Modes
  initViewSwitcher();
  initOsintTreeFramework();

  // Initialize Portal Modules
  initCyberMatrixCanvas();
  initNavbarScroll();
  initScrollSpy();
  initMobileMenu();
  initLiveThreatFeed();
  initSitemapExplorer();
  initCommandPalette();
  initCaseStudyFilters();
  initCaseStudyModals();
  initCareersApplication();
  initQuoteWizard();
  initFAQAccordion();
  initContactForm();
  initResourceDownloads();
});

/* ==========================================================================
   VIEW SWITCHER: TREE FRAMEWORK (OSINT STYLE) vs CORPORATE PORTAL
   ========================================================================== */
function initViewSwitcher() {
  const btnTree = document.getElementById('viewToggleTree');
  const btnPortal = document.getElementById('viewTogglePortal');
  const treeSection = document.getElementById('treeFrameworkSection');
  const portalSection = document.getElementById('corporatePortalSection');

  if (!btnTree || !btnPortal || !treeSection || !portalSection) return;

  function setView(mode) {
    if (mode === 'tree') {
      btnTree.classList.add('active');
      btnPortal.classList.remove('active');
      treeSection.style.display = 'flex';
      portalSection.style.display = 'none';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      btnPortal.classList.add('active');
      btnTree.classList.remove('active');
      portalSection.style.display = 'block';
      treeSection.style.display = 'none';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  btnTree.addEventListener('click', () => setView('tree'));
  btnPortal.addEventListener('click', () => setView('portal'));

  // Expose global jumper to switch to portal and scroll to specific section
  window.jumpToPortalSection = function (sectionId) {
    setView('portal');
    setTimeout(() => {
      const el = document.getElementById(sectionId) || document.querySelector(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
}

/* ==========================================================================
   OSINT-STYLE INTERACTIVE DENDROGRAM / COLLAPSIBLE TREE ENGINE
   ========================================================================== */
const nexbrivoTreeData = {
      id: "root",
      name: "NexBrivo",
      category: "NexBrivo Solutions Pvt. Ltd.",
      desc: "Technology Today for a Stronger Tomorrow. NexBrivo Solutions Private Limited delivers innovative IT consultancy and technology solutions across India.",
      specs: [
        "Head Office: CIDCO, Aurangabad, Maharashtra",
        "Phone: +91 99755 41232 | info@nexbrivo.com",
        "24/7 Dedicated Support & Network Monitoring",
        "Authorized Enterprise Technology Partner"
      ],
      children: [
        {
          id: "home",
          name: "Home",
          category: "Overview",
          desc: "Technology Today for a Stronger Tomorrow — secure, scalable and innovative IT consultancy.",
          specs: [
            "Consultancy & Managed IT Services",
            "Expert Engineering Team",
            "Tailored Enterprise Solutions",
            "24/7 Rapid Incident Support"
          ],
          children: [
            { id: "h1", name: "Cybersecurity (24/7)", desc: "Protect your business from modern cyber threats." },
            { id: "h2", name: "Network & Firewall (T)", desc: "Secure your network, data and infrastructure." },
            { id: "h3", name: "Software Development (Dev)", desc: "Custom software for your business needs." },
            { id: "h4", name: "AMC & IT Support (AMC)", desc: "Proactive support for uninterrupted operations." },
            { id: "h5", name: "IT Manpower (M)", desc: "Skilled professionals on contract." },
            { id: "h6", name: "IT Products & Sales (Sales)", desc: "Best-in-class hardware, networking and software solutions." },
            {
              id: "h_why",
              name: "Why NexBrivo?",
              desc: "Key pillars that distinguish NexBrivo in enterprise IT delivery.",
              children: [
                { id: "w1", name: "Expert Team", desc: "Certified and experienced professionals with deep domain expertise." },
                { id: "w2", name: "Tailored Solutions", desc: "Custom-fit architecture aligned to your exact business requirements." },
                { id: "w3", name: "24/7 Support (24/7)", desc: "Always here for you with round-the-clock helpdesk and on-site dispatch." },
                { id: "w4", name: "Quality & Reliability", desc: "Trusted by top enterprises across Maharashtra and India." }
              ]
            }
          ]
        },
        {
          id: "about",
          name: "About NexBrivo",
          category: "Company Profile",
          desc: "Your Technology Partner for Growth. Dedicated to delivering secure, scalable and innovative solutions across India.",
          specs: [
            "Headquarters: Office 202, Business Plaza, CIDCO, Aurangabad",
            "Operations across Pune, Aurangabad, Nashik, Jalgaon, Jalna & Beed",
            "Core Philosophy: Consult → Design → Implement → Support"
          ],
          children: [
            {
              id: "ab_who",
              name: "Who We Are",
              desc: "NexBrivo Solutions Private Limited is a technology-driven IT consultancy and solutions provider, dedicated to delivering secure, scalable and innovative solutions for businesses across India.",
              specs: ["Technology-driven IT consultancy", "End-to-end digital transformation", "Pan-India operational presence", "ISO & industry compliant processes"]
            },
            {
              id: "ab_mv",
              name: "Mission & Vision",
              desc: "Guiding principles driving our engineering excellence.",
              children: [
                { id: "ab_m", name: "Our Mission", desc: "To empower businesses with reliable and innovative IT solutions that drive growth and security." },
                { id: "ab_v", name: "Our Vision", desc: "To be a leading IT solutions provider recognized for excellence, innovation and customer satisfaction." }
              ]
            },
            {
              id: "ab_val",
              name: "Our Values",
              desc: "Core principles defining our culture and client engagements.",
              children: [
                { id: "v1", name: "Integrity", desc: "Uncompromising ethical standards and radical transparency." },
                { id: "v2", name: "Innovation", desc: "Leveraging cutting-edge technologies to solve complex challenges." },
                { id: "v3", name: "Collaboration", desc: "Working as a true partner alongside your internal teams." },
                { id: "v4", name: "Customer Focus", desc: "Your uptime, security and growth are our highest priorities." }
              ]
            },
            {
              id: "ab_app",
              name: "Our Approach",
              desc: "We work closely with our clients to understand their unique needs and deliver end-to-end solutions.",
              children: [
                { id: "ap1", name: "1. Consult", desc: "Deep audit of existing infrastructure, security gaps, and business objectives." },
                { id: "ap2", name: "2. Design", desc: "Architecting scalable, resilient and cost-effective IT blueprints." },
                { id: "ap3", name: "3. Implement", desc: "Precision deployment with zero-downtime cutover and rigorous testing." },
                { id: "ap4", name: "4. Support", desc: "24/7 proactive monitoring, preventive maintenance, and SLA-backed support." }
              ]
            },
            { id: "ab_doc", name: "Company Profile (PDF)", desc: "Official downloadable corporate capability deck and credentials." }
          ]
        },
        {
          id: "services",
          name: "Our Services",
          category: "Core Offerings",
          desc: "Comprehensive IT Solutions for Your Business across cyber defense, infrastructure, software, and managed care.",
          specs: [
            "Cybersecurity & Firewall Security",
            "Cloud Computing & Infrastructure",
            "Custom Software & Web Development",
            "AMC & 24/7 Managed IT Services",
            "IT Engineers & Manpower Deployment",
            "Enterprise Hardware & Software Sales"
          ],
          children: [
            {
              id: "srv_cyber",
              name: "Cybersecurity",
              desc: "Protect your business from modern cyber threats.",
              specs: ["24/7 Managed SOC Telemetry", "Threat Defense & Incident Response", "VAPT Audits & Compliance", "Endpoint & Ransomware Shield"],
              children: [
                { id: "sc1", name: "Threat Defense & Prevention (D)", desc: "Proactive threat detection and automated isolation before breach occurs.", specs: ["Real-time threat feeds", "Behavioral process heuristics", "Automated threat quarantine", "Under 15-minute containment"] },
                { id: "sc2", name: "Endpoint & Network Protection (T)", desc: "Centralized endpoint security across all workstations, servers, and mobile devices.", specs: ["EDR / XDR sensor deployment", "USB & peripheral lockdown", "Zero-day vulnerability shielding", "Automated patch enforcement"] },
                { id: "sc3", name: "VAPT Security Audits (T)", desc: "Vulnerability Assessment and Penetration Testing for web apps, networks, and cloud.", specs: ["Network penetration testing", "OWASP Top 10 web assessment", "Executive remediation report", "Audit compliance certificate"] },
                { id: "sc4", name: "24/7 SOC Monitoring (24/7)", desc: "Continuous 24/7/365 security operations center monitoring your entire infrastructure.", specs: ["Continuous log ingestion", "SIEM event correlation", "Tier-2/3 incident response team", "Monthly executive cyber reports"] }
              ]
            },
            {
              id: "srv_net",
              name: "Firewall & Network Security",
              desc: "Secure your network, data and infrastructure.",
              specs: ["Palo Alto & Fortinet Next-Gen Firewalls", "Secure SD-WAN & Multi-Branch VPN", "Intrusion Prevention (IPS)", "High-Availability Redundancy"],
              children: [
                { id: "sn1", name: "Next-Gen Firewall Deployment (T)", desc: "Layer 7 application filtering, deep packet inspection, and SSL decryption.", specs: ["Fortinet & Palo Alto certified setup", "High-Availability (HA) clustering", "Content & application filtering", "Bandwidth traffic shaping"] },
                { id: "sn2", name: "Secure Network Architecture (D)", desc: "VLAN microsegmentation, core switch configuration, and wireless security.", specs: ["Cisco & Aruba switch fabrics", "Network microsegmentation", "802.1X secure access control", "Guest Wi-Fi isolation"] },
                { id: "sn3", name: "VPN & Branch Connectivity (R)", desc: "Encrypted IPsec & SSL VPN tunnels connecting remote branches to headquarters.", specs: ["End-to-end 256-bit encryption", "Multi-factor authentication (MFA)", "Secure remote workforce access", "High-throughput WAN links"] },
                { id: "sn4", name: "Intrusion Prevention Systems (D)", desc: "Real-time packet anomaly detection dropping malicious exploit traffic.", specs: ["Automated signature updates", "Zero-day exploit blocking", "DDoS mitigation rules", "Real-time threat alerts"] }
              ]
            },
            {
              id: "srv_cloud",
              name: "Cloud Computing",
              desc: "Scalable, resilient cloud migration, virtual machine hosting, storage, and managed cloud infrastructure.",
              specs: [
                "AWS, Microsoft Azure & Google Cloud Partners",
                "Zero-Downtime Workload Migration & Hybrid Architecture",
                "Automated Snapshot Backups & Multi-Region DR",
                "24/7 Proactive Cloud Monitoring & Cost Optimization"
              ],
              children: [
                {
                  id: "cc1",
                  name: "Cloud Migration & Setup",
                  desc: "Seamless, zero-downtime migration of on-premises servers, databases, and enterprise apps to AWS, Azure, or GCP.",
                  specs: [
                    "Cloud readiness assessment & TCO feasibility study",
                    "Lift-and-shift, re-platforming & cloud refactoring",
                    "Zero-downtime cutover & real-time data replication",
                    "Post-migration performance and security audit"
                  ]
                },
                {
                  id: "cc2",
                  name: "Cloud Server / VM Hosting",
                  desc: "High-performance, auto-scaling virtual machines, compute instances, and private cloud servers with 99.99% uptime.",
                  specs: [
                    "On-demand scalable vCPU & high-speed RAM",
                    "Ubuntu, Debian, RHEL & Windows Server support",
                    "High-IOPS NVMe SSD persistent storage",
                    "Automated health checks & self-healing failover"
                  ]
                },
                {
                  id: "cc3",
                  name: "Cloud Storage",
                  desc: "Secure, durable object, block, and file storage architectures with unlimited elasticity and enterprise encryption.",
                  specs: [
                    "S3 / Azure Blob compatible object storage",
                    "AES-256 encryption at rest and in transit",
                    "Lifecycle tiering (Hot, Cool, Cold, Glacier)",
                    "Instant global CDN retrieval SLAs"
                  ]
                },
                {
                  id: "cc4",
                  name: "Cloud Backup & Disaster Recovery",
                  desc: "Continuous snapshot replication, multi-region DR failover, and ransomware-proof immutable backup vaults.",
                  specs: [
                    "Sub-15 minute RPO and 1-hour RTO disaster recovery",
                    "Automated hourly & daily incremental snapshots",
                    "Cross-region and hybrid offsite replication",
                    "Immutable air-gapped protection against ransomware"
                  ]
                },
                {
                  id: "cc5",
                  name: "Cloud Networking & VPN",
                  desc: "Enterprise Virtual Private Clouds (VPC), software-defined networking, site-to-cloud IPsec tunnels, and direct interconnects.",
                  specs: [
                    "Multi-tier VPC subnet & routing table design",
                    "Site-to-Site IPsec VPN & Client SSL tunnels",
                    "Cloud Load Balancers (ALB/NLB) with SSL offloading",
                    "Granular Security Groups & Network ACL policies"
                  ]
                },
                {
                  id: "cc6",
                  name: "Cloud Security",
                  desc: "End-to-end cloud defense with Cloud Security Posture Management (CSPM), IAM least-privilege, and native cloud firewalls.",
                  specs: [
                    "Cloud Security Posture Management (CSPM)",
                    "IAM least-privilege RBAC & Multi-Factor Auth (MFA)",
                    "Web Application Firewall (WAF) & DDoS protection",
                    "Compliance auditing (ISO 27001, SOC 2, HIPAA, GDPR)"
                  ]
                },
                {
                  id: "cc7",
                  name: "Cloud Database Services",
                  desc: "Fully managed, scalable SQL and NoSQL database clusters with automatic patching, replication, and instant point-in-time recovery.",
                  specs: [
                    "Managed PostgreSQL, MySQL, MS SQL, & MongoDB",
                    "Multi-AZ synchronous replication & automated failover",
                    "Continuous automated backups & point-in-time recovery",
                    "Query optimization, caching & IOPS auto-scaling"
                  ]
                },
                {
                  id: "cc8",
                  name: "Cloud Application Hosting / Managed Cloud",
                  desc: "Production-grade managed cloud hosting with Docker & Kubernetes container orchestration, CI/CD pipelines, and 24/7 DevOps management.",
                  specs: [
                    "Kubernetes (EKS/AKS/GKE) & Docker container hosting",
                    "Automated CI/CD deployment pipelines (GitHub / GitLab)",
                    "24/7 proactive cloud performance & uptime monitoring",
                    "FinOps cloud spend governance & auto-scaling policies"
                  ]
                }
              ]
            },
            {
              id: "srv_soft",
              name: "Software Development",
              desc: "Custom software for your business needs.",
              specs: ["Custom ERP & CRM Solutions", "Enterprise Web Applications", "Secure REST API Ecosystems", "Microservices & Database Architecture"],
              children: [
                { id: "ss1", name: "Custom Business ERP & CRM (M)", desc: "Tailored software built specifically for your internal operational workflows.", specs: ["Inventory & production tracking", "Billing & financial management", "Role-based access security", "Multi-branch synchronization"] },
                { id: "ss2", name: "Enterprise Web Applications (Dev)", desc: "Scalable cloud-ready web applications with modern intuitive user interfaces.", specs: ["React / Node / Python stacks", "Mobile responsive design", "High-speed database queries", "Zero-downtime CI/CD deployment"] },
                { id: "ss3", name: "API & Database Integration (API)", desc: "Seamless interconnectivity between legacy systems, accounting, and cloud tools.", specs: ["Hardened REST / GraphQL endpoints", "Secure banking & SMS gateways", "PostgreSQL / MySQL clustering", "Automated daily data backups"] }
              ]
            },
            {
              id: "srv_web",
              name: "Web Development",
              desc: "Modern, responsive and scalable websites.",
              specs: ["Corporate Branding Websites", "CMS Portals & Content Management", "E-Commerce Platforms", "Fast Loading Speed & Mobile First"],
              children: [
                { id: "sw1", name: "Corporate Websites (Web)", desc: "Stunning, high-conversion responsive corporate portals establishing brand authority.", specs: ["Mobile-first responsive design", "Clean modern aesthetics", "Fast loading CDN caching", "Cross-browser compatibility"] },
                { id: "sw2", name: "CMS Portals & Dashboards (CMS)", desc: "Easy-to-use content management systems and executive reporting dashboards.", specs: ["Intuitive admin dashboard", "Dynamic role permissions", "Media & blog manager", "Analytics integration"] },
                { id: "sw3", name: "Speed & SEO Optimization (Web)", desc: "Google PageSpeed optimization, metadata structuring, and security hardening.", specs: ["Sub-second page load speeds", "Search Engine Optimization (SEO)", "SSL certificate installation", "OWASP web hardening"] }
              ]
            },
            {
              id: "srv_amc",
              name: "AMC & Managed IT Services",
              desc: "Proactive support for uninterrupted operations.",
              specs: ["Guaranteed Response Time SLAs", "Preventive Maintenance Audits", "Tier-1 to Tier-3 Support", "Full Hardware Replacement Cover"],
              children: [
                { id: "sa1", name: "Comprehensive IT AMC (AMC)", desc: "Complete coverage of all servers, networks, workstations, and printers.", specs: ["Zero unexpected repair expenses", "OEM certified replacement parts", "Regular scheduled health checkups", "Priority engineer dispatch"] },
                { id: "sa2", name: "Preventive Maintenance (R)", desc: "Quarterly physical cleaning, thermal testing, and firmware patch updates.", specs: ["Server thermal diagnostics", "Hard drive health monitoring", "Firmware security updates", "UPS battery load testing"] },
                { id: "sa3", name: "Network & Server Monitoring (24/7)", desc: "Continuous uptime tracking alerting our NOC team to issues before downtime occurs.", specs: ["Bandwidth usage monitoring", "CPU & memory alert triggers", "Sub-5 minute incident alerting", "Monthly SLA uptime reports"] },
                { id: "sa4", name: "Dedicated SLA Support (M)", desc: "Guaranteed on-site engineer arrival within committed SLA windows.", specs: ["2-hour to 4-hour on-site MTTR", "Dedicated account manager", "Live ticket tracking portal", "Preventive disaster runbooks"] }
              ]
            },
            {
              id: "srv_staff",
              name: "IT Engineers / Technical Manpower",
              desc: "Skilled professionals on contract.",
              specs: ["L1 / L2 / L3 Certified Engineers", "On-Site Resident Systems Admins", "Rapid 48-Hour Deployment", "Zero HR & Payroll Overhead"],
              children: [
                { id: "sp1", name: "On-Site Resident Engineers (M)", desc: "Full-time certified systems administrators embedded directly into your office.", specs: ["Dedicated full-time placement", "Supervised by NexBrivo L3 leads", "Immediate replacement guarantee", "Pre-screened & vetted candidates"] },
                { id: "sp2", name: "L1 / L2 / L3 Skilled Specialists (M)", desc: "Specialist network, server, and cloud engineers on flexible contract durations.", specs: ["CCNA / CCNP / AWS certified", "Firewall & server specialists", "Flexible 3 to 12-month terms", "Seamless payroll management"] },
                { id: "sp3", name: "Project-Based IT Staffing (M)", desc: "Rapid team augmentation for major migrations, office setups, and datacenter rollouts.", specs: ["Turnkey migration manpower", "Datacenter cabling & racking", "Hardware rollout teams", "Milestone-based delivery"] }
              ]
            },
            {
              id: "srv_sales",
              name: "IT Products & Software Sales",
              desc: "Best-in-class hardware, networking and software solutions.",
              specs: ["Authorized Vendor Partnerships", "Direct OEM Warranty & Pricing", "Genuine Enterprise Software Licenses", "Turnkey Delivery & Installation"],
              children: [
                { id: "sl1", name: "Computers, Laptops & Workstations (Sales)", desc: "High-performance enterprise machines from Dell, Lenovo, and HP.", specs: ["Commercial grade durability", "3-5 year on-site warranty", "Pre-configured OS & security", "Bulk corporate discounting"] },
                { id: "sl2", name: "Networking Switches & Routers (Sales)", desc: "Enterprise Gigabit and 10GbE managed switches from Cisco, Fortinet, and Aruba.", specs: ["Layer 2 / Layer 3 managed", "PoE+ power for access points & IP phones", "Rackmount form factors", "Lifetime warranty options"] },
                { id: "sl3", name: "Servers & Storage Arrays (Sales)", desc: "Dell PowerEdge, HPE ProLiant servers, and high-capacity NAS/SAN storage.", specs: ["Hot-swap redundant power & RAID", "All-flash NVMe performance", "Scalable multi-terabyte arrays", "Rack installation & cabling"] },
                { id: "sl4", name: "Software Licenses & OS (Sales)", desc: "Genuine licenses for Microsoft 365, Windows Server, Antivirus, and Tally.", specs: ["Microsoft Cloud Solution Provider", "Volume licensing compliance", "Automated renewal management", "Antivirus & endpoint licenses"] }
              ]
            }
          ]
        },
        {
          id: "solutions",
          name: "IT Solutions",
          category: "Integrated Blueprints",
          desc: "Tailored Technology for a Smarter Tomorrow — turnkey enterprise frameworks.",
          specs: [
            "Business IT Infrastructure",
            "Network Security & Segmentation",
            "Cybersecurity & SOC Operations",
            "Digital Transformation & Cloud",
            "Custom Software Development",
            "Managed IT & Remote Monitoring"
          ],
          children: [
            { id: "sol1", name: "Business IT Infrastructure", desc: "Build a strong foundation for your business with reliable servers and networking.", specs: ["Rack design & structured cabling", "Server virtualization (VMware/Hyper-V)", "High-performance storage", "Zero single-point-of-failure"] },
            { id: "sol2", name: "Network Security", desc: "Secure, monitor and manage your network with zero-trust access controls.", specs: ["Next-Gen firewall clustering", "VLAN microsegmentation", "Secure Wi-Fi 6/7 deployment", "Encrypted branch connectivity"] },
            { id: "sol3", name: "Cybersecurity Solutions", desc: "Stay ahead of evolving threats with SIEM, EDR, and proactive audits.", specs: ["24/7 security telemetry", "VAPT security assessments", "Ransomware recovery guarantees", "Employee security awareness"] },
            { id: "sol4", name: "Digital Transformation", desc: "Modernize. Automate. Grow — migrating legacy systems to secure clouds.", specs: ["AWS & Azure cloud migration", "Hybrid cloud architectures", "Automated business workflows", "Paperless office digital solutions"] },
            { id: "sol5", name: "Custom Software Solutions", desc: "Build solutions that work for you — customized to your exact requirements.", specs: ["Tailored ERP & CRM engines", "Supply chain & dispatch systems", "Integrated accounting & billing", "Complete source code IP ownership"] },
            { id: "sol6", name: "Managed IT Solutions", desc: "Proactive monitoring & remote support keeping systems running at 99.99% uptime.", specs: ["24/7 remote monitoring", "Helpdesk ticketing portal", "Preventive hardware replacement", "Quarterly CIO reviews"] }
          ]
        },
        {
          id: "industries",
          name: "Industries We Serve",
          category: "Industry Verticals",
          desc: "Industry-Specific IT Solutions designed for the exact operational needs of each sector.",
          specs: [
            "Manufacturing (OT & Plant Network)",
            "Education (Campus Wi-Fi & Labs)",
            "Healthcare (HIPAA & Hospital IT)",
            "Government (Secure Data Residency)",
            "SMEs (Affordable Turnkey IT)",
            "Corporate Offices (Smart Workplace)",
            "Automotive (Assembly & Telemetry)"
          ],
          children: [
            { id: "ind1", name: "Manufacturing (OT)", desc: "Smart IT for efficient operations, industrial network segmentation, and zero plant downtime.", specs: ["Factory floor network isolation", "SCADA / PLC connectivity protection", "ERP integration for inventory", "Zero assembly disruption"] },
            { id: "ind2", name: "Education (Campus)", desc: "Empowering education with technology — high-density campus Wi-Fi, computer labs, and biometric attendance.", specs: ["High-density student Wi-Fi", "Computer lab network setups", "Student identity management", "Campus surveillance & CCTV"] },
            { id: "ind3", name: "Healthcare (EHR)", desc: "Secure, reliable IT for better care — hospital management software, medical IoT isolation, and PACS imaging.", specs: ["Patient data confidentiality", "Sub-second medical record access", "Medical device VLAN security", "24/7 hospital emergency IT support"] },
            { id: "ind4", name: "Government (Secure)", desc: "Digital governance for a better tomorrow — secure citizen data portals, air-gapped setups, and compliance.", specs: ["Sovereign data security", "Strict role access control", "High-uptime public portal hosting", "Government compliance audits"] },
            { id: "ind5", name: "SMEs (Turnkey)", desc: "Growing businesses with smart solutions — enterprise-grade IT bundles with predictable, affordable pricing.", specs: ["All-in-one IT starter bundles", "Predictable monthly budgeting", "On-call dedicated engineer", "Automated cloud backup"] },
            { id: "ind6", name: "Corporate Offices (Smart)", desc: "Productivity through technology — smart conference rooms, gigabit Wi-Fi, and biometric access controls.", specs: ["Boardroom video conferencing AV", "Gigabit employee Wi-Fi roaming", "Biometric door access & punch-in", "VoIP phone PBX setup"] },
            { id: "ind7", name: "Automotive (Telemetry)", desc: "IT solutions for a smarter, connected automotive industry — assembly line robotics and vendor supply chain IT.", specs: ["Supply chain EDI integration", "Assembly line robotics defense", "Connected vehicle data telemetry", "High-availability shop floor IT"] }
          ]
        },
        {
          id: "amc",
          name: "AMC & Managed IT",
          category: "Service Level Agreements",
          desc: "Keep Your Business Running, Always — reliable and flexible Annual Maintenance Contracts.",
          specs: [
            "Preventive Maintenance Runs",
            "On-Site & Remote Rapid Support",
            "Continuous 24/7 Network Monitoring",
            "Dedicated Resident Engineer Options"
          ],
          children: [
            {
              id: "amc_offer",
              name: "Our AMC Services",
              desc: "Key elements included in every NexBrivo maintenance contract.",
              children: [
                { id: "ao1", name: "Preventive Maintenance", desc: "Regular physical and software audits to avoid sudden system breakdowns." },
                { id: "ao2", name: "On-site Support", desc: "Quick resolution with minimal downtime directly at your facility." },
                { id: "ao3", name: "Remote Support", desc: "Expert help anytime, anywhere via secure encrypted remote sessions." },
                { id: "ao4", name: "Network Monitoring", desc: "24/7 real-time monitoring for uninterrupted network performance." },
                { id: "ao5", name: "Engineer Deployment", desc: "Dedicated certified IT engineers stationed on-site as per requirement." }
              ]
            },
            {
              id: "amc_plans",
              name: "AMC Plans",
              desc: "Tailored tiers based on business size, criticality, and response SLAs.",
              children: [
                { id: "ap_std", name: "Standard Plan (AMC)", desc: "Basic support & maintenance for small office setups with scheduled monthly visits.", specs: ["Monthly preventive maintenance", "Remote support on-demand", "Hardware diagnostics & repair", "Next-business-day response"] },
                { id: "ap_pro", name: "Professional Plan (AMC)", desc: "Advanced support & monitoring with 4-hour on-site MTTR and network monitoring.", specs: ["Fortnightly preventive visits", "24/7 network & server monitoring", "Guaranteed 4-hour on-site MTTR", "Priority emergency support"] },
                { id: "ap_ent", name: "Enterprise Plan (AMC)", desc: "Complete Managed IT services with dedicated on-site engineer and customized SLAs.", specs: ["Dedicated full-time on-site engineer", "24/7 dedicated helpdesk hotline", "Complete replacement parts cover", "Quarterly executive IT reviews"] }
              ]
            },
            { id: "amc_req", name: "Request AMC Proposal →", desc: "Submit your equipment count to get a customized, competitive AMC quote." }
          ]
        },
        {
          id: "cases",
          name: "Projects & Case Studies",
          category: "Proven Track Record",
          desc: "Real Solutions. Measurable Impact — successful deployments across Maharashtra.",
          specs: [
            "Locations: Pune, Aurangabad, Nashik, Beed, Jalgaon, Jalna",
            "Sectors: Manufacturing, Healthcare, Education, Retail",
            "100% On-Time Delivery Track Record"
          ],
          children: [
            {
              id: "cs1",
              name: "Network Security (Pune)",
              desc: "Implemented next-gen firewall and endpoint security for a large manufacturing unit in Pune.",
              specs: ["Sector: Manufacturing | Location: Pune", "Fortinet Next-Gen Firewall cluster", "Complete endpoint EDR rollout", "Zero ransomware infections recorded"]
            },
            {
              id: "cs2",
              name: "Corporate Website (Aurangabad)",
              desc: "Built a responsive, modern website with custom CMS integration for an educational institute in Aurangabad.",
              specs: ["Sector: Education | Location: Aurangabad", "High-speed responsive CMS portal", "Integrated student admissions workflow", "Sub-second CDN loading speed"]
            },
            {
              id: "cs3",
              name: "IT Infrastructure AMC (Nashik)",
              desc: "24/7 support and preventive maintenance ensuring 99.9% uptime for a hospital in Nashik.",
              specs: ["Sector: Healthcare | Location: Nashik", "Complete hardware & network AMC", "24/7 emergency support SLA", "Continuous patient system uptime"]
            },
            {
              id: "cs4",
              name: "Custom ERP Solution (Beed)",
              desc: "Developed comprehensive custom ERP for inventory, billing, and production tracking in Beed.",
              specs: ["Sector: Manufacturing | Location: Beed", "Custom inventory & production engine", "Role-based shop floor access", "Real-time owner reporting dashboard"]
            },
            {
              id: "cs5",
              name: "Network Engineer Deployment (Jalgaon)",
              desc: "Deployed certified resident network engineers on-site for a multi-store retail chain in Jalgaon.",
              specs: ["Sector: Retail | Location: Jalgaon", "On-site resident engineer placement", "Zero store billing interruptions", "Ongoing POS & network maintenance"]
            },
            {
              id: "cs6",
              name: "Cloud Migration & DR (Jalna)",
              desc: "Migrated on-premise business data to cloud with automated disaster recovery setup in Jalna.",
              specs: ["Sector: Retail | Location: Jalna", "Zero-downtime cloud migration", "Automated daily cloud DR backups", "Predictable monthly cloud expenditure"]
            }
          ]
        },
        {
          id: "partners",
          name: "Products & Technology Partners",
          category: "OEM Ecosystem",
          desc: "Best-in-Class Technology for Your Business through direct partnerships with global tech leaders.",
          specs: [
            "Certified Partner: Fortinet, Cisco, Dell Technologies",
            "Certified Partner: Microsoft, HPE, Lenovo",
            "Genuine OEM Hardware & Warranty"
          ],
          children: [
            {
              id: "p_cat",
              name: "Our Product Categories",
              desc: "Complete enterprise hardware and software portfolio.",
              children: [
                { id: "pc1", name: "Computers & Laptops", desc: "Commercial desktops, laptops, and CAD workstations." },
                { id: "pc2", name: "Networking Equipment", desc: "Managed switches, enterprise routers, and Wi-Fi 6 access points." },
                { id: "pc3", name: "Servers & Storage", desc: "Rack servers, blade chassis, and high-speed NAS storage." },
                { id: "pc4", name: "Firewall & Security", desc: "Next-gen perimeter hardware, UTM appliances, and endpoint licenses." },
                { id: "pc5", name: "Software & Licensing", desc: "Microsoft 365, Windows Server, Antivirus, and Cloud licenses." },
                { id: "pc6", name: "IT Accessories", desc: "UPS power systems, server racks, patch panels, and cabling." }
              ]
            },
            {
              id: "p_oem",
              name: "Our Technology Partners",
              desc: "World's leading hardware and technology manufacturers.",
              children: [
                { id: "oem1", name: "Fortinet (Partner)", desc: "Industry-leading FortiGate Next-Gen Firewalls and cybersecurity fabric." },
                { id: "oem2", name: "Cisco (Partner)", desc: "Enterprise switching, Catalyst routing, and secure wireless solutions." },
                { id: "oem3", name: "Dell Technologies (Partner)", desc: "PowerEdge servers, Latitude laptops, and high-density storage arrays." },
                { id: "oem4", name: "Microsoft (Partner)", desc: "Microsoft 365, Azure Cloud, Windows Server, and enterprise licensing." },
                { id: "oem5", name: "HPE (Partner)", desc: "ProLiant compute platforms, Aruba networking, and hybrid IT infrastructure." },
                { id: "oem6", name: "Lenovo (Partner)", desc: "ThinkCentre desktops, ThinkPad enterprise laptops, and workstations." }
              ]
            }
          ]
        },
        {
          id: "careers",
          name: "Careers",
          category: "Talent & Growth",
          desc: "Join Our Team. Build the Future. At NexBrivo, we believe in people, innovation and growth.",
          specs: [
            "Active openings across Pune, Aurangabad, and Jalna",
            "Continuous Certification & Skill Sponsorship",
            "Dynamic Engineering Work Culture"
          ],
          children: [
            {
              id: "cr_why",
              name: "Why Work With Us?",
              desc: "What makes NexBrivo an outstanding place for IT engineers to build their careers.",
              children: [
                { id: "cw1", name: "Innovation & Growth", desc: "Work on cutting-edge cybersecurity, cloud, and enterprise projects." },
                { id: "cw2", name: "Skill & Certifications", desc: "Company-sponsored certifications (CCNA, Fortinet, AWS, Azure)." },
                { id: "cw3", name: "Supportive Culture", desc: "Collaborative, transparent, and high-energy engineering environment." }
              ]
            },
            {
              id: "cr_pos",
              name: "Open Positions",
              desc: "Immediate openings for talented IT professionals.",
              children: [
                { id: "cp1", name: "Network Engineer (Pune)", desc: "L2 Network Engineer with experience in Cisco, Fortinet, and routing protocols." },
                { id: "cp2", name: "Cybersecurity Analyst (Aurangabad)", desc: "SOC Analyst with hands-on SIEM monitoring, threat detection, and firewall policies." },
                { id: "cp3", name: "Software Developer (Pune)", desc: "Full-Stack Developer experienced in React, Node.js, Python, and SQL databases." },
                { id: "cp4", name: "IT Support Engineer (Jalna)", desc: "On-site IT Support Engineer handling hardware, operating systems, and network setups." }
              ]
            },
            { id: "cr_apply", name: "Apply: info@nexbrivo.com", desc: "Send your resume and portfolio directly to our HR team." }
          ]
        },
        {
          id: "contact",
          name: "Contact Us",
          category: "Corporate Dispatch",
          desc: "Let's Build Something Great Together — get in touch with our team today.",
          specs: [
            "Phone: +91 99755 41232 (Mon - Sat 9:00 AM - 7:00 PM)",
            "Email: info@nexbrivo.com (Response within 24 hours)",
            "Office: Office No. 202, Business Plaza, CIDCO, Aurangabad - 431003, Maharashtra, India"
          ],
          children: [
            { id: "ct_ph", name: "Phone: +91 99755 41232", desc: "Available Mon - Sat 9:00 AM - 7:00 PM for inquiries and emergency dispatch." },
            { id: "ct_em", name: "Email: info@nexbrivo.com", desc: "Send your technical queries; our team responds within 24 business hours." },
            { id: "ct_addr", name: "Office: CIDCO, Aurangabad", desc: "NexBrivo Solutions Private Limited, Office No. 202, Business Plaza, CIDCO, Aurangabad - 431003, Maharashtra, India." },
            {
              id: "ct_act",
              name: "Quick Action Triggers",
              desc: "Fast-track your consultation request.",
              children: [
                { id: "ca1", name: "Request a Quote", desc: "Get a comprehensive price estimate tailored to your project scope." },
                { id: "ca2", name: "Get AMC Proposal", desc: "Receive customized maintenance pricing for your equipment." },
                { id: "ca3", name: "Request an Engineer", desc: "Deploy certified IT manpower on-site within 48 hours." },
                { id: "ca4", name: "IT Support Request", desc: "Immediate assistance for emergency server, network, or PC issues." }
              ]
            }
          ]
        }
      ]
    };

function parseBadges(name) {
  let clean = name;
  const badges = [];
  const regex = /\(([^)]+)\)/g;
  let match;
  while ((match = regex.exec(name)) !== null) {
    badges.push(match[1]);
  }
  clean = clean.replace(/\s*\([^)]+\)/g, '').trim();
  return { cleanName: clean, badges };
}

function initOsintTreeFramework() {
  const container = document.getElementById('treeCanvasViewport');
  const svgEl = document.getElementById('treeSvg');
  if (!container || !svgEl || typeof d3 === 'undefined') return;

  const searchInput = document.getElementById('treeSearchInput');
  const searchClear = document.getElementById('treeSearchClear');
  const btnExpandAll = document.getElementById('treeBtnExpandAll');
  const btnCollapseAll = document.getElementById('treeBtnCollapseAll');
  const btnReset = document.getElementById('treeBtnReset');
  const btnNotes = document.getElementById('treeBtnNotes');
  const btnTheme = document.getElementById('treeBtnThemeToggle');
  const notesModal = document.getElementById('treeNotesModal');
  const closeNotesBtn = document.getElementById('closeNotesModal');
  const notesOkBtn = document.getElementById('notesCloseOkBtn');

  // Zoom controls
  const zoomInBtn = document.getElementById('zoomInBtn');
  const zoomOutBtn = document.getElementById('zoomOutBtn');
  const zoomResetBtn = document.getElementById('zoomResetBtn');

  // Inspector Drawer Elements
  const drawer = document.getElementById('treeInspectorDrawer');
  const closeDrawerBtn = document.getElementById('closeInspectorDrawer');
  const drawerCategory = document.getElementById('inspectorCategory');
  const drawerTitle = document.getElementById('inspectorTitle');
  const drawerBadges = document.getElementById('inspectorBadges');
  const drawerDesc = document.getElementById('inspectorDesc');
  const drawerSpecs = document.getElementById('inspectorSpecs');
  const drawerActionPortal = document.getElementById('inspectorActionPortal');
  const drawerActionQuote = document.getElementById('inspectorActionQuote');

  // Notes Modal events
  if (btnNotes && notesModal) {
    btnNotes.addEventListener('click', () => notesModal.classList.add('active'));
  }
  if (closeNotesBtn && notesModal) {
    closeNotesBtn.addEventListener('click', () => notesModal.classList.remove('active'));
  }
  if (notesOkBtn && notesModal) {
    notesOkBtn.addEventListener('click', () => notesModal.classList.remove('active'));
  }
  if (notesModal) {
    notesModal.addEventListener('click', (e) => {
      if (e.target === notesModal) notesModal.classList.remove('active');
    });
  }

  // Theme Toggle event (Light / Dark mode)
  if (btnTheme) {
    btnTheme.addEventListener('click', () => {
      const isLight = document.body.classList.toggle('light-mode');
      btnTheme.textContent = isLight ? 'Dark Mode' : 'Light Mode';
    });
  }

  // Open Inspector Drawer
  function openNodeDetails(nodeData) {
    if (!drawer) return;
    drawerCategory.textContent = nodeData.category || "NEXBRIVO PRACTICE";
    
    const parsed = parseBadges(nodeData.name);
    drawerTitle.textContent = parsed.cleanName;

    if (drawerBadges) {
      if (parsed.badges.length > 0) {
        drawerBadges.innerHTML = parsed.badges.map(b => `<span class="inspector-pill">(${b})</span>`).join('');
      } else {
        drawerBadges.innerHTML = '';
      }
    }

    drawerDesc.textContent = nodeData.desc || "Enterprise technology and cybersecurity operational area.";

    if (nodeData.specs && nodeData.specs.length > 0) {
      drawerSpecs.innerHTML = nodeData.specs.map(s => `
        <li>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>${s}</span>
        </li>
      `).join('');
    } else {
      drawerSpecs.innerHTML = `
        <li>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>Guaranteed 99.998% Uptime SLA &bull; 24/7 Rapid Response</span>
        </li>
      `;
    }

    if (drawerActionPortal) {
      drawerActionPortal.onclick = () => {
        closeDrawer();
        window.jumpToPortalSection(nodeData.portalTarget || "#services");
      };
    }

    if (drawerActionQuote) {
      drawerActionQuote.onclick = () => {
        closeDrawer();
        window.jumpToPortalSection("#quote");
      };
    }

    drawer.classList.add('active');
  }

  function closeDrawer() {
    if (drawer) drawer.classList.remove('active');
  }

  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);

  // Setup D3 Tree
  const svg = d3.select(svgEl);
  svg.selectAll("*").remove();

  const gVis = svg.append("g").attr("class", "tree-vis-group");
  const gLinks = gVis.append("g").attr("class", "tree-links-group");
  const gNodes = gVis.append("g").attr("class", "tree-nodes-group");

  const zoomBehavior = d3.zoom()
    .scaleExtent([0.15, 3.5])
    .on("zoom", (event) => {
      gVis.attr("transform", event.transform);
    });

  svg.call(zoomBehavior);

  // Close drawer on clicking empty canvas
  svg.on("click", (event) => {
    if (event.target === svgEl || event.target.tagName.toLowerCase() === 'svg') {
      closeDrawer();
    }
  });

  const nodeHeight = 32;
  const levelWidth = 240;
  const treeLayout = d3.tree().nodeSize([nodeHeight, levelWidth]);
  const diagonal = d3.linkHorizontal().x(d => d.y).y(d => d.x);

  let nodeIdCounter = 0;
  const rootNode = d3.hierarchy(nexbrivoTreeData, d => d.children);
  rootNode.x0 = 0;
  rootNode.y0 = 0;

  // Initialize: expand level 0 (root) and keep level 1 children collapsed (like OSINT Framework)
  if (rootNode.children) {
    rootNode.children.forEach(c => {
      if (c.children) {
        c._children = c.children;
        c.children = null;
      }
    });
  }

  function update(source) {
    const duration = 400;

    // Assign layout coordinates
    treeLayout(rootNode);

    const nodes = rootNode.descendants();
    const links = rootNode.links();

    // Fixed depth per tier
    nodes.forEach(d => {
      d.y = d.depth * levelWidth;
    });

    // --- NODES ---
    const nodeSelection = gNodes.selectAll("g.tree-node")
      .data(nodes, d => d.id || (d.id = ++nodeIdCounter));

    // Enter nodes at parent's previous position
    const nodeEnter = nodeSelection.enter().append("g")
      .attr("class", d => `tree-node ${d._highlighted ? "node-highlighted" : ""}`)
      .attr("transform", d => `translate(${source.y0},${source.x0})`)
      .on("click", (event, d) => {
        event.stopPropagation();
        if (d.children || d._children) {
          if (d.children) {
            d._children = d.children;
            d.children = null;
          } else {
            d.children = d._children;
            d._children = null;
          }
          update(d);
        }
        openNodeDetails(d.data);
      });

    nodeEnter.append("circle")
      .attr("class", "tree-node-circle")
      .attr("r", 1e-6);

    nodeEnter.append("text")
      .attr("class", "tree-node-text")
      .attr("dy", ".35em")
      .style("fill-opacity", 1e-6);

    // Transition entering & existing nodes
    const nodeUpdate = nodeEnter.merge(nodeSelection).transition().duration(duration)
      .attr("class", d => `tree-node ${d._highlighted ? "node-highlighted" : ""}`)
      .attr("transform", d => `translate(${d.y},${d.x})`);

    nodeUpdate.select("circle")
      .attr("r", d => {
        if (d._highlighted) return 7.5;
        if (d.depth === 0) return 8.5;
        return (d.children || d._children) ? 6 : 4.5;
      })
      .attr("fill", d => {
        if (d._highlighted) return "#1495FF";
        if (d.depth === 0) return "#0878E8";
        if (d.children) return "#1495FF"; // expanded branch
        if (d._children) return "#031B2E"; // collapsed branch
        return "#062B49"; // leaf
      })
      .attr("stroke", d => {
        if (d._highlighted) return "#FFFFFF";
        if (d.depth === 0) return "#FFFFFF";
        if (d.children || d._children) return "#1495FF";
        return "#64748B";
      })
      .attr("stroke-width", d => d._highlighted ? "2.5px" : "1.8px");

    // Format Text & Badges (OSINT layout: parent on left, leaf on right)
    nodeEnter.merge(nodeSelection).each(function(d) {
      const hasChildren = Boolean(d.children || d._children);
      const textEl = d3.select(this).select("text");

      textEl
        .attr("x", hasChildren ? -12 : 12)
        .attr("text-anchor", hasChildren ? "end" : "start")
        .style("font-size", d.depth === 0 ? "15px" : (d.depth === 1 ? "13px" : "12px"))
        .style("font-weight", d.depth === 0 ? "800" : (hasChildren ? "700" : "500"));

      textEl.selectAll("*").remove();

      const parsed = parseBadges(d.data.name);
      textEl.append("tspan")
        .attr("class", "tree-label-name")
        .text(parsed.cleanName);

      if (d._children && d._children.length > 0) {
        textEl.append("tspan")
          .attr("class", "tree-counter-badge")
          .attr("dx", "5")
          .text(`[+${d._children.length}]`);
      }

      parsed.badges.forEach(b => {
        textEl.append("tspan")
          .attr("class", `tree-badge-pill badge-${b.replace(/[^a-zA-Z0-9]/g, '')}`)
          .attr("dx", "4")
          .text(`(${b})`);
      });
    });

    nodeUpdate.select("text")
      .style("fill-opacity", 1);

    // Transition exiting nodes to parent's new position
    const nodeExit = nodeSelection.exit().transition().duration(duration)
      .attr("transform", d => `translate(${source.y},${source.x})`)
      .remove();

    nodeExit.select("circle").attr("r", 1e-6);
    nodeExit.select("text").style("fill-opacity", 1e-6);

    // --- LINKS ---
    const linkSelection = gLinks.selectAll("path.tree-link")
      .data(links, d => d.target.id);

    const linkEnter = linkSelection.enter().insert("path", "g")
      .attr("class", d => `tree-link ${d.target._highlighted ? "link-highlighted" : ""}`)
      .attr("d", d => {
        const o = { x: source.x0, y: source.y0 };
        return diagonal({ source: o, target: o });
      });

    linkEnter.merge(linkSelection).transition().duration(duration)
      .attr("class", d => `tree-link ${d.target._highlighted ? "link-highlighted" : ""}`)
      .attr("d", diagonal);

    linkSelection.exit().transition().duration(duration)
      .attr("d", d => {
        const o = { x: source.x, y: source.y };
        return diagonal({ source: o, target: o });
      })
      .remove();

    // Stash current positions for transition origin
    nodes.forEach(d => {
      d.x0 = d.x;
      d.y0 = d.y;
    });
  }

  // Calculate and zoom to fit the mindmap neatly in the viewport
  function fitToScreen(animate = true) {
    const rect = container.getBoundingClientRect();
    const cWidth = rect.width || 1200;
    const cHeight = rect.height || 700;

    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    rootNode.descendants().forEach(d => {
      if (d.x < minX) minX = d.x;
      if (d.x > maxX) maxX = d.x;
      if (d.y < minY) minY = d.y;
      if (d.y > maxY) maxY = d.y;
    });

    const pad = 50;
    const treeH = (maxX - minX) || 1;
    const treeW = (maxY - minY) || 1;

    const k = Math.min((cWidth - pad * 2) / (treeW + 300), (cHeight - pad * 2) / treeH, 1.3);
    const midY = (minX + maxX) / 2;
    const tx = pad + 30;
    const ty = cHeight / 2 - midY * k;

    const transform = d3.zoomIdentity.translate(tx, ty).scale(k);
    if (animate) {
      svg.transition().duration(500).call(zoomBehavior.transform, transform);
    } else {
      svg.call(zoomBehavior.transform, transform);
    }
  }

  // Zoom control handlers
  if (zoomInBtn) {
    zoomInBtn.addEventListener('click', () => {
      svg.transition().duration(250).call(zoomBehavior.scaleBy, 1.3);
    });
  }
  if (zoomOutBtn) {
    zoomOutBtn.addEventListener('click', () => {
      svg.transition().duration(250).call(zoomBehavior.scaleBy, 0.7);
    });
  }
  if (zoomResetBtn) {
    zoomResetBtn.addEventListener('click', () => fitToScreen(true));
  }

  // Expand All / Collapse All
  function expandAll() {
    function expandNode(d) {
      if (d._children) {
        d.children = d._children;
        d._children = null;
      }
      if (d.children) d.children.forEach(expandNode);
    }
    expandNode(rootNode);
    update(rootNode);
    setTimeout(() => fitToScreen(true), 450);
  }

  function collapseAll() {
    function collapseNode(d) {
      if (d.children) {
        d._children = d.children;
        d._children.forEach(collapseNode);
        d.children = null;
      }
    }
    if (rootNode.children) rootNode.children.forEach(collapseNode);
    update(rootNode);
    setTimeout(() => fitToScreen(true), 450);
  }

  if (btnExpandAll) btnExpandAll.addEventListener('click', expandAll);
  if (btnCollapseAll) btnCollapseAll.addEventListener('click', collapseAll);

  if (btnReset) {
    btnReset.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      if (searchClear) searchClear.style.display = 'none';
      rootNode.descendants().forEach(d => { d._highlighted = false; });
      collapseAll();
      closeDrawer();
    });
  }

  // Real-time Search Engine
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      if (searchClear) searchClear.style.display = query.length > 0 ? 'block' : 'none';

      rootNode.descendants().forEach(d => { d._highlighted = false; });

      if (query.length === 0) {
        update(rootNode);
        return;
      }

      rootNode.descendants().forEach(d => {
        const nameMatch = d.data.name.toLowerCase().includes(query);
        const descMatch = (d.data.desc || '').toLowerCase().includes(query);
        if (nameMatch || descMatch) {
          d._highlighted = true;
          let p = d.parent;
          while (p) {
            if (p._children) {
              p.children = p._children;
              p._children = null;
            }
            p = p.parent;
          }
        }
      });

      update(rootNode);
    });
  }

  if (searchClear) {
    searchClear.addEventListener('click', () => {
      searchInput.value = '';
      searchClear.style.display = 'none';
      rootNode.descendants().forEach(d => { d._highlighted = false; });
      update(rootNode);
      fitToScreen(true);
    });
  }

  // Initial draw and position fit
  update(rootNode);
  setTimeout(() => fitToScreen(false), 80);
  window.addEventListener('resize', () => fitToScreen(false));
}

/* ==========================================================================
   PORTAL LOGIC (HERO CANVAS, THREAT FEED, FILTERS, MODALS, WIZARD)
   ========================================================================== */
function initCyberMatrixCanvas() {
  const canvas = document.getElementById('cyberCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width, height;
  let particles = [];
  const particleCount = 70;
  const maxDistance = 145;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = canvas.parentElement.offsetHeight || window.innerHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.7;
      this.vy = (Math.random() - 0.5) * 0.7;
      this.radius = Math.random() * 2 + 1;
      this.baseColor = Math.random() > 0.35 ? 'rgba(20, 149, 255, ' : 'rgba(8, 120, 232, ';
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
      ctx.fillStyle = this.baseColor + '0.8)';
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  let mouse = { x: null, y: null };
  window.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.hypot(dx, dy);

        if (dist < maxDistance) {
          const opacity = (1 - dist / maxDistance) * 0.32;
          ctx.strokeStyle = `rgba(20, 149, 255, ${opacity})`;
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
        if (mdist < 190) {
          const mOpacity = (1 - mdist / 190) * 0.5;
          ctx.strokeStyle = `rgba(20, 149, 255, ${mOpacity})`;
          ctx.lineWidth = 1.25;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

function initLiveThreatFeed() {
  const el = document.getElementById('threatMitigatedCount');
  if (!el) return;

  let baseCount = 4281940;
  setInterval(() => {
    const increment = Math.floor(Math.random() * 45) + 12;
    baseCount += increment;
    const formatted = (baseCount / 1000000).toFixed(2);
    el.textContent = `${formatted}M+`;
  }, 2800);
}

function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('navMenu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      const isVisible = navMenu.style.display === 'flex';
      if (isVisible) {
        navMenu.style.display = '';
      } else {
        navMenu.style.display = 'flex';
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '80px';
        navMenu.style.left = '0';
        navMenu.style.width = '100%';
        navMenu.style.background = '#FFFFFF';
        navMenu.style.padding = '20px';
        navMenu.style.borderBottom = '1px solid #DCE7F0';
        navMenu.style.boxShadow = '0 10px 30px rgba(6, 43, 73, 0.12)';
      }
    });
  }
}

function initSitemapExplorer() {
  const openBtns = document.querySelectorAll('[data-open-sitemap]');
  const modal = document.getElementById('sitemapModal');
  const closeBtn = document.getElementById('closeSitemapModal');

  if (!modal) return;

  function open() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  openBtns.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    open();
  }));

  if (closeBtn) closeBtn.addEventListener('click', close);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) close();
  });

  const treeLinks = modal.querySelectorAll('a');
  treeLinks.forEach(link => {
    link.addEventListener('click', () => {
      close();
    });
  });
}

function initCommandPalette() {
  const modal = document.getElementById('searchModal');
  const openBtns = document.querySelectorAll('[data-open-search]');
  const closeBtn = document.getElementById('closeSearchModal');
  const searchInput = document.getElementById('paletteInput');
  const resultsContainer = document.getElementById('searchResults');

  if (!modal) return;

  const sitemapIndex = [
    { title: "Home — Cyber & IT Command Center", category: "Navigation", target: "#home" },
    { title: "About — Company Overview", category: "About", target: "#about-overview" },
    { title: "About — Who We Are & Certified Engineers", category: "About", target: "#about-whoweare" },
    { title: "About — Mission & Vision", category: "About", target: "#about-mission" },
    { title: "About — Core Values", category: "About", target: "#about-values" },
    { title: "About — Our 4-Stage Operational Approach", category: "About", target: "#about-approach" },
    { title: "Services — Cybersecurity & SOC 24/7", category: "Services", target: "#service-cybersecurity" },
    { title: "Services — Firewall & Network Security (NGFW)", category: "Services", target: "#service-firewall" },
    { title: "Services — Enterprise Software Development", category: "Services", target: "#service-software" },
    { title: "Services — Web Development & Portal Engineering", category: "Services", target: "#service-web" },
    { title: "Services — AMC & Managed IT Services", category: "Services", target: "#service-amc" },
    { title: "Services — IT Engineers & Technical Manpower", category: "Services", target: "#service-manpower" },
    { title: "Solutions — IT Infrastructure & Hyperconvergence", category: "Solutions", target: "#solutions" },
    { title: "Solutions — Zero-Trust Network Security", category: "Solutions", target: "#solutions" },
    { title: "Solutions — Threat Hunting & Cybersecurity Solutions", category: "Solutions", target: "#solutions" },
    { title: "Solutions — Cloud Digital Transformation", category: "Solutions", target: "#solutions" },
    { title: "Solutions — Custom Enterprise Software Solutions", category: "Solutions", target: "#solutions" },
    { title: "Solutions — Managed IT & NOC Operations", category: "Solutions", target: "#solutions" },
    { title: "Industries — Manufacturing & OT/SCADA Security", category: "Industries", target: "#industries" },
    { title: "Industries — Education & Campus Infrastructure", category: "Industries", target: "#industries" },
    { title: "Industries — Healthcare & HIPAA Data Protection", category: "Industries", target: "#industries" },
    { title: "Industries — Government & Defense-Grade Reliability", category: "Industries", target: "#industries" },
    { title: "Industries — SMEs & Agile Managed Stacks", category: "Industries", target: "#industries" },
    { title: "Industries — Corporate Offices & Smart Workplaces", category: "Industries", target: "#industries" },
    { title: "Industries — Automotive & Connected Telemetry", category: "Industries", target: "#industries" },
    { title: "Comparison — The NEXBRIVO Advantage vs. Generic MSPs", category: "Comparison", target: ".comparison-section" },
    { title: "Case Studies — Global Manufacturing Security Overhaul", category: "Case Studies", target: "#case-studies" },
    { title: "Case Studies — Hospital Network Cloud Migration", category: "Case Studies", target: "#case-studies" },
    { title: "Testimonials — Leadership Endorsements", category: "Testimonials", target: ".testimonials-section" },
    { title: "Technology — Infrastructure (Dell, HPE, Cisco UCS, Nutanix)", category: "Technology", target: "#technology" },
    { title: "Technology — Networking (Cisco, Fortinet, Aruba, Juniper)", category: "Technology", target: "#technology" },
    { title: "Technology — Cybersecurity (Palo Alto, CrowdStrike, SentinelOne)", category: "Technology", target: "#technology" },
    { title: "Careers — Open Positions & Application", category: "Careers", target: "#careers" },
    { title: "Resources — Cybersecurity Guides & Whitepapers", category: "Resources", target: "#resources" },
    { title: "Resources — FAQs & SLA Standards", category: "Resources", target: "#faqs" },
    { title: "Contact — 24/7 SOC Hotline & Regional Hubs", category: "Contact", target: "#contact" },
    { title: "Get a Quote — Interactive Consultation Form", category: "Get A Quote", target: "#quote" }
  ];

  function openSearch() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (searchInput) {
      searchInput.value = '';
      renderResults(sitemapIndex.slice(0, 6));
      setTimeout(() => searchInput.focus(), 50);
    }
  }

  function closeSearch() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function renderResults(items) {
    if (!resultsContainer) return;
    if (items.length === 0) {
      resultsContainer.innerHTML = '<div style="padding: 20px; text-align: center; color: #64748B;">No matching pages or modules found.</div>';
      return;
    }
    resultsContainer.innerHTML = items.map(item => `
      <div class="search-result-item" data-target="${item.target}">
        <div>
          <div style="font-weight: 700; color: #062B49; font-size: 0.95rem;">${item.title}</div>
          <div style="font-size: 0.78rem; color: #0878E8; font-family: var(--font-mono); font-weight: 600;">${item.category}</div>
        </div>
        <span style="color: #64748B; font-size: 0.8rem; font-weight: 600;">Jump &rarr;</span>
      </div>
    `).join('');

    resultsContainer.querySelectorAll('.search-result-item').forEach(el => {
      el.addEventListener('click', () => {
        const target = el.getAttribute('data-target');
        closeSearch();
        window.jumpToPortalSection(target);
      });
    });
  }

  openBtns.forEach(b => b.addEventListener('click', openSearch));
  if (closeBtn) closeBtn.addEventListener('click', closeSearch);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeSearch();
  });

  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (modal.classList.contains('active')) {
        closeSearch();
      } else {
        openSearch();
      }
    } else if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeSearch();
    }
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (!q) {
        renderResults(sitemapIndex.slice(0, 6));
        return;
      }
      const filtered = sitemapIndex.filter(item => 
        item.title.toLowerCase().includes(q) || 
        item.category.toLowerCase().includes(q)
      );
      renderResults(filtered);
    });
  }
}

function initCaseStudyFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.case-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

function initCaseStudyModals() {
  const modal = document.getElementById('caseStudyModal');
  const closeBtn = document.getElementById('closeCaseModal');
  const viewBtns = document.querySelectorAll('[data-view-case]');

  if (!modal) return;

  const caseDatabase = {
    'case-1': {
      title: "Global Automotive Manufacturer: Zero-Trust & Managed SOC 24/7",
      client: "Global Tier-1 Auto Components Corp",
      industry: "Automotive & Manufacturing",
      challenge: "The client operated 14 factories with over 4,200 connected robotics and SCADA devices. An outdated perimeter network left OT devices vulnerable to lateral movement, with an average incident triage time exceeding 48 hours.",
      solution: "NEXBRIVO architected an end-to-end Zero-Trust microsegmentation policy using Palo Alto NGFW, deployed CrowdStrike Falcon across 3,500 endpoints, and migrated all event streams into our 24/7 autonomous SOC.",
      results: [
        { label: "Incident Reduction", val: "88%" },
        { label: "MTTR Response Time", val: "< 12 Mins" },
        { label: "Annual Breach Cost Saved", val: "$2.4M" }
      ],
      techStack: "Palo Alto Networks, CrowdStrike Falcon, Splunk SIEM, Cisco Catalyst 9000, Fortinet SD-WAN",
      quote: "NEXBRIVO fortified our manufacturing operations without interrupting a single second of factory floor production."
    },
    'case-2': {
      title: "Tier-1 Multi-Hospital Healthcare System: HIPAA Cloud & High Availability",
      client: "Metropolitan Healthcare Alliance (6 Hospitals)",
      industry: "Healthcare",
      challenge: "Mission-critical Electronic Health Records (EHR) were suffering latency spikes on aging SAN arrays, while audit pressures required immediate HIPAA compliance verification and immutable ransomware backups.",
      solution: "Designed a hybrid hyper-converged infrastructure using Dell PowerFlex and VMware vSphere, backed by immutable Veeam air-gapped repositories and multi-region AWS cloud disaster recovery.",
      results: [
        { label: "Storage IOPS Boost", val: "450%" },
        { label: "Compliance Score", val: "100% HIPAA" },
        { label: "RPO Recovery Target", val: "Zero Loss" }
      ],
      techStack: "Dell EMC PowerFlex, VMware ESXi 8.0, AWS HealthLake, Veeam Cloud Connect, NetApp All-Flash",
      quote: "Patient records now retrieve instantaneously, and our ransomware resilience meets the highest federal standards."
    },
    'case-3': {
      title: "Fintech Digital Bank: Zero-Downtime Microservices & Kubernetes Scale",
      client: "Apex Digital Financial Technologies",
      industry: "Financial Services",
      challenge: "Rapid user acquisition caused payment throughput bottlenecks during peak trading hours. Monolithic services lacked containerized autoscaling and automated CI/CD security scanning.",
      solution: "Engineered a containerized microservices platform on AWS EKS with Kubernetes, automated Terraform infrastructure-as-code, and embedded DevSecOps pipelines with zero-downtime blue/green deployments.",
      results: [
        { label: "Daily Transactions", val: "25M+" },
        { label: "Deployment Velocity", val: "14x Faster" },
        { label: "Cloud Spend Saved", val: "34%" }
      ],
      techStack: "AWS EKS, Terraform, Go, Node.js, Docker, HashiCorp Vault, Prometheus & Grafana",
      quote: "NEXBRIVO enabled us to scale from 2 million to 10 million active accounts with absolute stability."
    },
    'case-4': {
      title: "State University System: Wi-Fi 7 Campus & Unified Network Security",
      client: "State University Campus Network",
      industry: "Education",
      challenge: "Over 45,000 students and faculty experienced severe bandwidth degradation across 38 campus buildings, coupled with unauthorized rogue devices connecting to internal research clusters.",
      solution: "Deployed 1,800 Aruba Wi-Fi 7 access points, 802.1X Network Access Control (NAC) with ClearPass, and automated identity-based policy enforcement across all student and lab subnets.",
      results: [
        { label: "Concurrent Devices", val: "48,000+" },
        { label: "Coverage Density", val: "99.8%" },
        { label: "Rogue Threat Drop", val: "95%" }
      ],
      techStack: "Aruba CX Switches, Aruba Wi-Fi 7 APs, ClearPass Policy Manager, Juniper Mist AI",
      quote: "Our campus Wi-Fi went from our most complained-about service to our most praised technological asset."
    }
  };

  function openCaseModal(caseId) {
    const data = caseDatabase[caseId] || caseDatabase['case-1'];
    document.getElementById('modalCaseTitle').textContent = data.title;
    document.getElementById('modalCaseClient').textContent = `${data.client} • ${data.industry}`;
    document.getElementById('modalCaseChallenge').textContent = data.challenge;
    document.getElementById('modalCaseSolution').textContent = data.solution;
    document.getElementById('modalCaseTech').textContent = data.techStack;
    document.getElementById('modalCaseQuote').textContent = `"${data.quote}"`;

    const metricsContainer = document.getElementById('modalCaseMetrics');
    if (metricsContainer) {
      metricsContainer.innerHTML = data.results.map(r => `
        <div class="case-metric-item">
          <div class="case-metric-value">${r.val}</div>
          <div class="case-metric-label">${r.label}</div>
        </div>
      `).join('');
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCaseModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  viewBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-view-case');
      openCaseModal(id);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeCaseModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeCaseModal();
  });
}

function initCareersApplication() {
  const modal = document.getElementById('careerModal');
  const closeBtn = document.getElementById('closeCareerModal');
  const applyBtns = document.querySelectorAll('[data-apply-role]');
  const roleInput = document.getElementById('appliedRoleTitle');
  const form = document.getElementById('careerApplicationForm');

  if (!modal) return;

  function openCareer(role) {
    if (roleInput) roleInput.value = role;
    document.getElementById('modalRoleHeading').textContent = `Apply for: ${role}`;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCareer() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  applyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const role = btn.getAttribute('data-apply-role');
      openCareer(role);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeCareer);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeCareer();
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('careerName')?.value || 'Applicant';
      closeCareer();
      showToast(`Application submitted successfully! Welcome to the NEXBRIVO talent pipeline, ${name}.`);
      form.reset();
    });
  }
}

function initQuoteWizard() {
  const wizard = document.getElementById('quoteWizard');
  if (!wizard) return;

  let currentStep = 1;
  const totalSteps = 4;

  const quoteData = {
    service: 'Cybersecurity & Managed SOC',
    scale: '50 - 250 Endpoints',
    sla: '24/7 Dedicated SOC with < 12 Min SLA',
    company: '',
    email: '',
    name: ''
  };

  const serviceCards = wizard.querySelectorAll('[data-quote-service]');
  serviceCards.forEach(card => {
    card.addEventListener('click', () => {
      serviceCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      quoteData.service = card.getAttribute('data-quote-service');
      updateEstimateSummary();
    });
  });

  const scaleCards = wizard.querySelectorAll('[data-quote-scale]');
  scaleCards.forEach(card => {
    card.addEventListener('click', () => {
      scaleCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      quoteData.scale = card.getAttribute('data-quote-scale');
      updateEstimateSummary();
    });
  });

  const slaCards = wizard.querySelectorAll('[data-quote-sla]');
  slaCards.forEach(card => {
    card.addEventListener('click', () => {
      slaCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      quoteData.sla = card.getAttribute('data-quote-sla');
      updateEstimateSummary();
    });
  });

  const nextBtns = wizard.querySelectorAll('[data-wizard-next]');
  const prevBtns = wizard.querySelectorAll('[data-wizard-prev]');
  const submitBtn = document.getElementById('wizardSubmitBtn');

  function goToStep(step) {
    currentStep = step;

    wizard.querySelectorAll('.wizard-step-panel').forEach(panel => {
      const pStep = parseInt(panel.getAttribute('data-step'));
      panel.style.display = pStep === currentStep ? 'block' : 'none';
    });

    wizard.querySelectorAll('.wizard-step-node').forEach(node => {
      const nStep = parseInt(node.getAttribute('data-step-node'));
      node.classList.remove('active', 'completed');
      if (nStep === currentStep) {
        node.classList.add('active');
      } else if (nStep < currentStep) {
        node.classList.add('completed');
      }
    });

    if (currentStep === 4) {
      updateEstimateSummary();
    }
  }

  nextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentStep < totalSteps) goToStep(currentStep + 1);
    });
  });

  prevBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentStep > 1) goToStep(currentStep - 1);
    });
  });

  function updateEstimateSummary() {
    const sEl = document.getElementById('summaryService');
    const scEl = document.getElementById('summaryScale');
    const slaEl = document.getElementById('summarySla');

    if (sEl) sEl.textContent = quoteData.service;
    if (scEl) scEl.textContent = quoteData.scale;
    if (slaEl) slaEl.textContent = quoteData.sla;
  }

  if (submitBtn) {
    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const company = document.getElementById('quoteCompany')?.value || 'Enterprise';
      
      showToast(`Consultation Proposal generated for ${company}! A NEXBRIVO Principal Engineer will contact you within 2 business hours.`);
      
      setTimeout(() => {
        goToStep(1);
      }, 1000);
    });
  }
}

function initFAQAccordion() {
  const items = document.querySelectorAll('.faq-item');

  items.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        items.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });
}

function initContactForm() {
  const form = document.getElementById('mainContactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName')?.value || 'Guest';
    showToast(`Thank you, ${name}! Your security inquiry has been transmitted to our SOC dispatch.`);
    form.reset();
  });
}

function initResourceDownloads() {
  const downloadBtns = document.querySelectorAll('[data-download-resource]');
  downloadBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const resName = btn.getAttribute('data-download-resource');
      showToast(`Initiating secure download: "${resName}" (PDF, 2026 Edition)`);
    });
  });
}

function showToast(message) {
  let toast = document.getElementById('globalToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'globalToast';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1495FF" stroke-width="2.5">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <div style="font-size: 0.9rem; font-weight: 700; color: #FFFFFF;">${message}</div>
  `;

  toast.classList.add('active');

  setTimeout(() => {
    toast.classList.remove('active');
  }, 4500);
}
