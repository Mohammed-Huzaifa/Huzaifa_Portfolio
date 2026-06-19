'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowRight } from 'lucide-react'

const roles = ['Entrepreneur', 'AI Product Builder', 'Full-Stack Developer', 'Content Creator']

export default function Hero() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % roles.length), 2800)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain" style={{ background: 'var(--bg)' }}>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-100 pointer-events-none" />

      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="blob-a absolute w-[700px] h-[700px] rounded-full -top-40 -left-40"
          style={{ background: 'radial-gradient(circle, rgba(139,124,246,0.14) 0%, transparent 65%)' }}
        />
        <div
          className="blob-b absolute w-[600px] h-[600px] rounded-full -bottom-32 -right-32"
          style={{ background: 'radial-gradient(circle, rgba(96,165,250,0.09) 0%, transparent 65%)' }}
        />
        <div
          className="blob-c absolute w-[400px] h-[400px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.06) 0%, transparent 65%)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-24 pb-16 text-center">

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 mb-12 text-xs font-medium tracking-wide"
          style={{
            background: 'rgba(52,211,153,0.08)',
            border: '1px solid rgba(52,211,153,0.18)',
            color: '#34D399',
            fontFamily: 'var(--font-mono)',
          }}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="ping-slow absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          Available for exciting projects
        </motion.div>

        {/* Name — giant editorial type */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1
            className="font-extrabold leading-[0.88] tracking-[-0.04em] mb-6 select-none"
            style={{ fontSize: 'clamp(3.6rem, 12vw, 9.5rem)' }}
          >
            <span style={{ color: 'var(--text)' }}>Mohammed</span>
            <br />
            <span className="gradient-text">Huzaifa</span>
          </h1>
        </motion.div>

        {/* Role cycler */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="h-9 flex items-center justify-center mb-8 overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 14, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0,  filter: 'blur(0px)' }}
              exit={{   opacity: 0, y: -14, filter: 'blur(4px)' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl font-semibold tracking-[-0.01em]"
              style={{ color: '#A78BFA' }}
            >
              {roles[idx]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-base md:text-lg max-w-lg mx-auto mb-12 leading-relaxed"
          style={{ color: '#6B6B80' }}
        >
          I start companies, build products, and write code.
          Usually all three at once.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#about"
            className="group inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm transition-all duration-200"
            style={{
              background: 'linear-gradient(135deg, #8B7CF6 0%, #6366F1 100%)',
              color: '#fff',
              boxShadow: '0 0 0 1px rgba(139,124,246,0.4), 0 4px 24px rgba(139,124,246,0.25)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 0 1px rgba(139,124,246,0.6), 0 8px 32px rgba(139,124,246,0.4)'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 0 1px rgba(139,124,246,0.4), 0 4px 24px rgba(139,124,246,0.25)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Explore My Work
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm transition-all duration-200"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.09)',
              color: '#9090A8',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.16)'
              e.currentTarget.style.color = '#EDEDF0'
              e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)'
              e.currentTarget.style.color = '#9090A8'
              e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
            }}
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Scroll nudge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-24 flex flex-col items-center gap-2.5"
        >
          <div
            className="w-[1px] h-10 rounded-full"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.15))' }}
          />
          <span
            className="text-[10px] tracking-[0.3em] uppercase"
            style={{ color: '#3C3C48', fontFamily: 'var(--font-mono)' }}
          >
            scroll
          </span>
        </motion.div>
      </div>
    </section>
  )
}
