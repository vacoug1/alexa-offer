import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { config } from '../config'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function SocialProof() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const reducedMotion = useReducedMotion()

  return (
    <section ref={sectionRef} className="py-32 bg-sage">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-forest mb-4">
            What people say
          </h2>
          <p className="text-charcoal/50">
            Notes from inside the company
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {config.quotes.map((quote, index) => (
            <QuoteCard
              key={index}
              quote={quote}
              index={index}
              isInView={isInView}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface QuoteCardProps {
  quote: {
    text: string
    author: string
    role: string
  }
  index: number
  isInView: boolean
  reducedMotion: boolean
}

function QuoteCard({ quote, index, isInView, reducedMotion }: QuoteCardProps) {
  const rotations = [-1, 0.5, -0.5]
  const rotation = rotations[index % 3]

  return (
    <motion.div
      className="bg-cream rounded-2xl p-6 shadow-sm relative"
      style={{ transform: `rotate(${rotation}deg)` }}
      initial={reducedMotion ? {} : { opacity: 0, y: 30, rotate: rotation * 3 }}
      animate={isInView ? { opacity: 1, y: 0, rotate: rotation } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={reducedMotion ? {} : { y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
    >
      {/* Decorative pin */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gold rounded-full shadow-md" />

      <p className="text-charcoal/80 italic leading-relaxed mb-6 pt-2">
        "{quote.text}"
      </p>

      <div className="border-t border-sage pt-4">
        <p className="font-medium text-forest text-sm">{quote.author}</p>
        <p className="text-charcoal/50 text-xs">{quote.role}</p>
      </div>
    </motion.div>
  )
}
