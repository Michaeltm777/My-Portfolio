import { motion } from "framer-motion";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
    return (
        <>
            <SEO
                title="About Us"
                description="We are a creative and professional team of web, mobile, and software developers with years of experience building fast, secure, and high-quality digital products."
                keywords="about us, web development team, software developers, mobile app developers, professional developers"
            />
            <Navbar />
            <main className="min-h-screen pt-24 px-6">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl md:text-6xl font-heading mb-6 text-gold">
                            About Us
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8 mb-20"
                    >
                        <div className="bg-black border border-gold/30 rounded-lg p-8 md:p-12 space-y-6">
                            <p className="text-white/90 font-body text-lg leading-relaxed">
                                We are a creative and professional team of web, mobile, and software
                                developers with years of experience building fast, secure, and
                                high-quality digital products.
                            </p>
                            <p className="text-white/90 font-body text-lg leading-relaxed">
                                Our mission goes beyond simply creating websites or apps — we craft
                                experiences that inspire trust, drive growth, and leave a lasting
                                impact.
                            </p>
                        </div>

                        <div className="bg-black border border-gold/30 rounded-lg p-8 md:p-12 space-y-6">
                            <p className="text-white/90 font-body text-lg leading-relaxed">
                                From emerging startups to established enterprises, we deliver
                                solutions that blend creativity, cutting-edge technology, and
                                technical precision.
                            </p>
                            <p className="text-white/90 font-body text-lg leading-relaxed">
                                Every project is an opportunity to transform ideas into reality —
                                with elegant design, seamless performance, and enduring quality.
                            </p>
                        </div>

                        <div className="bg-black border border-gold/30 rounded-lg p-8 md:p-12 space-y-6">
                            <p className="text-white/90 font-body text-lg leading-relaxed">
                                We believe that true digital success is built through collaboration,
                                passion, and attention to detail.
                            </p>
                            <p className="text-white/90 font-body text-lg leading-relaxed">
                                Welcome to our team — where every line of code is written with
                                purpose and heart.
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex justify-center"
                        >
                            <div className="w-64 h-64 bg-gradient-to-br from-gold-solid/20 to-black border border-gold/30 rounded-lg flex items-center justify-center">
                                <div className="text-gold-solid/50 text-8xl">👨‍💻</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </>
    );
}
