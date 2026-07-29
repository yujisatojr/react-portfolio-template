import React from "react";
import trafficBuddy from "../assets/images/trafficbuddy.png";
import projectPlanner from "../assets/images/project-tracker.png";
import shareplate from "../assets/images/Shareplate.png";
import emiCalculator from "../assets/images/emiCalculator.png";
import apiZombie from "../assets/images/apiZombie.png";
import resumeAnalyzer from "../assets/images/ResumeAnalyzer.png";
import cicdPipeline from "../assets/images/CICD.jpg";
import hospitalmsystem from "../assets/images/hospital-management-system-poster.png";
import ShopEase from "../assets/images/shopease.png";
import NetworkVisualizer from "../assets/images/compnetwork.png";
import streamfetch from "../assets/images/Streamfetch.png";
import clipstack from "../assets/images/Clipstack.png";
import "../assets/styles/Project.scss";

interface ProjectData {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: ProjectData[] = [
  {
    title: "Traffic Buddy PC-City",
    description:
      "WhatsApp-based traffic reporting system for PCMC Traffic Division with GPS routing, bilingual interface, real-time alerts, and an admin dashboard with analytics.",
    image: trafficBuddy,
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "AWS S3",
      "Twilio",
      "Geo-Mapping",
      "JWT",
      "GPS",
      "Data Visualization",
    ],
    liveUrl: "https://shripad735.github.io/Traffic-Buddy-Details/",
  },
  {
    title: "StreamFetch - Desktop Media Downloader",
    description:
      "Secure Electron desktop app with React + Tailwind UI for downloading media via yt-dlp and ffmpeg. IPC-safe architecture, background queue handling, and automated Windows releases.",
    image: streamfetch,
    tags: [
      "Electron",
      "React",
      "Node.js",
      "Tailwind CSS",
      "Vite",
      "yt-dlp",
      "ffmpeg",
      "GitHub Actions",
    ],
    liveUrl: "https://shripad735.github.io/streamfetch/",
    githubUrl: "https://github.com/Shripad735/streamfetch",
  },
  {
    title: "ClipStack",
    description:
      "Lightweight, local-first clipboard manager for Windows built with Tauri (Rust) and React + Vite. Persistent history, fuzzy search, pinned items, snippets, and a global overlay shortcut.",
    image: clipstack,
    tags: [
      "Tauri",
      "Rust",
      "React",
      "TypeScript",
      "Vite",
      "SQLite",
      "Fuzzy Search",
      "Windows",
    ],
    liveUrl: "https://shripad735.github.io/ClipStack/",
    githubUrl: "https://github.com/Shripad735/ClipStack",
  },
  {
    title: "MERN App CI/CD with AWS",
    description:
      "Step-by-step tutorial on deploying a MERN To-Do app to AWS EC2 using CloudFormation, CodePipeline, CodeBuild, and CodeDeploy with automated GitHub-triggered builds.",
    image: cicdPipeline,
    tags: [
      "AWS",
      "CloudFormation",
      "EC2",
      "CodePipeline",
      "CI/CD",
      "CodeBuild",
      "CodeDeploy",
      "IAM",
      "S3",
      "Parameter Store",
    ],
    liveUrl:
      "https://medium.com/@shripadkhandare/automate-your-mern-app-deployment-on-aws-with-cloudformation-a-ci-cd-pipeline-439eae6f8953",
    githubUrl: "https://github.com/Shripad735/To-Do-App",
  },
  {
    title: "SharePlate - Food Waste Reduction",
    description:
      "Platform connecting restaurants with surplus food to NGOs. MERN stack with real-time listings, location-based search, and JWT auth.",
    image: shareplate,
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Google Maps API",
      "AWS S3",
      "Chart.js",
    ],
    liveUrl: "https://techathon-frontend-tau.vercel.app",
    githubUrl: "https://github.com/Shripad735/SharePlateTSX",
  },
  {
    title: "APIZombie - AI-Powered API Testing",
    description:
      "All-in-one API testing platform unifying REST, GraphQL, and gRPC with Groq AI for natural-language request generation, visual workflow builder, and analytics.",
    image: apiZombie,
    tags: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "Groq AI",
      "GraphQL",
      "gRPC",
      "Recharts",
      "Tailwind CSS",
    ],
    liveUrl: "https://kiroween-api-zombie-1tj4.vercel.app/",
    githubUrl: "https://github.com/Shripad735/Kiroween-APIZombie",
  },
  {
    title: "Network Visualizer",
    description:
      "Interactive educational platform for learning networking concepts — line coding visualization, TCP/UDP analysis, DNS/HTTP simulations, subnet calculator, and network mapping.",
    image: NetworkVisualizer,
    tags: [
      "React",
      "Tailwind CSS",
      "React Router",
      "Recharts",
      "Lucide React",
      "Computer Networking",
    ],
    liveUrl: "https://shripad735.github.io/comp-network/",
    githubUrl: "https://github.com/Shripad735/comp-network",
  },
  {
    title: "Project Planner",
    description:
      "Collaborative project management web app with MERN stack and MySQL. Dual user roles for task assignment and completion verification.",
    image: projectPlanner,
    tags: [
      "React",
      "Vite",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Firebase",
      "Tailwind CSS",
    ],
    liveUrl: "https://super-30-project-tracker-4kji.vercel.app",
    githubUrl: "https://github.com/OMpawar140/Super-30-Project-Tracker",
  },
  {
    title: "Financial Calculator Suite",
    description:
      "Full-stack mobile app with seven essential financial tools — EMI, SIP, PPF, and GST calculators optimized for Indian users.",
    image: emiCalculator,
    tags: [
      "React Native",
      "Expo",
      "Node.js",
      "Express",
      "MongoDB",
      "Supabase",
      "Firebase",
      "JWT",
    ],
    githubUrl: "https://github.com/Shripad735/EMI-Calculator",
  },
  {
    title: "Hospital Management System",
    description:
      "Hospital management system using Java, Servlets, and MySQL with patient records, appointments, billing, and user auth on Apache Tomcat.",
    image: hospitalmsystem,
    tags: [
      "Java",
      "JSP",
      "Servlets",
      "JDBC",
      "MySQL",
      "Apache Tomcat",
      "HTML/CSS",
    ],
    githubUrl: "https://github.com/Shripad735/Hospital-Management-System",
  },
  {
    title: "Resume Analyzer - Python",
    description:
      "Resume analyzer using Python, NLTK, and Streamlit with NLP-based skill assessment, smart suggestions, and an insights dashboard.",
    image: resumeAnalyzer,
    tags: [
      "Python",
      "Streamlit",
      "NLTK",
      "spaCy",
      "PyMySQL",
      "PDFMiner",
      "Pandas",
      "Plotly",
    ],
    githubUrl: "https://github.com/Shripad735/Resume-Analyser-Python",
  },
  {
    title: "ShopEase - E-commerce Chatbot",
    description:
      "Intelligent customer support chatbot with Streamlit and Groq AI. Multi-language support, order tracking, product recommendations, and voice responses.",
    image: ShopEase,
    tags: [
      "Python",
      "Streamlit",
      "Groq AI",
      "MongoDB",
      "Speech Recognition",
      "Plotly",
    ],
    liveUrl: "https://shopease-se-hackethon.streamlit.app",
    githubUrl: "https://github.com/Shripad735/ShopEase",
  },
];

function ProjectCard({ project }: { project: ProjectData }) {
  return (
    <article className="project-card">
      <img className="project-card-image" src={project.image} alt="" loading="lazy" decoding="async" />
      <div className="project-card-content">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <ul className="project-tags" aria-label={`${project.title} technologies`}>
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        <div className="project-actions">
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">View project</a>}
          {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer">Source code</a>}
        </div>
      </div>
    </article>
  );
}

function Project() {
  return (
    <section className="projects-section">
      <div className="projects-header">
        <p className="page-eyebrow">Selected work</p>
        <h1>Personal Projects</h1>
        <p className="projects-subtitle">
          Real-world applications and tools I&apos;ve built, from backend systems to cross-platform desktop apps.
        </p>
      </div>
      <div className="projects-grid">
        {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
      </div>
    </section>
  );
}

export default Project;
