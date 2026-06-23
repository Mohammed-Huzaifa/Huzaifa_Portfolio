'use client'
import { motion } from 'motion/react'
import { Bot, LayoutDashboard, Workflow, Database, Smartphone, Wrench, Megaphone, Rocket, Box, Headset } from 'lucide-react'

const areas = [
  { icon: Bot,           label: 'AI Agents',           color: '#A78BFA' },
  { icon: LayoutDashboard,label: 'SaaS Platforms',     color: '#60A5FA' },
  { icon: Workflow,      label: 'Workflow Automation',  color: '#34D399' },
  { icon: Database,      label: 'Knowledge Retrieval',  color: '#38BDF8' },
  { icon: Smartphone,    label: 'Mobile Apps',          color: '#60A5FA' },
  { icon: Wrench,        label: 'Developer Tools',      color: '#A78BFA' },
  { icon: Megaphone,     label: 'Marketing Websites',   color: '#FB923C' },
  { icon: Rocket,        label: 'Startup MVPs',         color: '#F472B6' },
  { icon: Box,           label: '3D Experiences',       color: '#FB923C' },
  { icon: Headset,       label: 'Virtual Reality',      color: '#34D399' },
]

export default function ExperienceAreas() {
  return (
    <section id="work" className="py-32" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="section-label mb-5">Areas of Experience</p>
          <h2
            className="font-bold tracking-[-0.035em] leading-[0.9]"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', color: 'var(--text)' }}
          >
            Where I&apos;ve
            <br />
            <span style={{ color: 'var(--faint)' }}>built &amp; shipped</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {areas.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.38, delay: i * 0.05 }}
              className="group flex flex-col items-center gap-3.5 p-5 rounded-2xl cursor-default transition-all duration-300"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.borderColor = `${a.color}30`
                el.style.background = `${a.color}07`
                el.style.transform = 'translateY(-2px)'
                el.style.boxShadow = `0 8px 24px ${a.color}12`
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.borderColor = 'var(--border)'
                el.style.background = 'var(--card)'
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = 'none'
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300"
                style={{ background: `${a.color}10`, border: `1px solid ${a.color}1A` }}
              >
                <a.icon size={17} style={{ color: a.color }} />
              </div>
              <span className="text-xs font-semibold text-center leading-tight" style={{ color: '#6B6B80' }}>
                {a.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
