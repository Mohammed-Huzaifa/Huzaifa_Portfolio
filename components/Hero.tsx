'use client'
import { motion } from 'motion/react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

const ease = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden grain"
      style={{ background: 'var(--bg)' }}
    >
      {/* Subtle dot grid */}
      <div className="absolute inset-0 dot-grid opacity-100 pointer-events-none" />

      {/* Single top-right ambient glow — no blobs */}
      <div
        className="absolute -top-32 -right-32 w-[700px] h-[700px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 70% 30%, rgba(124,110,230,0.09) 0%, transparent 65%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 20% 80%, rgba(96,165,250,0.05) 0%, transparent 65%)',
        }}
      />

      {/* Content — left aligned */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-36 pb-24">

        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease }}
          className="inline-flex items-center gap-2.5 mb-14"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="ping-slow absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.1em',
              color: 'var(--text-muted)',
            }}
          >
            Available for new projects
          </span>
        </motion.div>

        {/* Name — editorial, left-aligned */}
        <div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease }}
            style={{
              fontSize: 'clamp(3.8rem, 11vw, 8.5rem)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: 0.9,
              color: 'var(--text)',
            }}
          >
            Mohammed
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26, ease }}
            className="gradient-text"
            style={{
              fontSize: 'clamp(3.8rem, 11vw, 8.5rem)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: 0.9,
            }}
          >
            Huzaifa.
          </motion.h1>
        </div>

        {/* Roles — all four, one static line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.42 }}
          className="mb-8 flex flex-wrap gap-x-3 gap-y-1"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            letterSpacing: '0.04em',
            color: 'var(--text-muted)',
          }}
        >
          {['Entrepreneur', 'AI Product Builder', 'Full-Stack Developer', 'Content Creator'].map((r, i, arr) => (
            <span key={r} className="flex items-center gap-3">
              <span style={{ color: 'var(--accent-light)' }}>{r}</span>
              {i < arr.length - 1 && <span style={{ color: 'var(--faint)' }}>·</span>}
            </span>
          ))}
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.5, ease }}
          className="mb-12 max-w-sm"
          style={{
            color: 'var(--text-secondary)',
            fontSize: '16px',
            lineHeight: 1.75,
          }}
        >
          I start companies, build products, and write code.
          <br />Usually all three at once.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.6, ease }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-200"
            style={{
              background: 'var(--accent)',
              color: '#fff',
              letterSpacing: '-0.01em',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--accent-light)'
              e.currentTarget.style.transform = 'translateY(-1px)'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(124,110,230,0.35)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--accent)'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            Explore Work
            <ArrowRight size={14} />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-200"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text)' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)' }}
          >
            Get in Touch
            <ArrowUpRight size={13} />
          </a>
        </motion.div>

        {/* Currently shipping — bottom right callout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-24 right-6 hidden lg:flex flex-col items-end gap-1"
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '0.15em',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
            }}
          >
            Currently shipping
          </span>
          <a
            href="https://digiworks.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
            style={{ color: 'var(--text-secondary)' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text)' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)' }}
          >
            Digiworks AI
            <ArrowUpRight size={12} />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-6 flex flex-col items-start gap-2"
        >
          <div
            className="w-px h-10 rounded-full"
            style={{ background: 'linear-gradient(to bottom, var(--faint), transparent)' }}
          />
        </motion.div>
      </div>
    </section>
  )
}
