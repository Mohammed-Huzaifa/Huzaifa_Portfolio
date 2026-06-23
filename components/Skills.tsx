'use client'
import { motion } from 'motion/react'

const row1 = [
  { label: 'React',         color: '#60A5FA' },
  { label: 'Next.js',       color: '#f0f0f2' },
  { label: 'TypeScript',    color: '#60A5FA' },
  { label: 'Tailwind CSS',  color: '#38BDF8' },
  { label: 'Node.js',       color: '#34D399' },
  { label: 'Express.js',    color: '#34D399' },
  { label: 'PostgreSQL',    color: '#60A5FA' },
  { label: 'MongoDB',       color: '#34D399' },
  { label: 'Supabase',      color: '#34D399' },
  { label: 'Prisma',        color: '#A78BFA' },
  { label: 'React Native',  color: '#60A5FA' },
  { label: 'Expo',          color: '#f0f0f2' },
  { label: 'REST APIs',     color: '#f0f0f2' },
  { label: 'SQLite',        color: '#f0f0f2' },
  { label: 'Three.js',      color: '#FB923C' },
]

const row2 = [
  { label: 'OpenAI',             color: '#34D399' },
  { label: 'Anthropic Claude',   color: '#FB923C' },
  { label: 'Gemini',             color: '#60A5FA' },
  { label: 'AI Agents',          color: '#A78BFA' },
  { label: 'RAG',                color: '#A78BFA' },
  { label: 'Vector Embeddings',  color: '#A78BFA' },
  { label: 'Prompt Engineering', color: '#A78BFA' },
  { label: 'Flowise',            color: '#FB923C' },
  { label: 'Vercel',             color: '#f0f0f2' },
  { label: 'AWS EC2',            color: '#FB923C' },
  { label: 'Azure',              color: '#38BDF8' },
  { label: 'Cloudflare',         color: '#FB923C' },
  { label: 'Contentful',         color: '#38BDF8' },
  { label: 'Unity',              color: '#f0f0f2' },
  { label: 'Blender',            color: '#FB923C' },
]

interface Skill { label: string; color: string }

function SkillPill({ label, color }: Skill) {
  return (
    <div
      className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm select-none font-medium"
      style={{
        background: 'var(--card)',
        border: '1px solid var(--border)',
        color: 'var(--text-secondary)',
      }}
    >
      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
      {label}
    </div>
  )
}

function Marquee({ items, reverse = false }: { items: Skill[]; reverse?: boolean }) {
  const doubled = [...items, ...items]
  return (
    <div className="flex overflow-hidden">
      <div className={`flex gap-2.5 ${reverse ? 'marquee-right' : 'marquee-left'}`}>
        {doubled.map((s, i) => <SkillPill key={`${s.label}-${i}`} {...s} />)}
      </div>
    </div>
  )
}

const categories = [
  { label: 'Frontend',       color: '#60A5FA', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React Native', 'Expo', 'Three.js', 'NativeWind'] },
  { label: 'Backend',        color: '#34D399', skills: ['Node.js', 'Express.js', 'REST APIs', 'Next.js API Routes'] },
  { label: 'AI & LLM',      color: '#A78BFA', skills: ['OpenAI', 'Anthropic Claude', 'Gemini', 'Flowise', 'RAG', 'Vector Embeddings', 'AI Agents', 'Prompt Engineering'] },
  { label: 'Databases',      color: '#38BDF8', skills: ['PostgreSQL', 'MongoDB', 'Supabase', 'pgvector', 'Prisma', 'SQLite'] },
  { label: 'Infrastructure', color: '#FB923C', skills: ['Vercel', 'AWS EC2', 'Azure', 'Cloudflare'] },
  { label: '3D & Creative',  color: '#F472B6', skills: ['Three.js', 'Unity', 'Blender'] },
]

export default function Skills() {
  return (
    <section id="skills" className="py-32 overflow-hidden" style={{ background: 'var(--surface)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="section-label mb-5">Technical Skills</p>
          <h2
            className="font-bold tracking-[-0.035em] leading-[0.9]"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', color: 'var(--text)' }}
          >
            Tools of the
            <br />
            <span style={{ color: 'var(--faint)' }}>trade</span>
          </h2>
        </motion.div>
      </div>

      {/* Marquee — full bleed */}
      <div className="flex flex-col gap-2.5 mb-20">
        <Marquee items={row1} />
        <Marquee items={row2} reverse />
      </div>

      {/* Category breakdown */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-10">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: ci * 0.06 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: cat.color }} />
                <span
                  className="text-[11px] font-semibold tracking-[0.14em] uppercase"
                  style={{ color: cat.color, fontFamily: 'var(--font-mono)' }}
                >
                  {cat.label}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                {cat.skills.map((sk) => (
                  <span
                    key={sk}
                    className="text-sm"
                    style={{ color: 'var(--text-muted)', lineHeight: 1.5 }}
                  >
                    {sk}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
