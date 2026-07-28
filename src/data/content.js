/* Single source of truth for portfolio content.
   Facts sourced from Suresh_Nenavath_Resume.pdf + the previous site's page data. */

import collegeLogo from '../assets/b.tech_college_logo.jpeg';
import interLogo from '../assets/ttwreis_inter_college_logo.png';
import sscLogo from '../assets/ssc_school_logo.png';
import vedlogyLogo from '../assets/vedlogy_logo.png';

export const profile = {
  name: 'Nenavath Suresh',
  wordmark: 'Suresh',
  role: 'Full-Stack Developer',
  location: 'Hyderabad, Telangana',
  email: 'sureshnenavath09@gmail.com',
  phone: '+91 91773 46580',
  site: 'sureshnenavath.tech',
  github: 'https://github.com/sureshnenavath',
  linkedin: 'https://www.linkedin.com/in/nenavath-suresh/',
  avatar:
    'https://res.cloudinary.com/dd6nthams/image/upload/v1738431713/Profesional_photo_nurfda.jpg',
  available: true,
  availabilityLabel: 'open to full-time & freelance',
  headline: ['SHIPS', 'REAL PRODUCTS'],
  lede: 'Most portfolios list tutorials. Mine lists systems in production, with paying users on the other end.',
  summary:
    'Full-Stack Developer with production experience building and shipping web applications using React.js, Django REST Framework, PostgreSQL, and Redis/Celery. Currently the sole engineer on AcadFlows, a commercial School ERP SaaS platform, while concurrently delivering Svagio Fashion, a multi-vendor e-commerce marketplace, as a freelance Full-Stack Developer.',
};

export const metrics = [
  { value: '3', suffix: '', label: 'live products shipped' },
  { value: '16', suffix: '+', label: 'ERP modules built' },
  { value: '2025', suffix: '', label: 'B.Tech CSE — data science' },
];

/* Chip cloud under the metrics card — mirrors the reference "CAPABILITIES" block */
export const capabilities = [
  'React.js',
  'Django REST',
  'PostgreSQL',
  'Celery + Redis',
  'TypeScript',
  'Razorpay',
];

