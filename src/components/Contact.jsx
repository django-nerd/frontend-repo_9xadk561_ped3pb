import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'

export default function Contact() {
  return (
    <div className="mx-auto max-w-2xl">
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="mb-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm text-white/70">Name</label>
            <input className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-white outline-none ring-0 focus:border-white/20" placeholder="Your name" />
          </div>
          <div>
            <label className="mb-1 block text-sm text-white/70">Email</label>
            <input type="email" className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-white outline-none ring-0 focus:border-white/20" placeholder="you@domain.com" />
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm text-white/70">Message</label>
          <textarea rows={4} className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-white outline-none ring-0 focus:border-white/20" placeholder="Tell me about your project..." />
        </div>
        <button className="mt-4 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 px-5 py-3 text-sm font-semibold shadow-lg shadow-purple-500/20">
          Send <Send className="h-4 w-4" />
        </button>
      </motion.form>
      <p className="mt-3 flex items-center justify-center gap-2 text-sm text-white/60"><Mail className="h-4 w-4" /> Prefer email? contact@csengineer.dev</p>
    </div>
  )
}
