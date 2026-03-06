import { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { config } from '../config'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function Offer() {
  const [showConfetti, setShowConfetti] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (isInView && !hasTriggered && !reducedMotion) {
      setShowConfetti(true)
      setHasTriggered(true)
      setTimeout(() => setShowConfetti(false), 4000)
    }
  }, [isInView, hasTriggered, reducedMotion])

  const cards = [
    {
      label: "Role",
      front: config.offer.role.title,
      back: config.offer.role.description,
    },
    {
      label: "Compensation",
      front: `Base: ${config.offer.compensation.base}`,
      back: config.offer.compensation.details,
    },
    {
      label: "Benefits",
      front: "Comprehensive package",
      back: config.offer.benefits.join(" • "),
    },
    {
      label: "Mission",
      front: "Real health outcomes",
      back: config.offer.mission,
    },
  ]

  return (
    <section ref={sectionRef} className="py-32 bg-cream relative overflow-hidden">
      {showConfetti && <CelebrationBurst />}

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={reducedMotion ? {} : { scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          >
            <span className="text-6xl">🎉</span>
          </motion.div>
          <h2 className="font-serif text-4xl md:text-5xl text-forest mb-4">
            The Offer
          </h2>
          <p className="text-charcoal/60 text-lg">
            Tap or hover to reveal details
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <OfferCard
              key={index}
              card={card}
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

interface OfferCardProps {
  card: {
    label: string
    front: string
    back: string
  }
  index: number
  isInView: boolean
  reducedMotion: boolean
}

function OfferCard({ card, index, isInView, reducedMotion }: OfferCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      className="h-56 cursor-pointer perspective-1000"
      initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
      onMouseEnter={() => !reducedMotion && setIsFlipped(true)}
      onMouseLeave={() => !reducedMotion && setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 bg-sage rounded-2xl p-8 flex flex-col justify-between"
          style={{ backfaceVisibility: "hidden" }}
        >
          <span className="text-gold text-sm font-medium tracking-wide uppercase">
            {card.label}
          </span>
          <p className="font-serif text-2xl md:text-3xl text-forest">
            {card.front}
          </p>
          <span className="text-charcoal/40 text-sm">
            {reducedMotion ? "Tap to reveal" : "Hover to reveal"}
          </span>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 bg-forest text-cream rounded-2xl p-8 flex flex-col justify-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <span className="text-gold text-sm font-medium tracking-wide uppercase mb-4">
            {card.label}
          </span>
          <p className="text-cream/90 leading-relaxed">
            {card.back}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

function CelebrationBurst() {
  const particles = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    x: 50 + (Math.random() - 0.5) * 20,
    y: 30,
    delay: Math.random() * 0.8,
    duration: 2.5 + Math.random() * 2,
    color: ['#1a2e1a', '#2d4a2d', '#b8956e', '#d4b896', '#f7f6f3'][Math.floor(Math.random() * 5)],
    size: 4 + Math.random() * 8,
  }))

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-sm"
          style={{
            backgroundColor: p.color,
            width: p.size,
            height: p.size / 2,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          initial={{ opacity: 1, y: 0 }}
          animate={{
            opacity: 0,
            y: [0, -300 - Math.random() * 400],
            x: (Math.random() - 0.5) * 600,
            rotate: Math.random() * 1080,
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
