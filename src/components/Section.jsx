import { motion, useScroll, useTransform } from 'framer-motion'
import { forwardRef } from 'react'

const Section = forwardRef(function Section({ id, eyebrow, title, description, children, invert=false }, ref) {
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [80, -80])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section id={id} ref={ref} className={`relative py-28 sm:py-36 ${invert ? 'bg-gradient-to-b from-black to-slate-950 text-white' : 'bg-black text-white'}`}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_500px_at_50%_-200px,rgba(120,119,198,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div style={{ y, opacity }}>
          <p className="text-xs tracking-[0.3em] text-white/60">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h2>
          {description && <p className="mt-3 max-w-2xl text-white/70">{description}</p>}
        </motion.div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
})

export default Section
