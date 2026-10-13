/**
 * Portfolio Data Configuration for M. S. Mohammad Abbas
 * Update this file to modify personal details, projects, experience, skills, and links.
 */

export const personalData = {
  name: "M. S. Mohammad Abbas",
  shortName: "Abbas",
  initials: "MA",
  title: "Software Engineer | Python & Django Full Stack Developer",
  headline: "Python Full Stack Developer & Software Engineer",
  greeting: "Hi, I'm",
  summary:
    "I build web applications and REST APIs using Python, Django, and Django REST Framework. I also have hands-on experience with SQL, JavaScript, and enterprise application troubleshooting.",
  location: "Bengaluru, Karnataka, India",
  email: "mohammedabbas50605@gmail.com",
  phone: "+91 74117 25609",
  github: "https://github.com/MSAbbas-21",
  linkedin: "https://linkedin.com/in/mohammed-abbas",
  resumePath: "/resume.pdf", // Place your resume PDF in the public/ folder as resume.pdf
  availability: "Available for Software Engineer & Full-Stack Developer roles",
  experienceYears: "Entry-Level Professional",
  cgpa: "8.5 CGPA",
  degree: "BCA Graduate",
};

export const aboutData = {
  paragraphs: [
    "I am an entry-level software engineer with a Bachelor of Computer Applications (BCA) degree and an 8.5 CGPA. Currently working as a Junior Developer Trainee at Unique Force, I contribute to enterprise application maintenance, Oracle Database 19c query optimization, client-side JavaScript functionality, and systemic application troubleshooting.",
    "My core development focus is in Python, Django, and Django REST Framework, designing scalable REST APIs, structuring relational schemas, and developing clean, responsive interfaces. I hold deep respect for clean code principles, the software development life cycle (SDLC), version control workflows, and collaborating effectively with senior developers to deliver dependable solutions.",
    "I am eager to contribute to forward-thinking engineering teams where I can leverage my backend expertise, database skills, and problem-solving drive across web applications, cloud technologies, and modern AI integrations."
  ],
  highlights: [
    { label: "Academic Standing", value: "8.5 CGPA (BCA)" },
    { label: "Core Backend", value: "Python, Django, REST APIs" },
    { label: "Enterprise Experience", value: "Junior Developer Trainee" },
    { label: "Database Expertise", value: "Oracle 19c & SQLite" },
  ]
};

export const skillsCategories = [
  {
    title: "Programming Languages",
    icon: "Code2",
    description: "Core languages used for backend logic, web programming, and data queries.",
    skills: [
      { name: "Python", level: "Primary", tag: "Backend & Scripting" },
      { name: "JavaScript", level: "Proficient", tag: "ES6+ & DOM" },
      { name: "SQL", level: "Proficient", tag: "Complex Queries & Joins" },
    ],
  },
  {
    title: "Backend Development",
    icon: "Server",
    description: "Architecting web services, API endpoints, and server-side business logic.",
    skills: [
      { name: "Django", tag: "MVT Framework" },
      { name: "Django REST Framework", tag: "Web APIs & Serializers" },
      { name: "REST APIs", tag: "JSON Architecture" },
      { name: "Django ORM", tag: "Database Abstraction" },
      { name: "MVT Architecture", tag: "Application Design" },
      { name: "CRUD Operations", tag: "Data Lifecycle" },
    ],
  },
  {
    title: "Frontend Development",
    icon: "Layout",
    description: "Crafting structured, accessible, and responsive user interfaces.",
    skills: [
      { name: "HTML5", tag: "Semantic Markup" },
      { name: "CSS3", tag: "Modern Styling" },
      { name: "JavaScript", tag: "Client Interactivity" },
      { name: "Tailwind CSS", tag: "Utility-First Design" },
      { name: "Responsive Web Design", tag: "Mobile & Desktop" },
    ],
  },
  {
    title: "Databases",
    icon: "Database",
    description: "Relational database modeling, query execution, and troubleshooting.",
    skills: [
      { name: "SQLite", tag: "Development & Testing" },
      { name: "Oracle Database 19c", tag: "Enterprise Production" },
      { name: "Relational Database Design", tag: "Normalization & Schema" },
    ],
  },
  {
    title: "Tools & Concepts",
    icon: "Cpu",
    description: "Engineering workflows, debugging practices, and architectural principles.",
    skills: [
      { name: "Git and GitHub", tag: "Version Control" },
      { name: "SVN / TortoiseSVN", tag: "Enterprise Source Control" },
      { name: "VS Code", tag: "Development Environment" },
      { name: "JSON", tag: "Data Serialization" },
      { name: "Object-Oriented Programming", tag: "OOP Principles" },
      { name: "Data Structures & Algorithms", tag: "Problem Solving" },
      { name: "Debugging & Bug Fixing", tag: "Troubleshooting" },
      { name: "Authentication & Authorization", tag: "Access Control" },
      { name: "Session Management", tag: "State Handling" },
      { name: "Software Development Life Cycle", tag: "SDLC Phases" },
    ],
  },
  {
    title: "Other Exposure",
    icon: "Layers",
    description: "Specialized enterprise platforms, emerging technologies, and integrations.",
    skills: [
      { name: "IBM WebSphere Application Server 9", tag: "Enterprise Middleware" },
      { name: "Generative AI Fundamentals", tag: "LLMs & AI Prompting" },
      { name: "REST API Integration", tag: "Third-party Consumption" },
    ],
  },
];

