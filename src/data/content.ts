export const profile = {
  name: "Anurag Bathani",
  initials: "AB",
  role: "Cybersecurity · DevSecOps",
  tagline: "Breaking systems to make them stronger.",
  subtitle:
    "A security engineer crafting resilient systems at the intersection of offense, infrastructure, and intent.",
  email: "anuragbathani96500@gmail.com",
  github: "https://github.com/AnuragBathani",
  linkedin: "https://linkedin.com/in/anuragbathani",
};

/* -------------------------------------------------------------------------- */
/* SUMMARY — short narrative shown right after hero                           */
/* -------------------------------------------------------------------------- */
export const summary = {
  intro:
    "A *Jr. Cybersecurity Engineer* at Inventyv Software Services — finding vulnerabilities before the bad guys do. B.Tech in Computer Science from CHARUSAT, blending offensive security expertise with software engineering to build resilient systems.",
  body: "From conducting end-to-end security testing on internal products to developing OPA Gatekeeper policies for Kubernetes, I work at the intersection of security and infrastructure. My research on Wild Animal Detection using YOLOv8 was featured on the front page of the Times of India.",
};

export const stats = [
  { value: 30, suffix: "%", label: "Reduction in repeat security issues" },
  { value: 5, suffix: "+", label: "API endpoints secured" },
  { value: 10, suffix: "%", label: "Top global ranking on TryHackMe" },
  { value: 8.2, suffix: "/10", label: "GPA at CHARUSAT" },
];

