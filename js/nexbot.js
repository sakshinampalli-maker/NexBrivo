/**
 * ==========================================================================
 * NEXBOT — OFFICIAL AI VIRTUAL IT & CYBER CONSULTANT
 * NexBrivo Solutions Private Limited
 * ==========================================================================
 */

(function () {
  'use strict';

  /* --------------------------------------------------------------------------
     1. KNOWLEDGE BASE & INTENT ENGINE
     -------------------------------------------------------------------------- */
  const NEXBRIVO_KB = {
    company: {
      name: "NexBrivo Solutions Private Limited",
      shortName: "NexBrivo",
      tagline: "Enterprise IT Consultancy, Cybersecurity & AMC Services",
      headquarters: "CIDCO, Aurangabad (Chhatrapati Sambhajinagar), Maharashtra - 431003, India",
      regionalPresence: "Aurangabad, Pune, Nashik, Jalna, Jalgaon, and across Maharashtra & India",
      primaryHotline: "+91 91721 88859",
      alternateHotline: "+91 77559 93275",
      email: "nexbrivosolutions@gmail.com",
      whatsapp: "919172188859",
      workingHours: "Monday to Saturday: 9:00 AM – 8:00 PM IST (24/7 dedicated response for AMC clients)",
      oemPartners: "Fortinet, Cisco, Dell Technologies, Microsoft, HP, Sophos"
    },

    services: [
      {
        id: "cybersecurity",
        name: "1. Cybersecurity & VAPT",
        keywords: ["cyber", "cybersecurity", "vapt", "penetration", "hacking", "ethical hack", "soc", "security", "threat", "audit", "compliance", "iso"],
        summary: "Proactive threat defense, comprehensive Vulnerability Assessment and Penetration Testing (VAPT), 24/7 SOC telemetry, firewall hardening, and ISO/IEC regulatory compliance.",
        profiles: ["Cybersecurity Analyst", "Penetration Tester & Ethical Hacker", "Cloud Security Engineer", "Cybersecurity Architect"],
        sectionId: "services"
      },
      {
        id: "firewall",
        name: "2. Firewall & Network Security",
        keywords: ["firewall", "fortinet", "cisco", "network security", "sdwan", "sd-wan", "vpn", "zero trust", "switch", "router"],
        summary: "Next-Gen Firewall clustering (Fortinet FortiGate, Cisco Firepower), deep packet inspection, encrypted SD-WAN, Zero Trust Network Architecture, and high-speed secure site-to-site VPNs.",
        profiles: ["Network Security Engineer", "Firewall Administrator & Engineer", "Zero Trust Network Engineer", "Network Security Architect"],
        sectionId: "services"
      },
      {
        id: "software",
        name: "3. Software Development",
        keywords: ["software", "development", "erp", "app", "mobile", "java", "python", "backend", "custom software", "application"],
        summary: "Bespoke enterprise software, scalable microservices, automated ERPs, inventory and management systems, plus cross-platform mobile apps for iOS and Android.",
        profiles: ["Software Development Engineer (SDE)", "Java Full Stack Developer", "Python & Backend Engineer", "Mobile Application Developer"],
        sectionId: "services"
      },
      {
        id: "web",
        name: "4. Web Development",
        keywords: ["web", "website", "frontend", "react", "nextjs", "node", "ui", "ux", "design", "mern", "portal"],
        summary: "Scalable corporate web applications, design systems, responsive enterprise customer portals, and high-converting modern interfaces built on React, Next.js, and Node.js.",
        profiles: ["Frontend Developer (React / Next.js)", "Backend Developer (Node.js / Python / APIs)", "Full Stack Web Developer (MERN)", "UI/UX & Product Designer"],
        sectionId: "services"
      },
      {
        id: "amc",
        name: "5. AMC & Managed IT Services",
        keywords: ["amc", "maintenance", "annual maintenance", "contract", "managed it", "support", "helpdesk", "resident engineer", "sla", "mttr"],
        summary: "Uninterrupted operational continuity with our flexible Annual Maintenance Contracts. Includes routine preventive checkups, 4-hour guaranteed on-site response in Aurangabad/MIDC, and 24/7 remote helpdesk.",
        profiles: ["IT Support & Helpdesk Engineer", "System Administrator (Windows / Linux)", "24/7 Managed Services Engineer", "IT Service Delivery Manager"],
        sectionId: "amc"
      },
      {
        id: "hardware",
        name: "6. IT Infrastructure & Hardware Supply",
        keywords: ["hardware", "infrastructure", "server", "servers", "rack", "dell", "hp", "switches", "cabling", "datacenter", "procurement"],
        summary: "Authorized OEM procurement for commercial desktops, tier-1 server racks, Cisco/Fortinet switches, structured copper/fiber cabling, and data center deployment.",
        profiles: ["IT Infrastructure Engineer", "Network & Server Support Engineer", "Data Center Operations Engineer", "IT Technical Solutions Consultant"],
        sectionId: "services"
      },
      {
        id: "cloud",
        name: "7. Cloud Computing & DevOps",
        keywords: ["cloud", "aws", "azure", "gcp", "devops", "docker", "kubernetes", "migration", "sre", "ci/cd", "pipeline"],
        summary: "Zero-downtime workload migration to AWS, Microsoft Azure, and private cloud. Containerization with Docker & Kubernetes, CI/CD automated pipelines, and 99.99% high-availability architectures.",
        profiles: ["Cloud Solutions Architect", "DevOps & CI/CD Automation Engineer", "Site Reliability Engineer (SRE)", "Kubernetes & Container Platform Engineer"],
        sectionId: "services"
      },
      {
        id: "erp",
        name: "8. ERP Services",
        keywords: ["erp", "sap", "odoo", "crm", "hrms", "inventory", "procurement", "payroll", "finance", "accounting", "manufacturing", "supply chain"],
        summary: "End-to-end ERP development, implementation, customization, finance & accounting, inventory & procurement, CRM, HRMS, manufacturing workflows, and 24/7 AMC support.",
        profiles: ["ERP Development", "ERP Implementation & Customization", "Finance, Inventory & CRM Modules", "ERP Support, Integration & AMC"],
        sectionId: "services"
      }
    ],

    amcPlans: [
      {
        name: "Standard Plan",
        badge: "Essential Support",
        desc: "Ideal for small offices (5–20 PCs). Monthly preventive maintenance, on-demand remote helpdesk, and next-business-day on-site response.",
        features: ["Monthly scheduled physical visits", "Remote helpdesk assistance", "PC & network health diagnostics", "Next-business-day on-site SLA"]
      },
      {
        name: "Professional Plan",
        badge: "Most Popular",
        desc: "Designed for mid-market and manufacturing setups (20–100 PCs). Fortnightly scheduled visits, 24/7 network monitoring, and guaranteed 4-hour on-site SLA.",
        features: ["Fortnightly preventive visits", "24/7 network & firewall health monitoring", "Guaranteed 4-hour on-site MTTR", "Priority emergency spares & replacements"]
      },
      {
        name: "Enterprise Plan",
        badge: "Complete Managed IT",
        desc: "For mission-critical enterprises (50+ workstations & server clusters). Includes full-time resident engineers on your premises and dedicated 24/7 executive hotline.",
        features: ["Dedicated full-time on-site resident engineer", "24/7 priority executive hotline", "Full replacement parts cover", "Quarterly executive IT roadmap & review"]
      }
    ],

    training: {
      summary: "NexBrivo Academy offers hands-on practical industrial training & internship programs designed for engineering & IT students with live enterprise lab infrastructure.",
      tracks: [
        "Cybersecurity, Ethical Hacking & VAPT (CEH-aligned)",
        "Full-Stack Web Development (React, Node.js, Databases)",
        "Network Engineering, Firewall Management & Hardware AMC",
        "Cloud Computing (AWS/Azure) & DevOps Pipelines"
      ]
    },

    careers: [
      { role: "Senior Network Security Engineer", location: "Aurangabad", exp: "3-5 Yrs (CCNA / Fortinet NSE)" },
      { role: "Full-Stack Software Developer", location: "Aurangabad", exp: "React / Node / Python / SQL" },
      { role: "IT Support Specialist / AMC Resident", location: "Field Deployment", exp: "Hardware AMC, Windows Server" },
      { role: "Cloud Solutions Architect", location: "Hybrid", exp: "AWS / Azure / Terraform, 3+ Yrs" }
    ]
  };

  /* --------------------------------------------------------------------------
     2. SOUND SYNTHESIS UTILITY (Web Audio API)
     -------------------------------------------------------------------------- */
  class SoundManager {
    constructor() {
      this.enabled = localStorage.getItem('nexbot_sound_enabled') !== 'false';
      this.audioCtx = null;
    }

    toggle() {
      this.enabled = !this.enabled;
      localStorage.setItem('nexbot_sound_enabled', this.enabled ? 'true' : 'false');
      return this.enabled;
    }

    playChime() {
      if (!this.enabled) return;
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        if (!this.audioCtx) {
          this.audioCtx = new AudioContext();
        }
        if (this.audioCtx.state === 'suspended') {
          this.audioCtx.resume();
        }

        const now = this.audioCtx.currentTime;
        const osc1 = this.audioCtx.createOscillator();
        const osc2 = this.audioCtx.createOscillator();
        const gainNode = this.audioCtx.createGain();

        osc1.type = 'sine';
        osc2.type = 'triangle';

        // High-tech pleasant chime: 587.33Hz (D5) -> 880Hz (A5)
        osc1.frequency.setValueAtTime(587.33, now);
        osc1.frequency.exponentialRampToValueAtTime(880, now + 0.08);

        osc2.frequency.setValueAtTime(880, now);
        osc2.frequency.exponentialRampToValueAtTime(1174.66, now + 0.12);

        gainNode.gain.setValueAtTime(0.001, now);
        gainNode.gain.exponentialRampToValueAtTime(0.08, now + 0.02);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);

        osc1.connect(gainNode);
        osc2.connect(gainNode);
        gainNode.connect(this.audioCtx.destination);

        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + 0.28);
        osc2.stop(now + 0.28);
      } catch (e) {
        // Fallback silently if audio context is blocked
      }
    }
  }

  const soundMgr = new SoundManager();

  /* --------------------------------------------------------------------------
     3. INTELLIGENT MATCHING & DIALOGUE RESPONDER
     -------------------------------------------------------------------------- */
  function analyzeQuery(userText) {
    const raw = userText.trim();
    const clean = raw.toLowerCase().replace(/[^\w\s\u0900-\u097F]/gi, ' ');
    const tokens = clean.split(/\s+/).filter(Boolean);

    // Precise token & phrase matching (prevents substring bugs like "hi" in "internship")
    const hasWord = (word) => tokens.includes(word.toLowerCase());
    const hasPhrase = (phrase) => {
      const p = phrase.toLowerCase().trim();
      if (!p.includes(' ')) {
        return tokens.includes(p);
      }
      return clean.includes(p);
    };
    const hasAny = (keywords) => keywords.some(k => hasPhrase(k));
    const hasAll = (keywords) => keywords.every(k => hasPhrase(k));

    // Priority Check: If user asks about specific topics like internship, quote, contact, amc, etc.,
    // handle those before generic greetings!
    
    // INTERNSHIPS, TRAINING & ACADEMY (Students / Freshers / Courses)
    if (hasAny(["internship", "internships", "training", "course", "courses", "student", "students", "learn", "academy", "ceh", "placement", "fees", "fresher"])) {
      return {
        text: `🎓 **NexBrivo Academy & Practical Internships**:
We provide hands-on enterprise-level practical training designed to launch high-paying IT careers:<br><br>
📚 **Available Specializations**:
1. **Cybersecurity & Ethical Hacking / VAPT** (CEH syllabus, live vulnerability labs)
2. **Full-Stack Web Development** (MERN, React, Node.js, real client projects)
3. **Network Engineering & Hardware AMC** (Cisco, Fortinet, server maintenance)
4. **Cloud Computing & DevOps** (AWS, Azure, Docker, Linux administration)<br><br>
✅ Real-world enterprise labs, mentor guidance, and placement support.`,
        actions: [
          { text: "📝 Submit Student Feedback / Inquiry", action: "scroll", target: "feedback" },
          { text: "📞 Inquire About Next Batch", url: "tel:+919172188859" },
          { text: "💬 WhatsApp Academy Coordinator", url: `https://wa.me/${NEXBRIVO_KB.company.whatsapp}?text=Hello%2C%20I%20am%20interested%20in%20NexBrivo%20Training%20%26%20Internship%20Programs.`, whatsapp: true }
        ]
      };
    }

    // 1. GREETINGS & INTRODUCTIONS (English / Hindi / Hinglish)
    if (hasAny(["hi", "hello", "hey", "namaste", "namaskar", "pranam", "good morning", "good evening", "good afternoon", "hola", "kaise ho", "kya haal"])) {
      return {
        text: `**Namaste! I'm NexBot 👋**, the official AI Virtual Consultant for **NexBrivo Solutions Private Limited**.<br><br>I can guide you through our **Enterprise IT Services**, **AMC Maintenance Plans**, **Cybersecurity & VAPT**, **Cloud Migration**, or connect you directly with our engineering hotlines in Aurangabad and across Maharashtra.<br><br>How can I assist your business today?`,
        actions: [
          { text: "🛡️ Cybersecurity & VAPT", query: "Tell me about cybersecurity services" },
          { text: "💼 AMC Plans & Pricing", query: "What are your AMC plans?" },
          { text: "📞 Contact & Hotline", query: "How do I contact NexBrivo?" },
          { text: "💰 Get Custom Quote", action: "quote" }
        ]
      };
    }

    // 2. WHO ARE YOU / WHAT IS NEXBOT
    if (hasAny(["who are you", "who is nexbot", "what is nexbot", "tum kaun ho", "aap kaun ho", "nexbot kya hai"])) {
      return {
        text: `I am **NexBot**, the smart virtual IT & Cybersecurity advisor engineered for **NexBrivo Solutions Private Limited**.<br><br>I am programmed with full knowledge of NexBrivo's infrastructure services, OEM partnerships (Cisco, Fortinet, Dell, Microsoft), AMC service level agreements (SLAs), and student training programs. Ask me anything or let me connect you with our engineering staff!`,
        actions: [
          { text: "🏢 About NexBrivo", query: "Tell me about NexBrivo" },
          { text: "🛠️ All Services", query: "What services do you provide?" },
          { text: "📞 Call Hotline", url: "tel:+919172188859" }
        ]
      };
    }

    // 3. ABOUT NEXBRIVO / COMPANY / WEBSITE PURPOSE
    if (hasAny(["about nexbrivo", "company", "what is nexbrivo", "website ke bare mein", "website ke baare", "ye website kya hai", "kya kaam karte ho", "company kya karti hai", "about company", "bare mein", "baare mein", "website"])) {
      return {
        text: `**NexBrivo Solutions Private Limited** is an ISO-aligned enterprise IT consultancy, cybersecurity, and hardware infrastructure firm headquartered in **CIDCO, Aurangabad (Chhatrapati Sambhajinagar), Maharashtra**.<br><br>Key Highlights:
• **7 Core Domains**: Cybersecurity, Next-Gen Firewalls, Custom ERP/Software, Corporate Web Portals, 24/7 AMC Support, Hardware Procurement, and Cloud/DevOps.<br>
• **Guaranteed SLAs**: 4-hour rapid on-site technician dispatch in Aurangabad & MIDC belts.<br>
• **OEM Partnerships**: Certified tier-1 procurement with Fortinet, Cisco, Dell Technologies, HP, and Microsoft.<br>
• **Coverage**: Serving Aurangabad, Pune, Nashik, Jalgaon, Jalna, and enterprises pan-India.`,
        actions: [
          { text: "📍 View Contact & Map", action: "scroll", target: "contact" },
          { text: "💼 Explore AMC Plans", action: "scroll", target: "amc" },
          { text: "🗺️ Open Interactive Mindmap", url: "cyber.html" }
        ]
      };
    }

    // 4. CONTACT / PHONE / NUMBER / EMAIL / ADDRESS / LOCATION (Hindi & English)
    if (hasAny(["contact", "phone", "number", "call", "mobile", "hotline", "email", "address", "location", "kahan hai", "office kahan", "aurangabad", "cidco", "kahan par", "sampark"])) {
      return {
        text: `Here are the official verified contact coordinates for **NexBrivo Solutions Private Limited**:<br><br>
🏢 **Head Office Address**:
CIDCO, Aurangabad (Chhatrapati Sambhajinagar), Maharashtra – 431003, India<br><br>
📞 **Direct Engineering Hotlines**:
• Primary: **+91 91721 88859**<br>
• Secondary: **+91 77559 93275**<br>
*(Mon–Sat: 9:00 AM – 8:00 PM IST | 24/7 for AMC clients)*<br><br>
📧 **Official Email**:
<a href="mailto:nexbrivosolutions@gmail.com">nexbrivosolutions@gmail.com</a> *(RFP reply within 24h)*`,
        actions: [
          { text: "📞 Call +91 91721 88859", url: "tel:+919172188859", primary: true },
          { text: "💬 WhatsApp Chat", url: `https://wa.me/${NEXBRIVO_KB.company.whatsapp}?text=Hello%20NexBrivo%20Team%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.`, whatsapp: true },
          { text: "📍 Locate on Map", action: "scroll", target: "contact" }
        ]
      };
    }

    // 5. AMC PLANS / PRICING / MAINTENANCE (Hindi: AMC plan batao, cost, rate)
    if (hasAny(["amc", "annual maintenance", "maintenance contract", "plan", "plans", "pricing", "cost", "charges", "rate", "sla", "preventive", "resident engineer"])) {
      return {
        text: `NexBrivo offers **3 Structured AMC Tiers** to eliminate IT downtime:<br><br>
1️⃣ **Standard Plan** *(Essential Support)*:
• Monthly scheduled preventive checkups & physical visits
• Remote helpdesk & diagnostics
• Next-business-day on-site response<br><br>
2️⃣ **Professional Plan** *(Most Popular ⭐)*:
• Fortnightly scheduled visits
• 24/7 proactive network & firewall monitoring
• **Guaranteed 4-Hour On-Site SLA** in Aurangabad/MIDC
• Priority hardware replacement & spares<br><br>
3️⃣ **Enterprise Plan** *(Complete Managed Care)*:
• **Dedicated Full-Time Resident Engineer** deployed on-site
• 24/7 executive priority hotline
• Full parts cover & quarterly IT architecture reviews`,
        actions: [
          { text: "🧮 Open AMC Cost Estimator", action: "scroll", target: "amc" },
          { text: "📝 Request AMC Proposal", action: "quote", service: "amc", primary: true },
          { text: "📞 Talk to AMC Lead", url: "tel:+919172188859" }
        ]
      };
    }

    // 6. CYBERSECURITY & VAPT & ETHICAL HACKING
    if (hasAny(["cyber", "cybersecurity", "vapt", "penetration", "ethical hack", "soc", "firewall audit", "security audit", "vulnerability"])) {
      return {
        text: `🛡️ **NexBrivo Cybersecurity & VAPT Services**:
Our certified security researchers safeguard enterprises against ransomware, zero-day vulnerabilities, and data breaches.<br><br>
**What is included?**
• **External & Internal Network Scanning** for vulnerabilities
• **Web & API Penetration Testing** (OWASP Top 10)
• **Firewall Rule Verification** (Fortinet, Cisco)
• **Zero Trust Architecture Deployment**
• **Executive Remediation Report** with prioritized mitigation steps for ISO 27001 & regulatory compliance.`,
        actions: [
          { text: "📝 Book a VAPT Audit", action: "quote", service: "cyber", primary: true },
          { text: "🗺️ Explore Cyber Mindmap", url: "cyber.html" },
          { text: "📞 Urgent Security Hotline", url: "tel:+919172188859" }
        ]
      };
    }

    // 7. FIREWALL & NETWORK SECURITY (Cisco, Fortinet, SD-WAN)
    if (hasAny(["firewall", "fortinet", "cisco", "sd-wan", "sdwan", "vpn", "router", "switch", "zero trust"])) {
      return {
        text: `🔒 **Firewall & Enterprise Network Engineering**:
NexBrivo engineers are specialized in mission-critical corporate networking:<br><br>
• **Fortinet FortiGate & Cisco Clustering** (High Availability active-passive & active-active)
• **Encrypted SD-WAN** connecting corporate headquarters with remote factories & branches
• **Zero Trust Network Access (ZTNA)** and secure remote worker SSL-VPN
• **Deep Packet Inspection & Threat Prevention**`,
        actions: [
          { text: "📝 Request Firewall Setup", action: "quote", service: "network" },
          { text: "🛠️ View Network Profiles", action: "scroll", target: "services" }
        ]
      };
    }

    // 8. CLOUD MIGRATION & DEVOPS (AWS, Azure, Docker, Kubernetes)
    if (hasAny(["cloud", "aws", "azure", "gcp", "devops", "docker", "kubernetes", "migration", "server migration"])) {
      return {
        text: `☁️ **Cloud Computing & DevOps Engineering**:
We engineer seamless migrations from legacy on-premises servers to cloud with **Zero Operational Downtime**:<br><br>
• **Phased Cloud Migration** to AWS, Microsoft Azure, or hybrid clouds
• Point-in-time database sync and cut-over during off-peak windows
• Docker & Kubernetes container orchestration
• Automated CI/CD pipelines & automated backup recovery`,
        actions: [
          { text: "📝 Plan Cloud Migration", action: "quote", service: "cloud", primary: true },
          { text: "💬 Discuss on WhatsApp", url: `https://wa.me/${NEXBRIVO_KB.company.whatsapp}?text=I%20want%20to%20discuss%20Cloud%20Migration%20with%20NexBrivo.`, whatsapp: true }
        ]
      };
    }

    // 9. SOFTWARE & WEB DEVELOPMENT (React, Node, Python, Java, Mobile App, ERP)
    if (hasAny(["web development", "software", "website development", "react", "nextjs", "node", "python", "java", "erp", "mobile app", "application"])) {
      return {
        text: `💻 **Custom Software & Web Engineering**:
NexBrivo builds robust enterprise platforms tailored to your business operations:<br><br>
• **Custom ERP & Inventory Systems**: Automate manufacturing, billing, and supply chains.
• **Modern Corporate Portals**: Lightning-fast web apps built on React, Next.js, and Node.js.
• **Cross-Platform Mobile Apps**: Native-feel iOS and Android applications.
• **REST & GraphQL APIs**: Secure microservices integrations.`,
        actions: [
          { text: "📝 Get Software Proposal", action: "quote", service: "web", primary: true },
          { text: "🛠️ Explore Web Services", action: "scroll", target: "services" }
        ]
      };
    }

    // 10. IT HARDWARE SUPPLY & INFRASTRUCTURE
    if (hasAny(["hardware", "server buy", "desktops", "rack", "switch buy", "dell", "hp", "hardware supply", "cabling", "lan"])) {
      return {
        text: `🖥️ **OEM Hardware & Infrastructure Supply**:
NexBrivo provides brand-authorized commercial IT hardware with official manufacturer warranty:<br><br>
• **Tier-1 Commercial Desktops & Laptops** (Dell, HP, Lenovo)
• **Server Racks & Tower Servers** for enterprise databases
• **Enterprise Switches & Routers** (Cisco Catalyst, Fortinet FortiSwitch)
• **Structured Structured Cabling** (Cat6/Cat6A & Fiber Optic)`,
        actions: [
          { text: "📝 Request Hardware Quote", action: "quote", service: "network" },
          { text: "📞 Contact Procurement", url: "tel:+919172188859" }
        ]
      };
    }

    // 11. INTERNSHIPS, TRAINING & ACADEMY (Students / Freshers / Courses)
    if (hasAny(["internship", "training", "course", "courses", "student", "learn", "academy", "ceh", "placement", "fees", "fresher"])) {
      return {
        text: `🎓 **NexBrivo Academy & Practical Internships**:
We provide hands-on enterprise-level practical training designed to launch high-paying IT careers:<br><br>
📚 **Available Specializations**:
1. **Cybersecurity & Ethical Hacking / VAPT** (CEH syllabus, live vulnerability labs)
2. **Full-Stack Web Development** (MERN, React, Node.js, real client projects)
3. **Network Engineering & Hardware AMC** (Cisco, Fortinet, server maintenance)
4. **Cloud Computing & DevOps** (AWS, Azure, Docker, Linux administration)<br><br>
✅ Real-world enterprise labs, mentor guidance, and placement support.`,
        actions: [
          { text: "📝 Submit Student Feedback / Inquiry", action: "scroll", target: "feedback" },
          { text: "📞 Inquire About Next Batch", url: "tel:+919172188859" },
          { text: "💬 WhatsApp Academy Coordinator", url: `https://wa.me/${NEXBRIVO_KB.company.whatsapp}?text=Hello%2C%20I%20am%20interested%20in%20NexBrivo%20Training%20%26%20Internship%20Programs.`, whatsapp: true }
        ]
      };
    }

    // 12. CAREERS / JOB OPENINGS
    if (hasAny(["career", "careers", "job", "jobs", "hiring", "opening", "openings", "apply", "resume", "cv"])) {
      return {
        text: `🚀 **Careers at NexBrivo Solutions**:
We are actively hiring engineering talent for our Aurangabad and regional deployment teams:<br><br>
• **Senior Network Security Engineer** (Aurangabad • CCNA/CCNP, Fortinet NSE)
• **Full-Stack Software Developer** (Aurangabad • React, Node, Python, SQL)
• **IT Support Specialist / AMC Resident** (Field Deployment • Hardware AMC)
• **Cloud Solutions Architect** (Hybrid • AWS / Azure / Terraform)`,
        actions: [
          { text: "💼 View Open Positions", action: "scroll", target: "careers" },
          { text: "📧 Send CV via Email", url: "mailto:nexbrivosolutions@gmail.com?subject=Job%20Application%20at%20NexBrivo" }
        ]
      };
    }

    // 13. INTERACTIVE MINDMAP / ARCHITECTURE EXPLORER
    if (hasAny(["mindmap", "architecture", "mind map", "explorer", "cyber.html", "tree", "diagram"])) {
      return {
        text: `🗺️ **NexBrivo Interactive Architecture Mindmap**:
We built an interactive, collapsible D3 tree explorer where you can visually navigate our entire corporate structure, technical service hierarchy, security controls, and enterprise frameworks!`,
        actions: [
          { text: "🚀 Launch Interactive Mindmap", url: "cyber.html", primary: true }
        ]
      };
    }

    // 14. GET A QUOTE / PRICING REQUEST
    if (hasAny(["quote", "proposal", "estimate", "quotation", "price", "budget"])) {
      return {
        text: `💰 **Request a Custom Proposal**:
Whether you need an AMC contract for 10 to 500+ systems, a security VAPT audit, or custom software development, our solutions architects provide transparent, structured quotes within 24 hours.`,
        actions: [
          { text: "📝 Open Quote Request Form", action: "quote", primary: true },
          { text: "📞 Direct Hotline Call", url: "tel:+919172188859" }
        ]
      };
    }

    // 15. GRATITUDE / GOODBYES
    if (hasAny(["thank you", "thanks", "dhanyawad", "shukriya", "great", "awesome", "bye", "goodbye", "alvida", "see you"])) {
      return {
        text: `You're very welcome! 😊 It is my pleasure to assist you. If you ever need immediate technical assistance, our engineers are always just a call or click away.<br><br>Have a fantastic day and stay secure! 🛡️`,
        actions: [
          { text: "📞 Hotline: +91 91721 88859", url: "tel:+919172188859" },
          { text: "💬 WhatsApp Support", url: `https://wa.me/${NEXBRIVO_KB.company.whatsapp}` }
        ]
      };
    }

    // 16. ALL SERVICES SUMMARY
    if (hasAny(["services", "service", "what do you do", "features", "offerings", "kya service hai"])) {
      return {
        text: `NexBrivo delivers **7 Comprehensive Enterprise IT Pillars**:<br><br>
1. 🛡️ **Cybersecurity & VAPT**: Threat defense, penetration testing, SOC monitoring.<br>
2. 🔒 **Firewall & Network Security**: Fortinet & Cisco clustering, SD-WAN, Zero Trust.<br>
3. 💻 **Custom Software Development**: Bespoke ERPs, inventory systems, mobile apps.<br>
4. 🌐 **Corporate Web Development**: Responsive modern portals built on Next.js/React.<br>
5. 💼 **AMC & Managed IT Support**: 4-hour SLA response, resident engineers, 24/7 care.<br>
6. 🖥️ **Hardware Infrastructure Supply**: Authorized OEM servers, desktops, switches.<br>
7. ☁️ **Cloud Computing & DevOps**: AWS/Azure migrations, Docker/Kubernetes container clusters.`,
        actions: [
          { text: "🛠️ View Services Section", action: "scroll", target: "services" },
          { text: "💼 View AMC Plans", action: "scroll", target: "amc" },
          { text: "📝 Request Consultation", action: "quote", primary: true }
        ]
      };
    }

    // 17. SMART FALLBACK WITH HELPFUL PROMPTS
    return {
      text: `I want to make sure you get the exact information you need regarding **NexBrivo Solutions**.<br><br>
Here are popular topics I can assist you with right now:
• **Annual Maintenance Contracts (AMC)** and on-site SLAs
• **Cybersecurity & VAPT Audits**
• **Cisco & Fortinet Firewall Setup**
• **Office Location & Direct Engineering Hotlines**
• **IT Internships & Practical Training**<br><br>
You can also connect directly with our live engineering team:`,
      actions: [
        { text: "💼 AMC Maintenance Plans", query: "What are your AMC plans?" },
        { text: "🛡️ Cybersecurity & VAPT", query: "Tell me about cybersecurity services" },
        { text: "📞 Call +91 91721 88859", url: "tel:+919172188859", primary: true },
        { text: "💬 WhatsApp Engineering", url: `https://wa.me/${NEXBRIVO_KB.company.whatsapp}?text=Hello%20NexBrivo%20Team%2C%20I%20have%20an%20inquiry%20regarding%20IT%20services.`, whatsapp: true }
      ]
    };
  }

  /* --------------------------------------------------------------------------
     4. DOM INJECTION & UI RENDERING
     -------------------------------------------------------------------------- */
  function createWidgetHTML() {
    return `
      <div id="nexbotWidget" class="nexbot-widget" role="complementary" aria-label="NexBot AI Assistant">
        <!-- Floating Teaser Bubble (Appears initially on load) -->
        <div id="nexbotTeaser" class="nexbot-teaser-bubble" role="dialog" aria-label="NexBot Greeting">
          <div class="nexbot-teaser-avatar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="11" width="18" height="10" rx="4"></rect>
              <circle cx="9" cy="16" r="1.5" fill="currentColor"></circle>
              <circle cx="15" cy="16" r="1.5" fill="currentColor"></circle>
              <path d="M12 7v4"></path>
              <line x1="8" y1="3" x2="16" y2="3"></line>
            </svg>
          </div>
          <div class="nexbot-teaser-content">
            <div class="nexbot-teaser-title">
              <span>NexBot • AI Online</span>
              <button type="button" class="nexbot-teaser-close" id="nexbotTeaserClose" aria-label="Dismiss greeting">&times;</button>
            </div>
            <p class="nexbot-teaser-text">Hi! Need help with IT services, AMC plans, or Cybersecurity? Ask me!</p>
          </div>
        </div>

        <!-- Floating Launcher Action Button -->
        <button type="button" id="nexbotLauncher" class="nexbot-launcher-btn" aria-expanded="false" aria-controls="nexbotWindow" aria-label="Open NexBot Chat Assistant" title="Chat with NexBot">
          <span class="nexbot-pulse-ring"></span>
          
          <span class="nexbot-launcher-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="11" width="18" height="10" rx="4"></rect>
              <circle cx="9" cy="16" r="1.5" fill="currentColor"></circle>
              <circle cx="15" cy="16" r="1.5" fill="currentColor"></circle>
              <path d="M12 7v4"></path>
              <line x1="8" y1="3" x2="16" y2="3"></line>
              <path d="M2 15h1"></path>
              <path d="M21 15h1"></path>
            </svg>
          </span>

          <span class="nexbot-close-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </span>

          <span class="nexbot-online-badge" title="AI Assistant Online">
            <span class="nexbot-online-dot"></span>
          </span>
          <span id="nexbotUnreadPill" class="nexbot-unread-pill hidden">1</span>
        </button>

        <!-- Main Chat Window Card -->
        <div id="nexbotWindow" class="nexbot-window" role="dialog" aria-modal="false" aria-labelledby="nexbotHeaderTitle">
          <!-- Header -->
          <div class="nexbot-header">
            <div class="nexbot-profile">
              <div class="nexbot-avatar-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="11" width="18" height="10" rx="4"></rect>
                  <circle cx="9" cy="16" r="1.5" fill="currentColor"></circle>
                  <circle cx="15" cy="16" r="1.5" fill="currentColor"></circle>
                  <path d="M12 7v4"></path>
                  <line x1="8" y1="3" x2="16" y2="3"></line>
                </svg>
                <span class="online-indicator"></span>
              </div>
              <div class="nexbot-meta">
                <div class="nexbot-title-row">
                  <span class="nexbot-name" id="nexbotHeaderTitle">NexBot</span>
                  <span class="nexbot-badge">AI 2.0</span>
                </div>
                <span class="nexbot-status">
                  <span class="nexbot-status-dot"></span>
                  NexBrivo Virtual Advisor • Online
                </span>
              </div>
            </div>

            <div class="nexbot-controls">
              <!-- Sound Toggle -->
              <button type="button" class="nexbot-icon-btn" id="nexbotSoundBtn" title="Toggle Sound Chime" aria-label="Toggle Sound">
                <svg id="nexbotSoundIcon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                </svg>
              </button>
              <!-- Clear Chat -->
              <button type="button" class="nexbot-icon-btn" id="nexbotClearBtn" title="Restart / Clear Chat" aria-label="Restart Chat">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="1 4 1 10 7 10"></polyline>
                  <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
                </svg>
              </button>
              <!-- Close Window -->
              <button type="button" class="nexbot-icon-btn" id="nexbotCloseBtn" title="Minimize Chat" aria-label="Minimize Chat">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>

          <!-- Chat Body Stream -->
          <div class="nexbot-body" id="nexbotChatBody" role="log" aria-live="polite">
            <!-- Initial Welcome Card -->
            <div class="nexbot-welcome-card" id="nexbotWelcomeCard">
              <div class="nwc-icon-ring">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="11" width="18" height="10" rx="4"></rect>
                  <circle cx="9" cy="16" r="1.5" fill="currentColor"></circle>
                  <circle cx="15" cy="16" r="1.5" fill="currentColor"></circle>
                  <path d="M12 7v4"></path>
                  <line x1="8" y1="3" x2="16" y2="3"></line>
                </svg>
              </div>
              <h4 class="nwc-title">Welcome to NexBrivo Solutions! 🚀</h4>
              <p class="nwc-desc">I am <strong>NexBot</strong>, your 24/7 IT &amp; Cybersecurity consultant. Ask me any question or choose an option below:</p>
              
              <div class="nwc-chips-title">Popular Topics</div>
              <div class="nexbot-chips-grid">
                <button type="button" class="nexbot-chip-btn" data-query="What services do you offer?">🛡️ IT &amp; Cyber Services</button>
                <button type="button" class="nexbot-chip-btn" data-query="What are your AMC plans?">💼 AMC Plans &amp; SLA</button>
                <button type="button" class="nexbot-chip-btn" data-query="How can I contact NexBrivo?">📞 Contact &amp; Hotline</button>
                <button type="button" class="nexbot-chip-btn" data-query="Do you offer student internships?">🎓 Training &amp; Internships</button>
                <button type="button" class="nexbot-chip-btn" data-action="quote">💰 Request a Quote</button>
              </div>
            </div>
            <!-- Messages will be injected here -->
          </div>

          <!-- Quick Suggestion Mini Chips (Horizontal scroll) -->
          <div class="nexbot-suggestions-strip" id="nexbotSuggestionsStrip">
            <button type="button" class="nexbot-mini-chip" data-query="Tell me about cybersecurity services">🛡️ Cybersecurity</button>
            <button type="button" class="nexbot-mini-chip" data-query="What is your AMC pricing and response SLA?">💼 AMC SLA</button>
            <button type="button" class="nexbot-mini-chip" data-query="Where is your head office located?">📍 Head Office</button>
            <button type="button" class="nexbot-mini-chip" data-query="Cloud migration to AWS and Azure">☁️ Cloud Migration</button>
            <button type="button" class="nexbot-mini-chip" data-query="Cisco and Fortinet firewall setup">🔒 Firewalls</button>
            <button type="button" class="nexbot-mini-chip" data-query="Job openings at NexBrivo">🚀 Careers</button>
          </div>

          <!-- Input Footer -->
          <div class="nexbot-footer">
            <form id="nexbotInputForm" class="nexbot-input-form" autocomplete="off">
              <input 
                type="text" 
                id="nexbotInputField" 
                class="nexbot-input-field" 
                placeholder="Ask NexBot about IT services, AMC, quotes..." 
                aria-label="Ask NexBot" 
                maxlength="250"
                required
              >
              <button type="submit" id="nexbotSendBtn" class="nexbot-send-btn" aria-label="Send Message" title="Send Question">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
            <div class="nexbot-caption">
              NexBrivo AI &bull; <span>Instant Answers</span> &bull; 24/7 Virtual Support
            </div>
          </div>
        </div>
      </div>
    `;
  }

  /* --------------------------------------------------------------------------
     5. CONTROLLER CLASS
     -------------------------------------------------------------------------- */
  class NexBotController {
    constructor() {
      this.isOpen = false;
      this.isTyping = false;
      this.messages = [];
      this.analyzeQuery = analyzeQuery;
      this.init();
    }

    init() {
      // Ensure container exists
      if (!document.getElementById('nexbotWidget')) {
        const wrap = document.createElement('div');
        wrap.innerHTML = createWidgetHTML();
        document.body.appendChild(wrap.firstElementChild);
      }

      this.widget = document.getElementById('nexbotWidget');
      this.launcher = document.getElementById('nexbotLauncher');
      this.window = document.getElementById('nexbotWindow');
      this.chatBody = document.getElementById('nexbotChatBody');
      this.form = document.getElementById('nexbotInputForm');
      this.input = document.getElementById('nexbotInputField');
      this.teaser = document.getElementById('nexbotTeaser');
      this.teaserClose = document.getElementById('nexbotTeaserClose');
      this.unreadPill = document.getElementById('nexbotUnreadPill');
      this.soundBtn = document.getElementById('nexbotSoundBtn');
      this.clearBtn = document.getElementById('nexbotClearBtn');
      this.closeBtn = document.getElementById('nexbotCloseBtn');

      if (!this.widget || !this.launcher || !this.form) return;

      this.bindEvents();
      this.loadHistory();
      this.updateSoundIcon();

      // Show teaser bubble after 2.5s if not opened before
      if (!sessionStorage.getItem('nexbot_teaser_shown')) {
        setTimeout(() => {
          if (!this.isOpen && this.teaser) {
            this.teaser.classList.remove('hidden');
            if (this.unreadPill) this.unreadPill.classList.remove('hidden');
          }
        }, 2500);
      } else {
        if (this.teaser) this.teaser.classList.add('hidden');
      }
    }

    bindEvents() {
      // Launcher Click
      this.launcher.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggle();
      });

      // Teaser click opens chat
      if (this.teaser) {
        this.teaser.addEventListener('click', (e) => {
          if (e.target === this.teaserClose) return;
          this.open();
        });
      }

      // Teaser close
      if (this.teaserClose) {
        this.teaserClose.addEventListener('click', (e) => {
          e.stopPropagation();
          this.dismissTeaser();
        });
      }

      // Close / Minimize
      if (this.closeBtn) {
        this.closeBtn.addEventListener('click', () => this.close());
      }

      // Clear / Reset
      if (this.clearBtn) {
        this.clearBtn.addEventListener('click', () => {
          this.clearChat();
        });
      }

      // Sound Toggle
      if (this.soundBtn) {
        this.soundBtn.addEventListener('click', () => {
          const enabled = soundMgr.toggle();
          this.updateSoundIcon();
          if (typeof window.showToast === 'function') {
            window.showToast(enabled ? "NexBot sound enabled 🔔" : "NexBot sound muted 🔕", "info");
          }
        });
      }

      // Form Submit
      this.form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleUserSubmit();
      });

      // Quick Suggestion Chips (Delegation)
      this.widget.addEventListener('click', (e) => {
        const chip = e.target.closest('[data-query]');
        if (chip) {
          const query = chip.getAttribute('data-query');
          if (query) {
            this.sendUserMessage(query);
          }
          return;
        }

        const actionBtn = e.target.closest('[data-action]');
        if (actionBtn) {
          const action = actionBtn.getAttribute('data-action');
          const service = actionBtn.getAttribute('data-service') || '';
          const target = actionBtn.getAttribute('data-target') || '';
          this.executeAction(action, { service, target });
        }
      });

      // Keyboard Esc to close
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.isOpen) {
          this.close();
        }
      });
    }

    toggle() {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    }

    open() {
      this.isOpen = true;
      this.widget.classList.add('open');
      this.launcher.setAttribute('aria-expanded', 'true');
      this.dismissTeaser();
      if (this.unreadPill) this.unreadPill.classList.add('hidden');

      setTimeout(() => {
        this.input.focus();
        this.scrollToBottom();
      }, 150);
    }

    close() {
      this.isOpen = false;
      this.widget.classList.remove('open');
      this.launcher.setAttribute('aria-expanded', 'false');
    }

    dismissTeaser() {
      if (this.teaser) {
        this.teaser.classList.add('hidden');
      }
      sessionStorage.setItem('nexbot_teaser_shown', 'true');
    }

    updateSoundIcon() {
      if (!this.soundBtn) return;
      if (soundMgr.enabled) {
        this.soundBtn.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
        `;
        this.soundBtn.title = "Mute Sound (Currently On)";
      } else {
        this.soundBtn.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="1" y1="1" x2="23" y2="23"></line>
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M23 9l-6 6"></path>
            <path d="M17 9l6 6"></path>
          </svg>
        `;
        this.soundBtn.title = "Unmute Sound (Currently Off)";
      }
    }

    handleUserSubmit() {
      const text = this.input.value.trim();
      if (!text || this.isTyping) return;
      this.input.value = '';
      this.sendUserMessage(text);
    }

    sendUserMessage(text) {
      // Hide initial welcome card once conversation begins
      const welcomeCard = document.getElementById('nexbotWelcomeCard');
      if (welcomeCard) welcomeCard.style.display = 'none';

      // 1. Append User Message
      this.appendMessage({
        sender: 'user',
        text: this.escapeHTML(text),
        time: this.getCurrentTime()
      });

      // 2. Show Typing Indicator
      this.showTypingIndicator();

      // 3. Process with realistic AI delay
      const thinkTime = Math.min(850, Math.max(380, text.length * 15));
      setTimeout(() => {
        this.hideTypingIndicator();
        const response = analyzeQuery(text);

        this.appendMessage({
          sender: 'bot',
          text: response.text,
          actions: response.actions || [],
          time: this.getCurrentTime()
        });

        soundMgr.playChime();
        this.saveHistory();
      }, thinkTime);
    }

    appendMessage({ sender, text, actions = [], time }) {
      this.messages.push({ sender, text, actions, time });

      const row = document.createElement('div');
      row.className = `nexbot-msg-row ${sender}`;

      if (sender === 'bot') {
        let actionHTML = '';
        if (actions && actions.length > 0) {
          actionHTML = `<div class="nexbot-action-links">`;
          actions.forEach(act => {
            if (act.url) {
              const extraClass = act.primary ? 'primary' : (act.whatsapp ? 'whatsapp' : '');
              const target = act.url.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : '';
              actionHTML += `<a href="${act.url}" ${target} class="nexbot-action-btn ${extraClass}">${act.text}</a>`;
            } else if (act.query) {
              actionHTML += `<button type="button" class="nexbot-action-btn" data-query="${act.query}">${act.text}</button>`;
            } else if (act.action) {
              const extraClass = act.primary ? 'primary' : '';
              actionHTML += `<button type="button" class="nexbot-action-btn ${extraClass}" data-action="${act.action}" data-service="${act.service || ''}" data-target="${act.target || ''}">${act.text}</button>`;
            }
          });
          actionHTML += `</div>`;
        }

        row.innerHTML = `
          <div class="nexbot-msg-avatar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="11" width="18" height="10" rx="4"></rect>
              <circle cx="9" cy="16" r="1.5" fill="currentColor"></circle>
              <circle cx="15" cy="16" r="1.5" fill="currentColor"></circle>
              <path d="M12 7v4"></path>
              <line x1="8" y1="3" x2="16" y2="3"></line>
            </svg>
          </div>
          <div class="nexbot-msg-bubble">
            ${text}
            ${actionHTML}
            <span class="nexbot-msg-time">${time}</span>
          </div>
        `;
      } else {
        row.innerHTML = `
          <div class="nexbot-msg-bubble">
            ${text}
            <span class="nexbot-msg-time">${time}</span>
          </div>
        `;
      }

      this.chatBody.appendChild(row);
      this.scrollToBottom();
      this.saveHistory();
    }

    showTypingIndicator() {
      this.isTyping = true;
      const indicator = document.createElement('div');
      indicator.id = 'nexbotTypingIndicator';
      indicator.className = 'nexbot-typing-row';
      indicator.innerHTML = `
        <div class="nexbot-msg-avatar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="11" width="18" height="10" rx="4"></rect>
            <circle cx="9" cy="16" r="1.5" fill="currentColor"></circle>
            <circle cx="15" cy="16" r="1.5" fill="currentColor"></circle>
            <path d="M12 7v4"></path>
            <line x1="8" y1="3" x2="16" y2="3"></line>
          </svg>
        </div>
        <div class="nexbot-typing-bubble">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="nexbot-typing-text">NexBot is analyzing...</span>
        </div>
      `;
      this.chatBody.appendChild(indicator);
      this.scrollToBottom();
    }

    hideTypingIndicator() {
      this.isTyping = false;
      const indicator = document.getElementById('nexbotTypingIndicator');
      if (indicator) indicator.remove();
    }

    scrollToBottom() {
      this.chatBody.scrollTop = this.chatBody.scrollHeight;
    }

    getCurrentTime() {
      const now = new Date();
      return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    escapeHTML(str) {
      const div = document.createElement('div');
      div.textContent = str;
      return div.innerHTML;
    }

    executeAction(action, { service, target }) {
      if (action === 'quote') {
        // Open the existing quote modal in index.html
        const modal = document.getElementById('quoteModal');
        if (modal) {
          if (service) {
            const select = document.getElementById('quoteModalService');
            if (select) select.value = service;
          }
          modal.classList.add('active');
          document.body.style.overflow = 'hidden';
          if (window.innerWidth <= 768) {
            this.close();
          }
        } else {
          // If on subpage without modal, redirect to index.html#contact
          window.location.href = 'index.html#contact';
        }
      } else if (action === 'scroll') {
        if (target) {
          const el = document.getElementById(target);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            if (window.innerWidth <= 768) {
              this.close();
            }
          } else {
            window.location.href = `index.html#${target}`;
          }
        }
      }
    }

    clearChat() {
      this.messages = [];
      sessionStorage.removeItem('nexbot_history');
      this.chatBody.innerHTML = '';

      // Re-create welcome card
      const welcomeCard = document.createElement('div');
      welcomeCard.className = 'nexbot-welcome-card';
      welcomeCard.id = 'nexbotWelcomeCard';
      welcomeCard.innerHTML = `
        <div class="nwc-icon-ring">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="11" width="18" height="10" rx="4"></rect>
            <circle cx="9" cy="16" r="1.5" fill="currentColor"></circle>
            <circle cx="15" cy="16" r="1.5" fill="currentColor"></circle>
            <path d="M12 7v4"></path>
            <line x1="8" y1="3" x2="16" y2="3"></line>
          </svg>
        </div>
        <h4 class="nwc-title">Conversation Cleared 🔄</h4>
        <p class="nwc-desc">I am <strong>NexBot</strong>, your 24/7 NexBrivo IT &amp; Cybersecurity consultant. What would you like to inquire about today?</p>
        <div class="nwc-chips-title">Popular Topics</div>
        <div class="nexbot-chips-grid">
          <button type="button" class="nexbot-chip-btn" data-query="What services do you offer?">🛡️ IT &amp; Cyber Services</button>
          <button type="button" class="nexbot-chip-btn" data-query="What are your AMC plans?">💼 AMC Plans &amp; SLA</button>
          <button type="button" class="nexbot-chip-btn" data-query="How can I contact NexBrivo?">📞 Contact &amp; Hotline</button>
          <button type="button" class="nexbot-chip-btn" data-query="Do you offer student internships?">🎓 Training &amp; Internships</button>
          <button type="button" class="nexbot-chip-btn" data-action="quote">💰 Request a Quote</button>
        </div>
      `;
      this.chatBody.appendChild(welcomeCard);
      this.input.focus();
    }

    saveHistory() {
      try {
        sessionStorage.setItem('nexbot_history', JSON.stringify(this.messages.slice(-25)));
      } catch (e) {}
    }

    loadHistory() {
      try {
        const saved = sessionStorage.getItem('nexbot_history');
        if (saved) {
          const list = JSON.parse(saved);
          if (Array.isArray(list) && list.length > 0) {
            const welcomeCard = document.getElementById('nexbotWelcomeCard');
            if (welcomeCard) welcomeCard.style.display = 'none';

            list.forEach(msg => {
              this.appendMessage(msg);
            });
          }
        }
      } catch (e) {}
    }
  }

  // Auto-initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      window.nexBot = new NexBotController();
    });
  } else {
    window.nexBot = new NexBotController();
  }

  window.NexBotEngine = { analyzeQuery, NEXBRIVO_KB };

})();
