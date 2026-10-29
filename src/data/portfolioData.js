/**
 * Centralized Portfolio Data Store
 * Source of Truth: resume.pdf & spec.md
 * 
 * Candidate: Billa Abhinav
 * Institution: Indian Institute of Science (IISc), Bangalore
 * Discipline: B.Tech in Mathematics and Computing (2024 – Present)
 */

export const personalInfo = {
  name: "Billa Abhinav",
  shortName: "Abhinav",
  initials: "AB",
  title: "Undergraduate Student (B.Tech Mathematics & Computing)",
  institution: "Indian Institute of Science (IISc), Bangalore",
  period: "2024 – Present",
  classOf: "2024 – Present",
  statusPill: "Current IISc Student • Mathematics & Computing",
  resumePath: "/resume.pdf",
  profilePhoto: "/profile-photo.jpg",
  taglines: {
    primary: "B.Tech in Mathematics & Computing @ Indian Institute of Science (IISc)",
    secondary: "Current undergraduate student at IISc Bangalore bridging mathematical rigor with scalable software engineering and intelligent machine learning systems."
  },
  contact: {
    email: "abhinavb4116@gmail.com",
    phone: "(+91) 6303395859",
    phoneClean: "+916303395859",
    location: "Bangalore, India"
  },
  socialLinks: {
    github: "https://github.com/Abhinavbilla",
    linkedin: "https://www.linkedin.com/in/abhinavb5632",
    leetcode: "https://leetcode.com/u/Abhinavbilla/",
    email: "mailto:abhinavb4116@gmail.com"
  },
  footer: {
    copyright: "© 2026 Billa Abhinav. Undergraduate @ IISc Mathematics & Computing."
  }
};

export const aboutData = {
  narrative: [
    "I am currently an undergraduate student pursuing my B.Tech in Mathematics and Computing at the Indian Institute of Science (IISc), Bangalore (2024 – Present). My work centers at the intersection of deep mathematical foundations and production-grade software engineering.",
    "Through rigorous coursework in linear algebra, probability, discrete math, and algorithms, combined with hands-on systems and machine learning development, I engineer scalable backends, reliable data validation pipelines, and deep generative architectures."
  ],
  pillars: [
    {
      id: "math-rigor",
      title: "Mathematical Rigor",
      description: "Strong theoretical and analytical foundation backed by high national ranks in JEE Advanced (AIR 3148) and JEE Mains (AIR 1260), with deep coursework in linear algebra, probability, and optimization.",
      highlight: "AIR 3148 (Adv) / 1260 (Mains)"
    },
    {
      id: "software-engineering",
      title: "Software Engineering",
      description: "Practical engineering focused on robust API design, asynchronous processing pipelines, schema validation, and persistent database architectures using FastAPI, SQLite, and Streamlit.",
      highlight: "APIs & Data Pipelines"
    },
    {
      id: "ai-ml",
      title: "Machine Learning & AI",
      description: "Applied research and development in deep generative models (VAE, InfoVAE, VQ-VAE), latent space dynamics, and production ML monitoring with statistical drift detection (KS-test, PSI).",
      highlight: "Generative Models & Drift Testing"
    }
  ]
};

export const skillsData = {
  categories: [
    {
      name: "Programming Languages",
      skills: ["Python", "C / C++", "JavaScript", "TypeScript", "SQL"]
    },
    {
      name: "Backend & Developer Tools",
      skills: ["FastAPI", "Node.js / Express", "Socket.IO", "PostgreSQL", "SQLite", "Docker", "Git", "Linux / Shell"]
    },
    {
      name: "Frontend & Web",
      skills: ["React", "Zustand", "Phaser 3", "Tailwind CSS", "Vite", "Web Workers", "Streamlit"]
    },
    {
      name: "AI / ML & Data",
      skills: [
        "PyTorch",
        "ONNX Runtime Web",
        "Deep Generative Models",
        "Statistical Drift Testing (Kolmogorov-Smirnov, PSI)",
        "Evaluation Metrics (FID, LPIPS, F1-Score)"
      ]
    },
    {
      name: "Spoken Languages",
      skills: ["English", "Telugu", "Hindi"]
    }
  ],
  coursework: {
    computerScience: [
      "Data Structures and Algorithms",
      "Introduction to Artificial Intelligence and Machine Learning",
      "Automata and Computability"
    ],
    mathematics: [
      "Probability and Statistics",
      "Discrete Mathematics",
      "Analysis and Linear Algebra",
      "Numerical Methods",
      "Algebraic Structures"
    ]
  }
};

