import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Realtime Collaboration Platform',
    description: 'Multiplayer editing with CRDTs, WebRTC transport, optimistic UI, and edge functions.',
    tags: ['TypeScript', 'WebRTC', 'CRDT', 'Edge'],
  },
  {
    title: '3D Data Viz Engine',
    description: 'GPU-accelerated rendering of massive datasets with WASM compute and declarative scenes.',
    tags: ['WebGL', 'WASM', 'Rust', 'Shaders'],
  },
  {
    title: 'AI Workflow Orchestrator',
    description: 'Composable graph-based pipelines with vector stores, streaming, and human-in-the-loop review.',
    tags: ['Python', 'FastAPI', 'Vectors', 'Workers'],
  },
]

export default function Projects() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((p, i) => (
        <motion.article
          key={p.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.07, duration: 0.5 }}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-5 shadow-lg backdrop-blur"
        >
          <div className="absolute inset-0 bg-[radial-gradient(400px_200px_at_0%_0%,rgba(168,85,247,0.15),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <header className="relative z-10 mb-3 flex items-start justify-between">
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <div className="flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <a href="#" className="rounded-lg bg-white/10 p-2 hover:bg-white/20" aria-label="GitHub"><Github className="h-4 w-4" /></a>
              <a href="#" className="rounded-lg bg-white/10 p-2 hover:bg-white/20" aria-label="Live"><ExternalLink className="h-4 w-4" /></a>
            </div>
          </header>
          <p className="relative z-10 text-sm text-white/70">{p.description}</p>
          <div className="relative z-10 mt-4 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">{t}</span>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="pointer-events-none absolute -bottom-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-purple-500/20 blur-3xl"
          />
        </motion.article>
      ))}
    </div>
  )
}
