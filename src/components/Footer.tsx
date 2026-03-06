import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { config } from '../config'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function Footer() {
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const [showMiniConfetti, setShowMiniConfetti] = useState(false)
  const reducedMotion = useReducedMotion()

  const handleEasterEgg = () => {
    if (hasTriggered) return

    setShowEasterEgg(true)
    setHasTriggered(true)

    if (!reducedMotion) {
      setShowMiniConfetti(true)
      setTimeout(() => setShowMiniConfetti(false), 2000)
    }

    setTimeout(() => setShowEasterEgg(false), 4000)
  }

  return (
    <footer className="py-16 bg-cream border-t border-sage-dark relative">
      {showMiniConfetti && <MiniConfetti />}

      <div className="max-w-4xl mx-auto px-6">
        {/* Offer summary */}
        <div className="text-center mb-8 space-y-2">
          <p className="text-charcoal">
            <span className="font-medium">{config.offer.role.title}</span>
            {' at '}
            <span className="font-medium text-forest">Thrive</span>
          </p>
          <p className="text-charcoal/50 text-sm">
            Base: {config.offer.compensation.base} • {config.offer.compensation.details}
          </p>
        </div>

        {/* Legal note */}
        <p className="text-center text-xs text-charcoal/40 mb-8">
          {config.footer.legalNote}
        </p>

        {/* Logo and copyright */}
        <div className="flex items-center justify-center gap-4 text-sm text-charcoal/50">
          <span className="font-serif text-xl text-forest">Thrive</span>
          <span>•</span>
          <span>© 2025 Thrive Wellness</span>
          <span>•</span>

          {/* Easter egg button */}
          <motion.button
            onClick={handleEasterEgg}
            className="p-1 hover:bg-sage rounded transition-colors"
            whileHover={reducedMotion ? {} : { scale: 1.1 }}
            whileTap={reducedMotion ? {} : { scale: 0.9 }}
            aria-label="Surprise"
          >
            🚀
          </motion.button>
        </div>

        {/* Easter egg message */}
        <AnimatePresence>
          {showEasterEgg && (
            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-forest font-mono text-lg font-medium">
                {config.footer.easterEgg}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </footer>
  )
}

function MiniConfetti() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: 50 + (Math.random() - 0.5) * 10,
    delay: Math.random() * 0.3,
    color: ['#1a2e1a', '#b8956e'][Math.floor(Math.random() * 2)],
  }))

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: p.color,
            left: `${p.x}%`,
            bottom: '20%',
          }}
          initial={{ opacity: 1, y: 0 }}
          animate={{
            opacity: 0,
            y: -150,
            x: (Math.random() - 0.5) * 100,
          }}
          transition={{
            duration: 1.5,
            delay: p.delay,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  )
}
