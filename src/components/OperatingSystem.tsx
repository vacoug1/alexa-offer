import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { config } from '../config'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function OperatingSystem() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const reducedMotion = useReducedMotion()

  return (
    <section ref={sectionRef} className="py-32 bg-charcoal text-cream">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl mb-4">
            {config.operatingSystemTagline}
          </h2>
          <p className="text-cream/50 text-lg">
            Here's where we are — and where we need you
          </p>
        </motion.div>

        {/* Terminal-style container */}
        <motion.div
          className="bg-charcoal-light rounded-2xl overflow-hidden border border-cream/10"
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Window chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-cream/10">
            <div className="w-3 h-3 rounded-full bg-red-400/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
            <div className="w-3 h-3 rounded-full bg-green-400/80" />
            <span className="ml-3 text-xs text-cream/40 font-mono">operating-system.config</span>
          </div>

          {/* Settings list */}
          <div className="divide-y divide-cream/5">
            {config.operatingSystem.map((item, index) => (
              <SettingRow
                key={index}
                item={item}
                index={index}
                isInView={isInView}
                reducedMotion={reducedMotion}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

interface SettingRowProps {
  item: {
    label: string
    description: string
    example: string
  }
  index: number
  isInView: boolean
  reducedMotion: boolean
}

function SettingRow({ item, index, isInView, reducedMotion }: SettingRowProps) {
  return (
    <motion.div
      className="p-6 hover:bg-cream/5 transition-colors"
      initial={reducedMotion ? {} : { opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
    >
      <div className="flex items-start justify-between gap-6">
        <div className="flex-1">
          <h3 className="font-medium text-cream mb-1">{item.label}</h3>
          <p className="text-cream/60 text-sm mb-3">{item.description}</p>
          <p className="text-gold/70 text-sm font-mono">
            // {item.example}
          </p>
        </div>

        {/* Toggle (visual only) */}
        <motion.div
          className="w-12 h-7 bg-forest rounded-full p-1 flex-shrink-0"
          initial={{ opacity: 0.5 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 + index * 0.1 }}
        >
          <motion.div
            className="w-5 h-5 bg-cream rounded-full shadow-sm"
            initial={{ x: 0 }}
            animate={isInView ? { x: 20 } : {}}
            transition={{ delay: 0.6 + index * 0.1, type: "spring", stiffness: 300 }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