export const projectsData = [
  {
    id: "drift-monitoring-api",
    title: "Drift Monitoring API – ML Model Monitoring Platform",
    role: "Developer",
    period: "May '26 – Jun '26",
    category: "Software & Systems",
    secondaryCategory: "ML Infrastructure / Backend Systems",
    tags: ["FastAPI", "Streamlit", "SQLite", "Python", "Statistical Drift Detection"],
    githubUrl: "https://github.com/Abhinavbilla/Drift-Monitoring-api",
    accent: "from-sky-500 via-indigo-500 to-violet-500",
    highlightStat: { value: "0.969", label: "F1 on 4.5M rows" },
    summary: "Built a drift detection platform with a FastAPI backend, Streamlit dashboard, and SQLite persistence layer to monitor and flag statistical drift in structured data pipelines.",
    keyPoints: [
      "Built a drift detection platform with a FastAPI backend, Streamlit dashboard, and SQLite persistence layer to monitor and flag statistical drift in structured data pipelines.",
      "Engineered a modular detection pipeline supporting Kolmogorov-Smirnov (continuous) and Population Stability Index (categorical) methods, with a generalized column profiler and human-in-the-loop schema verification to ensure robustness across diverse structured file formats.",
      "Built a validation suite to benchmark detection accuracy across batch sizes on the NYC Citi Bike dataset, identified 15,000 rows as the batch size yielding strongest F1 performance for that workload."
    ],
    modalDetails: {
      problemStatement: "Machine learning models deployed on dynamic real-world data degrade over time due to covariate shift and concept drift. This project provides an automated, lightweight monitoring pipeline to flag distribution shifts before performance drops.",
      architectureHighlights: [
        "FastAPI Asynchronous Engine: High-performance ingestion and computation endpoints for profiling incoming production datasets.",
        "Statistical Drift Suite: Integrated non-parametric Kolmogorov-Smirnov (KS) tests for continuous variables and Population Stability Index (PSI) for categorical distribution divergence.",
        "Schema & Profiler: Automated inference of column types with human-in-the-loop schema verification across diverse structured file formats.",
        "Interactive Dashboard: Streamlit visual analytics UI connected directly to SQLite database tracking historical drift scores."
      ],
      metricsAndResults: [
        { label: "Optimal Batch Size", value: "15,000 rows (Peak F1 Performance)" },
        { label: "Benchmark Dataset", value: "NYC Citi Bike Dataset" },
        { label: "Statistical Tests", value: "Kolmogorov-Smirnov (Continuous), PSI (Categorical)" },
        { label: "Persistence Layer", value: "SQLite / Relational Schema" }
      ]
    }
  },
  {
    id: "variational-autoencoders",
    title: "Variational Autoencoders & Generative Modeling",
    role: "Technical Lead",
    period: "Mar '26 – Apr '26",
    category: "AI / ML & Modeling",
    secondaryCategory: "Deep Learning / Generative Frameworks",
    tags: ["PyTorch", "Python", "Generative Models (VAE, InfoVAE, VQ-VAE)", "CIFAR-10", "CelebA"],
    githubUrl: "https://github.com/Abhinavbilla/Deep-Representation-Learning-VAE-Suite",
    accent: "from-fuchsia-500 via-purple-500 to-indigo-500",
    highlightStat: { value: "3", label: "Generative architectures" },
    summary: "Implemented and evaluated continuous (Standard VAE), modified-objective (InfoVAE), and discrete (VQ-VAE) generative frameworks on CIFAR-10 and CelebA benchmark datasets.",
    keyPoints: [
      "Implemented and evaluated continuous (Standard VAE), modified-objective (InfoVAE), and discrete (VQ-VAE) generative frameworks on CIFAR-10 and CelebA benchmark datasets.",
      "Investigated core training dynamics, focusing on posterior collapse and latent space utilization by tracking empirical KL divergence trends and codebook utilization constraints.",
      "Conducted linear latent space interpolations and quantified output quality using FID and LPIPS metrics to analyze the trade-off between representation continuity and semantic sharpness."
    ],
    modalDetails: {
      problemStatement: "Standard Variational Autoencoders often suffer from posterior collapse and blurry reconstructions due to ELBO objective compromises. This study evaluates structural variations (InfoVAE, VQ-VAE) to balance latent representation richness and sample fidelity.",
      architectureHighlights: [
        "Architectural Implementations: Standard Gaussian VAE, Maximum Mean Discrepancy-based InfoVAE, and Vector-Quantized VAE (VQ-VAE) with discrete latent codebooks.",
        "Posterior Collapse Mitigation: Analyzed empirical KL divergence trends across training epochs to avoid trivial decoder solutions.",
        "Latent Interpolation: Conducted spherical and linear latent space traversals to verify continuous semantic structure.",
        "Quantitative Evaluation: Benchmarked image reconstruction and generation quality on CIFAR-10 and CelebA using perceptual and statistical metrics."
      ],
      metricsAndResults: [
        { label: "Benchmark Datasets", value: "CIFAR-10 & CelebA" },
        { label: "Architectures Evaluated", value: "Standard VAE, InfoVAE, VQ-VAE" },
        { label: "Quality Metrics", value: "FID (Fréchet Inception Distance), LPIPS" },
        { label: "Key Analysis", value: "Posterior Collapse & Codebook Utilization" }
      ]
    }
  },
  {
    id: "nexus-dominion",
    title: "Nexus: Dominion – Real-Time Multiplayer Strategy Game",
    role: "Solo Developer",
    period: "2026",
    category: "Software & Systems",
    secondaryCategory: "Full-Stack / Real-Time Multiplayer",
    tags: ["Node.js", "Socket.IO", "React", "Phaser 3", "Zustand", "Vitest", "Docker"],
    githubUrl: "https://github.com/Abhinavbilla/Nexus-Dominion",
    liveUrl: "https://nexus-dominion.onrender.com",
    accent: "from-amber-500 via-orange-500 to-rose-500",
    highlightStat: { value: "50.8 / 49.0", label: "2-player seat win rates" },
    summary: "A browser-based, turn-based hex strategy game for 2–4 players with real-time online rooms, explainable AI opponents, and rules balanced through thousands of simulated matches.",
    keyPoints: [
      "Built a server-authoritative multiplayer architecture on Node.js and Socket.IO: clients send intents, the server validates them against the real state and broadcasts the full new state, so a modified client can never make an illegal move.",
      "Shared one pure rule engine (validation, combat, supply-chain path-finding, hex math) between browser and server, so the UI's legal-move highlights and attack previews always match what the server enforces.",
      "Designed three AI opponents (Random, Greedy, one-step-lookahead Strategic) behind a single interface; the Strategic AI's \"Why?\" panel shows the exact weighted feature table it computed for each move.",
      "Balanced the game with a headless simulation harness and chi-square tests on mirror matches, fixing first-mover, start-corner and AI tie-break biases until 2-player seat win rates landed at 50.8 / 49.0."
    ],
    modalDetails: {
      problemStatement: "Most browser strategy games either rely on dice for drama or feel unfair depending on seat order. Nexus: Dominion aims for deterministic, luck-free combat, rules that are fully visible on screen, and fairness that is measured statistically rather than assumed.",
      architectureHighlights: [
        "Authoritative Server: RoomManager, GameEngine, ActionProcessor and TurnManager on Node.js + Express; every action runs validate → spend → apply → recalculate chains → score → check victory → broadcast.",
        "Shared Rules Package: Pure ES modules imported by both the React/Phaser client (instant feedback) and the server (enforcement).",
        "Rendering: Phaser 3 hex board with tweens and particles embedded in a React 18 + Zustand interface.",
        "Simulation Harness: Deterministic headless matches aggregating win rate, Dominion sources, captures, decision time and match length to drive data-informed balance changes."
      ],
      metricsAndResults: [
        { label: "Strategic vs Greedy AI", value: "63.2% win rate (500 matches)" },
        { label: "2-Player Seat Fairness", value: "50.8% / 49.0% (passes χ² test)" },
        { label: "Strategic AI Decision Time", value: "≈ 0.3 ms per action" },
        { label: "Combat Rebalance", value: "Captures per player 0.58 → 1.58" }
      ]
    }
  },
  {
    id: "algolens",
    title: "AlgoLens – Verified Algorithm Visualization Platform",
    role: "Solo Developer",
    period: "2026",
    category: "Software & Systems",
    secondaryCategory: "Full-Stack / Developer Education",
    tags: ["Python", "FastAPI", "PostgreSQL", "React", "TypeScript", "Docker", "LLM APIs"],
    githubUrl: "https://github.com/Abhinavbilla/AlgoLens",
    accent: "from-emerald-500 via-teal-500 to-cyan-500",
    highlightStat: { value: "300+", label: "Random tests per approach" },
    summary: "A visual DSA learning platform: paste a problem and watch brute-force to optimal approaches animate step by step. Every animation is recorded from a real run of code verified against hundreds of tests.",
    keyPoints: [
      "Built a pipeline that turns a pasted problem statement into a precise signature, generates two independent brute forces (from different models) plus optimized approaches, and only marks an approach verified when it passes every check.",
      "Verified each approach on the worked examples plus 300 random valid inputs against the brute force, and cross-checked its C++ against its Python, with up to two automatic repair rounds on failure.",
      "Ran untrusted generated code inside a hardened Docker sandbox with its own hostile-code test suite, and recorded real executions so animations can never show steps the code never took.",
      "Added an in-page tutor (explain, step questions, hints, and a sandboxed \"check my code\" mode), optional Google / email-code sign-in, and per-visitor rate limits."
    ],
    modalDetails: {
      problemStatement: "Existing algorithm visualizers either cover only a fixed set of textbook algorithms or let an AI draw the animation directly, which can show steps the real code would never take. AlgoLens animates only what verified code actually did when it ran.",
      architectureHighlights: [
        "FastAPI Backend: Problem ingestion, multi-model solving roles (configurable provider:model per role), verification orchestration, and PostgreSQL persistence with automatic migrations.",
        "Execution Sandbox: Isolated container for running generated Python and C++ under production restrictions, with a dedicated hostile-code test suite.",
        "Verified Animations: Step traces recorded from real runs, narrated per step, with the current code line highlighted in both Python and C++.",
        "React + TypeScript Frontend: Algorithm library, learning path, custom-input reruns with input validation, and operation-count charts comparing approaches as input size grows."
      ],
      metricsAndResults: [
        { label: "Verification per Approach", value: "Examples + 300 random inputs" },
        { label: "Cross-Language Check", value: "C++ output vs Python output" },
        { label: "Independent Brute Forces", value: "2 (different models)" },
        { label: "Scope", value: "Arrays → Graphs, DP, Segment Trees" }
      ]
    }
  },
  {
    id: "soundscope",
    title: "SoundScope – In-Browser Sound Event Detection",
    role: "Solo Developer",
    period: "2026",
    category: "AI / ML & Modeling",
    secondaryCategory: "Applied ML / On-Device Inference",
    tags: ["JavaScript", "React", "ONNX Runtime Web", "Web Workers", "WebCodecs", "OPFS"],
    githubUrl: "https://github.com/Abhinavbilla/SoundScope",
    liveUrl: "https://soundscope-cglz.onrender.com",
    accent: "from-cyan-500 via-blue-500 to-indigo-500",
    highlightStat: { value: "447", label: "Sound classes detected" },
    summary: "A privacy-first web app that finds speech, sirens, dogs, applause and 440+ other sounds in long audio or video recordings, running a pretrained sound-event model entirely on the user's device.",
    keyPoints: [
      "Ran the EfficientSED sound-event model in the browser with ONNX Runtime Web, scoring 447 sound classes every 40 ms over overlapping 10-second windows, so recordings never leave the device.",
      "Streamed and decoded files piece by piece in background workers so recordings up to 10 hours stay within memory, and cached scores in OPFS so reopening a file is instant.",
      "Built a lane-per-sound timeline with typo-tolerant search, a confidence slider, bookmarks with notes, Excel export, and MP4 / WAV clip export cut locally on the device.",
      "Evaluated the model on five public labelled datasets and documented where it performs well and where it struggles."
    ],
    modalDetails: {
      problemStatement: "Finding a specific sound in hours of audio normally means listening to all of it, and cloud tools require uploading private recordings. SoundScope does the detection locally in the browser and lets you jump straight to each moment.",
      architectureHighlights: [
        "On-Device Inference: EfficientSED (fmn10 + transformer) via ONNX Runtime Web, multi-threaded using cross-origin isolation headers.",
        "Streaming Decode: Mediabunny / WebCodecs in Web Workers, plus a lazily-loaded Dolby Digital (AC-3 / E-AC-3) decoder for formats browsers can't handle.",
        "Local Storage: Frame-level scores in the Origin Private File System, bookmarks in IndexedDB; moments are re-derived instantly as the threshold changes.",
        "Static Deployment: No server code; deployed on Render with COOP/COEP headers and verified with Playwright browser checks."
      ],
      metricsAndResults: [
        { label: "Sound Classes", value: "447 (scored every 40 ms)" },
        { label: "Longest Tested Recording", value: "10 hours" },
        { label: "Evaluation", value: "5 public labelled datasets" },
        { label: "Data Uploaded to Server", value: "None (fully on-device)" }
      ]
    }
  }
];

