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
  statusPill: "Current IISc Student • Open to SWE & AI/ML Internships",
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
      skills: ["Python", "C / C++", "SQL (SQLite)"]
    },
    {
      name: "Backend & Developer Tools",
      skills: ["FastAPI", "Streamlit", "SQLite", "Git", "Linux / Shell"]
    },
    {
      name: "AI / ML & Data",
      skills: [
        "PyTorch",
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
    githubUrl: "https://github.com/Abhinavbilla",
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
    githubUrl: "https://github.com/Abhinavbilla",
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
  }
];

export const projectFilterTabs = [
  { id: "all", label: "All Projects" },
  { id: "Software & Systems", label: "Software & Systems" },
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
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education & Honors", href: "#education" },
  { name: "Contact", href: "#contact" }
];
