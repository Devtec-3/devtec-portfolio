// ============================================================
//  EDIT EVERYTHING HERE — this one file controls your whole site
// ============================================================

export const profile = {
  name: "Muhammad Abdulwadud Ayinde",
  alias: "Devtec",
  role: "Software Engineer || Machine Learning Researcher",
  location: "Ilorin, Kwara State, Nigeria",
  email: "muhammadabdulwadudalata@gmail.com",
  phone: "+234 811 284 0602",
  avatar: "/wa.png",
  resumeUrl: "/resume.pdf",
  bio: "I'm a software engineer and machine learning researcher from Ilorin, Nigeria. I build AI products that solve real problems — an offline-capable maternal health triage assistant, a crop disease detector for farmers, and interpretable ML research in software defect prediction. I've completed engineering internships across Nigeria, the UK, and Australia.",
  highlights: [
    "B.Sc. Computer Science, KWASU (Second Class Upper)",
    "Top 10 Global Finalist — Aspire × Cayu Global AI Hackathon",
    "Research: interpretable ML & software defect prediction",
    "Engineering internships across Nigeria, UK & Australia",
  ],
  socials: {
    github: "https://github.com/Devtec-3",
    linkedin: "https://www.linkedin.com/in/devtec3",
    twitter: "https://x.com/devtec_33",
    instagram: "https://www.instagram.com/devtec3",
    facebook: "https://www.facebook.com/share/19ZnxE89yg/",
    scholar: "",
  },
};

export const story = {
  chapters: [
    "My journey into technology began in 2022 — with no laptop. I learned HTML and CSS on my Redmi 10C smartphone using the Acode app, watching YouTube tutorials through split-screen mode. My first file was called first.html. What started as curiosity gradually became a passion that shaped my entire academic and professional journey.",
    "I didn't stop at tutorials. I built real things on that phone: a full personal brand site called Muhammad web Design, a school website, a student portal, a travel site, login pages with working forms — every line of HTML, CSS and JavaScript typed on a touchscreen keyboard. The screenshots on this page are real, straight from that era.",
    "I went on to study Computer Science at Kwara State University (KWASU), Malete, graduating in July 2026 with a Second Class Upper degree. During my studies I built a strong foundation in software engineering, artificial intelligence, databases and machine learning — and my final-year project focused on software defect prediction using TabNet and SMOTE, with an emphasis on interpretability.",
    "Today I've grown from that beginner into a software engineer and machine learning researcher — internships at SystemSpecs and BitsPro, projects across AI, agriculture and healthcare, and research in interpretable ML. Recently I've been exploring AI for industrial reliability: FMEA, Reliability-Centered Maintenance (RCM2), predictive maintenance and digital twins. I share the journey through my brand, Devtec — because your starting point should never define your potential.",
  ],
  closing:
    "My journey started with a smartphone, but my vision was always bigger than the device I wrote my first line of code on.",
  graduationPhoto: "/graduation.jpeg",
  gallery: [
    { src: "/story/index-code.jpeg", caption: "index.html", tilt: "-rotate-1" },
    { src: "/story/login-code.jpeg", caption: "login.html", tilt: "rotate-1" },
    { src: "/story/login-preview.jpeg", caption: "it runs! 🎉", tilt: "-rotate-2" },
    { src: "/story/school-site.jpeg", caption: "school website", tilt: "rotate-2" },
    { src: "/story/portal.jpeg", caption: "student portal", tilt: "-rotate-1" },
    { src: "/story/travel-site.jpeg", caption: "travel site", tilt: "rotate-1" },
  ],
  graduationGallery: [
    { src: "/graduation-2.jpeg", caption: "B.Sc. Computer Science 🎓", tilt: "rotate-2" },
    { src: "/graduation-3.jpeg", caption: "class of 2026 ✨", tilt: "-rotate-1" },
  ],
};

