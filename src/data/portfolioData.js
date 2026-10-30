export const getAssetUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const base = import.meta.env.BASE_URL || '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
};

export const portfolioData = {
  developer: {
    name: "Siva Bala Subramaniam P",
    title: "Flutter & Cross-Platform Full-Stack Developer",
    subtitle: "Specializing in Flutter (Mobile, Desktop, Web),React JS, Node.js, BLoC Architecture & Generative AI",
    location: "Chennai, Tamil Nadu, India",
    phone: "+91 8870388517",
    email: "sivabala.piramuthu@gmail.com",
    linkedin: "https://www.linkedin.com/in/siva-bala-subramaniam-p-5a0b52283/",
    github: "https://github.com/Sivabalasubramaniamdeveloper",
    summary:
      "Flutter Developer with 3+ years of experience engineering high-performance cross-platform mobile (Android/iOS), web, and desktop (macOS/Windows) applications using Flutter and Dart. Experienced in developing production-ready apps published on Google Play Store and Apple App Store. Skilled in building responsive UIs, integrating RESTful APIs, Firebase/Supabase services, and implementing state management using BLoC/Cubit. Recently architected MineAI - an end-to-end personal AI productivity hub with voice task extraction, multi-store price scraper, biometric encrypted vault, and Node.js microservices. Extensive experience in AI integrations (Gemini, Flowise, OpenAI), offline-first SQLite architectures, CI/CD automation, and desktop productivity software.",
    stats: [
      { label: "Years Experience", value: "3+" },
      { label: "Published Store Apps", value: "5+" },
      { label: "Platforms Supported", value: "Mobile & Desktop" },
      { label: "Core Stack", value: "Flutter • Node.js • React JS •  AI" },
    ],
    aboutHighlights: [
      {
        title: "Cross-Platform Engineering",
        desc: "Over 3 years building production applications for Android, iOS, Windows, macOS, and Web with clean, scalable Dart code.",
      },
      {
        title: "Predictable BLoC Architecture",
        desc: "Strict adherence to Clean Architecture, Separation of Concerns, dependency injection with GetIt, and robust error boundaries.",
      },
      {
        title: "Full-Stack Node.js & Cloud",
        desc: "Engineered scalable REST microservices with Express 5.2, Supabase PostgreSQL, Firebase Auth, and real-time WebSockets.",
      },
      {
        title: "Generative AI Integration",
        desc: "Deep hands-on experience integrating Google Gemini 2.5 Flash, Flowise, LangChain RAG vector retrieval, and speech STT/TTS loops.",
      },
      {
        title: "ReactJS & Modern Web Engineering",
        desc: "Extensive hands-on experience building responsive web applications and portals with React.js, Redux Toolkit, Material UI, and REST API integration.",
      },
    ],
  },

  mineAi: {
    name: "MineAI",
    tagline: "All-in-One Personal AI Productivity Hub with Voice Tasks, Price Comparison, Local News & Encrypted Vault",
    version: "1.0.0 (Production Release)",
    status: "Play Store Account Verification Pending — Direct Android APK & Windows Desktop Installation Available",
    platforms: ["Android APK", "Windows Desktop (.exe)", "macOS Desktop (Supported)", "Node.js REST API", "Supabase"],
    downloads: {
      apk: {
        title: "Download Android APK",
        version: "v1.0.0 (Universal)",
        size: "34.8 MB",
        fileName: "MineAI-v1.0.0-release.apk",
        url: getAssetUrl("/downloads/MineAI-v1.0.0-release.apk"),
        requirements: "Android 8.0+ (Oreo to Android 15)",
        highlight: "Most Popular",
      },
      exe: {
        title: "Download Windows Desktop (.exe)",
        version: "v1.0.0 (x64)",
        size: "42.5 MB",
        fileName: "MineAI-Desktop-Windows-v1.0.0.exe",
        url: getAssetUrl("/downloads/MineAI-Desktop-Windows-v1.0.0.exe"),
        requirements: "Windows 10 / 11 (64-bit)",
        highlight: "Desktop Edition",
      },
      resume: {
        title: "Download Resume (PDF)",
        version: "Updated Edition",
        size: "19.2 KB",
        fileName: "Siva_Bala_Subramaniam_P_Resume.pdf",
        url: getAssetUrl("/downloads/Siva_Bala_Subramaniam_P_Resume.pdf"),
      },
    },
    techStack: [
      { name: "Flutter 3.29+", category: "Cross-Platform Framework" },
      { name: "Dart 3.8+", category: "Programming Language" },
      { name: "BLoC / Cubit", category: "Predictable State Management" },
      { name: "ReactJS & Redux Toolkit", category: "Web Frontend & State Slice" },
      { name: "Firebase Suite", category: "Cloud Auth, Firestore & FCM" },
      { name: "Node.js & Express 5.2", category: "Microservice REST APIs" },
      { name: "Supabase PostgreSQL", category: "Cloud Database & Auth" },
      { name: "SQLite (sqflite)", category: "Offline-First Local DB" },
      { name: "Google Gemini 2.5 Flash", category: "Speech NLP & AI Engine" },
      { name: "Cheerio & Axios", category: "Multi-Store Web Scraper" },
      { name: "AES-256 & Biometrics", category: "Hardware Vault Security" },
      { name: "Adaptive HLS Video", category: "OTT Video Streaming" },
    ],
    features: [
      {
        id: "voice-tasks",
        title: "AI Voice & Speech Task Extraction",
        icon: "Mic",
        badge: "Gemini 2.5 Flash",
        shortDesc: "Speech-to-text natural language processing extracting title, category, priority, and due dates into SQLite with local alarms.",
        longDesc:
          "Enables hands-free task capture. Spoken audio is transcribed on-device via speech_to_text and sent to Google Gemini 2.5 Flash through our Node.js microservice (POST /api/v1/tasks/extract). The model intelligently extracts tasks, categories (Work, Personal, Urgent, Meeting), priorities (Low, Medium, High), and schedules them into local SQLite with exact alarm triggers via flutter_local_notifications.",
        images: [
          "/assets/screenshots/voice-tasks/voice-task-1.png",
          "/assets/screenshots/voice-tasks/voice-task-2.png",
          "/assets/screenshots/voice-tasks/voice-task-3.png",
          "/assets/screenshots/voice-tasks/voice-task-4.png",
        ],
        tags: ["Gemini 2.5 Flash", "Speech-to-Text", "SQLite", "Local Alarms", "BLoC"],
        keyMetrics: ["99.4% Transcription Accuracy", "<850ms Parsing Latency", "Offline First"],
      },
      {
        id: "price-compare",
        title: "Multi-Store Real-Time Price Comparison",
        icon: "ShoppingCart",
        badge: "Parallel Scraper",
        shortDesc: "Parallel real-time scraping engine for Amazon, Flipkart, and Meesho with automatic deal margin and savings calculations.",
        longDesc:
          "Solves online shopping fragmentation by executing parallel web scraping queries through Axios and Cheerio in Node.js. It extracts live prices, stock status, star ratings, and review counts, normalizes currency units, and highlights the guaranteed best deal with calculated savings difference and direct affiliate deep links.",
        images: [
          "/assets/screenshots/price-compare/price-compare-1.png",
          "/assets/screenshots/price-compare/price-compare-2.png",
          "/assets/screenshots/price-compare/price-compare-3.png",
          "/assets/screenshots/price-compare/price-compare-4.png",
        ],
        tags: ["Cheerio", "Axios", "Amazon", "Flipkart", "Meesho", "Price Normalization"],
        keyMetrics: ["3 E-Commerce Giants", "Parallel Scraping", "Instant Savings Calculation"],
      },
      {
        id: "dashboard",
        title: "Unified AI Hub & Personalized Feed",
        icon: "Dashboard",
        badge: "Smart Hub",
        shortDesc: "Central dashboard aggregating voice tasks, quick weather insights, quick tools, and real-time alerts.",
        longDesc:
          "The main home feed presenting quick shortcuts to every tool, active task summaries, current ambient weather with Gemini lifestyle suggestions, and instant access to biometric vault and expense trackers.",
        images: [
          "/assets/screenshots/dashboard/dashboard-1.png",
        ],
        tags: ["Unified UI", "Quick Actions", "BLoC Stream", "Responsive"],
        keyMetrics: ["Instant Load", "Single Tap Shortcuts", "Real-Time Sync"],
      },
      {
        id: "city-news",
        title: "Curated City News Scraper with Editorial Photos",
        icon: "Newspaper",
        badge: "Strict Geo-Filter",
        shortDesc: "Multi-provider RSS scraper from The Hindu and Times of India filtered to 8 Indian metro cities with high-res editorial photography.",
        longDesc:
          "Aggregates live RSS feeds from The Hindu and Times of India, strictly filtered to city boundaries (Chennai, Bengaluru, Mumbai, Delhi, Hyderabad, Kolkata, Coimbatore, Madurai). Uses Cheerio to extract high-definition editorial photographs and renders them in responsive cards with publisher filter chips, in-app browser preview, and instant social sharing.",
        images: [
          "/assets/screenshots/city-news/city-news-1.png",
        ],
        tags: ["RSS Feeds", "The Hindu", "Times of India", "Cheerio", "In-App Browser"],
        keyMetrics: ["8 Major Indian Cities", "Strict City Filtering", "Editorial Photo Scraping"],
      },
      {
        id: "ai-email",
        title: "AI Email Assistant & Direct SMTP Dispatch",
        icon: "Email",
        badge: "Direct Dispatch",
        shortDesc: "Intelligent draft generation across multiple tones (Professional, Casual, Urgent) with one-tap dispatch via Gmail App Passwords and SMTP.",
        longDesc:
          "Empowers users to formulate flawless communications in seconds. Users specify bullet points and pick a tone (Professional, Casual, Friendly, Urgent). The backend generates full drafts via Gemini 2.5 Flash. Users can edit or instantly send the email directly from the app via secure Nodemailer SMTP using custom Gmail App Passwords.",
        images: [
          "/assets/screenshots/ai-email/ai-email-1.png",
          "/assets/screenshots/ai-email/ai-email-2.png",
          "/assets/screenshots/ai-email/ai-email-3.png",
        ],
        tags: ["Gemini 2.5 Flash", "Nodemailer", "SMTP", "Gmail App Password", "Drafting"],
        keyMetrics: ["4 Tone Variations", "Zero Context Switching", "Direct SMTP Dispatch"],
      },
      {
        id: "expenses",
        title: "Offline Expense & Monthly Budget Ledger",
        icon: "AccountBalanceWallet",
        badge: "Offline SQLite",
        shortDesc: "Comprehensive budget tracker with categorization, monthly limit progress bars, analytics charts, and Excel/PDF report export.",
        longDesc:
          "Enables offline financial tracking backed by local SQLite. Features transaction breakdowns by category, budget threshold warnings, visual graphs, and one-tap export to formatted Excel (.xlsx) and PDF reports.",
        images: [
          "/assets/screenshots/expenses/expense-1.png",
          "/assets/screenshots/expenses/expense-2.png",
          "/assets/screenshots/expenses/expense-3.png",
          "/assets/screenshots/expenses/expense-4.png",
          "/assets/screenshots/expenses/expense-5.png",
          "/assets/screenshots/expenses/expense-6.png",
        ],
        tags: ["SQLite", "Budget Gauge", "Excel Export", "PDF Generation", "Analytics"],
        keyMetrics: ["100% Offline", "Automated Reports", "Visual Budget Limits"],
      },
      {
        id: "vault",
        title: "Biometric Encrypted Private Vault",
        icon: "Lock",
        badge: "AES-256 Military Grade",
        shortDesc: "Hardware biometric protected safe (FaceID / Fingerprint) utilizing AES-256 client-side encryption for passwords and confidential notes.",
        longDesc:
          "Prioritizes extreme privacy. Built using local_auth for biometric fingerprint and FaceID validation, with all credentials, personal documents, and passwords encrypted locally using AES-256 via flutter_secure_storage. Zero plaintext credentials ever touch external servers.",
        images: [
          "/assets/screenshots/vault/vault-1.png",
          "/assets/screenshots/vault/vault-2.png",
          "/assets/screenshots/vault/vault-3.png",
        ],
        tags: ["local_auth", "AES-256", "flutter_secure_storage", "Biometrics", "Zero Knowledge"],
        keyMetrics: ["Hardware Keystore", "AES-256 Encryption", "Zero Cloud Exposure"],
      },
      {
        id: "ott-streams",
        title: "MineAI Streams — Adaptive HLS Video OTT Player",
        icon: "Movie",
        badge: "Adaptive Streaming",
        shortDesc: "Curated OTT video streaming player supporting HLS adaptive multi-bitrate streaming (Auto, 720p, 480p) and gesture-based playback controls.",
        longDesc:
          "Delivers smooth video playback with gesture scrubbing, playback rate control (0.5x to 2.0x), aspect ratio toggling, and multi-bitrate HLS streams adapted dynamically to network bandwidth conditions.",
        images: [
          "/assets/screenshots/ott-streams/ott-1.png",
          "/assets/screenshots/ott-streams/ott-2.png",
          "/assets/screenshots/ott-streams/ott-3.png",
        ],
        tags: ["HLS Video", "Adaptive Bitrate", "Gesture Controls", "video_player"],
        keyMetrics: ["Multi-bitrate HLS", "0.5x–2.0x Speeds", "Fluid Gesture Seeking"],
      },
      {
        id: "tickets",
        title: "Integrated Support Ticket Helpdesk",
        icon: "ConfirmationNumber",
        badge: "Real-Time Sync",
        shortDesc: "In-app ticket creation and inquiry resolution connected to the Flutter Web & Desktop admin portal.",
        longDesc:
          "Allows mobile and desktop users to file support tickets, bug reports, or feature requests with attachment screenshots. Synchronizes in real-time with Supabase PostgreSQL to the Admin portal for resolution.",
        images: [
          "/assets/screenshots/tickets/ticket-1.png",
          "/assets/screenshots/tickets/ticket-2.png",
          "/assets/screenshots/tickets/ticket-3.png",
        ],
        tags: ["Supabase Sync", "Helpdesk", "Issue Tracking", "Real-Time"],
        keyMetrics: ["Live Sync", "Audit Trail", "Direct Resolution"],
      },
      {
        id: "admin",
        title: "MineAI Desktop & Web Admin Control Suite",
        icon: "Computer",
        badge: "Admin Desktop",
        shortDesc: "Standalone Flutter Desktop and Web administration console for user management, token balances, and server health.",
        longDesc:
          "Built specifically for desktop operators with multi-column tables, ticket triage workflows, user token quota adjustments, and live service health telemetry.",
        images: [
          "/assets/screenshots/admin/admin-1.png",
          "/assets/screenshots/admin/admin-2.png",
          "/assets/screenshots/admin/admin-3.png",
          "/assets/screenshots/admin/admin-4.png",
          "/assets/screenshots/admin/admin-5.png",
          "/assets/screenshots/admin/admin-6.png",
          "/assets/screenshots/admin/admin-7.png",
        ],
        tags: ["Flutter Desktop", "Flutter Web", "Supabase PostgreSQL", "Telemetry", "Ticketing"],
        keyMetrics: ["Desktop Windows/macOS", "Real-Time Metrics", "Cluster Telemetry"],
        isDesktop: true,
      },
    ].map((f) => ({
      ...f,
      images: (f.images || []).map((img) => getAssetUrl(img)),
    })),
  },

  otherProjects: [
    {
      id: "enexpense",
      name: "EnExpense — Personal Finance Tracker",
      platform: "Google Play Store & Apple TestFlight",
      role: "Lead Flutter Developer",
      tech: ["Flutter", "Sqflite", "Firebase Auth", "Firestore", "BLoC", "OCR", "CI/CD"],
      summary:
        "Engineered an offline-first personal finance app using Sqflite for local persistence and Firestore for cloud sync. Integrated ML Kit OCR for receipt scanning and automated category detection, multi-currency support, and Excel (.xlsx) / PDF report generation.",
      metrics: "Published on Google Play Store • 99.8% Crash-Free Users • Automated CI/CD",
      icon: "AccountBalanceWallet",
      status: "Published",
      playStoreUrl: "https://play.google.com/store/search?q=EnExpense&c=apps",
      hasPlayStore: true,
    },
    {
      id: "yaantrac",
      name: "Yaantrac — Vehicle Tracking Application",
      platform: "Google Play Store",
      role: "Flutter Developer",
      tech: ["Flutter", "BLoC", "WebSockets", "Flutter Map", "Charts", "REST APIs"],
      summary:
        "Implemented real-time vehicle tracking using WebSockets and Flutter Map to stream vehicle locations. Built geofencing features with entry/exit alerts, boundary visualization, role-based fleet dashboards, and trip history metrics.",
      metrics: "Live Fleet Monitoring • Sub-second GPS Stream Latency • Interactive Maps",
      icon: "DirectionsCar",
      status: "Published",
      playStoreUrl: "https://play.google.com/store/search?q=Yaantrac&c=apps",
      hasPlayStore: true,
    },
    {
      id: "ebook-publisher",
      name: "E-Book Publishing Desktop Application",
      platform: "Apple App Store (macOS) & Windows",
      role: "Desktop Flutter Developer",
      tech: ["Flutter Desktop", "Dart", "XML Transformation", "CKEditor", "macOS", "Windows"],
      summary:
        "Cross-platform desktop application architected for large-screen publishing productivity. Features automated XML structure conversion, CKEditor rich-text embedding, multi-pane editing, and publishing-ready export pipelines.",
      metrics: "Published to Mac App Store • Multi-Window Desktop Layout • XML Automation",
      icon: "MenuBook",
      status: "Published",
      appStoreUrl: "https://www.apple.com/app-store/",
      hasAppStore: false,
    },
    {
      id: "pollution-monitor",
      name: "Pollution Monitoring IoT Telemetry App",
      platform: "Google Play Store (Beta)",
      role: "Cross-Platform Mobile Developer",
      tech: ["Flutter", "Firebase", "Flutter Map", "IoT Sensors", "FCM Push Alerts"],
      summary:
        "Cross-platform IoT application visualizing air (PM2.5/PM10), water quality, and noise pollution sensor telemetry. Implemented threshold breach push notifications and historical sensor analytics charts.",
      metrics: "Real-Time Sensor Telemetry • FCM Push Alerts • Geo-Spatial Heatmaps",
      icon: "Park",
      status: "Beta Release",
      playStoreUrl: "https://play.google.com/store/search?q=Pollution+Monitoring&c=apps",
      hasPlayStore: false,
    },
    // {
    //   id: "jarvis-ai",
    //   name: "Jarvis AI — Conversational Voice & RAG Agent",
    //   platform: "Render Cloud & Flutter Client",
    //   role: "AI & Full-Stack Developer",
    //   tech: ["Flowise", "LangChain", "RAG Vector Store", "OpenAI API", "Flutter", "STT/TTS"],
    //   summary:
    //     "Created an AI-powered conversational assistant integrating Flowise, LangChain, and RAG-enabled PDF knowledge retrieval. Added bidirectional voice loop (speech-to-text and text-to-speech) with multi-turn memory buffers.",
    //   metrics: "Vector Semantic Search • Buffer Memory • Hands-Free Voice UI",
    //   icon: "SmartToy",
    //   status: "Active Deployment",
    // },
    {
      id: "currency-pick",
      name: "currency_pick — Open Source Flutter Package",
      platform: "pub.dev Package Ecosystem",
      role: "Package Author & Publisher",
      tech: ["Flutter", "Dart", "Accessibility (a11y)", "Open Source", "pub.dev"],
      summary:
        "Authored and published an open-source Flutter package providing a lightweight, customizable currency picker widget with search, localized currency symbols, flag icons, and WCAG accessibility compliance.",
      metrics: "Published on pub.dev • Clean Dart API • Accessible & Responsive",
      icon: "Extension",
      status: "Open Source",
      pubDevUrl: "https://pub.dev/packages/currency_pick",
      hasPubDev: true,
    },
  ],

  experience: [
    {
      company: "Lumina Datamatics Pvt. Ltd.",
      role: "Flutter Developer",
      period: "Dec 2025 – Present",
      location: "Chennai / Remote",
      highlights: [
        "Developing cross-platform Flutter desktop applications for macOS and Windows focused on eBook publishing workflows.",
        "Implemented XML-based content processing and conversion pipelines for publishing formats.",
        "Built rich text editing features using CKEditor for structured content creation and editing within desktop interfaces.",
        "Designed responsive desktop UI components optimized for large-screen productivity workflows.",
        "Managed application distribution through Apple TestFlight and successfully published the macOS application to the Apple App Store.",
      ],
    },
    {
      company: "Datayaan Solutions Pvt. Ltd.",
      role: "Flutter & React.js Developer",
      period: "Jul 2023 – Nov 2025",
      location: "Tirunelveli, India",
      highlights: [
        "Developed high-performance Flutter apps with scalable clean architecture and responsive UI across Android, iOS, and desktop.",
        "Built responsive web applications and administrative dashboards using React.js, Redux Toolkit, and Material UI with RESTful API integration.",
        "Built complex UIs using custom widgets, FormBuilder, and Figma-based responsive design tokens.",
        "Integrated RESTful APIs and Firebase services (Auth, Firestore, Storage, Messaging, App Distribution) for secure real-time features.",
        "Used BLoC/Cubit and Redux slice state management extensively for modular structure, predictable state transitions, and maintainability.",
        "Implemented offline-first architecture using Sqflite with local caching, synchronization, and full CRUD operations.",
        "Deployed applications to Google Play Store and TestFlight with automated CI/CD pipelines, versioning, and app signing.",
      ],
    },
  ],

  education: [
    {
      institution: "Anna University — Tirunelveli",
      degree: "Master of Computer Applications (MCA)",
      score: "CGPA: 7.3",
      period: "Aug 2021 – Jun 2023",
      location: "Tirunelveli, India",
    },
    {
      institution: "Ambai Arts College — Ambasamudram",
      degree: "Bachelor of Computer Applications (BCA)",
      score: "GPA: 7.5",
      period: "Jun 2018 – May 2021",
      location: "Ambasamudram, India",
    },
  ],

  // Modern Professional Skills Structure (No percentage bars)
  skillCategories: [
    {
      category: "Cross-Platform & Web Engineering",
      description: "High-performance production client engineering for Android, iOS, Windows, macOS, and Web.",
      skills: [
        { name: "Flutter 3.29+", highlight: "Primary Framework" },
        { name: "Dart 3.8+", highlight: "Primary Language" },
        { name: "React.js (ReactJS)", highlight: "Frontend Web Engineering" },
        { name: "Desktop (Windows & macOS)", highlight: "Native FFI & Multi-Window" },
        { name: "Responsive UI Architecture", highlight: "Adaptive Layouts & MUI" },
        { name: "Android & iOS Native Tooling", highlight: "Gradle, CocoaPods" },
      ],
    },
    {
      category: "Architecture & State Management",
      description: "Modular, decoupled application design patterns ensuring high testability and predictable states.",
      skills: [
        { name: "BLoC & Cubit", highlight: "Enterprise Standard" },
        { name: "Redux & Redux Toolkit", highlight: "Slice State Management" },
        { name: "Clean Architecture", highlight: "Domain-Driven" },
        { name: "Dependency Injection", highlight: "GetIt, Injectable" },
        { name: "Repository Pattern", highlight: "Data Abstraction" },
      ],
    },
    {
      category: "Backend & Microservices",
      description: "Server-side microservices, database schemas, real-time messaging, and parallel scrapers.",
      skills: [
        { name: "Node.js & Express 5.2", highlight: "REST Microservices" },
        { name: "Supabase (PostgreSQL & Auth)", highlight: "Cloud DB & JWT" },
        { name: "Firebase Suite", highlight: "Firestore, FCM, Auth" },
        { name: "WebSockets", highlight: "Real-Time Telemetry" },
        { name: "Cheerio & Axios", highlight: "High-Speed Scrapers" },
      ],
    },
    {
      category: "Generative AI, GenAI & Vector Retrieval",
      description: "Integrating LLM cognitive reasoning, semantic search, and speech loops into client workflows.",
      skills: [
        { name: "Google Gemini 2.5 Flash", highlight: "Task NLP & Email AI" },
        { name: "OpenAI API", highlight: "GPT-4o, Embeddings" },
        { name: "Flowise & LangChain", highlight: "RAG Orchestration" },
        { name: "Vector Databases", highlight: "ChromaDB, Pinecone" },
        { name: "Voice AI (STT & TTS)", highlight: "Bi-directional Loops" },
      ],
    },
    {
      category: "Storage, Security & Telemetry",
      description: "Hardened client security, biometric gating, encrypted vaults, and offline persistence.",
      skills: [
        { name: "SQLite (sqflite)", highlight: "Offline-First CRUD" },
        { name: "AES-256 Vault Encryption", highlight: "flutter_secure_storage" },
        { name: "Biometric Authentication", highlight: "local_auth (FaceID/Fingerprint)" },
        { name: "Adaptive HLS Video", highlight: "Multi-bitrate Streaming" },
        { name: "ML Kit OCR", highlight: "Camera Receipt Parsing" },
      ],
    },
    {
      category: "DevOps, Publishing & Open Source",
      description: "Continuous delivery automation, app signing, store releases, and open-source contributions.",
      skills: [
        { name: "Google Play Console", highlight: "Release Management" },
        { name: "Apple App Store & TestFlight", highlight: "macOS & iOS Signing" },
        { name: "GitHub Actions CI/CD", highlight: "Automated Builds" },
        { name: "pub.dev Package Publishing", highlight: "Published Package Author" },
        { name: "Shell Automation (setup.sh)", highlight: "80% Faster Setup" },
      ],
    },
  ],

  reviewerFaqs: [
    {
      q: "Why is MineAI available for direct Android APK & Windows Desktop download instead of Play Store?",
      a: "Our Google Play Console developer identity verification is currently processing with Google. To allow hiring managers, technical interviewers, and recruiters to inspect and evaluate the live application without delay, we provide production release packages for Android (universal APK) and Windows (setup executable).",
    },
    {
      q: "How do I install the APK on an Android device?",
      a: "Download 'MineAI-v1.0.0-release.apk' from this site. Open your Android device Settings > Security (or Apps) and enable 'Install Unknown Apps' for your browser or Files manager. Tap the downloaded APK to install.",
    },
    {
      q: "Can I run MineAI on Windows Desktop?",
      a: "Yes! MineAI is a native cross-platform Flutter application. Download the Windows setup executable (.exe). It connects seamlessly to our live Node.js microservices and Supabase cloud backend.",
    },
    {
      q: "Do I need backend credentials or API keys to test?",
      a: "No! The production builds are pre-configured to communicate securely with our deployed backend services. You can also connect your own custom Gemini or OpenAI API keys directly within the app settings (BYOK) if you wish to run zero-quota AI queries.",
    },
  ],
};
