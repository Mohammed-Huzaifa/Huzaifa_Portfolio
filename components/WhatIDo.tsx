'use client'
import { motion } from 'motion/react'
import { Brain, Code2, Zap, Rocket } from 'lucide-react'

const services = [
  {
    num: '01',
    icon: Brain,
    title: 'AI Product Development',
    description:
      'I don\'t just integrate AI — I build products around it. From copilots and agents to RAG pipelines and LLM-powered workflows, I design systems that actually work in production.',
    accent: '#7C6EE6',
  },
  {
    num: '02',
    icon: Code2,
    title: 'Full-Stack Engineering',
    description:
      'Polished frontends, solid backends, clean databases. I build end-to-end — from the UI people interact with to the infrastructure it runs on.',
    accent: '#60A5FA',
  },
  {
    num: '03',
    icon: Zap,
    title: 'Business Automation',
    description:
      'Repetitive work is expensive. I connect business processes, communication channels, and AI systems to eliminate manual overhead and unlock scale.',
    accent: '#34D399',
  },
  {
    num: '04',
    icon: Rocket,
    title: 'Venture Building',
    description:
      'I find problems worth solving, validate fast, and ship. From zero to first users — the full arc of taking something from a napkin sketch to a live product.',
    accent: '#FB923C',
  },
]

export default function WhatIDo() {
  return (
    <section id="about" className="py-32" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="section-label mb-5">What I Do</p>
          <h2
            className="font-bold tracking-[-0.035em] leading-[0.9]"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', color: 'var(--text)' }}
          >
            From idea to
            <br />
            <span style={{ color: 'var(--faint)' }}>shipped product</span>
          </h2>
        </motion.div>

        {/* Cards — 2-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group relative rounded-2xl p-7 cursor-default overflow-hidden transition-all duration-300"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.borderColor = `${s.accent}28`
                el.style.background = `var(--card-hover)`
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.borderColor = 'var(--border)'
                el.style.background = 'var(--card)'
              }}
            >
              {/* Subtle top accent line */}
              <div
                className="absolute top-0 left-8 right-8 h-px transition-all duration-300 group-hover:left-5 group-hover:right-5"
                style={{ background: `linear-gradient(90deg, transparent, ${s.accent}50, transparent)` }}
              />

              {/* Number */}
              <span
                className="absolute top-6 right-6 text-xs font-medium"
                style={{ color: 'var(--faint)', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}
              >
                {s.num}
              </span>

              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-6"
                style={{ background: `${s.accent}10`, border: `1px solid ${s.accent}20` }}
              >
                <s.icon size={17} style={{ color: s.accent }} />
              </div>

              <h3
                className="font-semibold text-[15px] mb-3 transition-colors duration-200"
                style={{ color: 'var(--text)', letterSpacing: '-0.02em' }}
              >
                {s.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--text-muted)', lineHeight: 1.75 }}
              >
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