export const experienceData = [
  {
    id: "exp-unique-force",
    title: "Junior Developer Trainee",
    company: "Unique Force",
    period: "May 2026 – Present",
    location: "Bengaluru, India",
    type: "Full-Time Trainee",
    summary:
      "Working within an enterprise application environment to maintain system reliability, troubleshoot issues, optimize database operations, and support feature stabilization alongside senior engineers.",
    responsibilities: [
      "Writing and executing Oracle SQL queries for data retrieval, validation, and troubleshooting.",
      "Investigating issues across application and database layers.",
      "Working with JavaScript for client-side functionality, form handling, and validation.",
      "Gaining exposure to IBM WebSphere Application Server 9.",
      "Assisting with application troubleshooting across frontend, application server, and database layers.",
      "Collaborating with senior developers to investigate bugs and implement assigned fixes."
    ],
    technologies: [
      "Oracle Database 19c",
      "SQL",
      "JavaScript",
      "IBM WebSphere Application Server 9",
      "SVN / TortoiseSVN",
      "Application Debugging"
    ]
  }
];

export const projectsData = [
  {
    id: "shopsphere",
    title: "ShopSphere – Full-Stack E-Commerce Web Application",
    shortDescription:
      "A complete full-stack e-commerce web platform featuring RESTful APIs for catalog and order lifecycle, secure authentication, and a responsive Tailwind CSS storefront.",
    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "SQLite",
      "Tailwind CSS",
      "Git"
    ],
    overview:
      "ShopSphere is an end-to-end e-commerce solution engineered to demonstrate scalable web architecture, clean separation of concerns, and robust API development. It includes complete customer journey workflows from product discovery to checkout.",
    highlights: [
      "Developed a full-stack e-commerce application with modular Django apps.",
      "Created REST APIs for product, category, cart, and order management using Django REST Framework.",
      "Used Django models and Django ORM for application data persistence and query optimization.",
      "Implemented authentication-related functionality including user registration and session verification.",
      "Built responsive user interfaces using Tailwind CSS with mobile-first design principles.",
      "Maintained project version history using Git and GitHub with structured commit practices."
    ],
    architecture: {
      backend: "Django with Django REST Framework providing serialized JSON endpoints.",
      database: "Relational data modeling with Django ORM for Products, Orders, Order Items, and Cart states.",
      security: "User authentication, protected endpoints, CSRF protection, and permission validation.",
      ui: "Tailwind CSS components structured for cross-device responsiveness."
    },
    // Real URLs can be supplied here. Empty string hides the button automatically.
    githubUrl: "", // Example: "https://github.com/MSAbbas-21/shopsphere"
    demoUrl: "",   // Example: "https://shopsphere-demo.vercel.app"
  },
  {
    id: "college-voting",
    title: "College Voting Management System",
    shortDescription:
      "An end-to-end voting management application enforcing a strict one-vote-per-user policy through session validation, candidate listings, and instant results calculation.",
    technologies: [
      "Python",
      "Django",
      "SQL",
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    overview:
      "Designed to streamline college student elections, this application replaces manual ballots with a secure digital voting process. It prevents ballot manipulation by strictly validating user credentials and session tokens.",
    highlights: [
      "Built an end-to-end voting management application using Django's MVT architecture.",
      "Implemented candidate listing and intuitive vote casting interfaces.",
      "Added a one-vote-per-user policy using authentication and session validation to guarantee election integrity.",
      "Developed a real-time results interface that tallies and computes outcomes accurately."
    ],
    architecture: {
      backend: "Django application with custom views handling ballot verification and tallying.",
      database: "Relational SQL database tracking voter status, ballot logs, and candidate aggregates.",
      security: "Double-voting prevention with unique voter tokens and authenticated session checks.",
      ui: "Clean, accessible HTML5/CSS3 interface with JavaScript confirmation prompts."
    },
    githubUrl: "",
    demoUrl: "",
  },
  {
    id: "smart-student-mgmt",
    title: "Smart Student Management System",
    shortDescription:
      "A comprehensive student records management system with role-based administrative dashboards, dynamic CRUD operations, and client-side form validation.",
    technologies: [
      "Python",
      "Django",
      "SQL",
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    overview:
      "An administrative platform built for educational institutions to manage student enrollment, academic tracking, and department categorization. Features role-based views ensuring sensitive academic records are strictly governed.",
    highlights: [
      "Developed a student records management system supporting full lifecycle student data.",
      "Implemented role-based access control and an intuitive admin dashboard.",
      "Created complete CRUD functionality for student records, enrollment statuses, and profiles.",
      "Added JavaScript form validation and dynamic content rendering for a smooth user experience."
    ],
    architecture: {
      backend: "Django MVT architecture with robust view logic and model validation.",
      database: "Structured SQL tables for student records, course mappings, and administrative privileges.",
      security: "Role-based permissions separating administrator tasks from read-only viewers.",
      ui: "Interactive dashboards with real-time field validation and filterable tables."
    },
    githubUrl: "",
    demoUrl: "",
  }
];

export const educationData = [
  {
    id: "edu-bca",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Sri Matha Degree College",
    period: "Graduated",
    score: "CGPA: 8.5",
    description:
      "Graduated with distinction with an 8.5 CGPA. Focused coursework included Object-Oriented Programming, Data Structures, Relational Database Management Systems (RDBMS), Operating Systems, and Web Application Development.",
    badge: "8.5 CGPA"
  },
  {
    id: "edu-jspiders",
    degree: "Complete Python Full Stack Development Course",
    institution: "J Spiders, Bengaluru",
    period: "Professional Training",
    score: "Certified Full Stack Trainee",
    description:
      "Intensive practical training covering core Python, advanced Object-Oriented Programming, Django MVT framework, Django REST Framework, SQL schema design, and front-end essentials (HTML5, CSS3, JavaScript).",
    badge: "Full Stack Specialization"
  },
  {
    id: "edu-puc",
    degree: "Pre-University Course (PUC)",
    institution: "Little Flower Composite PU College",
    period: "Completed",
    score: "Percentage: 70%",
    description:
      "Completed pre-university education with strong academic focus on analytical thinking, mathematics, and foundational science curricula.",
    badge: "70%"
  }
];

export const certificationsData = [
  {
    id: "cert-genai",
    title: "Introduction to Generative AI",
    issuer: "Simplilearn SkillUp",
    date: "Completed June 2026",
    description: "Foundational training in Generative AI architectures, Large Language Models (LLMs), prompt engineering fundamentals, and real-world AI applications.",
    credentialUrl: "", // Supply URL if available
    skills: ["Generative AI", "LLMs", "Prompt Engineering"]
  },
  {
    id: "cert-python",
    title: "Programming with Python 3.x",
    issuer: "Simplilearn SkillUp",
    date: "Completed June 2026",
    description: "Hands-on certification validating proficiency in Python 3.x syntax, data structures, OOP principles, functions, file handling, and modular development.",
    credentialUrl: "", // Supply URL if available
    skills: ["Python 3.x", "OOP", "Data Structures", "Problem Solving"]
  }
];

export const contactData = {
  email: "mohammedabbas50605@gmail.com",
  phone: "+91 74117 25609",
  displayPhone: "+91 74117 25609",
  location: "Bengaluru, Karnataka, India",
  github: "https://github.com/MSAbbas-21",
  githubUsername: "MSAbbas-21",
  linkedin: "https://linkedin.com/in/mohammed-abbas",
  linkedinUsername: "mohammed-abbas",
  // Form submission: Can be connected to Formspree, Formkeep, or EmailJS
  formspreeEndpoint: "", // Optional: e.g. "https://formspree.io/f/xyz"
};
