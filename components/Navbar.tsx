'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'About',    href: '#about'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Work',     href: '#work'     },
  { label: 'Projects', href: '#projects' },
  { label: 'Personal', href: '#personal' },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      {/* ── Floating pill (desktop) ───────────────────────────── */}
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden md:block"
      >
        <div
          className="flex items-center gap-1 px-3 py-2 rounded-full transition-all duration-300"
          style={{
            background: scrolled
              ? 'rgba(12,12,15,0.82)'
              : 'rgba(12,12,15,0.55)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: scrolled
              ? '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)'
              : '0 4px 16px rgba(0,0,0,0.2)',
          }}
        >
          {/* Logo */}
          <a href="#" className="mr-1 flex items-center">
            <img src="/favicon.svg" width="30" height="30" alt="MH logo" style={{ borderRadius: '7px' }} />
          </a>

          <div className="w-px h-4 bg-white/10 mx-1" />

          {/* Links */}
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200"
              style={{ color: '#888898' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#EDEDF0'
                e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#888898'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              {l.label}
            </a>
          ))}

          <div className="w-px h-4 bg-white/10 mx-1" />

          {/* CTA */}
          <a
            href="#contact"
            className="px-4 py-1.5 rounded-full text-[13px] font-semibold transition-all duration-200"
            style={{
              background: 'rgba(139,124,246,0.15)',
              color: '#A78BFA',
              border: '1px solid rgba(139,124,246,0.25)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(139,124,246,0.25)'
              e.currentTarget.style.borderColor = 'rgba(139,124,246,0.45)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(139,124,246,0.15)'
              e.currentTarget.style.borderColor = 'rgba(139,124,246,0.25)'
            }}
          >
            Let&apos;s Talk
          </a>
        </div>
      </motion.nav>

      {/* ── Mobile bar ──────────────────────────────────────────── */}
      <motion.div
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 md:hidden flex items-center justify-between px-5 py-4"
        style={{
          background: scrolled ? 'rgba(12,12,15,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
          transition: 'all 0.3s',
        }}
      >
        <a href="#" className="flex items-center">
          <img src="/favicon.svg" width="30" height="30" alt="MH logo" style={{ borderRadius: '7px' }} />
        </a>
        <button
          onClick={() => setMenuOpen((o) => !o)}
          style={{ color: '#888898' }}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.div>

      {/* ── Mobile drawer ───────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[60px] left-4 right-4 z-40 md:hidden rounded-2xl p-4 flex flex-col gap-1"
            style={{
              background: 'rgba(19,19,24,0.96)',
              backdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2.5 rounded-xl text-sm font-medium transition-colors"
                style={{ color: '#888898' }}
                onClick={() => setMenuOpen(false)}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#EDEDF0')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#888898')}
              >
                {l.label}
              </a>
            ))}
            <div className="h-px bg-white/[0.06] my-1" />
            <a
              href="#contact"
              className="px-4 py-2.5 rounded-xl text-sm font-semibold text-center"
              style={{ background: 'rgba(139,124,246,0.12)', color: '#A78BFA' }}
              onClick={() => setMenuOpen(false)}
            >
              Let&apos;s Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
