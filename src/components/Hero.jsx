import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 opacity-100">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/40 to-slate-900/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:py-40">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-cyan-200 text-xs">
            Available for full-time roles
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-300 animate-pulse" />
          </span>
          <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight text-white">
            Hi, I’m Your Name
          </h1>
          <p className="mt-4 text-lg md:text-xl text-blue-100/80 leading-relaxed">
            A product-focused software engineer crafting modern, performant web experiences. I blend delightful UIs with robust backend systems to ship things that matter.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-3 text-white font-semibold shadow-lg shadow-blue-500/30">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white/90 backdrop-blur-md">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
