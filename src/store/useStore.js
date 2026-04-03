import { create } from 'zustand'

const useStore = create((set) => ({
  isDark: true,
  activeSection: 'home',
  mobileOpen: false,

  toggleTheme: () => set((s) => {
    const next = !s.isDark
    document.documentElement.classList.toggle('dark', next)
    return { isDark: next }
  }),

  initTheme: () => {
    const dark = window.matchMedia('(prefers-color-scheme: dark)').matches
    document.documentElement.classList.toggle('dark', dark)
    set({ isDark: dark })
  },

  setActiveSection: (section) => set({ activeSection: section }),
  setMobileOpen: (open) => set({ mobileOpen: open }),
}))

export default useStore
