import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function ProjectCard({ image, title, type, description, demoLink, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
      className="bg-black border border-gold/30 rounded-lg overflow-hidden hover:border-gold hover-glow transition-all duration-300"
    >
          <div className="h-48 bg-gradient-to-br from-gold-solid/20 to-black flex items-center justify-center relative">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain p-4"
          />
        ) : (
          <div className="text-gold-solid/50 text-6xl">📱</div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-gold font-heading text-lg">{title}</h3>
          <span className="text-white/50 font-body text-xs uppercase bg-gold-solid/10 px-2 py-1 rounded">
            {type}
          </span>
        </div>
        <p className="text-white/70 font-body text-sm mb-4 leading-relaxed">{description}</p>
        <Link
          href={demoLink || '/projects'}
          className="inline-block bg-gold text-black font-heading text-sm px-6 py-2 rounded hover:opacity-90 transition-opacity uppercase tracking-wide"
        >
          View Demo
        </Link>
      </div>
    </motion.div>
  )
}

