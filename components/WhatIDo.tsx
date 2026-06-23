'use client'
import { motion } from 'motion/react'

const services = [
  {
    num: '01',
    title: 'AI Product Development',
    description:
      'I don\'t just integrate AI — I build products around it. From copilots and agents to RAG pipelines and LLM-powered workflows, I design systems that actually work in production.',
  },
  {
    num: '02',
    title: 'Full-Stack Engineering',
    description:
      'Polished frontends, solid backends, clean databases. I build end-to-end — from the UI people interact with to the infrastructure it runs on.',
  },
  {
    num: '03',
    title: 'Business Automation',
    description:
      'Repetitive work is expensive. I connect business processes, communication channels, and AI systems to eliminate manual overhead and unlock scale.',
  },
  {
    num: '04',
    title: 'Venture Building',
    description:
      'I find problems worth solving, validate fast, and ship. From zero to first users — the full arc of taking something from a napkin sketch to a live product.',
  },
]

export default function WhatIDo() {
  return (
    <section id="about" className="py-28 lg:py-36" style={{ background: 'var(--l-bg)' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-20 lg:grid lg:grid-cols-[1fr_1fr] lg:gap-20 items-end"
        >
          <div>
            <p className="section-label mb-7">What I Do</p>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.6rem, 5.5vw, 5rem)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 0.9,
                color: 'var(--l-text)',
              }}
            >
              From idea
              <br />
              to shipped.
            </h2>
          </div>
          <div className="mt-8 lg:mt-0">
            <p style={{ color: 'var(--l-text-2)', fontSize: '16px', lineHeight: 1.8, maxWidth: '380px' }}>
              I work across the full arc of building — product thinking, engineering,
              AI integration, and the operational pieces that make a company actually run.
            </p>
          </div>
        </motion.div>

        {/* Editorial rows */}
        <div>
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.48, delay: i * 0.07 }}
              className="group py-9 lg:grid lg:grid-cols-[80px_1fr] lg:gap-10 cursor-default"
              style={{ borderTop: '1px solid var(--l-border)' }}
            >
              {/* Number */}
              <div className="mb-4 lg:mb-0 flex items-start">
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    letterSpacing: '0.18em',
                    color: 'var(--accent)',
                    paddingTop: '4px',
                  }}
                >
                  {s.num}
                </span>
              </div>

              {/* Content */}
              <div className="lg:grid lg:grid-cols-[1fr_1fr] lg:gap-14 items-start">
                <h3
                  className="transition-colors duration-200"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)',
                    fontWeight: 700,
                    letterSpacing: '-0.03em',
                    color: 'var(--l-text)',
                    lineHeight: 1.15,
                    marginBottom: '14px',
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: '15px',
                    color: 'var(--l-text-2)',
                    lineHeight: 1.8,
                  }}
                >
                  {s.description}
                </p>
              </div>
            </motion.div>
          ))}
          <div style={{ borderTop: '1px solid var(--l-border)' }} />
        </div>
      </div>
    </section>
  )
}