export const skillGroups = [
  { label: 'Languages', items: ['Python', 'JavaScript', 'TypeScript'] },
  {
    label: 'Frontend',
    items: ['React.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'React Router', 'Responsive Web Design'],
  },
  {
    label: 'Backend',
    items: ['Django', 'Django REST Framework', 'RESTful API Development', 'Celery', 'Redis'],
  },
  { label: 'Databases', items: ['PostgreSQL', 'SQLite', 'Relational Database Design'] },
  {
    label: 'Payments & Integrations',
    items: ['Razorpay', 'Shiprocket', 'Third-Party API Integration'],
  },
  { label: 'Tools & Platforms', items: ['Git', 'GitHub', 'Docker', 'Netlify', 'Vercel'] },
  {
    label: 'AI / Cloud',
    items: ['Google Gemini AI', 'AI Voice-Agent Pipelines (STT/TTS)', 'Google Cloud (Generative AI)'],
  },
];

/* Numbered sections, styled after the reference's 01 / 02 / 03 service blocks */
export const experience = [
  {
    id: 'acadflows',
    index: '01',
    role: 'Full-Stack Developer',
    company: 'AcadFlows',
    tagline: 'School ERP SaaS.',
    kind: 'School ERP SaaS Platform',
    period: 'May 2026 — Present',
    live: 'https://acadflows.com',
    liveLabel: 'acadflows.com',
    logo: null,
    summary:
      'Sole engineer on a commercial School ERP product — end-to-end architecture, planning, and full-stack implementation.',
    work: 'I own the whole surface: system architecture, REST API design, frontend, backend, and UI/UX. 16+ modules in production, automated fee collection through Razorpay, and a payroll engine that handles Indian statutory compliance without a human in the loop.',
    highlights: [
      'Sole engineer for a commercial School ERP SaaS product — own end-to-end system architecture, planning, and full-stack implementation (frontend, backend, and UI/UX design)',
      'Built and maintain 16+ modules using React.js, Tailwind CSS, Django REST Framework, PostgreSQL, Redis, and Celery',
      'Integrated Razorpay for automated fee collection and recurring payments, implementing secure payment gateway workflows',
      'Designed a payroll module handling Indian statutory compliance (PF, ESI, TDS, Professional Tax) with automated payslip PDF generation',
    ],
    stack: [
      'React.js',
      'Tailwind CSS',
      'Django REST Framework',
      'PostgreSQL',
      'Redis',
      'Celery',
      'Razorpay',
    ],
  },
  {
    id: 'svagio',
    index: '02',
    role: 'Freelance Full-Stack Developer',
    company: 'Svagio Fashion',
    tagline: 'Multi-vendor commerce.',
    kind: 'Multi-Vendor E-Commerce Marketplace',
    period: 'June 2026 — Present',
    live: 'https://svagio.in',
    liveLabel: 'svagio.in',
    logo: null,
    summary:
      'A 3-app multi-vendor marketplace for a fashion startup selling apparel, accessories, and outfit combos.',
    work: 'Architected multi-seller functionality so independent sellers manage their own catalogs and orders. Django Admin doubles as the internal operations tooling, and third-party APIs cover the parts a marketplace cannot fake — payments and courier fulfilment.',
    highlights: [
      'Building a 3-app multi-vendor marketplace for Svagio Fashion — a fashion startup selling apparel, accessories, and outfit combos (clothing, bracelets, watches, shoes)',
      'Architected multi-seller functionality enabling independent sellers to manage their own catalogs and orders',
      'Built with TypeScript, React.js, Tailwind CSS, and Django; used Django Admin for internal operations tooling',
      'Integrated third-party APIs — Razorpay for payments and Shiprocket for courier/fulfilment logistics',
    ],
    stack: ['TypeScript', 'React.js', 'Tailwind CSS', 'Django', 'Razorpay', 'Shiprocket'],
  },
  {
    id: 'vedlogy',
    index: '03',
    role: 'Full-Stack Developer Intern',
    company: 'Vedlogy Learnings',
    tagline: 'AI voice agents.',
    kind: 'AI Voice-Agent Platform',
    period: 'September 2025 — March 2026',
    live: 'https://autoli.in',
    liveLabel: 'autoli.in',
    logo: vedlogyLogo,
    summary:
      'Built Autoli, an AI voice-agent platform, working directly with the founder as 1 of 2 developers.',
    work: 'Developed the end-to-end AI voice pipeline — STT, LLM, TTS, and WebSocket-based real-time audio streaming — plus the REST APIs and background task processing behind it. Two-person Agile team, so architecture, deployment, and code review were shared work.',
    highlights: [
      'Built Autoli, an AI voice-agent platform, working directly with the founder as 1 of 2 developers',
      'Developed the end-to-end AI voice pipeline by integrating STT, LLM, TTS, and WebSocket-based real-time audio streaming',
      'Built REST APIs using Django REST Framework and implemented background task processing with Celery and Redis',
      'Developed responsive UI components using React.js and Tailwind CSS',
      'Collaborated on architecture, feature development, deployment, and code reviews in a two-person Agile team',
    ],
    stack: ['React.js', 'Tailwind CSS', 'Django REST Framework', 'Celery', 'Redis', 'WebSockets'],
  },
];

/* Featured works — reference renders these as rows, not cards */
export const projects = [
  {
    id: 'acadflows',
    index: '/01',
    name: 'AcadFlows',
    year: '2026',
    tagline: 'School ERP SaaS, 16+ modules, sole engineer.',
    description:
      'A commercial School ERP SaaS platform covering admissions through payroll, built and maintained end-to-end by one engineer.',
    fullDescription:
      'AcadFlows is a commercial School ERP SaaS product where I own the entire stack: system architecture, planning, REST API design, frontend, backend, and UI/UX. 16+ production modules run on React.js, Tailwind CSS, Django REST Framework, PostgreSQL, Redis, and Celery. Razorpay drives automated fee collection and recurring payments, and the payroll module handles Indian statutory compliance (PF, ESI, TDS, Professional Tax) with automated payslip PDF generation.',
    techStack: [
      'React.js',
      'Tailwind CSS',
      'Django REST Framework',
      'PostgreSQL',
      'Redis',
      'Celery',
      'Razorpay',
    ],
    tags: ['SAAS', 'ERP', 'PRODUCTION'],
    featured: true,
    demo: 'https://acadflows.com',
    github: null,
    image:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'svagio',
    index: '/02',
    name: 'Svagio Fashion',
    year: '2026',
    tagline: 'Multi-vendor marketplace across 3 apps.',
    description:
      'A 3-app multi-vendor fashion marketplace with independent seller catalogs, payments, and courier logistics.',
    fullDescription:
      'A 3-app multi-vendor marketplace for Svagio Fashion, a startup selling apparel, accessories, and outfit combos. I architected multi-seller functionality so independent sellers manage their own catalogs and orders, built the stack in TypeScript, React.js, Tailwind CSS, and Django, used Django Admin as internal operations tooling, and integrated Razorpay for payments plus Shiprocket for courier and fulfilment logistics.',
    techStack: ['TypeScript', 'React.js', 'Tailwind CSS', 'Django', 'Razorpay', 'Shiprocket'],
    tags: ['FREELANCE', 'E-COMMERCE', 'MULTI-VENDOR'],
    featured: true,
    demo: 'https://svagio.in',
    github: null,
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'autoli',
    index: '/03',
    name: 'Autoli',
    year: '2026',
    tagline: 'AI voice agent — STT, LLM, TTS, realtime audio.',
    description:
      'An AI voice-agent platform with a full STT → LLM → TTS pipeline over WebSocket real-time audio streaming.',
    fullDescription:
      'Autoli is an AI voice-agent platform built with the founder as 1 of 2 developers. I developed the end-to-end voice pipeline — STT, LLM, TTS, and WebSocket-based real-time audio streaming — built REST APIs on Django REST Framework, implemented background task processing with Celery and Redis, and developed the responsive UI in React.js and Tailwind CSS.',
    techStack: [
      'React.js',
      'Tailwind CSS',
      'Django REST Framework',
      'Celery',
      'Redis',
      'WebSockets',
    ],
    tags: ['AI', 'VOICE', 'REALTIME'],
    featured: true,
    demo: 'https://autoli.in',
    github: null,
    image:
      'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'resumeai',
    index: '/04',
    name: 'ResumeAI',
    year: '2025',
    tagline: 'Gemini-powered résumé analyzer.',
    description:
      'An AI-powered résumé analyzer using Google Gemini AI for skill extraction, scoring, and improvement suggestions.',
    fullDescription:
      'An AI-powered résumé analyzer built on Google Gemini AI that extracts skills, scores résumés, and generates personalized improvement suggestions. Two-tab interface (Upload & History) with modal views for streamlined navigation, backed by a FastAPI service with SQLite for persistent analysis history across sessions.',
    techStack: ['React.js', 'Tailwind CSS', 'Python (FastAPI)', 'SQLite', 'Google Gemini AI'],
    tags: ['AI', 'LLM', 'FASTAPI'],
    featured: true,
    demo: 'https://resumeaianalyser.netlify.app',
    github: 'https://github.com/sureshnenavath/resumeai',
    image:
      'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'subscribely',
    index: '/05',
    name: 'Subscribely',
    year: '2025',
    tagline: 'Subscriptions, webhooks, Razorpay.',
    description:
      'A subscription management app with Razorpay integration, webhook event handling, and JWT auth.',
    fullDescription:
      'A subscription management app with a Django backend and a React (Vite) frontend. Features Razorpay integration, webhook event handling, JWT authentication, subscription plans, and a Django Admin interface for comprehensive subscription management.',
    techStack: [
      'React',
      'Vite',
      'Tailwind CSS',
      'Axios',
      'Django',
      'Django REST Framework',
      'SimpleJWT',
      'Razorpay SDK',
    ],
    tags: ['PAYMENTS', 'DJANGO', 'WEBHOOKS'],
    featured: false,
    demo: 'https://subscribely.netlify.app/',
    github: 'https://github.com/sureshnenavath/Subscribely',
    image:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'nxttrendz',
    index: '/06',
    name: 'Nxt Trendz',
    year: '2024',
    tagline: 'E-commerce with protected routes.',
    description:
      'An e-commerce web app with product listings, cart functionality, and authentication-protected routes.',
    fullDescription:
      'An e-commerce web app with product listings, cart functionality, authentication-protected routes, and responsive light/dark theming. Includes a product catalog, cart system, login/logout, protected routes, and theme toggle.',
    techStack: ['React.js', 'Context API', 'React Router', 'CSS'],
    tags: ['E-COMMERCE', 'REACT'],
    featured: false,
    demo: 'https://nxttrenz.dpdns.org/',
    github: 'https://github.com/sureshnenavath/nxttrenz-app',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'jobby',
    index: '/07',
    name: 'Jobby App',
    year: '2024',
    tagline: 'Job search with JWT auth.',
    description:
      'A clean, responsive job search app with filtering and secure login using JWT tokens.',
    fullDescription:
      'A responsive job search app with filtering and secure login using JWT tokens and cookies. Includes job listings, advanced filters, login/signup, and JWT authentication for secure user sessions.',
    techStack: ['React.js', 'JWT', 'Cookies', 'CSS'],
    tags: ['REACT', 'AUTH'],
    featured: false,
    demo: 'https://jobbyjobfinder.netlify.app',
    github: 'https://github.com/sureshnenavath/Jobby-App',
    image:
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'tasktracker',
    index: '/08',
    name: 'Task Tracker',
    year: '2024',
    tagline: 'Local-first task app.',
    description: 'A simple, responsive task tracker with local storage persistence.',
    fullDescription:
      'A responsive task tracker with local storage support. Add, delete, and search tasks with persistent data storage so tasks survive a browser refresh.',
    techStack: ['React.js', 'HTML', 'CSS', 'Local Storage'],
    tags: ['REACT', 'UTILITY'],
    featured: false,
    demo: 'https://tasktrackerwebapp.netlify.app',
    github: 'https://github.com/sureshnenavath/task-tracker',
    image:
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
];

export const education = [
  {
    id: 'btech',
    degree: 'Bachelor of Technology in CSE',
    field: 'Data Science',
    institution: 'Siddhartha Institute of Engineering and Technology',
    location: 'Hyderabad, Telangana',
    year: '2021 — 2025',
    logo: collegeLogo,
    skills: ['DSA', 'Web Development', 'Software Engineering', 'Databases'],
  },
  {
    id: 'inter',
    degree: 'Intermediate (MPC)',
    field: 'Mathematics, Physics, Chemistry',
    institution: 'Telangana Social Welfare Residential Educational Institutions Society',
    location: 'Sangareddy, Telangana',
    year: '2021',
    logo: interLogo,
    skills: ['Mathematics', 'Physics', 'Chemistry'],
  },
  {
    id: 'ssc',
    degree: 'Secondary School Certificate',
    field: 'General Education',
    institution: 'Zilla Parishad High School',
    location: 'Zaheerabad, Telangana',
    year: '2019',
    logo: sscLogo,
    skills: ['Mathematics', 'Science', 'English'],
  },
];

export const certifications = [
  {
    id: 'gcp',
    title: 'Google Cloud Virtual Internship — Generative AI',
    issuer: 'Google Cloud',
    detail: 'Completed a hands-on virtual internship focused on Generative AI on Google Cloud.',
    meta: 'GENERATIVE AI',
  },
  {
    id: 'nptel',
    title: 'Introduction to Internet of Things',
    issuer: 'NPTEL — IIT Kharagpur',
    detail: 'Earned Elite Silver certification with an 85% score in a 12-week course (Jul–Oct 2024).',
    meta: 'ELITE SILVER · 85%',
  },
];

export const navItems = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Work', href: '#work' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
];
