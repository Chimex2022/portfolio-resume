import { useReveal } from '../hooks/useScrollReveal'

const PROJECTS = [
  {
    emoji: '📊', title: 'Melody AI Dashboard', sub: 'Analytics Dashboard',
    desc: 'Dynamic analytics dashboard with interactive Chart.js/D3.js visualizations and SSR-enabled performance.',
    demo: 'https://melodyai.cloud',
    tags: ['Next.js', 'TypeScript', 'Chart.js', 'D3.js', 'Tailwind CSS'],
    highlights: ['Interactive charts', 'Real-time data', 'SSR optimized', 'Dark mode'],
    featured: false,
    color: 'from-fuchsia-500 to-pink-500',
  },
  {
    emoji: '📹', title: 'Video Calling App', sub: 'Real-Time Communication Platform',
    desc: 'Multi-user real-time video platform with low-latency streaming, dynamic session management, and secure authentication.',
    demo: 'https://video-calling-app-frontend-gb74.onrender.com',
    tags: ['React', 'Node.js', 'Stream API', 'Zustand', 'Tailwind CSS'],
    highlights: ['Multi-user video rooms', 'WebRTC streaming', 'Session management', 'Auth & permissions'],
    featured: true,
    color: 'from-purple-500 to-pink-500',
  },
  {
    emoji: '🎬', title: 'AI Movie App', sub: 'AI-Powered Streaming Platform',
    desc: 'Netflix-style platform with Gemini AI-generated summaries, TMDB integration, and real-time recommendations.',
    demo: 'https://aimovie-app-1.onrender.com',
    tags: ['React', 'Gemini AI', 'TMDB API', 'MongoDB', 'Zustand', 'Cloudinary'],
    highlights: ['AI recommendations', 'TMDB integration', 'User auth', 'Media hosting'],
    featured: true,
    color: 'from-pink-500 to-rose-500',
  },
  {
    emoji: '💬', title: 'Chat Application', sub: 'Real-Time Messaging',
    desc: 'Full-scale chat app supporting 1-on-1 & group messaging with instant WebSocket delivery and presence updates.',
    demo: 'https://chatapp-smoky-psi.vercel.app',
    tags: ['Next.js', 'TypeScript', 'WebSockets', 'Zustand', 'Cloudinary'],
    highlights: ['Group & DM chat', 'Presence indicators', 'Media sharing', 'Scalable state'],
    featured: false,
    color: 'from-violet-500 to-purple-600',
  },
  {
    emoji: '✈️', title: 'Travel-Wix', sub: 'Travel Landing Page',
    desc: 'High-performance mobile-first landing page with SSR optimization and smooth scroll animations.',
    demo: 'https://travel-website-two-sage.vercel.app',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    highlights: ['Mobile-first', 'SSR optimized', 'Smooth animations', 'High Lighthouse score'],
    featured: false,
    color: 'from-purple-400 to-indigo-500',
  },
]

function ProjectCard({ p, i }) {
  const ref = useReveal(0.1)
  return (
    <div ref={ref} className="reveal card-lift rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800/60 hover:border-purple-200/50 dark:hover:border-purple-800/30 transition-all duration-300 overflow-hidden flex flex-col" style={{ transitionDelay: `${i * 70}ms` }}>
      {/* Gradient top bar */}
      <div className={`h-1.5 bg-gradient-to-r ${p.color}`}/>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-3">
          <div>
            <span className="text-3xl block mb-1.5">{p.emoji}</span>
            <h3 className="font-display font-bold text-gray-900 dark:text-white text-[15px] leading-tight">{p.title}</h3>
            <p className="text-xs font-medium text-purple-500 dark:text-purple-400 mt-0.5">{p.sub}</p>
          </div>
          {p.featured && <span className="text-[10px] font-bold px-2 py-1 rounded-lg g-text border border-purple-200 dark:border-purple-800/50 bg-purple-50 dark:bg-purple-950/30 shrink-0">FEATURED</span>}
        </div>

        <p className="text-[13px] text-gray-600 dark:text-gray-400 leading-relaxed mb-3 flex-1">{p.desc}</p>

        <div className="grid grid-cols-2 gap-1 mb-4">
          {p.highlights.map(h => (
            <div key={h} className="flex items-center gap-1.5 text-[11px] text-gray-500 dark:text-gray-500">
              <div className="w-1 h-1 rounded-full g-bg shrink-0"/>
              {h}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>

        <div className="flex gap-2 pt-3 border-t border-gray-100 dark:border-gray-800/60 mt-auto">
          <a href={p.demo} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white g-bg hover:opacity-90 hover:shadow-md hover:shadow-purple-500/20 transition-all">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            Live Demo
          </a>
          <a href="https://github.com/Chimex2022" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700 hover:text-purple-600 dark:hover:text-purple-400 transition-all">
            GitHub ↗
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const headRef = useReveal()
  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
      <div className="orb orb-purple w-96 h-96 top-0 right-1/4 opacity-[0.05] pointer-events-none"/>
      <div className="max-w-6xl mx-auto px-5">
        <div ref={headRef} className="reveal text-center mb-14">
          <p className="font-mono text-xs tracking-[0.2em] text-purple-500 dark:text-purple-400 uppercase mb-3">What I've Built</p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-gray-900 dark:text-white">
            Featured <span className="g-text">Projects</span>
          </h2>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-500 max-w-md mx-auto">
            Real-world apps demonstrating performance, scalability, and clean architecture
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((p, i) => <ProjectCard key={p.title} p={p} i={i}/>)}
        </div>

        <div className="text-center mt-10">
          <a href="https://github.com/Chimex2022" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-600 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200">
            <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            View all projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