export const projectFilterTabs = [
  { id: "all", label: "All Projects" },
  { id: "Software & Systems", label: "Full-Stack & Systems" },
  { id: "AI / ML & Modeling", label: "AI / ML & Modeling" }
];

export const educationData = [
  {
    institution: "Indian Institute of Science (IISc), Bangalore",
    period: "2024 – Present",
    degree: "B.Tech in Mathematics and Computing",
    scoreLabel: "GPA",
    score: "7.7 / 10.0",
    status: "Currently Pursuing (UG)",
    details: "Rigorous curriculum blending pure & applied mathematics, theoretical computer science, and modern machine learning."
  },
  {
    institution: "Sri Chaitanya Junior College",
    period: "2022 – 2024",
    degree: "Class XII (Board of Intermediate Education Andhra Pradesh (BIEAP))",
    scoreLabel: "Score",
    score: "98.1%",
    status: "Completed",
    details: "Higher secondary education with core focus on Mathematics, Physics, and Chemistry."
  },
  {
    institution: "Sri Chaitanya School",
    period: "2020 – 2022",
    degree: "Class X (SSC)",
    scoreLabel: "Score",
    score: "97.0%",
    status: "Completed",
    details: "Secondary school education with high academic distinction."
  }
];

export const achievementsData = [
  {
    exam: "JEE Advanced",
    rank: "AIR 3148",
    description: "Secured All India Rank (AIR) 3148 in JEE Advanced."
  },
  {
    exam: "JEE Mains",
    rank: "AIR 1260",
    description: "Secured All India Rank (AIR) 1260 in JEE Mains."
  }
];

export const leadershipData = [
  {
    role: "Core Coordinator",
    organization: "Pravega Fest (IISc)",
    team: "Merchandise Team",
    period: "IISc Flagship Festival",
    description: "Core Coordinator of the Merchandise Team for Pravega Fest."
  }
];

export const navigationLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" }
];
