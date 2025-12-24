import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Link from "next/link";
import SEO from "../../components/SEO";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import EcommerceDemo from "../../components/demos/EcommerceDemo";
import TaskAppDemo from "../../components/demos/TaskAppDemo";
import FitnessAppDemo from "../../components/demos/FitnessAppDemo";
import AnalyticsDemo from "../../components/demos/AnalyticsDemo";
import CRMDemo from "../../components/demos/CRMDemo";
import PortfolioDemo from "../../components/demos/PortfolioDemo";

// داده‌های پروژه‌ها
const projectsData = {
    ecommerce: {
        title: "E-Commerce Platform",
        type: "Website",
        description:
            "Full-featured online store with payment integration, inventory management, and admin dashboard.",
        image: "/images/Ecomm.png",
        features: [
            "Payment Gateway Integration",
            "Inventory Management System",
            "Admin Dashboard",
            "User Authentication",
            "Shopping Cart & Checkout",
            "Order Tracking",
        ],
        technologies: ["Next.js", "React", "Node.js", "MongoDB", "Stripe"],
    },
    taskapp: {
        title: "Task Management App",
        type: "App",
        description:
            "Cross-platform productivity app with real-time synchronization and team collaboration features.",
        image: "/images/tsm.png",
        features: [
            "Real-time Synchronization",
            "Team Collaboration",
            "Task Assignment",
            "Progress Tracking",
            "Notifications",
            "File Attachments",
        ],
        technologies: ["Flutter", "Firebase", "Redux", "TypeScript"],
    },
    analytics: {
        title: "Analytics Dashboard",
        type: "Software",
        description:
            "Enterprise-level data visualization platform with custom reporting and real-time metrics.",
        image: "/images/anal.png",
        features: [
            "Real-time Data Visualization",
            "Custom Reports",
            "Interactive Charts",
            "Data Export",
            "User Permissions",
            "API Integration",
        ],
        technologies: ["React", "D3.js", "Python", "PostgreSQL", "Chart.js"],
    },
    portfolio: {
        title: "Portfolio Website",
        type: "Website",
        description:
            "Modern, responsive portfolio site with smooth animations and optimized performance.",
        image: "/images/portf.png",
        features: [
            "Responsive Design",
            "Smooth Animations",
            "SEO Optimized",
            "Fast Loading",
            "Contact Form",
            "Project Showcase",
        ],
        technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    },
    fitness: {
        title: "Fitness Tracker",
        type: "App",
        description:
            "Mobile fitness application with workout plans, progress tracking, and social features.",
        image: "/images/fit.png",
        features: [
            "Workout Plans",
            "Progress Tracking",
            "Social Features",
            "Nutrition Tracking",
            "Goal Setting",
            "Statistics & Charts",
        ],
        technologies: ["React Native", "Firebase", "HealthKit", "Chart.js"],
    },
    crm: {
        title: "CRM System",
        type: "Software",
        description:
            "Customer relationship management solution with automation, reporting, and integrations.",
        image: "/images/crm.png",
        features: [
            "Contact Management",
            "Sales Pipeline",
            "Email Integration",
            "Automated Workflows",
            "Advanced Reporting",
            "API Integrations",
        ],
        technologies: ["React", "Node.js", "PostgreSQL", "Express", "JWT"],
    },
};

export default function ProjectDemo() {
    const router = useRouter();
    const { id } = router.query;

    // اگر id وجود نداشت یا در داده‌ها نبود
    if (!id || !projectsData[id]) {
        return (
            <>
                <Navbar />
                <main className="min-h-screen pt-24 px-6 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-heading text-gold mb-4">Project Not Found</h1>
                        <Link href="/projects" className="text-gold-solid hover:underline">
                            ← Back to Projects
                        </Link>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    const project = projectsData[id];

    return (
        <>
            <SEO
                title={project.title}
                description={project.description}
                keywords={`${project.title}, ${project.type}, ${project.technologies.join(', ')}, web development, software development`}
                ogImage={project.image}
            />
            <Navbar />
            <main className="min-h-screen pt-24 px-6">
                <div className="container mx-auto max-w-6xl">
                    {/* Back Button */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <Link
                            href="/projects"
                            className="inline-flex items-center text-gold-solid hover:text-gold transition-colors font-body"
                        >
                            <svg
                                className="w-5 h-5 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                            Back to Projects
                        </Link>
                    </motion.div>

                    {/* Project Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block text-white/50 font-body text-sm uppercase bg-gold-solid/10 px-3 py-1 rounded mb-4">
                            {project.type}
                        </span>
                        <h1 className="text-5xl md:text-6xl font-heading mb-6 text-gold">
                            {project.title}
                        </h1>
                        <p className="text-white/70 font-body text-lg max-w-3xl mx-auto">
                            {project.description}
                        </p>
                    </motion.div>

                    {/* Project Demo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-12 rounded-lg overflow-hidden border border-gold/30 hover:border-gold transition-all duration-300 bg-black/50 p-4 md:p-8"
                    >
                        {id === "ecommerce" && <EcommerceDemo />}
                        {id === "taskapp" && <TaskAppDemo />}
                        {id === "fitness" && <FitnessAppDemo />}
                        {id === "analytics" && <AnalyticsDemo />}
                        {id === "crm" && <CRMDemo />}
                        {id === "portfolio" && <PortfolioDemo />}
                    </motion.div>

                    {/* Project Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {/* Features */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="bg-black border border-gold/30 rounded-lg p-6"
                        >
                            <h2 className="text-gold font-heading text-2xl mb-6">Features</h2>
                            <ul className="space-y-3">
                                {project.features.map((feature, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start text-white/80 font-body"
                                    >
                                        <span className="text-gold-solid mr-3 mt-1">✓</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Technologies */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-black border border-gold/30 rounded-lg p-6"
                        >
                            <h2 className="text-gold font-heading text-2xl mb-6">Technologies</h2>
                            <div className="flex flex-wrap gap-3">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-gold-solid/10 border border-gold/30 text-gold-solid font-body text-sm px-4 py-2 rounded"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-center mb-12"
                    >
                        <Link
                            href="/contact"
                            className="inline-block bg-gold text-black font-heading px-8 py-4 rounded uppercase tracking-wide hover:opacity-90 hover-glow transition-all duration-300"
                        >
                            Get This Project
                        </Link>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </>
    );
}
