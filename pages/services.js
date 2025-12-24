import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ServiceCard from '../components/ServiceCard'

export default function Services() {
  const services = [
    {
      image: '/images/wd.png',
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern frameworks. Responsive, fast, and SEO-optimized solutions tailored to your business needs.',
    },
    {
      image: '/images/mobileApp.png',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android. From concept to deployment, delivering seamless user experiences.',
    },
    {
      image: '/images/pc.png',
      title: 'Custom Software',
      description: 'Bespoke software solutions designed to solve your unique business challenges. Scalable, secure, and maintainable code that grows with you.',
    },
    {
      image: '/images/Optimization.png',
      title: 'Optimization',
      description: 'Performance optimization, code refactoring, and technical improvements. Make your existing applications faster, more efficient, and cost-effective.',
    },
  ]

  return (
    <>
      <SEO
        title="Services"
        description="Comprehensive development solutions: Web Development, Mobile Apps, Custom Software, and Performance Optimization. Professional services tailored to your business needs."
        keywords="web development services, mobile app development, custom software development, performance optimization, web design, app development"
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
            <h1 className="text-5xl md:text-6xl font-heading mb-6 text-gold">Services</h1>
            <p className="text-white/70 font-body text-lg max-w-2xl mx-auto">
              Comprehensive development solutions to bring your digital vision to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                image={service.image}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

