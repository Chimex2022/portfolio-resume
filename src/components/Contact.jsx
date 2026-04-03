import { useState } from 'react'
import { useReveal } from '../hooks/useScrollReveal'

const CONTACTS = [
  { label: 'Email', value: 'Kirchoff200@gmail.com', href: 'mailto:Kirchoff200@gmail.com',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
  { label: 'Phone', value: '+234 903 412 8595', href: 'tel:+2349034128595',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> },
  { label: 'LinkedIn', value: 'gabriel-chima2021', href: 'https://linkedin.com/in/gabriel-chima2021',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
  { label: 'GitHub', value: 'Chimex2022', href: 'https://github.com/Chimex2022',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> },
]

const inputCls = "w-full px-4 py-2.5 rounded-xl text-sm bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700/60 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-purple-400 dark:focus:border-purple-500 focus:bg-white dark:focus:bg-gray-800 transition-all duration-200"

export default function Contact() {
  const headRef = useReveal()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [done, setDone] = useState(false)
  const [loading, setLoading] = useState(false)

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const onSubmit = e => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setDone(true) }, 1400)
  }

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900/30 relative overflow-hidden">
      <div className="orb orb-pink w-96 h-96 bottom-0 left-1/4 opacity-[0.06] pointer-events-none"/>
      <div className="max-w-5xl mx-auto px-5">
        <div ref={headRef} className="reveal text-center mb-14">
          <p className="font-mono text-xs tracking-[0.2em] text-purple-500 dark:text-purple-400 uppercase mb-3">Let's Work Together</p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-gray-900 dark:text-white">
            Get in <span className="g-text">Touch</span>
          </h2>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-500 max-w-md mx-auto">
            Open for full-time roles, freelance projects & exciting collaborations. I respond within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Info */}
          <div className="space-y-4">
            {CONTACTS.map(c => (
              <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800/60 hover:border-purple-200/60 dark:hover:border-purple-800/40 group transition-all duration-200 hover:shadow-sm hover:shadow-purple-500/5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-purple-500 dark:text-purple-400 group-hover:text-white transition-all duration-200"
                  style={{background:'rgba(168,85,247,0.08)'}}>
                  {c.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-mono text-[10px] text-gray-400 dark:text-gray-600 uppercase tracking-wider">{c.label}</p>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors">{c.value}</p>
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 dark:text-gray-700 group-hover:text-purple-400 transition-colors shrink-0"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            ))}

            <div className="p-4 rounded-2xl border border-dashed border-green-300/60 dark:border-green-700/40 bg-green-50/50 dark:bg-green-950/20">
              <div className="flex items-center gap-2 mb-1">
                <span className="relative flex w-2 h-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"/><span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"/></span>
                <span className="text-sm font-semibold text-green-700 dark:text-green-400">Currently Available</span>
              </div>
              <p className="text-xs text-green-600 dark:text-green-500 leading-relaxed">
                Open to full-time, freelance & consulting roles. Remote-first. Typical response: &lt; 24 hours.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800/60 p-6">
            {done ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10 gap-4">
                <div className="w-14 h-14 rounded-full g-bg flex items-center justify-center text-white text-xl">✓</div>
                <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white">Message Sent!</h3>
                <p className="text-sm text-gray-500 dark:text-gray-500">I'll get back to you within 24 hours.</p>
                <button onClick={() => { setDone(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                  className="text-sm text-purple-500 hover:text-purple-600 font-medium">Send another →</button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-3.5">
                <div className="grid grid-cols-2 gap-3.5">
                  <div>
                    <label className="block font-mono text-[10px] text-gray-400 dark:text-gray-600 uppercase tracking-wider mb-1.5">Name</label>
                    <input name="name" value={form.name} onChange={onChange} required placeholder="Your name" className={inputCls}/>
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] text-gray-400 dark:text-gray-600 uppercase tracking-wider mb-1.5">Email</label>
                    <input name="email" type="email" value={form.email} onChange={onChange} required placeholder="you@email.com" className={inputCls}/>
                  </div>
                </div>
                <div>
                  <label className="block font-mono text-[10px] text-gray-400 dark:text-gray-600 uppercase tracking-wider mb-1.5">Subject</label>
                  <input name="subject" value={form.subject} onChange={onChange} required placeholder="Project inquiry, job opportunity..." className={inputCls}/>
                </div>
                <div>
                  <label className="block font-mono text-[10px] text-gray-400 dark:text-gray-600 uppercase tracking-wider mb-1.5">Message</label>
                  <textarea name="message" value={form.message} onChange={onChange} required rows={5} placeholder="Tell me about your project..." className={`${inputCls} resize-none`}/>
                </div>
                <button type="submit" disabled={loading}
                  className="w-full py-2.5 rounded-xl text-sm font-semibold text-white g-bg hover:opacity-90 hover:shadow-lg hover:shadow-purple-500/25 disabled:opacity-70 flex items-center justify-center gap-2 transition-all duration-200">
                  {loading ? (
                    <><svg className="animate-spin" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>Sending...</>
                  ) : (
                    <>Send Message <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
