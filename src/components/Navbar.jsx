import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Cpu, Github, Linkedin, Mail, Rocket } from 'lucide-react'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 text-white">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 backdrop-blur">
            <Cpu className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-white/70">Portfolio</p>
            <p className="text-lg font-semibold tracking-tight flex items-center gap-2">
              CS Engineer <Rocket className="h-4 w-4 text-purple-300" />
            </p>
          </div>
        </div>

        <div className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="relative text-sm text-white/80 transition-colors hover:text-white"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a href="#" className="rounded-lg bg-white/10 p-2 transition hover:bg-white/20" aria-label="GitHub"><Github className="h-5 w-5" /></a>
          <a href="#" className="rounded-lg bg-white/10 p-2 transition hover:bg-white/20" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
          <a href="#contact" className="rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 px-4 py-2 text-sm font-semibold shadow-lg shadow-purple-500/20">Contact</a>
        </div>

        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mx-4 mt-2 rounded-2xl border border-white/10 bg-black/70 p-4 backdrop-blur md:hidden"
          >
            <div className="grid gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="rounded-xl px-4 py-3 text-left text-white/90 transition hover:bg-white/5"
                >
                  {item.label}
                </button>
              ))}
              <div className="mt-2 flex items-center gap-3">
                <a href="#" className="rounded-lg bg-white/10 p-2 transition hover:bg-white/20" aria-label="GitHub"><Github className="h-5 w-5" /></a>
                <a href="#" className="rounded-lg bg-white/10 p-2 transition hover:bg-white/20" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
                <a href="#contact" className="rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 px-3 py-2 text-sm font-semibold">Contact <Mail className="ml-1 inline h-4 w-4" /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
