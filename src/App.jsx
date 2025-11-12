import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import { motion } from 'framer-motion'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1000px_600px_at_80%_-200px,rgba(56,189,248,0.15),transparent)]" />
      <Navbar />
      <Hero />

      <Section
        id="about"
        eyebrow="ABOUT"
        title="Engineer focused on performance, interaction, and polish"
        description="I craft immersive, app-like interfaces that feel alive — with careful motion, precision, and strong architecture behind the scenes."
      >
        <div className="grid items-center gap-8 md:grid-cols-2">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white/80"
          >
            From low-level systems to high-fidelity frontends, I love building end-to-end solutions. My work blends design and engineering to produce experiences that are fast, accessible, and delightful.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-6"
          >
            <div className="grid grid-cols-2 gap-4 text-sm text-white/70">
              <div>
                <p className="text-white/60">Core</p>
                <ul className="mt-2 space-y-1">
                  <li>TypeScript, React, Next.js</li>
                  <li>Node.js, FastAPI, Python</li>
                  <li>PostgreSQL, MongoDB</li>
                </ul>
              </div>
              <div>
                <p className="text-white/60">Motion</p>
                <ul className="mt-2 space-y-1">
                  <li>Framer Motion, GSAP</li>
                  <li>Three.js, Spline</li>
                  <li>WebGL shaders</li>
                </ul>
              </div>
            </div>
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl" />
          </motion.div>
        </div>
      </Section>

      <Section id="skills" eyebrow="SKILLS" title="Capability areas">
        <Skills />
      </Section>

      <Section id="projects" eyebrow="PROJECTS" title="Selected work" description="A few projects that showcase engineering depth and interaction craft." invert>
        <Projects />
      </Section>

      <Section id="achievements" eyebrow="ACHIEVEMENTS" title="Highlights">
        <Achievements />
      </Section>

      <Section id="contact" eyebrow="CONTACT" title="Let’s build something extraordinary" description="Interested in collaborating or hiring? I’m open to challenging problems and ambitious products." invert>
        <Contact />
      </Section>

      <footer className="relative border-t border-white/10 bg-black/60 py-10 text-center text-white/50">
        <p>© {new Date().getFullYear()} CS Engineer • Crafted with motion</p>
      </footer>
    </div>
  )
}

export default App
