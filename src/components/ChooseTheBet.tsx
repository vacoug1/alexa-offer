import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { config } from '../config'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function ChooseTheBet() {
  const [selectedBet, setSelectedBet] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const reducedMotion = useReducedMotion()

  const selectedBetData = config.bets.find(b => b.id === selectedBet)

  return (
    <section ref={sectionRef} className="py-32 bg-forest text-cream">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            If you joined tomorrow, what would you tackle first?
          </h2>
          <p className="text-cream/60 text-lg">
            There's no wrong answer. We're curious what catches your eye.
          </p>
        </motion.div>

        <div className="space-y-4 mb-12">
          {config.bets.map((bet, index) => (
            <motion.button
              key={bet.id}
              className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-300 ${
                selectedBet === bet.id
                  ? 'border-gold bg-cream/10'
                  : selectedBet
                  ? 'border-cream/10 opacity-50'
                  : 'border-cream/20 hover:border-cream/40 hover:bg-cream/5'
              }`}
              initial={reducedMotion ? {} : { opacity: 0, x: -20 }}
              animate={isInView ? { opacity: selectedBet && selectedBet !== bet.id ? 0.5 : 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              onClick={() => setSelectedBet(bet.id)}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                    selectedBet === bet.id
                      ? 'border-gold bg-gold'
                      : 'border-cream/40'
                  }`}
                >
                  {selectedBet === bet.id && (
                    <motion.svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500 }}
                    >
                      <path
                        d="M2 6L5 9L10 3"
                        fill="none"
                        stroke="#1a2e1a"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </motion.svg>
                  )}
                </div>
                <span className={`text-lg ${selectedBet === bet.id ? 'text-gold' : ''}`}>
                  {bet.title}
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {selectedBetData && (
            <motion.div
              key={selectedBet}
              className="bg-cream/10 rounded-2xl p-8 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <motion.p
                className="text-2xl md:text-3xl font-serif text-gold mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                "{config.betResponse}"
              </motion.p>
              <motion.p
                className="text-cream/80 text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {selectedBetData.description}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
