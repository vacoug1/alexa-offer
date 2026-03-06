import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { config } from '../config'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function Transformation() {
  const sectionRef = useRef<HTMLElement>(null)
  const morphRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: morphRef,
    offset: ["start center", "end center"]
  })

  const bionicOpacity = useTransform(scrollYProgress, [0, 0.4, 0.5], [1, 1, 0])
  const thriveOpacity = useTransform(scrollYProgress, [0.4, 0.5, 1], [0, 1, 1])
  const bionicScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])
  const thriveScale = useTransform(scrollYProgress, [0.5, 1], [1.1, 1])

  return (
    <section ref={sectionRef} className="py-32 bg-cream">
      <div className="max-w-5xl mx-auto px-6">
        {/* Brand morph */}
        <div ref={morphRef} className="relative h-48 md:h-64 flex items-center justify-center mb-24">
          {reducedMotion ? (
            <h2 className="font-serif text-5xl md:text-7xl text-forest">Thrive</h2>
          ) : (
            <>
              <motion.h2
                className="absolute font-serif text-5xl md:text-7xl text-charcoal/40"
                style={{ opacity: bionicOpacity, scale: bionicScale }}
              >
                Bionic Health
              </motion.h2>
              <motion.h2
                className="absolute font-serif text-5xl md:text-7xl text-forest"
                style={{ opacity: thriveOpacity, scale: thriveScale }}
              >
                Thrive
              </motion.h2>
            </>
          )}
        </div>

        {/* Story chapters */}
        <div className="space-y-20">
          {config.transformation.chapters.map((chapter, index) => (
            <ChapterCard
              key={index}
              chapter={chapter}
              index={index}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ChapterCardProps {
  chapter: {
    phase: string
    title: string
    description: string
  }
  index: number
  reducedMotion: boolean
}

function ChapterCard({ chapter, index, reducedMotion }: ChapterCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      className="grid md:grid-cols-[200px_1fr] gap-8 items-start"
      initial={reducedMotion ? {} : { opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Phase label */}
      <div className="md:text-right">
        <span className="text-gold font-medium text-sm tracking-wide uppercase">
          {chapter.phase}
        </span>
      </div>

      {/* Content */}
      <div className="border-l-2 border-forest/10 pl-8">
        <h3 className="font-serif text-2xl md:text-3xl text-forest mb-4">
          {chapter.title}
        </h3>
        <p className="text-charcoal/70 leading-relaxed text-lg">
          {chapter.description}
        </p>
      </div>
    </motion.div>
  )
}