export const about = {
  paragraphs: [
    "I got into tech in 2022 — with no laptop. I coded for over a year on a small Android phone using TrebEdit, writing my first HTML on a cracked screen in Ilorin. Everything I know started there.",
    "That gave me a starting point. Everything after came from consistency: building constantly, teaching myself, and learning through real work.",
    "Today I'm a software engineer and machine learning researcher — I've built AI products across agriculture, healthcare and careers, completed internships in three countries, and I research interpretable machine learning at KWASU.",
    "It feels like every line of code I typed on that phone was leading me here.",
  ],
  education: [
    {
      title: "B.Sc. Computer Science — Second Class Upper",
      org: "Kwara State University (KWASU), Malete, Nigeria",
      period: "Sep 2022 – Jul 2026",
    },
    {
      title: "Relevant Coursework",
      org: "Data Structures & Algorithms · AI & Expert Systems · Software Engineering · DBMS · Operating Systems · OOP",
      period: "",
    },
  ],
};

export const researchInterests = [
  "Interpretable & Uncertainty-Aware ML",
  "Software Defect Prediction & Mining Software Repositories",
  "Digital Health AI — Diagnosis Support & Clinical Decision-Making",
  "Deep Learning Architectures for Tabular Data (TabNet)",
];

export const skills: Record<string, string[]> = {
  "Languages": ["TypeScript", "JavaScript (ES6+)", "Python", "SQL", "HTML5", "CSS3"],
  "Frameworks & Libraries": [
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "Flask",
    "Tailwind CSS",
    "Vite",
    "Angular",
  ],
  "Machine Learning & AI": [
    "TabNet (deep learning for tabular data)",
    "scikit-learn (RBF SVM)",
    "OpenCV · HSV · GLCM features",
    "SMOTE / imbalanced learning",
    "Gemma · Gemini · OpenAI APIs",
    "Prompt Engineering",
  ],
  "Data & Tools": [
    "PostgreSQL",
    "SQLite",
    "Drizzle ORM",
    "REST API Design",
    "Git & GitHub",
    "Vercel · Render",
    "Figma",
  ],
};

export type Project = {
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  demo?: string;
  source?: string;
  featured?: boolean;
  icon: string;
};

