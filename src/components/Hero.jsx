import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-gradient-to-r from-purple-400 to-cyan-400" />
            <p className="text-xs tracking-widest text-white/80">FUTURISTIC • INTERACTIVE • IMMERSIVE</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.9 }}
            className="mt-6 text-5xl font-semibold leading-tight sm:text-6xl"
          >
            Computer Science Engineer
            <span className="block bg-gradient-to-r from-purple-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">Building next-gen experiences</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-4 max-w-lg text-white/80"
          >
            Specialized in creating fluid, app-like web interfaces with deep animations, micro-interactions, and scalable systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#projects" className="rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 px-5 py-3 text-sm font-semibold shadow-lg shadow-purple-500/20">View Projects</a>
            <a href="#contact" className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white/10">Get in touch</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
