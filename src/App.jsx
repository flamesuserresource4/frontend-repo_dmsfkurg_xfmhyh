import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_0%_0%,rgba(59,130,246,0.15),transparent_60%),radial-gradient(800px_circle_at_100%_0%,rgba(8,145,178,0.15),transparent_60%)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <footer className="py-10 text-center text-blue-200/60">
          © {new Date().getFullYear()} Your Name — All rights reserved.
        </footer>
      </main>
    </div>
  )
}

export default App
