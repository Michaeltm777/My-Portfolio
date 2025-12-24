import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
    const highlights = [
        { title: "Experienced Developer", image: "/images/exp.png" },
        { title: "4x Faster Delivery", image: "/images/4x.png" },
        { title: "Competitive Pricing", image: "/images/pricing.png" },
        { title: "Guaranteed Quality", image: "/images/gur.png" },
    ];

    return (
        <>
            <SEO
                title="Michael Developer - Professional Web, Mobile & Software Developer"
                description="We build powerful, fast, and scalable digital solutions — from simple websites to complex enterprise systems. Professional web, mobile, and software development services."
                keywords="web developer, mobile developer, software developer, Next.js, React, Flutter, Node.js, portfolio, custom software"
            />
            <Navbar />
            <main className="min-h-screen">
                {/* Hero Section */}
                <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
                    <div className="container mx-auto text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight"
                        >
                            <span className="text-white">We build </span>
                            <span className="text-gold">powerful, fast,</span>
                            <br />
                            <span className="text-white">and scalable </span>
                            <span className="text-gold">digital solutions</span>
                            <br />
                            <span className="text-white text-3xl md:text-5xl mt-4 block">
                                — from simple websites to complex enterprise systems.
                            </span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
                        >
                            <Link
                                href="/contact"
                                className="bg-gold text-black font-heading px-8 py-4 rounded uppercase tracking-wide hover:opacity-90 hover-glow transition-all duration-300"
                            >
                                Hire Me
                            </Link>
                            <Link
                                href="/projects"
                                className="border-2 border-gold text-gold-solid font-heading px-8 py-4 rounded uppercase tracking-wide hover:bg-gold hover:text-black transition-all duration-300"
                            >
                                View My Work
                            </Link>
                        </motion.div>
                    </div>

                    {/* Scroll Arrow */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                    >
                        <a href="#highlights" className="text-gold-solid">
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                />
                            </svg>
                        </a>
                    </motion.div>
                </section>

                {/* Highlights Section */}
                <section id="highlights" className="py-20 px-6">
                    <div className="container mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl font-heading text-center mb-16 text-gold"
                        >
                            Why Choose Me
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {highlights.map((highlight, index) => (
                                <motion.div
                                    key={highlight.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="text-center p-6 border border-gold/20 rounded-lg hover:border-gold transition-all duration-300"
                                >
                                    <div className="flex justify-center mb-4">
                                        <Image
                                            src={highlight.image}
                                            alt={highlight.title}
                                            width={80}
                                            height={80}
                                            className="object-contain"
                                        />
                                    </div>
                                    <h3 className="text-gold-solid font-heading text-lg mb-2">
                                        {highlight.title}
                                    </h3>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
