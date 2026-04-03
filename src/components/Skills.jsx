import { useEffect, useRef } from 'react'
import { useReveal } from '../hooks/useScrollReveal'

const CATS = [
  {
    icon: '🎨', title: 'Frontend',
    skills: [
      { name: 'React / Next.js', pct: 96 },
      { name: 'TypeScript', pct: 90 },
      { name: 'Tailwind CSS', pct: 95 },
      { name: 'Vue.js / Angular', pct: 74 },
    ]
  },
  {
    icon: '⚙️', title: 'Backend & Database',
    skills: [
      { name: 'Node.js / Express', pct: 82 },
      { name: 'Supabase / Firebase', pct: 86 },
      { name: 'PostgreSQL / MongoDB', pct: 78 },
      { name: 'GraphQL / REST APIs', pct: 88 },
    ]
  },
  {
    icon: '🛠️', title: 'Tools & DevOps',
    skills: [
      { name: 'Git / GitHub / CI-CD', pct: 92 },
      { name: 'Vite / Webpack', pct: 88 },
      { name: 'Jest / Cypress / Playwright', pct: 80 },
      { name: 'Vercel / Netlify', pct: 92 },
    ]
  },
]

const TAGS = [
  'JavaScript ES6+', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Angular', 'React Native',
  'Redux Toolkit', 'Zustand', 'Context API', 'Tailwind CSS', 'Styled-Components', 'Material-UI',
  'Node.js', 'Express', 'Supabase', 'Firebase', 'MongoDB', 'PostgreSQL', 'Prisma', 'Appwrite',
  'GraphQL', 'WebSockets', 'JWT', 'OAuth', 'RBAC', 'Strapi', 'Chart.js', 'D3.js',
  'Jest', 'Cypress', 'Playwright', 'GitHub Actions', 'Vercel', 'Netlify', 'Docker',
]

function Bar({ name, pct, delay }) {
  const barRef = useRef(null)
  useEffect(() => {
    const el = barRef.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setTimeout(() => { el.style.width = pct + '%' }, delay || 0)
        obs.unobserve(el)
      }
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [pct, delay])

  return (
    <div className="space-y-1.5">
      <div className="flex justify-between">
        <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{name}</span>
        <span className="font-mono text-xs text-purple-500 dark:text-purple-400">{pct}%</span>
      </div>
      <div className="h-1 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
        <div ref={barRef} className="skill-bar h-full"/>
      </div>
    </div>
  )
}

export default function Skills() {
  const headRef = useReveal()

  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
      <div className="orb orb-pink w-80 h-80 bottom-0 right-0 opacity-[0.05] pointer-events-none"/>

      <div className="max-w-6xl mx-auto px-5">
        <div ref={headRef} className="reveal text-center mb-14">
          <p className="font-mono text-xs tracking-[0.2em] text-purple-500 dark:text-purple-400 uppercase mb-3">What I Know</p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-gray-900 dark:text-white">
            Technical <span className="g-text">Skills</span>
          </h2>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-500 max-w-md mx-auto">
            A deep toolkit built across 5+ years of shipping real products
          </p>
        </div>

        {/* Bar charts */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {CATS.map((cat, ci) => {
            const ref = useReveal(0.1)
            return (
              <div key={cat.title} ref={ref} className="reveal card-lift p-6 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800/60 hover:border-purple-200/40 dark:hover:border-purple-800/30 transition-colors duration-300">
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-xl">{cat.icon}</span>
                  <h3 className="font-display font-bold text-gray-900 dark:text-white text-sm">{cat.title}</h3>
                </div>
                <div className="space-y-4">
                  {cat.skills.map((s, si) => <Bar key={s.name} {...s} delay={ci * 80 + si * 130}/>)}
                </div>
              </div>
            )
          })}
        </div>

        {/* Tag cloud */}
        <div className="text-center">
          <p className="font-mono text-[10px] text-gray-400 dark:text-gray-600 uppercase tracking-[0.2em] mb-5">All Technologies</p>
          <div className="flex flex-wrap gap-2 justify-center max-w-3xl mx-auto">
            {TAGS.map(t => <span key={t} className="tag cursor-default">{t}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
