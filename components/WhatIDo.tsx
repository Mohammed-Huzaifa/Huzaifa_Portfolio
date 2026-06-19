'use client'
import { motion } from 'motion/react'
import { Brain, Code2, Zap, Target } from 'lucide-react'

const services = [
  {
    num: '01',
    icon: Brain,
    title: 'AI Product Development',
    description:
      'Design and build AI-powered applications, copilots, and automation systems using modern language models and retrieval architectures.',
    accent: '#8B7CF6',
  },
  {
    num: '02',
    icon: Code2,
    title: 'Full-Stack Development',
    description:
      'Scalable web and mobile applications — from polished frontends to backend services, databases, and production deployment.',
    accent: '#60A5FA',
  },
  {
    num: '03',
    icon: Zap,
    title: 'Workflow Automation',
    description:
      'Intelligent workflows that connect business processes, communication channels, and AI systems to eliminate repetitive work.',
    accent: '#34D399',
  },
  {
    num: '04',
    icon: Target,
    title: 'Product Strategy',
    description:
      'Research problems, validate ideas, build MVPs, and translate concepts into usable products that solve real-world problems.',
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
          <p
            className="text-xs tracking-[0.3em] uppercase mb-5"
            style={{ color: '#8B7CF6', fontFamily: 'var(--font-mono)' }}
          >
            What I Do
          </p>
          <h2
            className="font-extrabold tracking-[-0.03em] leading-[0.9]"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', color: 'var(--text)' }}
          >
            Turning ideas into
            <br />
            <span style={{ color: 'var(--faint)' }}>meaningful products</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.48, delay: i * 0.07 }}
              className="group relative rounded-2xl p-8 cursor-default card-glow overflow-hidden"
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
              }}
            >
              {/* Accent left bar */}
              <div
                className="absolute left-0 top-6 bottom-6 w-[2px] rounded-full transition-all duration-300 group-hover:top-4 group-hover:bottom-4"
                style={{ background: s.accent, opacity: 0.5 }}
              />

              {/* Number */}
              <span
                className="absolute top-6 right-7 text-xs font-bold tracking-widest"
                style={{ color: 'var(--faint)', fontFamily: 'var(--font-mono)' }}
              >
                {s.num}
              </span>

              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-6"
                style={{ background: `${s.accent}14`, border: `1px solid ${s.accent}22` }}
              >
                <s.icon size={18} style={{ color: s.accent }} />
              </div>

              <h3
                className="font-bold text-base mb-3 tracking-tight transition-colors group-hover:text-white"
                style={{ color: 'var(--text)' }}
              >
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#6B6B80' }}>
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