export const projects: Project[] = [
  {
    title: "Software Defect Prediction Dashboard",
    tagline: "🎓 Final Year Project · Interpretable ML research",
    description:
      "A proactive Software Defect Prediction system using the TabNet deep learning architecture on the NASA CM1 benchmark dataset. Applied SMOTE to balance 562 clean vs 43 defective modules, leveraged TabNet's sequential attention for native feature selection, and achieved 95% recall (F1: 0.6032). The live dashboard translates model attention weights into actionable Z-score deviations.",
    tags: ["TabNet", "Deep Learning", "SMOTE", "Python", "Interpretable ML", "Research"],
    demo: "https://software-def.onrender.com",
    featured: true,
    icon: "🔬",
  },
  {
    title: "CropDx — Crop Disease Detector",
    tagline: "AI agriculture assistant for farmers",
    description:
      "Field-first crop disease detection: farmers upload a leaf photo and get a confidence-rated diagnosis, plain-language explanations, and practical next steps. Uses an inspectable classical ML pipeline (HSV, GLCM, OpenCV + calibrated RBF SVM) deliberately chosen over a CNN for low-power field devices, with a SQLite recommendation database and a free 10-language device-voice guide for low-connectivity conditions.",
    tags: ["React", "TypeScript", "Flask", "scikit-learn", "OpenCV", "SQLite"],
    demo: "https://devtec-3.github.io/Crop-disease-detectors/",
    source: "https://github.com/Devtec-3/Crop-disease-detectors",
    featured: true,
    icon: "🌾",
  },
  {
    title: "MamaCare Triage",
    tagline: "AI health triage for rural clinics · SDG 3",
    description:
      "Built for the Build with Gemma: GenAI for SDGs Hackathon — an offline-capable, multimodal AI triage assistant for rural clinics. Uses Gemma's multimodal reasoning and native function-calling to return condition/urgency assessments, safe medication dosages, and danger-sign alerts, translated into Yoruba for community health workers.",
    tags: ["Gemma 4", "Multimodal AI", "Function Calling", "Digital Health", "TypeScript"],
    demo: "https://mamacare-triage.onrender.com/",
    source: "https://github.com/Devtec-3/MamaCare-Triage",
    featured: true,
    icon: "🩺",
  },
  {
    title: "GlobalCoach AI",
    tagline: "AI career orchestration platform",
    description:
      "Full-stack career-coaching platform with an asynchronous engine comparing user CVs against live market demand. Integrated Google Gemini 1.5 Flash for semantic job-matching and built a data-driven dashboard tracking application activity and skill readiness. React, Node/Express, PostgreSQL on Neon, Drizzle ORM.",
    tags: ["React", "Node.js", "PostgreSQL", "Drizzle ORM", "Gemini LLM"],
    source: "https://github.com/Devtec-3/GlobalCoachAI",
    featured: true,
    icon: "🧠",
  },
  {
    title: "CareerPilot — AI Career Assistant",
    tagline: "CV review, roadmaps & interview prep",
    description:
      "AI web app helping students and early-career professionals improve employability: ATS-focused CV review, role-based career roadmaps, AI career chat, and interview preparation — deployed live.",
    tags: ["React", "JavaScript", "Tailwind CSS", "OpenAI API"],
    demo: "https://my-fintech-app.onrender.com/",
    source: "https://github.com/Devtec-3/CareerPilot",
    icon: "🚀",
  },
  {
    title: "Horizon",
    tagline: "Fintech transactions dashboard",
    description:
      "A modern transactions web application with a polished frontend experience for tracking and visualising financial activity.",
    tags: ["TypeScript", "React", "Fintech"],
    source: "https://github.com/Devtec-3/Horizon",
    icon: "💳",
  },
  {
    title: "Travel Response Agent",
    tagline: "AI-powered travel assistant",
    description:
      "An intelligent travel agent that responds to traveller needs in real time, combining a responsive frontend with AI-driven recommendations.",
    tags: ["TypeScript", "AI", "APIs"],
    source: "https://github.com/Devtec-3/Travel-Response-Agent",
    icon: "✈️",
  },
  {
    title: "School Portal — Al-Furqan",
    tagline: "Client project · school management",
    description:
      "A school portal and website built for a real client — handling the institution's online presence and portal experience.",
    tags: ["TypeScript", "React", "Client Work"],
    icon: "🏫",
  },
  {
    title: "Dehelar",
    tagline: "Full-stack TypeScript web application",
    description:
      "A full-stack web application built with TypeScript and deployed on both Vercel and Render.",
    tags: ["TypeScript", "Full-stack", "Web App"],
    demo: "https://dehelar.onrender.com/",
    source: "https://github.com/Devtec-3/Dehelar",
    icon: "🛍️",
  },
  {
    title: "Cosmetic Beauty Salon",
    tagline: "Client project · salon website",
    description:
      "A polished beauty salon website for a real client — service showcase, booking-oriented layout and responsive design.",
    tags: ["HTML", "CSS", "JavaScript", "Client Work"],
    demo: "https://cosmetic-beauty-salon-web.vercel.app/",
    source: "https://github.com/Devtec-3/Cosmetic-Beauty-Salon-Web",
    icon: "💅",
  },
  {
    title: "Black Diamond Menu",
    tagline: "Client project · digital restaurant menu",
    description:
      "A full-stack digital menu website for a restaurant, with a server API service and deployed frontend.",
    tags: ["TypeScript", "Full-stack", "Client Work"],
    demo: "https://black-diamond-menu-website-api-serv.vercel.app",
    source: "https://github.com/Devtec-3/Black-Diamond-Menu-Website",
    icon: "🍽️",
  },
  {
    title: "Fitness Web App",
    tagline: "Personal fitness tracker",
    description:
      "A web application for tracking workouts and fitness activity with a clean, responsive interface.",
    tags: ["TypeScript", "React", "Health"],
    source: "https://github.com/Devtec-3/Fitness-webApp",
    icon: "💪",
  },
  {
    title: "Docu-Wise AI",
    tagline: "AI document assistant",
    description:
      "An AI-powered tool for working with documents — parsing, summarising and answering questions from document content.",
    tags: ["TypeScript", "AI", "Documents"],
    source: "https://github.com/Devtec-3/Docu-Wise-AI",
    icon: "📄",
  },
  {
    title: "Angular E-commerce",
    tagline: "E-commerce storefront",
    description:
      "A full e-commerce frontend built with Angular — product listings, cart flow and checkout experience.",
    tags: ["Angular", "TypeScript", "E-commerce"],
    source: "https://github.com/Devtec-3/Angular-ecommerce",
    icon: "🛒",
  },
  {
    title: "Resume Builder",
    tagline: "Vanilla JS resume generator",
    description:
      "A resume builder written in vanilla JavaScript — live-preview CV creation with printable output.",
    tags: ["JavaScript", "HTML", "CSS"],
    source: "https://github.com/Devtec-3/resume-builder-using-vanilla-javascript",
    icon: "📝",
  },
];

