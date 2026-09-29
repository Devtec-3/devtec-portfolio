export type CaseStudy = {
  slug: string;
  projectKey: string;
  hero: string; // image
  heroTilt: string;
  year: string;
  role: string;
  timeframe: string;
  status: string;
  intro: string;
  problem: { title: string; body: string; bullets: string[] };
  whyThis: { title: string; body: string; bullets: string[] };
  howItWorks: { step: string; detail: string }[];
  challenges: { challenge: string; fix: string }[];
  results: { value: string; label: string }[];
  stack: string[];
  demo?: string;
  source?: string;
  lessons: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "cropdx",
    projectKey: "CropDx — Crop Disease Detector",
    hero: "/projects/cropdx-desktop.jpg",
    heroTilt: "-rotate-1",
    year: "2026",
    role: "Designer & Full-stack Engineer",
    timeframe: "~2 months",
    status: "Live · field-tested",
    intro:
      "A field-first crop disease detection assistant. A farmer uploads a leaf photograph and receives a confidence-rated disease prediction, plain-language explanations, and practical next steps — in 10 languages, with a voice guide, on a low-power Android device.",
    problem: {
      title: "Farmers were losing harvests to diseases they couldn't name",
      body: "In Kwara State, a farmer watching maize leaves yellow doesn't have an agronomist on speed dial. By the time extension officers visit, the disease has spread. Existing AI solutions assumed conditions the field doesn't have: fast internet, new phones, English literacy, and constant connectivity.",
      bullets: [
        "Diseases are identified late — after spread, when treatment is costliest",
        "Existing tools need stable internet and modern phones; villages have neither",
        "Language: the farmer speaks Yoruba or Hausa, not English",
        "Most ML demos are CNN-heavy — heavy, opaque, and unexplainable to the user",
      ],
    },
    whyThis: {
      title: "An inspectable model that runs anywhere and speaks the farmer's language",
      body: "I deliberately chose a classical ML pipeline over a CNN — not because CNNs are bad, but because a 113-feature HSV/GLCM pipeline with an RBF SVM is small enough for low-power devices, fast enough on 2G connections, and its decisions can be inspected and explained feature by feature.",
      bullets: [
        "Inspectability: feature-based model means we can point at WHAT triggered a diagnosis",
        "Offline-first: browser voice guide (SpeechSynthesis) needs zero AI credits or API keys",
        "10 languages: English, Hausa, Yoruba, Igbo, French, Arabic, Spanish, Portuguese, Swahili, Hindi",
        "Fail-closed billing: the Whop Field Pass integration degrades safely if Whop is down",
      ],
    },
    howItWorks: [
      { step: "Upload", detail: "Farmer photographs the affected leaf; image is validated and sent to the Flask API" },
      { step: "Feature extraction", detail: "113 features pulled via HSV colour stats, GLCM texture and OpenCV morphology" },
      { step: "Inference", detail: "Calibrated RBF SVM scores the disease with a confidence percentage" },
      { step: "Guidance", detail: "SQLite-backed database returns symptoms + grouped, practical recommendations" },
      { step: "Voice guide", detail: "Device SpeechSynthesis reads the result in the farmer's language — free, offline, no API" },
    ],
    challenges: [
      { challenge: "Class imbalance & CNN cost", fix: "Chose a classical pipeline trained on PlantVillage — CPU-friendly training, no GPU required, inspectable output" },
      { challenge: "No internet in the field", fix: "Voice guide uses the browser/device SpeechSynthesis API with curated translations — no cloud dependency at all" },
      { challenge: "Trust — farmers won't act on a black box", fix: "Confidence-rated outputs with plain-language symptoms and grouped next steps, so the farmer can verify before acting" },
      { challenge: "Billing must never block diagnosis", fix: "Whop Field Pass is fail-closed server-side: if checkout is misconfigured, diagnosis still works" },
    ],
    results: [
      { value: "10", label: "languages in the voice guide" },
      { value: "113", label: "engineered image features" },
      { value: "0", label: "AI credits needed per diagnosis" },
      { value: "2G", label: "connection is enough" },
    ],
    stack: ["React", "TypeScript", "Vite", "Python", "Flask", "scikit-learn", "OpenCV", "SQLite", "Whop API"],
    demo: "https://devtec-3.github.io/Crop-disease-detectors/",
    source: "https://github.com/Devtec-3/Crop-disease-detectors",
    lessons:
      "The best model isn't the most accurate one — it's the one a farmer will actually use. Constraints (no internet, low-end phones, local languages) made the engineering better, not worse.",
  },
  {
    slug: "mamacare",
    projectKey: "MamaCare Triage",
    hero: "/projects/mamacare.jpg",
    heroTilt: "rotate-1",
    year: "2026",
    role: "AI Developer · Build with Gemma Hackathon",
    timeframe: "Hackathon build",
    status: "Live demo",
    intro:
      "An offline-capable, multimodal AI triage assistant for rural clinics, built for the Build with Gemma: GenAI for SDGs hackathon. It returns a condition/urgency assessment, a safe medication dosage, and danger-sign alerts — translated into Yoruba for community health workers.",
    problem: {
      title: "Rural clinics triage pregnant women with no doctor in the room",
      body: "In many rural facilities, the first — and sometimes only — health worker a pregnant woman meets is a community health worker (CHW) with limited diagnostic support. Referral decisions are made on instinct. Danger signs get missed, and the nearest doctor is hours away.",
      bullets: [
        "No specialist available when a patient presents with symptoms",
        "Medication dosing errors are life-threatening with no physician to verify",
        "SDG 3 target: reduce maternal mortality — triage is the first link in that chain",
        "Connectivity can't be assumed at the point of care",
      ],
    },
    whyThis: {
      title: "Gemma's function-calling, forced into a safe clinical structure",
      body: "Instead of free-form chat, MamaCare forces Gemma through native function-calling into a strict clinical schema: condition, urgency tier, dosage suggestion, danger-sign flags. Structured output is what makes an LLM usable in a clinical workflow — the model can't ramble when the schema won't let it.",
      bullets: [
        "Multimodal: Gemma 4 reasons over symptoms AND images where available",
        "Function-calling = guardrails: outputs must fit the clinical schema",
        "Offline-capable design for clinics with intermittent power/connectivity",
        "Yoruba translations meet the CHW in their working language",
      ],
    },
    howItWorks: [
      { step: "Intake", detail: "CHW enters symptoms (and optional photo) in the clinic interface" },
      { step: "Reasoning", detail: "Gemma 4 multimodal model reasons over the presentation" },
      { step: "Structured triage", detail: "Function-calling forces condition + urgency tier + danger-sign flags" },
      { step: "Dosage check", detail: "Safe medication dosage surfaced with alerts for contraindicated signs" },
      { step: "Localisation", detail: "Output translated to Yoruba for the CHW to act on immediately" },
    ],
    challenges: [
      { challenge: "LLMs hallucinate — unacceptable in health", fix: "Schema-locked function-calling plus explicit danger-sign alerts; the tool errs on the side of referral" },
      { challenge: "Hackathon timebox", fix: "Scope locked to the triage loop: intake → structured assessment → translated output. No auth, no billing — clinical core only" },
      { challenge: "Connectivity at point of care", fix: "Offline-capable architecture designed from the first commit" },
      { challenge: "Yoruba medical phrasing", fix: "Curated translation layer for clinical terms rather than raw machine translation" },
    ],
    results: [
      { value: "SDG 3", label: "aligned — maternal health" },
      { value: "3", label: "structured outputs per triage" },
      { value: "Yoruba", label: "output language for CHWs" },
      { value: "100%", label: "schema-locked responses" },
    ],
    stack: ["Gemma 4", "Multimodal AI", "Function Calling", "TypeScript", "Digital Health"],
    demo: "https://mamacare-triage.onrender.com/",
    source: "https://github.com/Devtec-3/MamaCare-Triage",
    lessons:
      "In health AI, the guardrails ARE the product. Function-calling schemas, danger-sign alerts and fail-to-referral defaults matter more than model quality.",
  },
  {
    slug: "software-defect-prediction",
    projectKey: "Software Defect Prediction Dashboard",
    hero: "",
    heroTilt: "rotate-1",
    year: "2026",
    role: "Undergraduate Researcher (Final Year Project)",
    timeframe: "Ongoing research",
    status: "Live dashboard",
    intro:
      "My final year project: a proactive software defect prediction system using the TabNet deep learning architecture on the NASA CM1 benchmark dataset — with a live dashboard that translates the model's attention weights into actionable Z-score deviations.",
    problem: {
      title: "Testing everything is impossible — so which modules get tested first?",
      body: "Software teams can't deep-test every module. Defect-prone modules hide among hundreds of clean ones: in NASA CM1, 562 clean modules vs just 43 defective ones. Post-hoc explanation tools (SHAP, LIME) approximate a model's reasoning — for a research contribution, I wanted the model to be natively interpretable.",
      bullets: [
        "Severe class imbalance: 43 defective vs 562 clean modules",
        "Limited testing budget — triage must target the riskiest modules first",
        "Post-hoc explainers approximate; native attention is exact",
        "Research question: can TabNet's sequential attention select features without wrapper tools?",
      ],
    },
    whyThis: {
      title: "TabNet: feature selection built into the architecture",
      body: "TabNet applies sequential attention at every decision step — it chooses which features to look at natively. That means interpretability isn't bolted on afterwards; the top predictive features (LOC_CODE, LOC_BLANK, PERCENT-based metrics) fall straight out of the model.",
      bullets: [
        "SMOTE rebalanced training: synthetic minority oversampling of defective modules",
        "Native feature selection — no post-hoc approximation tools",
        "Interpretability is the deliverable, not a bonus",
        "A live dashboard turns attention weights into Z-score deviations engineers can act on",
      ],
    },
    howItWorks: [
      { step: "Dataset", detail: "NASA CM1 benchmark — software metrics per module, defect labels" },
      { step: "Rebalancing", detail: "SMOTE oversamples the 43 defective modules against 562 clean ones" },
      { step: "Training", detail: "TabNet learns with sequential attention over features" },
      { step: "Feature insight", detail: "Attention reveals LOC_CODE, LOC_BLANK, PERCENT-based metrics as top predictors" },
      { step: "Deployment", detail: "Dashboard renders attention weights as Z-score deviations per module" },
    ],
    challenges: [
      { challenge: "43 positives among 605 modules", fix: "SMOTE on the training partition only — never the test set" },
      { challenge: "Accuracy lies under imbalance", fix: "Optimised and reported recall + F1, verified with a confusion matrix (19 TP, 1 FN)" },
      { challenge: "Making attention legible", fix: "Dashboard translates raw attention into Z-score deviations — a form engineers already read" },
      { challenge: "Reproducibility", fix: "Fixed splits, documented pipeline, versioned artifacts" },
    ],
    results: [
      { value: "95%", label: "recall on defective modules" },
      { value: "0.6032", label: "F1-score" },
      { value: "19/1", label: "true positives / false negatives" },
      { value: "3", label: "top features identified natively" },
    ],
    stack: ["TabNet", "PyTorch", "SMOTE", "Python", "Interpretable ML", "Z-score Deviations"],
    demo: "https://software-def.onrender.com",
    lessons:
      "With imbalanced data, recall is the honest metric — 95% accuracy means nothing if you miss defective modules. And attention weights, done right, need no SHAP to be understood.",
  },
  {
    slug: "globalcoach",
    projectKey: "GlobalCoach AI",
    hero: "",
    heroTilt: "-rotate-2",
    year: "2026",
    role: "Full-stack Engineer · SIWES Project",
    timeframe: "Industrial training build",
    status: "Source available",
    intro:
      "An AI-guided career orchestration platform built during my SIWES industrial training: it compares your CV against live market demand, finds matching jobs with Gemini-powered semantic matching, and tracks your search on an analytics dashboard.",
    problem: {
      title: "Job seekers apply blind — no feedback loop between their CV and the market",
      body: "Most job platforms are directories: they show you listings but never tell you WHY you didn't get shortlisted. Job seekers have no data on which skills the market actually demands this month, or how their CV measures against that demand.",
      bullets: [
        "No gap feedback: rejection without explanation",
        "Static job boards can't match CVs semantically to demand",
        "Application tracking is scattered across spreadsheets and inboxes",
        "Career advice is generic, not personal",
      ],
    },
    whyThis: {
      title: "An asynchronous engine that reads the market and measures you against it",
      body: "GlobalCoach runs a background engine that compares CV skills against market demand using a frequency-analysis algorithm over live search results. Gemini 1.5 Flash handles semantic job matching with match percentages. TanStack Query keeps the UI live without blocking the user.",
      bullets: [
        "Frequency analysis identifies high-demand skill gaps across search results",
        "Gemini 1.5 Flash computes semantic match percentages per job",
        "Asynchronous notifications: zero latency in the user's search flow",
        "De-normalised job metadata persisted — links can expire, insight stays",
      ],
    },
    howItWorks: [
      { step: "CV intake", detail: "User's CV skills are parsed into a profile" },
      { step: "Market scan", detail: "Background engine analyses live market results for demand frequency" },
      { step: "Gap analysis", detail: "Map-based frequency counters surface the user's high-demand skill gaps" },
      { step: "Semantic matching", detail: "Gemini scores jobs against the profile with match percentages" },
      { step: "Dashboard", detail: "TanStack Query drives live charts: application velocity, skill radar, activity log" },
    ],
    challenges: [
      { challenge: "LLM calls blocking the UI", fix: "Async background generation with polling-based notification hydration — search stays instant" },
      { challenge: "External job links expire", fix: "De-normalised metadata persisted with every AI-sourced job" },
      { challenge: "Noisy 'demand' signals", fix: "Frequency analysis across multiple results rather than single-source trust" },
      { challenge: "Full-stack scope during SIWES", fix: "Drizzle ORM type-safety across the stack kept iteration fast and safe" },
    ],
    results: [
      { value: "LLM", label: "semantic matching with % scores" },
      { value: "0 ms", label: "UI latency from async engine" },
      { value: "Full", label: "stack: React → Node → PostgreSQL" },
      { value: "Live", label: "charts: velocity + skill radar" },
    ],
    stack: ["React", "Vite", "Tailwind", "Node.js", "Express", "PostgreSQL", "Neon", "Drizzle ORM", "Gemini 1.5 Flash", "TanStack Query"],
    source: "https://github.com/Devtec-3/GlobalCoachAI",
    lessons:
      "Asynchronous-by-default changed the product feel: users never wait for AI. And type-safety end-to-end (Drizzle) is what let a solo dev ship a full-stack LLM product without drowning in runtime errors.",
  },
  {
    slug: "careerpilot",
    projectKey: "CareerPilot — AI Career Assistant",
    hero: "/projects/careerpilot.jpg",
    heroTilt: "rotate-2",
    year: "2025",
    role: "Designer & Frontend Engineer",
    timeframe: "~3 weeks",
    status: "Live",
    intro:
      "A production-ready AI web app that helps students and early-career professionals become more employable: ATS-focused CV review, role-based career roadmaps, AI career chat, and role-specific interview preparation.",
    problem: {
      title: "Brilliant students fail at the door: their CV never reaches a human",
      body: "Most rejection happens before a human reads anything — ATS filters drop CVs for formatting, missing keywords, and structure. And once past the filter, students face interviews with no structured way to prepare.",
      bullets: [
        "ATS software silently rejects poorly formatted CVs",
        "Students don't know which skills to learn for a target role",
        "Interview prep materials are scattered and generic",
        "Career guidance is priced out of student reach",
      ],
    },
    whyThis: {
      title: "One focused tool per employability stage, wrapped in a clean chat UX",
      body: "Rather than another generic chatbot, CareerPilot ships four focused tools — CV review, roadmap generator, interview prep, career chat — each with a structured prompt layer tuned to its job. Frontend-first, mobile-first, accessible.",
      bullets: [
        "CV review tuned for ATS rules — actionable fixes, not vague advice",
        "Roadmaps customised by role AND experience level (3–6 month plans)",
        "Interview questions per role with model answers",
        "ChatGPT-style UI keeps interaction familiar",
      ],
    },
    howItWorks: [
      { step: "Paste CV", detail: "User pastes CV text; the AI layer reviews against ATS principles" },
      { step: "Feedback", detail: "Actionable, prioritised improvement suggestions returned" },
      { step: "Roadmap", detail: "Role + level → structured 3–6 month learning plan" },
      { step: "Interview mode", detail: "Role-specific questions with best-practice answers and tips" },
    ],
    challenges: [
      { challenge: "Generic AI responses", fix: "Prompt layer per tool with structured output templates" },
      { challenge: "Cold-start UX", fix: "Clear tool cards so users know exactly what to do first" },
      { challenge: "Mobile-first or nothing", fix: "Built mobile-first — students live on phones, like I did" },
    ],
    results: [
      { value: "4", label: "AI tools in one product" },
      { value: "ATS", label: "tuned CV feedback" },
      { value: "3–6", label: "month roadmap generator" },
      { value: "Live", label: "deployed on Render" },
    ],
    stack: ["React", "JavaScript", "Tailwind CSS", "OpenAI API"],
    demo: "https://my-fintech-app.onrender.com/",
    source: "https://github.com/Devtec-3/CareerPilot",
    lessons:
      "Structured prompts beat clever prompts. And meeting students on mobile-first UX isn't a nicety — in Nigeria it IS the platform.",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
