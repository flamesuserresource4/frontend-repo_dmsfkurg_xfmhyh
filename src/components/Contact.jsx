import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      setStatus('Sending...')
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to send')
      setStatus('Message sent! I will get back to you shortly.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus(`Error: ${err.message}`)
    }
  }

  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s work together</h2>
          <p className="mt-2 text-blue-100/80">Tell me about the challenge and I’ll reply within 24 hours.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <input name="name" required placeholder="Your name" className="rounded-lg border border-white/10 bg-slate-900/50 px-4 py-3 text-white placeholder:text-blue-200/50 outline-none focus:ring-2 focus:ring-cyan-500" />
          <input name="email" required type="email" placeholder="Email" className="rounded-lg border border-white/10 bg-slate-900/50 px-4 py-3 text-white placeholder:text-blue-200/50 outline-none focus:ring-2 focus:ring-cyan-500" />
          <input name="subject" placeholder="Subject" className="md:col-span-2 rounded-lg border border-white/10 bg-slate-900/50 px-4 py-3 text-white placeholder:text-blue-200/50 outline-none focus:ring-2 focus:ring-cyan-500" />
          <textarea name="message" required rows="5" placeholder="Your message" className="md:col-span-2 rounded-lg border border-white/10 bg-slate-900/50 px-4 py-3 text-white placeholder:text-blue-200/50 outline-none focus:ring-2 focus:ring-cyan-500" />
          <div className="md:col-span-2 flex items-center justify-between">
            <p className="text-sm text-blue-200/70">I’ll never share your information.</p>
            <button className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-3 text-white font-semibold shadow-lg shadow-blue-500/30">Send Message</button>
          </div>
          {status && <p className="md:col-span-2 text-sm text-blue-100/90">{status}</p>}
        </form>
      </div>
    </section>
  )
}
