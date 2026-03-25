import { connectDB } from "../config/db.js";
import { Project } from "../models/Project.js";
import { Skill } from "../models/Skill.js";
import { Service } from "../models/Service.js";
import { Experience } from "../models/Experience.js";
import { Testimonial } from "../models/Testimonial.js";
import { SiteSettings } from "../models/SiteSettings.js";

const projects = [
  { title: "Premium Portfolio Platform", slug: "premium-portfolio-platform", category: "Full Stack", summary: "Modern developer portfolio with premium UI and API-driven content.", description: "A full-stack portfolio starter built with React, Express, and MongoDB.", solution: "Separated frontend and backend and added seeded content for future expansion.", techStack: ["React","Vite","Tailwind CSS","Node.js","Express","MongoDB"], featured: true, sortOrder: 1 },
  { title: "Business Dashboard Suite", slug: "business-dashboard-suite", category: "Dashboard", summary: "Clean dashboard UI for operations and analytics.", description: "A modular dashboard concept focused on scalable CRUD patterns.", solution: "Used reusable components and a clear layout strategy.", techStack: ["React","Express","MongoDB"], featured: true, sortOrder: 2 },
  { title: "E-commerce Experience", slug: "ecommerce-experience", category: "Full Stack", summary: "Online shop concept with responsive storefront.", description: "An e-commerce starter oriented around clean product presentation.", solution: "Balanced UI polish with backend-ready structure.", techStack: ["React","Node.js","MongoDB"], featured: false, sortOrder: 3 }
];
const skills = [
  { category: "Frontend", items: ["React","Vite","Tailwind CSS","JavaScript","HTML5","CSS3"], sortOrder: 1 },
  { category: "Backend", items: ["Node.js","Express.js","REST API","Validation","MVC"], sortOrder: 2 },
  { category: "Database", items: ["MongoDB","Mongoose","Schema Design"], sortOrder: 3 },
  { category: "Tools", items: ["Git","GitHub","Postman","Render","Vercel"], sortOrder: 4 }
];
const services = [
  { title: "Web Development", description: "Modern responsive websites with premium UI and clean structure.", icon: "Globe", sortOrder: 1 },
  { title: "Backend Development", description: "Scalable APIs with Node.js, Express, and MongoDB.", icon: "Server", sortOrder: 2 },
  { title: "Dashboard Systems", description: "Business dashboards and management interfaces.", icon: "LayoutDashboard", sortOrder: 3 },
  { title: "Project Architecture", description: "Organized full-stack project setup for growth and maintenance.", icon: "Briefcase", sortOrder: 4 }
];
const experiences = [{ company: "Freelance", role: "Full-Stack Developer", duration: "2024 - Present", points: ["Built portfolio and business-facing web apps with React and Node.js.","Designed reusable frontend systems and clean backend APIs.","Focused on client-ready UI and scalable code organization."], sortOrder: 1 }];
const testimonials = [{ name: "Client Name", role: "Business Owner", quote: "Professional, detail-oriented, and capable of building a polished final product.", sortOrder: 1 },{ name: "Startup Founder", role: "Founder", quote: "Strong full-stack implementation with a modern UI eye.", sortOrder: 2 }];
const settings = { name: "Your Name Here", role: "Full-Stack Developer", tagline: "I build modern web products with premium UI and scalable backend systems.", email: "your@email.com", phone: "+7 700 000 0000", location: "Astana, Kazakhstan", resumeUrl: "#" };

async function seed() {
  await connectDB();
  await Promise.all([Project.deleteMany({}), Skill.deleteMany({}), Service.deleteMany({}), Experience.deleteMany({}), Testimonial.deleteMany({}), SiteSettings.deleteMany({})]);
  await Project.insertMany(projects); await Skill.insertMany(skills); await Service.insertMany(services); await Experience.insertMany(experiences); await Testimonial.insertMany(testimonials); await SiteSettings.create(settings);
  console.log("Seed completed"); process.exit(0);
}
seed().catch((error)=>{ console.error("Seed failed:", error); process.exit(1); });
