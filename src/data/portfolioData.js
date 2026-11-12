const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const profile = {
  name: "Amina Gaddour",
  firstName: "Amina",
  role: "Étudiante en génie informatique",
  phone: "+33 7 46 44 96 89",
  email: "aminagaddour2@gmail.com",
  linkedin: "https://www.linkedin.com/in/amina-gaddour-a6a633340/",
  github: "https://github.com/amina-gaddour",
  portrait: asset("images/amina-accueil.jpg"),
  cv: asset("cv-amina-gaddour.pdf"),
  emailLink: "mailto:aminagaddour2@gmail.com",
};

export const skills = {
  languages: [
    { name: "JavaScript", description: "Développement web", icon: "javascript" },
    { name: "TypeScript", description: "JavaScript typé", icon: "typescript" },
    { name: "Java", description: "Développement logiciel", icon: "java" },
    { name: "Python", description: "Développement et IA", icon: "python" },
    { name: "SQL", description: "Requêtes et bases de données", icon: "sql" },
    { name: "HTML", description: "Structure des pages web", icon: "html" },
    { name: "CSS", description: "Mise en forme web", icon: "css" },
  ],
  software: [
    { name: "React", description: "Interfaces web", icon: "react" },
    { name: "Next.js", description: "Applications React", icon: "nextjs" },
    { name: "Spring Boot", description: "API Java", icon: "spring" },
    { name: "FastAPI", description: "API Python", icon: "fastapi" },
  ],
  ai: [
    { name: "Machine Learning", description: "Modèles prédictifs", icon: "ml" },
    { name: "Intégration de LLM", description: "Modèles de langage", icon: "ai" },
  ],
  databases: [
    { name: "MySQL", description: "Base relationnelle", icon: "mysql" },
    { name: "PostgreSQL", description: "Base relationnelle", icon: "postgresql" },
    { name: "MongoDB", description: "Base NoSQL", icon: "mongodb" },
  ],
  tools: [
    { name: "Git", description: "Gestion de versions", icon: "git" },
    { name: "GitHub", description: "Collaboration", icon: "github" },
    { name: "Docker", description: "Conteneurisation", icon: "docker" },
  ],
};

export const projects = [
  { id: "event-planner", year: "2026", categories: ["software"], technologies: ["Laravel", "MySQL"], cover: asset("images/projects/event-planner-dashboard.png"), github: "" },
  { id: "hr-workflow", year: "2024", categories: ["software"], technologies: ["Java 8", "Spring Boot", "React", "SQL Server"], cover: asset("images/projects/hr-workflow-dashboard.jpg"), github: "" },
  { id: "docia", year: "2026", categories: ["software", "ai"], technologies: ["Python", "FastAPI", "Next.js", "TypeScript", "OCR", "Docling", "Ollama", "Qwen2.5", "Gemini API"], cover: asset("images/projects/docuai-dashboard.png"), demoVideo: asset("videos/docia-demo.mp4"), github: "" },
  { id: "riskinsight", year: "2025", categories: ["ai"], technologies: ["Python", "scikit-learn", "Flask", "React"], cover: asset("images/projects/prediction-sinistre-dashboard.jpg"), github: "" },
  { id: "mission", year: "2026", categories: ["software"], technologies: ["Java", "Spring Boot", "Angular", "Spring Security", "MySQL"], cover: asset("images/projects/mission-management-dashboard.png"), github: "" },
];

export const experiences = [
  {
    id: "kpit",
    company: "KPIT",
    technologies: ["Spring Boot", "Angular", "Docker"],
  },
  {
    id: "crns",
    company: "Centre de Recherche de Sfax (CRNS)",
    technologies: ["FastAPI", "React", "Three.js", "IA"],
  },
  {
    id: "clinisys",
    company: "CliniSys",
    technologies: ["Java 8", "Spring Boot", "React", "SQL Server"],
  },
];
