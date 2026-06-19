'use client'
import { motion } from 'motion/react'

const strengths = [
  'Product Thinking', 'Problem Solving', 'Rapid Prototyping',
  'AI Integration', 'Technical Communication', 'Storytelling',
  'Self-Learning', 'Startup Execution',
]

export default function Mission() {
  return (
    <section className="relative py-32 overflow-hidden grain" style={{ background: 'var(--bg)' }}>
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(139,124,246,0.1) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <p
            className="text-xs tracking-[0.3em] uppercase mb-10"
            style={{ color: '#8B7CF6', fontFamily: 'var(--font-mono)' }}
          >
            Personal Mission
          </p>

          {/* Opening mark */}
          <div className="text-7xl leading-none mb-4 font-serif" style={{ color: 'rgba(139,124,246,0.2)' }}>&ldquo;</div>

          <blockquote
            className="font-extrabold tracking-[-0.03em] leading-[1.1] mb-10"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 3rem)', color: 'var(--text)' }}
          >
            To build technology that solves{' '}
            <span className="gradient-text">meaningful problems</span>,
            share ideas that help people think differently, and continuously
            learn through{' '}
            <span className="gradient-text-violet">creating, building,</span>
            {' '}and documenting the journey.
          </blockquote>

          <p className="text-sm mb-20" style={{ color: 'var(--faint)', fontFamily: 'var(--font-mono)' }}>
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
            className="text-[11px] tracking-[0.28em] uppercase mb-7"
            style={{ color: 'var(--faint)', fontFamily: 'var(--font-mono)' }}
          >
            Core Strengths
          </p>
          <div className="flex flex-wrap gap-2.5 justify-center">
            {strengths.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="px-5 py-2 rounded-full text-sm font-medium cursor-default transition-all duration-200"
                style={{ border: '1px solid var(--border)', color: '#6B6B80' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(139,124,246,0.3)'
                  e.currentTarget.style.color = '#A78BFA'
                  e.currentTarget.style.background = 'rgba(139,124,246,0.06)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.color = '#6B6B80'
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
