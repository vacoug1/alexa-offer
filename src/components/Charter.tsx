import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { config } from '../config'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function Charter() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const reducedMotion = useReducedMotion()

  return (
    <section ref={sectionRef} className="py-32 bg-cream">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-forest mb-6">
            Your First 90 Days
          </h2>
          <p className="text-charcoal/60 text-lg max-w-2xl mx-auto">
            Concrete, ambitious, and achievable. This is the path to ownership.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-forest/20 via-forest to-forest/20 transform md:-translate-x-1/2" />

          <div className="space-y-16">
            {config.charter.map((phase, index) => (
              <PhaseCard
                key={index}
                phase={phase}
                index={index}
                isInView={isInView}
                reducedMotion={reducedMotion}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface PhaseCardProps {
  phase: {
    phase: string
    title: string
    outcomes: string[]
    meetings: string
    metric: string
  }
  index: number
  isInView: boolean
  reducedMotion: boolean
}

function PhaseCard({ phase, index, isInView, reducedMotion }: PhaseCardProps) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      className={`relative grid md:grid-cols-2 gap-8 items-start ${
        isEven ? '' : 'md:flex-row-reverse'
      }`}
      initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-forest rounded-full transform -translate-x-1/2 ring-4 ring-cream z-10" />

      {/* Content positioning */}
      <div className={`${isEven ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12'} pl-8 md:pl-0`}>
        <span className="inline-block px-3 py-1 bg-gold/20 text-gold rounded-full text-sm font-medium mb-4">
          {phase.phase}
        </span>
        <h3 className="font-serif text-2xl md:text-3xl text-forest mb-6">
          {phase.title}
        </h3>

        <div className="bg-sage rounded-2xl p-6 text-left">
          <h4 className="text-sm font-medium text-charcoal/50 uppercase tracking-wide mb-4">
            What you'll deliver
          </h4>
          <ul className="space-y-3 mb-6">
            {phase.outcomes.map((outcome, i) => (
              <li key={i} className="flex gap-3 text-charcoal/80">
                <span className="text-forest mt-1">→</span>
                <span>{outcome}</span>
              </li>
            ))}
          </ul>

          <div className="pt-4 border-t border-sage-dark">
            <p className="text-sm text-charcoal/60 mb-3">
              <span className="font-medium text-charcoal/80">Key meetings:</span> {phase.meetings}
            </p>
            <div className="flex items-center gap-2 bg-forest/5 rounded-lg p-3">
              <span className="text-gold">📊</span>
              <span className="text-sm">
                <span className="font-medium text-forest">Your metric:</span>{' '}
                <span className="text-charcoal/70">{phase.metric}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Empty column for layout */}
      {isEven && <div className="hidden md:block" />}
    </motion.div>
  )
}
