import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { config } from '../config'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function ProductThesis() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const reducedMotion = useReducedMotion()

  return (
    <section ref={sectionRef} className="py-32 bg-sage">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-forest mb-6">
            The Product Thesis
          </h2>
          <p className="text-charcoal/60 text-lg max-w-2xl mx-auto">
            This is what we believe about building health products that matter.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {config.pillars.map((pillar, index) => (
            <PillarCard
              key={index}
              pillar={pillar}
              index={index}
              isExpanded={expandedIndex === index}
              onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
              isInView={isInView}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface PillarCardProps {
  pillar: {
    title: string
    summary: string
    points: string[]
    hardTruth: string
  }
  index: number
  isExpanded: boolean
  onToggle: () => void
  isInView: boolean
  reducedMotion: boolean
}

function PillarCard({ pillar, index, isExpanded, onToggle, isInView, reducedMotion }: PillarCardProps) {
  return (
    <motion.div
      className={`bg-cream rounded-2xl overflow-hidden cursor-pointer transition-shadow duration-300 ${
        isExpanded ? 'shadow-xl ring-2 ring-forest/10' : 'shadow-sm hover:shadow-lg'
      }`}
      initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onToggle}
      layout
    >
      <div className="p-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className="text-gold text-sm font-medium tracking-wide uppercase">
              {pillar.title}
            </span>
            <h3 className="font-serif text-xl text-forest mt-1">
              {pillar.summary}
            </h3>
          </div>
          <motion.div
            className="w-8 h-8 rounded-full bg-forest/5 flex items-center justify-center flex-shrink-0 ml-4"
            animate={{ rotate: isExpanded ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-forest text-xl leading-none">+</span>
          </motion.div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="space-y-3 mb-6 pt-4 border-t border-sage">
                {pillar.points.map((point, i) => (
                  <motion.li
                    key={i}
                    className="flex gap-3 text-charcoal/80"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="text-forest mt-1.5 text-xs">●</span>
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="bg-forest/5 rounded-xl p-4">
                <p className="text-forest/80 italic text-sm">
                  <span className="text-gold mr-2">⚡</span>
                  {pillar.hardTruth}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
