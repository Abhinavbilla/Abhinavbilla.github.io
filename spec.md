# Portfolio Website Specification (`spec.md`)

**Candidate:** Billa Abhinav  
**Institution:** Indian Institute of Science (IISc), Bangalore  
**Discipline:** B.Tech in Mathematics and Computing (Class of 2028)  
**Status:** Approved Specification  
**Source of Truth for Content:** `resume.pdf` & Confirmed Candidate Details

---

## 1. Candidate Verified Contact & Profiles

* **Full Name:** Billa Abhinav
* **Email:** `abhinavb4116@gmail.com`
* **Phone:** `(+91) 6303395859`
* **LinkedIn:** [linkedin.com/in/abhinavb5632](https://www.linkedin.com/in/abhinavb5632)
* **GitHub:** [github.com/Abhinavbilla](https://github.com/Abhinavbilla)
* **LeetCode:** [leetcode.com/u/Abhinavbilla](https://leetcode.com/u/Abhinavbilla/)
* **Resume:** Local file `resume.pdf` (accessible via direct download/view button)

---

## 2. Executive Summary & Goals

* **Primary Purpose:** Create a clean, fast, and high-impact personal portfolio website tailored for technical recruiters and engineering hiring managers.
* **Core Narrative:** A rigorous Mathematics and Computing student at IISc with strong software engineering competencies (backend systems, APIs, pipelines) and applied AI/ML capabilities (deep generative models, statistical drift monitoring).
* **Key Call to Actions (CTAs):**
  1. **Primary CTA:** `View Projects` (prominent button linking directly to the projects section).
  2. **Secondary CTA:** `Resume` (view/download `resume.pdf`).
* **Design Philosophy:** Modern, minimalist dark-mode-first aesthetic with clean typography, responsive layout, fast load times (<1s), and zero unnecessary bloat.

---

## 3. Core Principles & Content Integrity

1. **Strict Separation of Portfolio Stack vs. Personal Skills:**
   * The technologies used to build this website (e.g., React, Tailwind CSS, Vite) are **strictly isolated** and will **not** be listed under the candidate's personal skills.
   * The **Skills & Coursework** section strictly derives only from `resume.pdf` and verified competencies (e.g., Python, C/C++, SQLite, FastAPI, PyTorch, Math Coursework).
2. **Centralized Data Architecture:**
   * All personal information, projects, coursework, and links will be housed in a single configuration file (`src/data/portfolioData.js`).
   * Updating project descriptions or adding a new achievement requires editing only one readable data file without altering UI components.
3. **Recruiter-First Scannability:**
   * Single-page smooth-scrolling layout allowing recruiters to evaluate core strengths within 30 seconds.
   * Clear metric-driven bullet points for all projects (e.g., *15,000 rows optimal batch size*, *FID & LPIPS metrics*, *AIR 3148 / 1260*).

---

## 4. Site Architecture & Section Breakdown

```
[Sticky Navbar]
  │── Logo / Brand ("Abhinav Billa" / "AB")
  │── Links: About | Skills & Coursework | Projects | Education & Honors | Contact
  │── Actions: [Resume Button] | [Dark/Light Mode Toggle]
  │
  ├── [1. Hero Section]
  │     ├── Headline & Value Proposition
  │     ├── Badges: "Mathematics & Computing @ IISc" | "SWE & AI/ML"
  │     ├── Primary CTA: [View Projects] | Secondary CTA: [Download Resume]
  │     └── Social Links (GitHub, LinkedIn, LeetCode, Email, Phone)
  │
  ├── [2. About Me]
  │     ├── Academic & Engineering narrative
  │     └── Core Focus Highlight Cards
  │
  ├── [3. Skills & Academic Foundations]
  │     ├── Programming Languages: Python, C/C++, SQL (SQLite)
  │     ├── Backend & Developer Tools: FastAPI, Streamlit, Git, Linux
  │     ├── AI / ML & Applied Math: PyTorch, Generative Modeling, Statistical Drift
  │     └── Verified Coursework (CS Theory & Applied Mathematics)
  │
  ├── [4. Featured Projects (Interactive Filter)]
  │     ├── Filter Tabs: [All] | [Software & Systems] | [AI / ML & Modeling]
  │     ├── Project 1: Drift Monitoring API – ML Model Monitoring Platform
  │     └── Project 2: Variational Autoencoders (VAE, InfoVAE, VQ-VAE)
  │
  ├── [5. Education, Achievements & Leadership]
  │     ├── Academic Timeline (IISc 2024-2028, Junior College, School)
  │     ├── Competitive Exam Ranks (JEE Advanced AIR 3148, JEE Mains AIR 1260)
  │     └── Positions of Responsibility (Pravega Fest Core Coordinator)
  │
  ├── [6. Contact & Socials]
  │     ├── Direct Email & Phone Copy Cards
  │     ├── Interactive Contact Message Form
  │     └── Direct Profile Links (LinkedIn, GitHub, LeetCode, Email)
  │
  └── [Footer]
        └── Copyright & Quick Nav
```

---

## 5. Detailed Section Specifications

### 5.1 Header / Sticky Navbar
* **Brand Logo:** "Abhinav Billa" with a sleek badge.
* **Navigation Links:** `About`, `Skills`, `Projects`, `Education`, `Contact`.
* **Theme Toggle:** Dark Mode (default) / Light Mode switch.
* **Direct Action:** `Resume` button opening `/resume.pdf` in a new tab.

---

### 5.2 Hero Section
* **Tagline:**
  > *"Mathematics & Computing @ Indian Institute of Science (IISc)"*
  > *"Bridging mathematical rigor with scalable software engineering and intelligent machine learning systems."*
* **Status Pill:** `🟢 Open to Software Engineering & AI/ML Internships`
* **Buttons:**
  * `View Projects` (Primary solid button with smooth-scroll to `#projects`)
  * `View Resume` (Secondary outline button linking to `resume.pdf`)
* **Quick Links:** GitHub (`https://github.com/Abhinavbilla`), LinkedIn (`https://www.linkedin.com/in/abhinavb5632`), LeetCode (`https://leetcode.com/u/Abhinavbilla/`), Email (`abhinavb4116@gmail.com`).

---

### 5.3 About Section
* **Narrative:** Highlighting interdisciplinary education at IISc Bangalore, combining deep theoretical foundations (linear algebra, probability, discrete math, algorithms) with hands-on systems development (FastAPI backends, data pipelines, deep learning evaluation).
* **Key Focus Highlights:**
  * *Mathematical Rigor:* Strong problem-solving backed by top national ranks in JEE.
  * *Software Engineering:* Practical API design, data pipelines, schema verification, and database persistence.
  * *Machine Learning & AI:* Deep generative models, latent space dynamics, and statistical drift testing.

---

### 5.4 Skills & Academic Coursework Section *(Strictly from Resume)*

#### Technical Skills Matrix:
| Category | Skills / Frameworks / Tools |
| :--- | :--- |
| **Languages** | Python, C / C++, SQL (SQLite) |
| **Backend & Tools** | FastAPI, Streamlit, SQLite, Git, Linux / Shell |
| **AI / ML & Data** | PyTorch, Deep Generative Models, Statistical Testing (Kolmogorov-Smirnov, PSI), Metrics (FID, LPIPS, F1-Score) |
| **Spoken Languages** | English, Telugu, Hindi |

#### Verified Coursework Grid:
* **Computer Science & Theory:**
  * Data Structures and Algorithms (UG)
  * Automata and Computability (UG)
  * Introduction to Artificial Intelligence and Machine Learning (UG)
* **Mathematics & Optimization:**
  * Analysis and Linear Algebra I & II (UG)
  * Probability and Statistics (UG)
  * Discrete Mathematics (UG)
  * Numerical Methods (UG)
  * Algebraic Structures (UG)

---

### 5.5 Featured Projects Section

#### Project 1: Drift Monitoring API – ML Model Monitoring Platform
* **Role:** Developer *(May '26 – Jun '26)*
* **Category:** Software Engineering / ML Infrastructure / Backend Systems
* **Tech Stack:** `FastAPI`, `Streamlit`, `SQLite`, `Python`, `Statistical Drift Detection`
* **Key Highlights:**
  * Built a full drift detection platform with a FastAPI backend, Streamlit dashboard, and SQLite persistence layer to monitor and flag statistical drift in structured data pipelines.
  * Engineered a modular detection pipeline supporting Kolmogorov-Smirnov (continuous) and Population Stability Index (categorical) methods with a generalized column profiler and human-in-the-loop schema verification.
  * Benchmarked detection accuracy across batch sizes on the NYC Citi Bike dataset, identifying **15,000 rows** as the optimal batch size for peak F1 performance.
* **Actions:** `GitHub Repo` (`https://github.com/Abhinavbilla`), `Details`

#### Project 2: Variational Autoencoders & Generative Modeling
* **Role:** Technical Lead *(Mar '26 – Apr '26)*
* **Category:** AI / ML / Deep Learning / Generative Frameworks
* **Tech Stack:** `PyTorch`, `Python`, `Generative Models (VAE, InfoVAE, VQ-VAE)`, `CIFAR-10`, `CelebA`
* **Key Highlights:**
  * Implemented and evaluated continuous (Standard VAE), modified-objective (InfoVAE), and discrete (VQ-VAE) generative frameworks on CIFAR-10 and CelebA benchmark datasets.
  * Investigated core training dynamics, focusing on posterior collapse and latent space utilization by tracking empirical KL divergence trends and codebook utilization constraints.
  * Conducted linear latent space interpolations and quantified output quality using **FID** and **LPIPS** metrics to analyze trade-offs between representation continuity and semantic sharpness.
* **Actions:** `GitHub Repo` (`https://github.com/Abhinavbilla`), `Details`

---

### 5.6 Education, Achievements & Leadership Section

#### Academic History:
1. **Indian Institute of Science (IISc), Bangalore** *(2024 – 2028)*
   * *Degree:* B.Tech in Mathematics and Computing
   * *GPA:* 7.7 / 10.0
2. **Sri Chaitanya Junior College** *(2022 – 2024)*
   * *Class XII (BIEAP):* **98.1%**
3. **Sri Chaitanya School** *(2020 – 2022)*
   * *Class X (SSC):* **97.0%**

#### Competitive Achievements:
* **JEE Advanced:** Secured All India Rank (AIR) **3148**
* **JEE Mains:** Secured All India Rank (AIR) **1260**

#### Leadership & Extracurriculars:
* **Pravega Fest (IISc):** Core Coordinator of the Merchandise Team for IISc's flagship festival.

---

### 5.7 Contact Section & Footer
* **Email:** `abhinavb4116@gmail.com` (with one-click copy button)
* **Phone:** `(+91) 6303395859` (with direct call / copy action)
* **Profiles:** LinkedIn (`https://www.linkedin.com/in/abhinavb5632`), GitHub (`https://github.com/Abhinavbilla`), LeetCode (`https://leetcode.com/u/Abhinavbilla/`)
* **Message Form:** Direct interactive message card (mailto / feedback)
* **Footer:** Copyright © 2026 Billa Abhinav. IISc Mathematics & Computing.

---

## 6. Technical Implementation Details

* **Framework:** **Vite + React (JavaScript/JSX)** (Minimal overhead, instant hot-module replacement).
* **Styling:** **Tailwind CSS** (Clean utility styling, robust dark mode class strategy).
* **Icons:** **Lucide React** (Clean, accessible SVG icons).
* **Content Store:** `src/data/portfolioData.js` (Fully typed JSON-like data structure).
* **Static Assets:** `public/resume.pdf` (Direct download and preview link).
