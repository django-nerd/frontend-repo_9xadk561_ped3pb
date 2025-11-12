import { motion } from 'framer-motion'

const achievements = [
  { title: 'Best Innovation Award', by: 'TechFest 2024', desc: 'Awarded for designing an autonomous testing framework.' },
  { title: 'Open Source Contributor', by: 'Top GitHub Projects', desc: 'Merged significant PRs in performance tooling.' },
  { title: 'Research Publication', by: 'IEEE', desc: 'Co-authored a paper on scalable event-driven architectures.' },
]

export default function Achievements() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {achievements.map((a, i) => (
        <motion.div
          key={a.title}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06, duration: 0.45 }}
          className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur"
        >
          <p className="text-sm text-purple-300">{a.by}</p>
          <h4 className="mt-1 text-lg font-semibold">{a.title}</h4>
          <p className="mt-2 text-white/70">{a.desc}</p>
        </motion.div>
      ))}
    </div>
  )
}
