import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { config } from '../config'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 })
  const reducedMotion = useReducedMotion()

  return (
    <section ref={sectionRef} className="py-32 bg-sage">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.p
          className="font-serif text-2xl md:text-3xl text-forest leading-relaxed mb-12"
          initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {config.cta.closingLine}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.a
            href={config.cta.primaryButton.href}
            className="inline-flex items-center justify-center px-8 py-4 bg-forest text-cream rounded-full font-medium text-lg shadow-lg hover:bg-forest-light transition-all"
            whileHover={reducedMotion ? {} : { scale: 1.03, boxShadow: "0 20px 40px rgba(26,46,26,0.3)" }}
            whileTap={reducedMotion ? {} : { scale: 0.98 }}
          >
            {config.cta.primaryButton.label}
          </motion.a>

          <motion.a
            href={config.cta.secondaryButton.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-forest text-forest rounded-full font-medium text-lg hover:bg-forest/5 transition-colors"
            whileHover={reducedMotion ? {} : { scale: 1.02 }}
            whileTap={reducedMotion ? {} : { scale: 0.98 }}
          >
            {config.cta.secondaryButton.label}
          </motion.a>
        </motion.div>

        <motion.div
          className="mb-8"
          initial={reducedMotion ? {} : { opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-forest font-medium">— {config.cta.signature.name}</p>
          <p className="text-charcoal/50 text-sm">{config.cta.signature.title}</p>
        </motion.div>

        <motion.p
          className="text-charcoal/50 text-sm italic"
          initial={reducedMotion ? {} : { opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          P.S. — {config.cta.ps}
        </motion.p>
      </div>
    </section>
  )
}