export const research = [
  {
    role: "Undergraduate Researcher — Software Defect Prediction",
    org: "Kwara State University, Malete, Nigeria",
    period: "2026 – Present",
    points: [
      "Designed a proactive SDP system using TabNet deep learning on the NASA CM1 benchmark dataset.",
      "Addressed class imbalance with SMOTE (562 clean vs 43 defective modules).",
      "Leveraged TabNet's sequential attention for native feature selection — identified LOC_CODE, LOC_BLANK and PERCENT-based metrics as top predictors without post-hoc tools.",
      "Achieved 95% recall (F1: 0.6032) verified via confusion matrix (19 TP, 1 FN); deployed a live diagnostic dashboard translating attention weights into Z-score deviations.",
      "Collaborated with Abiola Akorede and Abdul-Rasheed Adeniyi Babalola, supervised by Mr. H. B. Sulaiman.",
    ],
  },
  {
    role: "AI Developer — Build with Gemma: GenAI for SDGs Hackathon",
    org: "Kaggle / KWASU",
    period: "2026",
    points: [
      "Engineered MamaCare-Triage: offline-capable, multimodal AI health triage for rural clinics using Gemma's reasoning and function-calling.",
      "Outputs condition/urgency assessment, safe medication dosage, and danger-sign alerts — translated into Yoruba for community health workers (UN SDG 3).",
    ],
  },
  {
    role: "Top 10 Global Finalist — Aspire × Cayu Global AI Hackathon",
    org: "Aspire Institute × Cayu",
    period: "Jan 2026",
    points: [
      "Designed and engineered an AI-powered Community Knowledge Sharing platform bridging localized information gaps.",
      "Demonstrated rapid prototyping of scalable AI solutions under strict time constraints against a global field.",
    ],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    org: "Pacific Artis — Mawson Lakes, South Australia (Remote)",
    period: "Sep 2026 – Present",
    points: [
      "Contributing to AI-driven maintenance and reliability engineering initiatives.",
    ],
  },
  {
    role: "Backend Development Intern",
    org: "BitsPro Consulting Limited — United Kingdom (Remote)",
    period: "Aug 2026 – Present",
    points: [
      "26-week AI-integrated internship building a full ecommerce API from the ground up with weekly mentor-reviewed deliverables.",
      "Designing RESTful CRUD APIs in Node.js/Express — routes, middleware, controllers — using AI-assisted workflows (Copilot, Claude).",
      "Independently designed and documented a full Products CRUD API (endpoints, schema, validation) before implementation.",
    ],
  },
  {
    role: "Software Engineering Intern",
    org: "SystemSpecs (Remita) — Lagos, Nigeria",
    period: "Jun 2024 – 2026",
    points: [
      "Collaborated on designing and testing backend infrastructure and RESTful APIs using TypeScript/Node.js in an Agile team.",
      "Optimized responsive client-facing UI components with React.js and Tailwind CSS.",
    ],
  },
  {
    role: "Content Intern",
    org: "Trayce — AI Context-Layer Startup (Remote)",
    period: "Apr 2026 – Present",
    points: [
      "Producing developer-focused content, translating complex technical features into plain-language summaries and actionable insights.",
    ],
  },
  {
    role: "Teaching & Mentoring",
    org: "KWASU · Al-Furqan Group of Schools · NAICTS",
    period: "2023 – Present",
    points: [
      "Peer Tutor, KWASU Computer Science (2023–2026): tutorials in CSC 201 and CSC 305 (Data Structures & Algorithms), live-coding sessions.",
      "Mathematics & Computer Tutor, Al-Furqan Group of Schools (2023–Present): preparing senior students for JAMB and SSCE.",
      "Data Analysis Facilitator, NAICTS SRC 'Alternative to Coding' Bootcamp (Jun 2026): 3-day practical bootcamp track.",
    ],
  },
];

