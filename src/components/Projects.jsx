import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Fintech Identity Dashboard',
    description: 'A secure identity verification portal with 3D visual identity and real-time risk scoring.',
    tags: ['React', 'FastAPI', 'MongoDB'],
    link: '#'
  },
  {
    title: 'Holographic Analytics',
    description: 'Interactive dashboards with animated charts and WebGL-powered visualizations.',
    tags: ['React', 'D3', 'Framer Motion'],
    link: '#'
  },
  {
    title: 'Realtime Chat',
    description: 'End-to-end encrypted messaging with typing indicators and presence.',
    tags: ['WebSockets', 'FastAPI', 'Redis'],
    link: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
            <p className="mt-2 text-blue-100/80">A selection of work that showcases my end-to-end capabilities.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white/90">Request a demo</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-800/60 p-5 backdrop-blur-xl"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                <p className="mt-1 text-blue-100/80 text-sm">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs rounded-full border border-white/10 bg-white/5 px-2 py-1 text-blue-100/80">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
