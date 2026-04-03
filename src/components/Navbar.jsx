import { useEffect, useState } from 'react'
import useStore from '../store/useStore'
import profilePic from '../../src/public/profile.jpeg' 

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

const SunIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
)
const MoonIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
)

export default function Navbar() {
  const { isDark, toggleTheme, activeSection, mobileOpen, setMobileOpen } = useStore()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass bg-white/80 dark:bg-gray-950/85 border-b border-purple-500/10 shadow-sm shadow-purple-500/5'
          : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">

          {/* Profile Picture Logo */}
          <button onClick={() => go('home')} className="flex items-center">
            <img
              src={profilePic}
              alt="Profile"
              className="w-10 h-10 object-cover rounded-full border-2 border-purple-400 shadow-sm"
            />
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {LINKS.map(l => (
              <button key={l.id} onClick={() => go(l.id)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === l.id
                    ? 'nav-active bg-purple-50 dark:bg-purple-950/40'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'
                }`}
              >{l.label}</button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button onClick={toggleTheme} aria-label="Toggle theme"
              className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950/30 transition-all duration-200">
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>

            <a
              href="#contact"
              onClick={e => {
                e.preventDefault();
                go('contact');
              }}
              className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-white g-bg hover:opacity-90 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-200"
            >
              Hire Me
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            {/* Hamburger */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5" aria-label="Menu">
              <span className={`block w-5 h-0.5 bg-current text-gray-600 dark:text-gray-400 transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}/>
              <span className={`block w-5 h-0.5 bg-current text-gray-600 dark:text-gray-400 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}/>
              <span className={`block w-5 h-0.5 bg-current text-gray-600 dark:text-gray-400 transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}/>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${mobileOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)}/>
        <div className={`absolute top-16 left-3 right-3 rounded-2xl p-4 glass bg-white/95 dark:bg-gray-900/95 border border-white/20 dark:border-white/10 shadow-2xl transition-all duration-300 ${mobileOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          {LINKS.map(l => (
            <button key={l.id} onClick={() => go(l.id)}
              className={`w-full text-left px-4 py-3 rounded-xl font-medium text-sm mb-1 transition-all ${
                activeSection === l.id ? 'g-text bg-purple-50 dark:bg-purple-950/40' : 'text-gray-600 dark:text-gray-300'
              }`}>{l.label}</button>
          ))}
          <a
            href="#contact"
            onClick={e => {
              e.preventDefault();
              go('contact');
            }}
            className="mt-2 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white g-bg"
          >
            Hire Me →
          </a>
        </div>
      </div>
    </>
  )
}
