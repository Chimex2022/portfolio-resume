import { useReveal } from '../hooks/useScrollReveal'

const EXP = [
  {
    role: 'Software Engineer', company: 'SageByte', loc: 'United States · Remote', period: 'Feb 2025 – Present', current: true,
    bullets: [
      'Built SEO-optimized frontend apps with Next.js, TypeScript & React',
      'Designed APIs and integrated backend with Node.js, Supabase & Strapi',
      'Implemented secure auth: JWT, OAuth, RBAC',
      'Real-time features via Supabase Realtime & WebSockets',
      'Deployed to Vercel with automated CI/CD pipelines',
    ],
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Zustand', 'Vercel'],
  },
  {
    role: 'Senior Frontend Developer', company: 'Iauconsulting', loc: 'Sydney, Australia · Remote', period: 'Apr 2024 – Apr 2025', current: false,
    bullets: [
      'Migrated legacy systems to Next.js — 40% faster page loads',
      'Built accessible UIs with 95%+ client satisfaction rate',
      'Performance via code splitting & lazy loading',
    ],
    tags: ['Next.js', 'React', 'Accessibility', 'Performance'],
  },
  {
    role: 'Lead Frontend Developer', company: 'Melody AI', loc: 'Lagos, Nigeria', period: 'Nov 2022 – Feb 2024', current: false,
    bullets: [
      '40% increase in user engagement via improved UI/UX',
      'Integrated REST APIs & WebSockets for real-time updates',
      'TDD workflows — 100% reduction in post-deployment bugs',
    ],
    tags: ['React', 'WebSockets', 'TDD', 'Chart.js', 'D3.js'],
  },
  {
    role: 'Junior Frontend Developer', company: 'TechSoft Innovations', loc: 'Remote', period: 'Jan 2021 – Apr 2022', current: false,
    bullets: [
      'Built SPAs using JavaScript & React',
      '20% user retention increase through optimization',
      'Code reviews, testing, Agile ceremonies',
    ],
    tags: ['JavaScript', 'React', 'Agile'],
  },
  {
    role: 'Software Engineer (Intern)', company: 'ALX_Africa', loc: 'Kenya · Remote', period: 'Jan 2020 – Dec 2020', current: false,
    bullets: [
      'Built price-comparison platform with enhanced search',
      '40% faster search via algorithmic optimization',
      'Pixel-perfect designs in collaboration with UI/UX teams',
    ],
    tags: ['JavaScript', 'HTML/CSS', 'UI/UX'],
  },
]

function ExpCard({ exp, idx }) {
  const ref = useReveal(0.1)
  const isEven = idx % 2 === 0

  return (
    <div ref={ref} className="reveal relative flex gap-6 md:gap-0">
      {/* Dot */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 w-3.5 h-3.5 rounded-full z-10 g-bg shadow-lg shadow-purple-500/40">
        {exp.current && <span className="absolute inset-0 rounded-full g-bg" style={{animation:'pulse-ring 1.5s ease-out infinite'}}/>}
      </div>

      {/* Content */}
      <div className={`ml-10 md:ml-0 md:w-[46%] ${isEven ? 'md:mr-auto md:pr-10' : 'md:ml-auto md:pl-10'}`}>
        <div className="card-lift p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800/60 hover:border-purple-200/50 dark:hover:border-purple-800/30 transition-all duration-300">
          <div className="flex items-start justify-between gap-2 mb-3">
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-0.5">
                <h3 className="font-display font-bold text-gray-900 dark:text-white text-[15px]">{exp.role}</h3>
                {exp.current && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold text-white g-bg">NOW</span>
                )}
              </div>
              <p className="text-sm font-semibold text-purple-500 dark:text-purple-400">{exp.company}</p>
              <p className="font-mono text-[11px] text-gray-400 dark:text-gray-600">{exp.loc}</p>
            </div>
            <span className="font-mono text-[11px] text-gray-400 dark:text-gray-600 text-right shrink-0">{exp.period}</span>
          </div>

          <ul className="space-y-1.5 mb-3">
            {exp.bullets.map(b => (
              <li key={b} className="flex gap-2 text-[13px] text-gray-600 dark:text-gray-400">
                <span className="text-purple-400 shrink-0 mt-0.5">›</span>{b}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5">
            {exp.tags.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  const headRef = useReveal()

  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-900/30 relative overflow-hidden">
      <div className="orb orb-purple w-72 h-72 top-1/2 -left-20 opacity-[0.05] pointer-events-none"/>

      <div className="max-w-4xl mx-auto px-5">
        <div ref={headRef} className="reveal text-center mb-14">
          <p className="font-mono text-xs tracking-[0.2em] text-purple-500 dark:text-purple-400 uppercase mb-3">Career Path</p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-gray-900 dark:text-white">
            Work <span className="g-text">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="tl-line"/>
          <div className="space-y-10">
            {EXP.map((e, i) => <ExpCard key={e.company} exp={e} idx={i}/>)}
          </div>
        </div>

        {/* Education & Certs */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800/60">
            <h3 className="font-display font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-lg">🎓</span> Education
            </h3>
            <div className="space-y-3">
              {[
                ['HND — Mechanical Engineering', 'Yaba College of Technology', '2018'],
                ['ND — Metallurgical Engineering', 'Yaba College of Technology', '2016'],
              ].map(([t, s, y]) => (
                <div key={t} className="border-l-2 border-purple-200 dark:border-purple-800/50 pl-3">
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{t}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">{s} · {y}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800/60">
            <h3 className="font-display font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-lg">📜</span> Certifications
            </h3>
            <ul className="space-y-2">
              {[
                ['Programming Foundations: JS, HTML & CSS', 'Coursera'],
                ['Modern JavaScript for Beginners', 'Udemy'],
                ['Complete JavaScript for Beginners', 'LinkedIn Learning'],
                ['SQL for Data Analytics & Business', 'LinkedIn Learning'],
              ].map(([n, p]) => (
                <li key={n} className="flex justify-between items-start gap-2">
                  <span className="text-[13px] text-gray-600 dark:text-gray-400">{n}</span>
                  <span className="tag shrink-0">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
