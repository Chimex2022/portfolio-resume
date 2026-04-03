import { useEffect, useState } from 'react'
import profilePic from '../../src/public/profile.jpeg'


const ROLES = ['Senior Frontend Engineer', 'React & Next.js Expert', 'TypeScript Specialist', 'Full-Stack Developer']

const GH = () => <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
const LI = () => <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
const Link = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>

export default function Hero() {
  const [typed, setTyped] = useState('')
  const [roleIdx, setRoleIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const cur = ROLES[roleIdx]
    let t
    if (!deleting && charIdx < cur.length) {
      t = setTimeout(() => setCharIdx(c => c + 1), 75)
    } else if (!deleting && charIdx === cur.length) {
      t = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && charIdx > 0) {
      t = setTimeout(() => setCharIdx(c => c - 1), 38)
    } else if (deleting && charIdx === 0) {
      setDeleting(false)
      setRoleIdx(i => (i + 1) % ROLES.length)
    }
    setTyped(cur.slice(0, charIdx))
    return () => clearTimeout(t)
  }, [charIdx, deleting, roleIdx])

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-gray-950">
      {/* Grid bg */}
      <div className="absolute inset-0 grid-pattern"/>

      {/* Ambient orbs */}
      <div className="orb orb-purple anim-drift1 w-[520px] h-[520px] -top-32 -right-40 opacity-20"/>
      <div className="orb orb-pink anim-drift2 w-[400px] h-[400px] bottom-20 -left-32 opacity-15"/>

      <div className="relative max-w-6xl mx-auto px-5 pt-24 pb-16 w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div className="space-y-7">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-green-300/60 dark:border-green-700/40 bg-green-50 dark:bg-green-950/30">
            <span className="relative flex w-2 h-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"/>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"/>
            </span>
            <span className="font-mono text-xs text-green-700 dark:text-green-400 font-medium">Open to new opportunities</span>
          </div>

          {/* Name */}
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-purple-500 dark:text-purple-400 uppercase mb-2">Hello, I'm</p>
            <h1 className="font-display font-extrabold text-[clamp(3rem,7vw,5.5rem)] leading-[0.95] text-gray-900 dark:text-white">
              Gabriel<br/>
              <span className="g-text">Anyaele</span>
            </h1>
          </div>

          {/* Typed role */}
          <div className="h-8 flex items-center">
            <span className="font-display text-xl md:text-2xl text-gray-500 dark:text-gray-400 cursor">{typed}</span>
          </div>

          {/* Bio */}
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-md text-[15px]">
            Crafting blazing-fast, pixel-perfect web experiences with <span className="text-purple-500 font-medium">5+ years</span> of expertise.
            Specialized in React ecosystems, performance optimization & scalable architecture.
            Based in <span className="text-pink-500 font-medium">Lagos, Nigeria</span> · Remote worldwide.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <button onClick={() => go('projects')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white g-bg hover:opacity-90 hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-0.5 transition-all duration-200">
              View Projects
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
            <button onClick={() => go('contact')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 bg-white dark:bg-transparent hover:border-purple-400 dark:hover:border-purple-600 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200">
              Get in Touch
            </button>
          </div>

          {/* Stats row */}
          <div className="flex gap-8 pt-5 border-t border-gray-100 dark:border-gray-800/60">
            {[['5+', 'Years Experience'], ['40%', 'Avg Perf Gain'], ['95%+', 'Client Satisfaction']].map(([v, l]) => (
              <div key={l}>
                <p className="font-display font-extrabold text-2xl g-text">{v}</p>
                <p className="font-mono text-[10px] text-gray-400 dark:text-gray-600 tracking-wider uppercase mt-0.5">{l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Visual */}
        <div className="flex justify-center items-center relative min-h-[380px]">
          {/* Spinning rings */}
          <div className="absolute w-72 h-72 rounded-full border border-dashed border-purple-300/25 dark:border-purple-700/25 anim-spin"/>
          <div className="absolute w-56 h-56 rounded-full border border-dashed border-pink-300/20 dark:border-pink-700/20 anim-spin-rev"/>

          {/* Card */}
          {/* <div className="relative anim-float">
            {/* Glow */}
            {/* <div className="absolute inset-0 rounded-3xl blur-3xl opacity-40 g-bg"/>
            <div className="relative w-52 h-52 md:w-60 md:h-60 rounded-3xl g-bg flex items-center justify-center overflow-hidden shadow-2xl">
              <div className="text-center text-white z-10">
                <p className="font-display font-extrabold text-7xl opacity-95 leading-none">GA</p>
                <p className="font-mono text-[10px] opacity-50 mt-2 tracking-widest">@gabriel_code</p>
              </div>
              <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-white/10"/>
              <div className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full bg-white/5"/>
            </div>

            Floating chips
            <div className="absolute -top-5 -right-8 px-3 py-1.5 rounded-full text-xs font-semibold text-white shadow-lg g-bg" style={{background:'linear-gradient(135deg,#7c3aed,#a855f7)'}}>
              ⚡ React Expert
            </div>
            <div className="absolute -bottom-5 -left-8 px-3 py-1.5 rounded-full text-xs font-semibold text-white shadow-lg" style={{background:'linear-gradient(135deg,#ec4899,#f472b6)'}}>
              🚀 Next.js Pro
            </div>
          </div>  */}

            <div onClick={() => go('home')} className="flex items-center">
              <img
                src={profilePic}
                alt="Profile"
                className="w-72 h-72 object-cover rounded-full border-2 border-purple-400 shadow-sm"
              />
            </div>

          {/* Social links column */}
          <div className="absolute right-0 flex flex-col gap-2.5">
            {[
              { href: 'https://github.com/Chimex2022', icon: <GH/>, label: 'GitHub' },
              { href: 'https://linkedin.com/in/gabriel-chima2021', icon: <LI/>, label: 'LinkedIn' },
              { href: 'https://linktr.ee/gabriel_code', icon: <Link/>, label: 'Portfolio' },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                className="w-9 h-9 rounded-full flex items-center justify-center glass bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 hover:border-purple-300 dark:hover:border-purple-600 hover:scale-110 transition-all duration-200 shadow-sm">
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40">
        <span className="font-mono text-[10px] text-gray-500 tracking-[0.2em] uppercase">scroll</span>
        <div className="w-4 h-7 rounded-full border border-gray-400 dark:border-gray-600 flex justify-center pt-1">
          <div className="w-0.5 h-2 rounded-full bg-purple-400" style={{animation:'float 1.4s ease-in-out infinite'}}/>
        </div>
      </div>
    </section>
  )
}
