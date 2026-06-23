'use client'
import { motion } from 'motion/react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

const ease = [0.16, 1, 0.3, 1] as const

const roles = ['Entrepreneur', 'AI Product Builder', 'Full-Stack Developer', 'Content Creator']

export default function Hero() {
  return (
    <section className="flex flex-col lg:grid lg:grid-cols-2" style={{ minHeight: '100vh' }}>

      {/* ── LEFT: Dark panel — Name ─────────────────────────── */}
      <div
        className="relative flex flex-col justify-between px-8 lg:px-16 pt-28 pb-12 lg:pt-36 lg:pb-16 overflow-hidden grain"
        style={{ background: '#17191B', minHeight: '60vh' }}
      >
        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid opacity-100 pointer-events-none" />
        {/* Ambient glow */}
        <div
          className="absolute -top-40 -right-20 w-[500px] h-[500px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 65%)' }}
        />

        {/* Top: Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15, ease }}
          className="relative z-10 inline-flex items-center gap-2.5"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="ping-slow absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em', color: '#5A5A68' }}>
            Available for new projects
          </span>
        </motion.div>

        {/* Middle: Big name */}
        <div className="relative z-10 my-auto py-10 lg:py-0">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.22, ease }}
          >
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3.6rem, 7.5vw, 7rem)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 0.88,
                color: '#F0EDE7',
              }}
            >
              Mohammed
            </h1>
            <h1
              className="gradient-text"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3.6rem, 7.5vw, 7rem)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 0.88,
              }}
            >
              Huzaifa.
            </h1>
          </motion.div>
        </div>

        {/* Bottom: Location + line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="relative z-10 flex items-center justify-between"
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.12em', color: '#3C3C4A' }}>
            INDIA · 2026
          </span>
          <div className="w-px h-4" style={{ background: '#3C3C4A' }} />
          <a
            href="https://digiworks.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 transition-colors duration-150"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em', color: '#3C3C4A' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#818CF8' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#3C3C4A' }}
          >
            SHIPPING DIGIWORKS AI
            <ArrowUpRight size={10} />
          </a>
        </motion.div>
      </div>

      {/* ── RIGHT: Cream panel — Details ───────────────────── */}
      <div
        className="relative flex flex-col justify-center px-8 lg:px-16 py-16 lg:py-0"
        style={{ background: '#F7F3EF', minHeight: '40vh' }}
      >
        {/* Thin left border on desktop */}
        <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px" style={{ background: 'rgba(0,0,0,0.1)' }} />

        {/* Roles */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.38, ease }}
          className="flex flex-wrap gap-y-1.5 gap-x-0 mb-10"
        >
          {roles.map((r, i) => (
            <div key={r} className="w-full flex items-center gap-3">
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: i === 0 ? '#6366F1' : 'rgba(0,0,0,0.18)' }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1rem, 2.2vw, 1.35rem)',
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  color: i === 0 ? '#111114' : '#9A9AA8',
                }}
              >
                {r}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.52, ease }}
          className="mb-10 max-w-xs"
          style={{ color: '#5C5C6A', fontSize: '15px', lineHeight: 1.8 }}
        >
          I start companies, build products, and write code —
          usually all three at once.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.64, ease }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-3"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200"
            style={{
              background: '#111114',
              color: '#F0EDE7',
              letterSpacing: '-0.01em',
              fontFamily: 'var(--font-body)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#6366F1'
              e.currentTarget.style.transform = 'translateY(-1px)'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(99,102,241,0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#111114'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            Explore Work
            <ArrowRight size={14} />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-200 px-2"
            style={{ color: '#9A9AA8', fontFamily: 'var(--font-body)' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#111114' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#9A9AA8' }}
          >
            Get in Touch
            <ArrowUpRight size={13} />
          </a>
        </motion.div>

        {/* Scroll line indicator — desktop only */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="hidden lg:flex absolute bottom-10 right-8 flex-col items-end gap-2"
        >
          <div className="w-px h-10 rounded-full" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.25), transparent)' }} />
        </motion.div>
      </div>
    </section>
  )
}
