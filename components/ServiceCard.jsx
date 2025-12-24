import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ServiceCard({ image, title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-black border border-gold/30 rounded-lg p-8 hover:border-gold hover-glow transition-all duration-300"
    >
      <div className="flex justify-center mb-4">
        <Image
          src={image}
          alt={title}
          width={80}
          height={80}
          className="object-contain"
        />
      </div>
      <h3 className="text-gold font-heading text-xl mb-4">{title}</h3>
      <p className="text-white/80 font-body text-sm leading-relaxed">{description}</p>
    </motion.div>
  )
}

