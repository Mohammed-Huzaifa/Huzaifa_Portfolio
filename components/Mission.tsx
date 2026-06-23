'use client'
import { motion } from 'motion/react'

const strengths = [
  'Product Thinking', 'Problem Solving', 'Rapid Prototyping',
  'AI Integration', 'Technical Communication', 'Storytelling',
  'Self-Learning', 'Startup Execution',
]

export default function Mission() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden grain" style={{ background: 'var(--bg)' }}>
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, transparent 65%)' }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <p className="section-label mb-12">What drives me</p>

          {/* Quote mark */}
          <div
            className="text-8xl leading-none mb-4 select-none"
            style={{ color: 'rgba(99,102,241,0.12)', fontFamily: 'Georgia, serif', lineHeight: 0.8 }}
          >
            &ldquo;
          </div>

          <blockquote
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.6rem, 3.8vw, 3rem)',
              fontWeight: 700,
              letterSpacing: '-0.035em',
              lineHeight: 1.15,
              color: 'var(--text)',
              marginBottom: '40px',
            }}
          >
            Build AI products people actually come back to.
            Companies{' '}
            <span className="gradient-text-warm">worth building</span>.
            And share everything along the way —
            because the best shortcuts are the ones{' '}
            <span className="gradient-text-warm">someone else already figured out</span>.
          </blockquote>

          <p
            className="text-sm mb-20"
            style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}
          >
            — Mohammed Huzaifa
          </p>
        </motion.div>

        {/* Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <p
            className="text-[11px] tracking-[0.25em] uppercase mb-7"
            style={{ color: 'var(--faint)', fontFamily: 'var(--font-mono)' }}
          >
            Core Strengths
          </p>
          <div className="flex flex-wrap gap-2.5 justify-center">
            {strengths.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="px-4 py-2 rounded-full text-sm font-medium cursor-default transition-all duration-200"
                style={{ border: '1px solid var(--border)', color: 'var(--text-muted)', fontSize: '13px' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(99,102,241,0.35)'
                  e.currentTarget.style.color = '#818CF8'
                  e.currentTarget.style.background = 'rgba(99,102,241,0.07)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.color = 'var(--text-muted)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                {s}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