export const leadership = [
  "Chairman, Executive Planning Committee — KWASU NACOS Tech Conference (2026)",
  "Kectil Youth Leadership Fellow — The Malmar Knowles Family Foundation (Jan 2026 – Present)",
  "Certified Aspire Leader — Aspire Institute, founded by Harvard Faculty (Oct 2025)",
  "Cowrywise Campus Ambassador (Dec 2025 – Present) — promoting financial literacy among students",
  "Facilitator & Coordination Team — BuildWithAI Event & Future Flip, Al-Hikmah University",
  "Election Campaign Monitoring Volunteer — Center for Peace & Strategic Studies, University of Ilorin × CRDAMES & RUDN University (2026–2027)",
  "Community: GDG Ilorin · Hult Prize at KWASU · Malete Tech Forum · Global Freelancers Union · Internshala Student Partner",
];

export const certifications = [
  "Implementing Ethical AI in Academic Research and Writing — RUDN University Professional Scholarship Program (2026)",
  "Certified Aspire Leader — Aspire Institute (founded by Harvard Faculty), Oct 2025",
];

export const achievements = [
  "🏆 Top 10 Global Finalist — Aspire × Cayu Global AI Hackathon (Jan 2026)",
  "🎓 CGPA 4.01/5.00 — Second Class Upper, Computer Science, KWASU",
  "🌍 Engineering experience across 3 countries — Nigeria, UK & Australia",
  "🏅 Kectil Youth Leadership Fellow & Certified Aspire Leader (Harvard-founded institute)",
  "🔬 Live ML research dashboard deployed — 95% recall defect prediction model",
];

export const stats = [
  { value: "74+", label: "Public GitHub Repos" },
  { value: "Top 10", label: "Global AI Hackathon Finalist" },
  { value: "4", label: "Engineering roles across 3 countries" },
  { value: "16+", label: "Projects shipped — AI, web & clients" },
];

export const testimonials = [
  {
    quote:
      "I am pleased to recommend Muhammad for his outstanding capabilities across full-stack development. He demonstrates strong proficiency in HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and AngularJS, consistently delivering interfaces that are clean, accessible, and responsive. His disciplined use of Git and GitHub ensures structured collaboration and reliable version control. On the backend, his expertise in .NET, Java, and PHP enables him to build secure, scalable, and well-architected systems that align with modern engineering standards. Muhammad approaches every task with professionalism, technical depth, and a commitment to quality. He would be a valuable asset to any engineering team.",
    name: "Shayan Bhutto",
    title: "Co-Founder & AI Product Engineer @ Leaveit2AI",
  },
  {
    quote:
      "I am pleased to recommend Muhammad for his outstanding capabilities across full-stack development. He demonstrates strong proficiency in HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and AngularJS, consistently delivering interfaces that are clean, accessible, and responsive. His disciplined use of Git and GitHub ensures structured collaboration and reliable version control. Muhammad approaches every task with professionalism, technical depth, and a commitment to quality. He would be a valuable asset to any engineering team.",
    name: "Rashid Sultan",
    title: "Amal Ambassador & Fellow · Digital Marketing Graduate",
  },
];

export const navLinks = [
  { label: "Story", href: "#story" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Experience", href: "#experience" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];
