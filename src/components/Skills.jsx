const skills = [
  { name: 'React', level: 'Advanced' },
  { name: 'TypeScript', level: 'Advanced' },
  { name: 'FastAPI', level: 'Advanced' },
  { name: 'Python', level: 'Advanced' },
  { name: 'Node.js', level: 'Advanced' },
  { name: 'MongoDB', level: 'Advanced' },
  { name: 'Tailwind CSS', level: 'Advanced' },
  { name: 'Framer Motion', level: 'Intermediate' },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Skills</h2>
        <p className="mt-2 text-blue-100/80">The tools and technologies I use to deliver value.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((s) => (
            <div key={s.name} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <span className="text-white/90">{s.name}</span>
                <span className="text-xs text-blue-200/70">{s.level}</span>
              </div>
              <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                <div className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" style={{ width: '88%' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
