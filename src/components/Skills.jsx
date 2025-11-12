import { motion } from 'framer-motion'
import { Cpu, Code2, Database, Workflow, Cloud, Shield, Terminal } from 'lucide-react'

const skills = [
  { icon: Cpu, label: 'Systems & Architecture' },
  { icon: Code2, label: 'Frontend Engineering' },
  { icon: Database, label: 'Databases & Modeling' },
  { icon: Workflow, label: 'Distributed Systems' },
  { icon: Cloud, label: 'Cloud & DevOps' },
  { icon: Shield, label: 'Security & Infra' },
  { icon: Terminal, label: 'Tooling & DX' },
]

export default function Skills() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {skills.map(({ icon: Icon, label }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: i * 0.05, duration: 0.5 }}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-white/20 hover:bg-white/10"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-gradient-to-br from-purple-500/30 to-cyan-500/30 p-3 text-purple-200">
              <Icon className="h-6 w-6" />
            </div>
            <p className="font-medium">{label}</p>
          </div>
          <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 blur-2xl transition-all duration-500 group-hover:right-0 group-hover:top-0 group-hover:opacity-100" />
        </motion.div>
      ))}
    </div>
  )
}
