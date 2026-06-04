import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Inicio',       href: '#hero' },
  { label: 'Nosotros',     href: '#about' },
  { label: 'Servicios',    href: '#services' },
  { label: 'Herramientas', href: '#tools' },
  { label: 'Contacto',     href: '#footer' },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-charcoal/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#hero" className="font-serif text-white text-lg tracking-widest uppercase">
          Banquetes Loyale
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-white/80 hover:text-white text-xs tracking-[0.18em] uppercase transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-charcoal/98 px-6 pb-6 flex flex-col gap-5">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white text-sm tracking-[0.18em] uppercase transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
