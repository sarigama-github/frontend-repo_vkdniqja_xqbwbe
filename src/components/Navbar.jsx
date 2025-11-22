import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-white/90 shadow-sm' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="font-bold tracking-wide text-lg lowercase">
          <span className="text-neutral-900">scribl</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="text-sm px-4 py-2 rounded-md bg-[#407BFF] text-white shadow-[0_10px_30px_-10px_rgba(64,123,255,0.6)] hover:shadow-[0_12px_32px_-8px_rgba(64,123,255,0.75)] transition-shadow">Start a Project</a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" aria-label="Menu" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden px-4 pb-4 border-t bg-white/95 backdrop-blur">
          <div className="flex flex-col gap-3 pt-3">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm py-2 text-neutral-700">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="text-sm px-4 py-2 rounded-md bg-[#407BFF] text-white text-center">
              Start a Project
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
