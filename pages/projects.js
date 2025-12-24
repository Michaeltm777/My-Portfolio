import { motion } from "framer-motion";
import Link from "next/link";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
    const projects = [
        {
            title: "E-Commerce Platform",
            type: "Website",
            description:
                "Full-featured online store with payment integration, inventory management, and admin dashboard.",
            image: "/images/Ecomm.png",
            demoLink: "/projects/ecommerce",
        },
        {
            title: "Task Management App",
            type: "App",
            description:
                "Cross-platform productivity app with real-time synchronization and team collaboration features.",
            image: "/images/tsm.png",
            demoLink: "/projects/taskapp",
        },
        {
            title: "Analytics Dashboard",
            type: "Software",
            description:
                "Enterprise-level data visualization platform with custom reporting and real-time metrics.",
            image: "/images/anal.png",
            demoLink: "/projects/analytics",
        },
        {
            title: "Portfolio Website",
            type: "Website",
            description:
                "Modern, responsive portfolio site with smooth animations and optimized performance.",
            image: "/images/portf.png",
            demoLink: "/projects/portfolio",
        },
        {
            title: "Fitness Tracker",
            type: "App",
            description:
                "Mobile fitness application with workout plans, progress tracking, and social features.",
            image: "/images/fit.png",
            demoLink: "/projects/fitness",
        },
        {
            title: "CRM System",
            type: "Software",
            description:
                "Customer relationship management solution with automation, reporting, and integrations.",
            image: "/images/crm.png",
            demoLink: "/projects/crm",
        },
    ];

    return (
        <>
            <SEO
                title="Projects"
                description="A showcase of our recent work and digital solutions. Explore our portfolio including E-Commerce platforms, Mobile Apps, Analytics Dashboards, and more."
                keywords="portfolio, projects, web development projects, mobile app projects, software projects, case studies"
            />
            <Navbar />
            <main className="min-h-screen pt-24 px-6">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl md:text-6xl font-heading mb-6 text-gold">
                            Projects
                        </h1>
                        <p className="text-white/70 font-body text-lg max-w-2xl mx-auto">
                            A showcase of my recent work and digital solutions
                        </p>
                    </motion.div>

                    {/* Database Editor Software Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-16 bg-black border-2 border-gold/30 rounded-lg p-8 md:p-12 hover:border-gold hover-glow transition-all duration-300"
                    >
                        <div className="max-w-4xl mx-auto">
                            <div className="flex items-center justify-center mb-6">
                                <div className="text-6xl mb-4">💾</div>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-heading mb-4 text-gold text-center">
                                Database Editor
                            </h2>
                            <p className="text-xl text-gold-solid font-body mb-6 text-center">
                                Professional SQLite Database Editor
                            </p>

                            <p className="text-white/90 font-body text-lg leading-relaxed mb-8 text-center">
                                <strong>Database Editor</strong> is a powerful and user-friendly
                                desktop application for managing and editing SQLite database files.
                                Built with Electron technology and without requiring SQLite
                                installation, this software provides complete database management
                                capabilities.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-black/50 border border-gold/20 rounded-lg p-6">
                                    <h3 className="text-gold font-heading text-lg mb-3 flex items-center">
                                        <span className="mr-2">📊</span>
                                        Complete Table Management
                                    </h3>
                                    <ul className="text-white/80 font-body text-sm space-y-2">
                                        <li className="flex items-start">
                                            <span className="text-gold-solid mr-2">•</span>
                                            <span>
                                                Create and edit tables with column definitions and
                                                data types
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-gold-solid mr-2">•</span>
                                            <span>View complete table structure</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-gold-solid mr-2">•</span>
                                            <span>Manage indexes for optimization</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-black/50 border border-gold/20 rounded-lg p-6">
                                    <h3 className="text-gold font-heading text-lg mb-3 flex items-center">
                                        <span className="mr-2">📝</span>
                                        Data Management
                                    </h3>
                                    <ul className="text-white/80 font-body text-sm space-y-2">
                                        <li className="flex items-start">
                                            <span className="text-gold-solid mr-2">•</span>
                                            <span>
                                                View data with pagination (100 records per page)
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-gold-solid mr-2">•</span>
                                            <span>Add, edit, and delete records</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-gold-solid mr-2">•</span>
                                            <span>Automatic validation</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-black/50 border border-gold/20 rounded-lg p-6">
                                    <h3 className="text-gold font-heading text-lg mb-3 flex items-center">
                                        <span className="mr-2">🔍</span>
                                        Advanced Search
                                    </h3>
                                    <ul className="text-white/80 font-body text-sm space-y-2">
                                        <li className="flex items-start">
                                            <span className="text-gold-solid mr-2">•</span>
                                            <span>Smart search across all tables and columns</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-gold-solid mr-2">•</span>
                                            <span>
                                                Diacritic-insensitive search for Arabic/Persian
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-gold-solid mr-2">•</span>
                                            <span>Exact or relative search options</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-black/50 border border-gold/20 rounded-lg p-6">
                                    <h3 className="text-gold font-heading text-lg mb-3 flex items-center">
                                        <span className="mr-2">💾</span>
                                        Import & Export
                                    </h3>
                                    <ul className="text-white/80 font-body text-sm space-y-2">
                                        <li className="flex items-start">
                                            <span className="text-gold-solid mr-2">•</span>
                                            <span>Export to SQL, JSON, CSV formats</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-gold-solid mr-2">•</span>
                                            <span>Import schema from SQL files</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-gold-solid mr-2">•</span>
                                            <span>
                                                Export schema (CREATE TABLE and CREATE INDEX)
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex flex-col gap-6 justify-center items-center">
                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
                                    <a
                                        href="/softwear/Database Editor 1.0.0.exe"
                                        download="Database Editor 1.0.0.exe"
                                        className="bg-gold text-black font-heading px-8 py-4 rounded uppercase tracking-wide hover:opacity-90 hover-glow transition-all duration-300 text-center min-w-[200px]"
                                    >
                                        📥 Download Windows Version
                                    </a>
                                    <a
                                        href="/softwear/Database Editor-1.0.0.dmg"
                                        download="Database Editor-1.0.0.dmg"
                                        className="bg-gold text-black font-heading px-8 py-4 rounded uppercase tracking-wide hover:opacity-90 hover-glow transition-all duration-300 text-center min-w-[200px]"
                                    >
                                        📥 Download macOS Version
                                    </a>
                                </div>
                                <div className="text-white/70 font-body text-sm text-center">
                                    <p>✅ Free and Open Source</p>
                                    <p>✅ No SQLite installation required</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={project.title}
                                image={project.image}
                                title={project.title}
                                type={project.type}
                                description={project.description}
                                demoLink={project.demoLink}
                                delay={index * 0.1}
                            />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