/* -------------------------------------------------------------------------- */
/* ABOUT — deep bio for the /about page                                       */
/* -------------------------------------------------------------------------- */
export const about = {
  philosophy: `I believe security isn't just about finding bugs — it's about understanding systems deeply enough to anticipate how they'll break. My approach combines offensive security testing with defensive architecture thinking, ensuring that the systems I work on are resilient by design, not just by patch.`,
  background: `I'm a Jr. Cybersecurity Engineer at Inventyv Software Services, based in Ahmedabad, Gujarat. My journey into security started during my B.Tech at CHARUSAT, where I developed a deep fascination with how systems can be both strengthened and subverted. I believe in learning by doing — from conducting real-world penetration tests to building security tooling and contributing to open-source.`,
  currently: `Currently, I'm focused on end-to-end security testing of internal products, API pentesting, and developing OPA Gatekeeper policies for Kubernetes environments. I'm also actively building my skills on platforms like TryHackMe, where I've achieved a top 10% global ranking.`,
  interests: `Outside of security, I enjoy exploring new technologies, contributing to open-source projects, and reading about threat intelligence. I'm passionate about the intersection of AI and cybersecurity, as evidenced by my published research on Wild Animal Detection using YOLOv8.`,
  timeline: [
    {
      year: "2024 — Present",
      title: "Jr. Cybersecurity Engineer",
      org: "Inventyv Software Services Pvt. LTD.",
      description:
        "End-to-end security testing, API pentesting, OPA Gatekeeper policies for Kubernetes, MITRE ATT&CK framework mapping.",
    },
    {
      year: "2021 — 2025",
      title: "B.Tech in Computer Science & Engineering",
      org: "CHARUSAT",
      description:
        "GPA 8.2/10. Published research on Wild Animal Detection using YOLOv8. Best Research Paper Award. Front page feature in Times of India.",
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* EXPERIENCE                                                                 */
/* -------------------------------------------------------------------------- */
export const experience = {
  company: "Inventyv Software Services Pvt. LTD.",
  role: "Jr. Cyber Security Engineer",
  date: "December 2024 — Present",
  location: "Ahmedabad, Gujarat",
  bullets: [
    "Performed **end-to-end security testing** across internal web and mobile products, uncovering high-impact **broken access control and authorization flaws**, and drove remediation that reduced repeat findings by **30%**.",
    "Led **security assessments across a 70+ subdomain attack surface**, performing web and API penetration testing that surfaced critical authentication and authorization weaknesses, validated against the **OWASP Top 10**.",
    "Discovered a **privilege-escalation vulnerability** that could grant unauthorized administrative access, and reported it through to a verified fix — closing a path to sensitive account control.",
    "Identified **IDOR (Insecure Direct Object Reference)** flaws exposing other users' data, and partnered with developers to enforce proper **object-level authorization**.",
    "Uncovered a **SQL injection** vulnerability in an internal Android application and confirmed its remediation.",
    "Mapped attack paths using the **MITRE ATT&CK framework** to strengthen detection, monitoring, and defensive coverage.",
    "Developed and tested **OPA Gatekeeper constraint templates** to enforce Kubernetes **least-privilege** and policy compliance across workloads.",
  ],
};

/* -------------------------------------------------------------------------- */
/* PROJECTS                                                                   */
/* -------------------------------------------------------------------------- */
export const projects = [
  {
    slug: "mrigtrix",
    number: "01",
    title: "Mrigtrix",
    tags: ["Python", "Flask", "Tailscale", "Discord Webhooks"],
    description:
      "A cybersecurity reconnaissance tool that captures 7+ system metrics, automates log delivery via Discord webhooks, and integrates phishing simulation with Tailscale tunneling for secure cross-network red team testing.",
    highlights: [
      "7+ system metrics captured & automated",
      "Phishing simulation with Tailscale tunneling",
      "60% reduction in deployment setup time",
      "Automated deployment across Linux systems",
    ],
    link: "https://github.com/AnuragBathani/Mrigtrix",
    // Extended fields for detail page
    problem:
      "Red team engagements often require manual setup of reconnaissance infrastructure across different networks. Existing tools lacked integration between system profiling, phishing simulation, and secure tunneling, creating friction in cross-network testing scenarios.",
    approach:
      "Built a Python/Flask-based tool that automates the entire reconnaissance pipeline — from system metric collection to log delivery via Discord webhooks. Integrated Tailscale for secure cross-network tunneling, enabling phishing simulations that work seamlessly across network boundaries without exposing infrastructure.",
    techDetails:
      "The tool captures CPU, memory, disk, network, and process metrics along with browser and OS fingerprinting. Flask serves the phishing simulation pages, while Tailscale VPN handles secure tunneling. Discord webhooks provide real-time log delivery to the operator.",
  },
  {
    slug: "project-management-system",
    number: "02",
    title: "Project Management System",
    tags: [
      "Java 17",
      "Spring Boot 3",
      "Spring Security",
      "JWT",
      "MySQL",
      "JPA",
      "WebSocket",
      "Razorpay",
      "SMTP",
    ],
    description:
      "A full-stack project collaboration platform with role-based access, JWT-secured REST APIs, real-time chat over WebSocket, SMTP email invitations, and Razorpay-powered subscription payments. Built with Spring Boot 3 and MySQL.",
    highlights: [
      "JWT-based authentication & Spring Security filters",
      "Real-time team chat via WebSocket (STOMP)",
      "Razorpay integration for paid plan upgrades",
      "SMTP invitation workflow for team onboarding",
    ],
    link: "https://github.com/AnuragBathani/Project-Management-System",
    problem:
      "Teams needed a secure, self-hosted project collaboration tool with proper access control, real-time communication, and a sustainable subscription model — without relying on third-party SaaS platforms.",
    approach:
      "Designed a Spring Boot 3 backend with JWT-based authentication and role-based access control via Spring Security filters. Implemented real-time team chat using WebSocket with STOMP protocol, and integrated Razorpay for subscription payments.",
    techDetails:
      "Spring Security filter chain validates JWT tokens on every request. WebSocket connections use STOMP for message brokering. JPA/Hibernate manages the MySQL data layer with optimistic locking for concurrent operations. SMTP handles automated team invitation emails.",
  },
  {
    slug: "hotel-rating-system",
    number: "03",
    title: "Hotel Rating System",
    tags: ["Java", "Spring Boot", "Spring Security", "Okta", "MySQL", "MongoDB"],
    description:
      "A microservices-based hotel rating platform with secure OAuth2/OIDC authentication via Okta, API Gateway with rate limiting, and resilient service-to-service communication using Netflix Eureka and Resilience4j.",
    highlights: [
      "Secure authentication with Okta + Spring Security",
      "Rate limiting to mitigate brute force & DoS attacks",
      "Least-privilege access patterns across microservices",
      "Resilient service discovery with Netflix Eureka",
    ],
    link: "https://github.com/AnuragBathani",
    problem:
      "Building a microservices architecture that properly handles authentication, authorization, and resilience across distributed services is complex. Most tutorials skip security hardening and DoS protection.",
    approach:
      "Implemented OAuth2/OIDC authentication via Okta with Spring Security across all microservices. Added API Gateway rate limiting to prevent brute force and DoS attacks. Used Netflix Eureka for service discovery and Resilience4j for circuit breaking.",
    techDetails:
      "Each microservice validates Okta tokens independently. The API Gateway enforces rate limits per client. Resilience4j provides circuit breaker, retry, and bulkhead patterns. MySQL stores hotel data while MongoDB handles ratings for flexible schema evolution.",
  },
  {
    slug: "rebook-android-app",
    number: "04",
    title: "Rebook — Android App",
    tags: [
      "Android",
      "Java",
      "Firebase Auth",
      "Realtime Database",
      "Google Sign-In",
      "Material Design",
    ],
    description:
      "A native Android marketplace app for students to buy and sell second-hand books. Authentication via Firebase + Google Sign-In, data synced through Firebase Realtime Database, navigation drawer UX with Material Design components.",
    highlights: [
      "Firebase Authentication with Google Sign-In",
      "Realtime Database sync for listings",
      "Navigation Drawer + Material components",
      "Multidex support for wide device coverage",
    ],
    link: "https://github.com/AnuragBathani/Rebook-Android-App",
    problem:
      "Students needed a platform to buy and sell used textbooks within their campus, but existing marketplaces lacked real-time sync and were overly complex for the use case.",
    approach:
      "Built a native Android app with Firebase Authentication (including Google Sign-In) for frictionless onboarding. Used Firebase Realtime Database for instant listing sync across devices.",
    techDetails:
      "Firebase Auth handles identity with Google Sign-In as the primary flow. Realtime Database syncs book listings with offline persistence. Material Design components ensure consistent UX. Multidex enabled for broader device support.",
  },
  {
    slug: "article-summarizer",
    number: "05",
    title: "Article Summarizer",
    tags: ["Java", "Spring Boot", "React", "OpenRouter API"],
    description:
      "A full-stack RSS blog summarizer leveraging Spring Boot backend, React frontend, and OpenRouter API for real-time AI-powered summaries. Uses Jsoup for HTML content sanitization before LLM processing.",
    highlights: [
      "Real-time AI-powered blog summarization",
      "HTML sanitization with Jsoup before LLM processing",
      "RSS feed parsing via HTTP requests",
      "Full-stack Java + React architecture",
    ],
    link: "https://github.com/AnuragBathani/Artical-Summarizer-FullStack",
    problem:
      "Reading long-form blog posts and articles is time-consuming. Existing summarizers don't properly sanitize HTML content before sending to LLMs, leading to poor summaries with HTML artifacts.",
    approach:
      "Built a full-stack application that parses RSS feeds, sanitizes HTML content with Jsoup to extract clean text, and sends it to OpenRouter API for AI-powered summarization. React frontend displays the summaries.",
    techDetails:
      "Spring Boot backend handles RSS feed fetching and HTML sanitization via Jsoup. Clean text is sent to OpenRouter API (supporting multiple LLM providers). React frontend with real-time summary display and feed management.",
  },
];

/* -------------------------------------------------------------------------- */
/* SKILLS                                                                     */
/* -------------------------------------------------------------------------- */
export const skills = [
  {
    category: "Security & DevSecOps",
    icon: "shield",
    tags: [
      "Pentesting",
      "API Security",
      "BurpSuite",
      "OWASP",
      "Nmap",
      "Nuclei",
      "Metasploit",
      "Wireshark",
      "MITRE ATT&CK",
      "OPA",
      "Policy-as-Code",
      "Container Security",
      "Rate-Limiting",
    ],
  },
  {
    category: "IAM & Auth",
    icon: "lock",
    tags: [
      "Okta",
      "OAuth2",
      "OIDC",
      "JWT",
      "Spring Security",
      "RBAC",
      "Access Policies",
    ],
  },
  {
    category: "Cloud & Infrastructure",
    icon: "cloud",
    tags: ["Docker", "Kubernetes", "AWS", "Microservices", "Jenkins", "Git"],
  },
  {
    category: "Languages & Databases",
    icon: "code",
    tags: [
      "Java",
      "Python",
      "Kotlin",
      "C/C++",
      "MySQL",
      "Firebase",
      "SQLite",
      "MongoDB",
      "PostgreSQL",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* ACHIEVEMENTS (includes Research/Publication)                               */
/* -------------------------------------------------------------------------- */
export const publication = {
  title: "Wild Animal Detection using YOLOv8",
  authors: "Brahm Dave, Meet Mori, **Anurag Bathani**, Parth Goel",
  journal: "*Procedia Computer Science*, Volume 230, 2023, Pages 100-111",
  issn: "ISSN 1877-0509",
  doi: "10.1016/j.procs.2023.12.065",
  doiUrl: "https://doi.org/10.1016/j.procs.2023.12.065",
};

// Security advisories / CVEs, ordered by CVSS (highest first).
export const cves = [
  {
    title: "ExifTool Dangerous Tag Blocklist Bypass via Group-Prefixed Tag Names",
    cveId: "CVE-2026-40893",
    ghsaId: "GHSA-62p3-hvxx-fxg4",
    severity: "High",
    cvss: "8.2",
    package: "gotenberg/gotenberg",
    stars: "12.7k",
    weakness: "CWE-20 — Improper Input Validation",
    description:
      "Discovered a **High severity** vulnerability in *Gotenberg* that allows arbitrary file rename and move via ExifTool dangerous tag blocklist bypass using group-prefixed tag names.",
    advisoryUrl:
      "https://github.com/gotenberg/gotenberg/security/advisories/GHSA-62p3-hvxx-fxg4",
    affected: "<= 8.30.1",
    patched: "8.31.0",
    post: "/blog/tiny-colon-that-moved-a-file-cve-2026-40893",
  },
  {
    title: "Privilege Escalation via Unrestricted serviceAccountName in the Kubernetes Backend",
    cveId: "CVE-2026-61549",
    ghsaId: "GHSA-qf34-295c-26v8",
    severity: "High",
    cvss: "7.5",
    package: "woodpecker-ci/woodpecker",
    stars: "7.5k",
    weakness: "CWE-269 — Improper Privilege Management",
    description:
      "Discovered a **High severity** privilege escalation in *Woodpecker CI*: an unrestricted `serviceAccountName` in pipeline YAML let any user with push access run Kubernetes pods under an arbitrary — potentially cluster-admin — service account.",
    advisoryUrl:
      "https://github.com/woodpecker-ci/woodpecker/security/advisories/GHSA-qf34-295c-26v8",
    affected: "< 3.16.0",
    patched: "3.16.0",
    post: "/blog/the-name-tag-that-said-admin-cve-2026-61549",
  },
  {
    title: "Blind SSRF in OAuth2 Avatar Synchronization via Unvalidated OIDC picture Claim",
    cveId: "CVE-2026-23603",
    ghsaId: "GHSA-x77v-q46j-393g",
    severity: "Low",
    cvss: "3.1",
    package: "go-gitea/gitea",
    stars: "57k",
    weakness: "CWE-918 — Server-Side Request Forgery",
    description:
      "Reported a **Low severity** blind SSRF in *Gitea*'s OAuth2 avatar sync: an unvalidated OIDC `picture` claim let a low-privileged user coax the server into fetching arbitrary internal URLs.",
    advisoryUrl:
      "https://github.com/go-gitea/gitea/security/advisories/GHSA-x77v-q46j-393g",
    affected: "<= 1.26.4",
    patched: "1.27.0",
    post: "/blog/go-knock-on-that-door-for-me-cve-2026-23603",
  },
];

export const achievements = [
  {
    icon: "award",
    title: "Best Research Paper Award",
    description:
      "Awarded **Best Research Paper** by CHARUSAT for the work on *Wild Animal Detection using YOLOv8*.",
  },
  {
    icon: "book",
    title: "Times of India Feature",
    description:
      "Research on Wild Animal Detection featured on the **front page** of the Times of India (Feb 15, 2024).",
  },
  {
    icon: "star",
    title: "Top 10% on TryHackMe",
    description:
      "Achieved **top 10% global ranking** on the TryHackMe cybersecurity training platform.",
  },
];

/* -------------------------------------------------------------------------- */
/* EDUCATION                                                                  */
/* -------------------------------------------------------------------------- */
export const education = {
  school: "Charotar University of Science and Technology (CHARUSAT)",
  degree: "Bachelor of Technology in Computer Science & Engineering",
  date: "2021 — 2025",
  location: "Changa, Gujarat",
  gpa: { value: "8.2", total: "10.0" },
};

/* -------------------------------------------------------------------------- */
/* MARQUEE                                                                    */
/* -------------------------------------------------------------------------- */
export const marqueeItems = [
  "Pentesting",
  "API Security",
  "OWASP",
  "Kubernetes",
  "Docker",
  "MITRE ATT&CK",
  "BurpSuite",
  "Spring Security",
  "OAuth2",
];

/* -------------------------------------------------------------------------- */
/* RESOURCES                                                                  */
/* -------------------------------------------------------------------------- */
export const resources = {
  tools: [
    {
      name: "BurpSuite",
      category: "Web Security",
      description:
        "The #1 web application security testing toolkit. Essential for intercepting, modifying, and replaying HTTP requests.",
      url: "https://portswigger.net/burp",
    },
    {
      name: "Nmap",
      category: "Network Security",
      description:
        "Network discovery and security auditing. The Swiss Army knife of network scanning.",
      url: "https://nmap.org",
    },
    {
      name: "Nuclei",
      category: "Vulnerability Scanning",
      description:
        "Fast, template-based vulnerability scanner. Community-driven templates for thousands of CVEs.",
      url: "https://github.com/projectdiscovery/nuclei",
    },
    {
      name: "Metasploit",
      category: "Exploitation",
      description:
        "The world's most used penetration testing framework. Essential for exploit development and testing.",
      url: "https://www.metasploit.com",
    },
    {
      name: "Wireshark",
      category: "Network Analysis",
      description:
        "Network protocol analyzer. Invaluable for deep packet inspection and network forensics.",
      url: "https://www.wireshark.org",
    },
    {
      name: "OWASP ZAP",
      category: "Web Security",
      description:
        "Open-source web application security scanner. Great for automated and manual testing.",
      url: "https://www.zaproxy.org",
    },
  ],
  learning: [
    {
      name: "TryHackMe",
      description:
        "Guided, hands-on cybersecurity training. Where I achieved top 10% global ranking.",
      url: "https://tryhackme.com",
    },
    {
      name: "HackTheBox",
      description:
        "Advanced penetration testing labs and challenges for security professionals.",
      url: "https://www.hackthebox.com",
    },
    {
      name: "PortSwigger Web Security Academy",
      description:
        "Free online training for web security. The best resource for learning web vulnerabilities.",
      url: "https://portswigger.net/web-security",
    },
    {
      name: "OWASP Top 10",
      description:
        "Standard awareness document for web application security. The starting point for every web security professional.",
      url: "https://owasp.org/www-project-top-ten/",
    },
  ],
  reading: [
    {
      title: "The Web Application Hacker's Handbook",
      author: "Dafydd Stuttard & Marcus Pinto",
      description:
        "The definitive guide to finding and exploiting web application security flaws.",
    },
    {
      title: "Hacking: The Art of Exploitation",
      author: "Jon Erickson",
      description:
        "Deep dive into the technical foundations of hacking — from C programming to network exploitation.",
    },
    {
      title: "Practical Malware Analysis",
      author: "Michael Sikorski & Andrew Honig",
      description: "Hands-on guide to dissecting malicious software.",
    },
    {
      title: "The Tangled Web",
      author: "Michal Zalewski",
      description:
        "A guide to securing modern web applications by understanding the browser security model.",
    },
  ],
};
