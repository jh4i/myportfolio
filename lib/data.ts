import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Code2,
  Server,
  Database,
  Bot,
  GitBranch,
  Atom,
  ArrowRight,
  Sparkle,
} from "lucide-react";

export const personalInfo = {
  name: "Johaina Banalan",
  firstName: "Johaina",
  title: "Backend Developer",
  tagline:
    "Developing thoughtful software solutions through clean architecture, reliable systems, and purposeful digital experiences.",
  location: "Quezon City, Philippines",
  email: "banalan.johaina.salunayan@gmail.com",
  bio: `Building thoughtful solutions through clean code, purposeful design, and a passion for solving real-world problems. From intuitive interfaces to reliable backend systems, I turn ideas into functional digital experiences using modern web technologies.`,
  avatar:
    "/img6.jpg",
  portrait:
    "/imgko.jpg",
  socials: [
    { name: "Instagram", icon: Instagram, url: "https://instagram.com" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/johaina-banalan-277866325/?isSelfProfile=true" },
    { name: "GitHub", icon: Github, url: "https://github.com" },
    { name: "Email", icon: Mail, url: "https://mail.google.com/mail/u/0/?hl=en&hl=en#inbox" },
  ],
  stats: [
    { value: "05", label: "Years of Learning" },
    { value: "06", label: "Development Projects" },
    { value: "02", label: "OJT Experience" },
  ],
};

export const skills = [
  {
    category: "Programming Languages",
    number: "01",
    icon: Code2,
    items: [
      { name: "C#", level: 96 },
      { name: "Javascript", level: 94 },
      { name: "SQL", level: 92 },
      { name: "Python", level: 95 },
      { name: "Java", level: 95 },
    ],
  },
  {
    category: "Backend Development",
    number: "02",
    icon: Server,
    items: [
      { name: "Node.js / NestJS", level: 93 },
      { name: "ASP.NET MVC", level: 88 },
      { name: "REST APIs", level: 90 },
      { name: "Dependency Injection", level: 95 },
      { name: "Cron Jobs", level: 95 },
    ],
  },
  {
    category: "Database Systems",
    number: "03",
    icon: Database,
    items: [
      { name: "MySQL", level: 82 },
      { name: "Knex.js", level: 90 },
      { name: "Database Transactions", level: 85 },
      { name: "CRUD Operations", level: 85 },
    ],
  },
  {
    category: "Frontend Development",
    number: "04",
    icon: Atom,
    items: [
      { name: "React", level: 80 },
      { name: "HTML5", level: 78 },
      { name: "CSS3", level: 82 },
      { name: "Tailwind CSS", level: 82 },
    ],
  },
  {
    category: " AI Development",
    number: "05",
    icon: Bot,
    items: [
      { name: "Generative AI", level: 84 },
      { name: "Prompt Engineering", level: 75 },
      { name: "LLM Integration", level: 75 },
      { name: "RAG", level: 75 },
      { name: "AI Agents", level: 75 },
    ],
  },
  {
    category: "Development Tools",
    number: "06",
    icon: GitBranch,
    items: [
      { name: "Git/Github", level: 97 },
      { name: "Visual Studio Code", level: 93 },
      { name: "Navicat", level: 91 },
      { name: "Swagger / OpenAPI", level: 91 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "PastMe",
    subtitle: "PastMe — AI-Powered Personal Journaling System",
    description:
      "A personal journaling platform designed to preserve memories, explore emotions, and encourage self-reflection. Combining digital diary entries, memory organization, and AI-assisted insights into a meaningful personal archive.",
    image: "/img2.jpg",
    tags: ["React & TypeScript", "Node.js", "MySQL", "AI Integration"],
    category: "Fashion",
    year: "092026",
    role: "Concept, Design & Development",
    featured: true,
  },
  {
    id: 2,
    title: "FranchiseFlow",
    subtitle: "FranchiseFlow — Automated Franchise Inventory Transfer System",
    description:
      "A backend automation project designed to process franchise orders, generate inventory transfer records, and reduce repetitive manual operations through scheduled tasks and database transactions.",
    image: "/img1.jpg",
    tags: ["NestJS", "TypeScript", "MySQL", "Cron Jobs & Transactions"],
    category: "Beauty",
    year: "092026",
    role: "Backend Engineering",
    featured: true,
  },
  {
    id: 3,
    title: "BiliPicks",
    subtitle: "BiliPicks — AI-Assisted Purchasing Decision System",
    description:
      "A proposed inventory and purchasing assistant for sari-sari store owners. It aims to analyze sales, inventory, customer requests, and budget constraints to recommend which products to purchase and when to restock.",
    image:
      "/img3.jpg",
    tags: ["AI-Assisted Forecasting", "Inventory Management", "Database Design", "Decision Support System"],
    category: "Jewelry",
    year: "092026",
    role: "System Analysis & Design",
    featured: true,
  },
  {
    id: 4,
    title: "DaanTayo",
    subtitle: "DaanTayo: A Map-Based Public Transportation Recommendation and Commuter Wayfinding System for Jeepneys, Buses, and UV Express in Quezon City",
    description:
      "A map-based commuting platform that recommends jeepney, bus, and UV Express routes — helping Filipino commuters identify the right signboards, boarding points, drop-off locations, and step-by-step directions to their destinations.",
    image:
      "/img4.jpg",
    tags: ["Route Recommendation", "Map Navigation", "Commute Guide", "Public Transportation"],
    category: "Wellness",
    year: "102026",
    role: "Full Stack Development",
    featured: false,
  },
  {
    id: 5,
    title: "Dokumatik",
    subtitle: "Dokumatik — An Intelligent Business Permit Requirements Validation and Record Duplication Detection System for Quezon City Enterprises.",
    description:
      "An AI-powered document verification platform that extracts information, detects inconsistencies, identifies duplicate records, and validates related documents to help businesses streamline document review and reduce manual errors.",
    image:
      "/img5.jpg",
    tags: ["React", "Typescript", "NestJS ", "MySQL", "OCR", "AI Integration"],
    category: "AI & Automation",
    year: "102026",
    role: "Full-Stack Development · Artificial Intelligence",
    featured: false,
  },
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education & Certs. ", href: "#experience" },
  { name: "Contact", href: "#contact" },
];
