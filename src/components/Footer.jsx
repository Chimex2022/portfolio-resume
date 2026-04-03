export default function Footer() {
  return (
    <footer className="py-8 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-900">
      <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="font-display font-extrabold g-text text-lg">GA.</span>
          <span className="text-sm text-gray-400 dark:text-gray-600">Gabriel Anyaele</span>
        </div>
        <p className="font-mono text-[11px] text-gray-400 dark:text-gray-700">
          © {new Date().getFullYear()} · Built with React · Vite · Zustand · Tailwind CSS
        </p>
        <div className="flex gap-4">
          {[['GitHub','https://github.com/Chimex2022'],['LinkedIn','https://linkedin.com/in/gabriel-chima2021'],['Portfolio','https://linktr.ee/gabriel_code']].map(([l,h]) => (
            <a key={l} href={h} target="_blank" rel="noopener noreferrer"
              className="font-mono text-[11px] text-gray-400 dark:text-gray-600 hover:text-purple-500 dark:hover:text-purple-400 transition-colors">
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
