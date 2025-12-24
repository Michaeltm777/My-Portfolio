import { motion } from 'framer-motion'
import Link from 'next/link'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Pricing() {
  const packages = [
    {
      name: 'Single Static Page',
      description: 'Clean, responsive, one-page design',
      delivery: '24h',
      price: '$149.99',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile Friendly'],
    },
    {
      name: '3 Static Pages',
      description: 'Multi-section site',
      delivery: '48h',
      price: '$349.99',
      features: ['Up to 3 Pages', 'Custom Design', 'Contact Form', 'Social Integration'],
      popular: true,
    },
    {
      name: 'Dynamic or Large Projects',
      description: 'Tailored to requirements',
      delivery: '—',
      price: 'Contact Me',
      features: ['Custom Solution', 'Full Stack Development', 'Database Integration', 'Ongoing Support'],
    },
  ]

  return (
    <>
      <SEO
        title="Pricing"
        description="Transparent pricing for all your development needs. Fastest delivery - one-quarter of standard time. Starting from $149.99 for single page websites."
        keywords="pricing, web development pricing, website cost, app development price, software development pricing, affordable web design"
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
            <h1 className="text-5xl md:text-6xl font-heading mb-6 text-gold">Pricing</h1>
            <p className="text-white/70 font-body text-lg max-w-2xl mx-auto mb-4">
              Transparent pricing for all your development needs
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gold font-heading text-sm uppercase tracking-wider"
            >
              ⚡ Fastest Delivery – One-Quarter of Standard Time
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`relative bg-black border-2 rounded-lg p-8 ${
                  pkg.popular
                    ? 'border-gold gold-glow'
                    : 'border-gold/30 hover:border-gold'
                } hover-glow transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gold text-black font-heading text-xs px-4 py-1 rounded-full uppercase">
                      Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-gold font-heading text-2xl mb-2">{pkg.name}</h3>
                <p className="text-white/70 font-body text-sm mb-6">{pkg.description}</p>
                
                <div className="mb-6">
                  <div className="text-4xl font-heading text-gold-solid mb-2">{pkg.price}</div>
                  <div className="text-white/50 font-body text-sm">Delivery: {pkg.delivery}</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center text-white/80 font-body text-sm">
                      <span className="text-gold-solid mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  href={pkg.price === 'Contact Me' ? '/contact' : '/contact'}
                  className={`block text-center font-heading uppercase tracking-wide py-3 rounded transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-gold text-black hover:opacity-90'
                      : 'border-2 border-gold text-gold-solid hover:bg-gold hover:text-black'
                  }`}
                >
                  {pkg.price === 'Contact Me' ? 'Get Quote' : 'Get Started'}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

