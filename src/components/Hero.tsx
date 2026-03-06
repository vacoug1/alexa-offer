import { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { config } from '../config'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function Hero() {
  const [hasScrolled, setHasScrolled] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const containerRef = useRef<HTMLElement>(null)
  const reducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !hasScrolled) {
        setHasScrolled(true)
        if (!reducedMotion) {
          setShowConfetti(true)
          setTimeout(() => setShowConfetti(false), 3000)
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasScrolled, reducedMotion])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sage via-sage to-sage-dark" />

      {/* Subtle floating orbs */}
      {!reducedMotion && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full opacity-30"
            style={{
              background: 'radial-gradient(circle, rgba(26,46,26,0.08) 0%, transparent 70%)',
              top: '10%',
              left: '20%',
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-[400px] h-[400px] rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(184,149,110,0.15) 0%, transparent 70%)',
              bottom: '20%',
              right: '15%',
            }}
            animate={{
              x: [0, -20, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      )}

      {/* Confetti burst */}
      {showConfetti && <ConfettiBurst />}

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        style={reducedMotion ? {} : { opacity, y, scale }}
      >
        {/* Small intro line */}
        <motion.p
          className="text-forest/60 text-sm tracking-[0.2em] uppercase mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          An invitation
        </motion.p>

        {/* Main headline */}
        <motion.h1
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-forest leading-[1.2] mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {config.hero.headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {config.hero.subheadline}
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-forest/30 flex justify-center pt-2"
            animate={reducedMotion ? {} : { y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-2 bg-forest/40 rounded-full"
              animate={reducedMotion ? {} : { opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

function ConfettiBurst() {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 0.5,
    duration: 2 + Math.random() * 2,
    color: ['#1a2e1a', '#2d4a2d', '#b8956e', '#d4b896'][Math.floor(Math.random() * 4)],
  }))

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: p.color,
            left: `${p.x}%`,
            top: '40%',
          }}
          initial={{ opacity: 1, y: 0, scale: 1 }}
          animate={{
            opacity: 0,
            y: [0, -200 - Math.random() * 300],
            x: (Math.random() - 0.5) * 400,
            scale: 0,
            rotate: Math.random() * 720,
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  )
}
