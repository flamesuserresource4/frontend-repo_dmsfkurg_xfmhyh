import { Menu, Github, Linkedin, FileText } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-3 shadow-[0_0_40px_rgba(59,130,246,0.2)]">
          <a href="#top" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-400 via-cyan-400 to-indigo-500 shadow-inner" />
            <span className="text-white font-semibold tracking-tight">Your Name</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-blue-100/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-blue-100/80 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-blue-100/80 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 px-3 py-2 text-white text-sm font-medium shadow-lg shadow-blue-500/30">
              <FileText className="h-4 w-4" /> Hire Me
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white/80">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {open && (
          <div className="mt-2 rounded-2xl border border-white/10 bg-slate-900/90 backdrop-blur-xl md:hidden">
            <div className="p-4 space-y-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-blue-100/90 hover:text-white">
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-2 border-t border-white/10">
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-blue-100/80 hover:text-white transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-blue-100/80 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#contact" onClick={() => setOpen(false)} className="ml-auto inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 px-3 py-2 text-white text-sm font-medium shadow-lg shadow-blue-500/30">
                  <FileText className="h-4 w-4" /> Hire Me
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
