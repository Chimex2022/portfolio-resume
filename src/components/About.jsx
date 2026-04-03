import { useReveal } from '../hooks/useScrollReveal'

const CARDS = [
  { icon: '🎯', title: 'Problem Solver', body: 'Turning complex requirements into elegant, scalable solutions that users love.' },
  { icon: '⚡', title: 'Performance-First', body: 'Optimizing Core Web Vitals and load times—40% faster on every project.' },
  { icon: '🌍', title: 'Remote-Ready', body: 'Proven across Lagos, Sydney, and the US in async, multicultural teams.' },
  { icon: '🧪', title: 'Test-Driven', body: 'TDD advocate—100% reduction in post-deployment bugs at Melody AI.' },
]

export default function About() {
  const headRef = useReveal()
  const leftRef = useReveal(0.08)
  const rightRef = useReveal(0.08)

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900/40 relative overflow-hidden">
      <div className="orb orb-purple w-72 h-72 top-0 left-1/3 opacity-[0.06] pointer-events-none"/>

      <div className="max-w-6xl mx-auto px-5">
        <div ref={headRef} className="reveal text-center mb-14">
          <p className="font-mono text-xs tracking-[0.2em] text-purple-500 dark:text-purple-400 uppercase mb-3">Who I Am</p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-gray-900 dark:text-white">
            About <span className="g-text">Me</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Story */}
          <div ref={leftRef} className="reveal space-y-5">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-[15px]">
              I'm a <strong className="text-gray-900 dark:text-white font-semibold">Senior Frontend Engineer</strong> with 5+ years crafting high-performance web apps that users love and businesses rely on.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-[15px]">
              My core stack is <span className="text-purple-500 font-medium">React</span>, <span className="text-purple-500 font-medium">Next.js</span>, and <span className="text-purple-500 font-medium">TypeScript</span>—but I'm equally at home in Node.js backends, real-time WebSocket systems, and CI/CD pipelines. I've shipped products across Lagos, Sydney (remote), and the US.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-[15px]">
              My background in engineering sharpened my analytical mindset—I approach frontend work the same way: systematic, data-driven, and built to last.
            </p>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 pt-3">
              {[
                ['Location', 'Lagos, Nigeria · Remote'],
                ['Email', 'Kirchoff200@gmail.com'],
                ['Status', 'Open to opportunities'],
                ['Phone', '+234 903 412 8595'],
              ].map(([k, v]) => (
                <div key={k}>
                  <p className="font-mono text-[10px] text-gray-400 dark:text-gray-600 uppercase tracking-wider mb-0.5">{k}</p>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{v}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-3 pt-2">
              <a href="mailto:Kirchoff200@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white g-bg hover:opacity-90 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200">
                Email Me
              </a>
              <a href="https://linkedin.com/in/gabriel-chima2021" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-600 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200">
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Cards */}
          <div ref={rightRef} className="reveal grid grid-cols-2 gap-3">
            {CARDS.map((c, i) => (
              <div key={c.title} className="card-lift p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800/60 hover:border-purple-200/60 dark:hover:border-purple-800/40 transition-colors duration-300"
                style={{ transitionDelay: `${i * 60}ms` }}>
                <span className="text-2xl block mb-3">{c.icon}</span>
                <h3 className="font-display font-bold text-sm text-gray-900 dark:text-white mb-1">{c.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
