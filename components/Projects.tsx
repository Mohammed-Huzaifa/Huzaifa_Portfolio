'use client'
import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowUpRight, ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react'

type ProjectLink = { label: string; href: string }
type Project = {
  index: string; title: string; role?: string
  tagline: string; description: string
  tags: string[]; links: ProjectLink[]
  image?: string; accent: string
}

const projects: Project[] = [
  {
    index: '01', title: 'FieldSignal',
    tagline: 'AI Operating Layer for Organizations',
    description: 'Helps organizations move beyond AI pilots by deploying AI as a coordinated operating layer — structured systems, governed workflows, and role-based team training for repeatable, measurable AI adoption. The site is built on WordPress with custom plugin integrations for content management and dynamic service delivery.',
    tags: ['AI Strategy', 'RAG', 'MCP', 'AI Agents', 'AI Governance', 'Workflow Automation', 'WordPress'],
    links: [{ label: 'Visit Site', href: 'https://fieldsignal.ai' }],
    image: '/5FDEFB50-089D-43EA-88FC-77923748E463.png',
    accent: '#60A5FA',
  },
  {
    index: '02', title: 'OpsGuru',
    tagline: 'Powering the Future of AI through Cloud Innovation',
    description: "North America's first governed, fixed-fee AI delivery model. OpsGuru's Agentic Delivery platform helps enterprises harness cloud infrastructure and AI agents to ship production-grade solutions at scale. I integrated Contentful as the headless CMS, connecting structured content to the Next.js frontend for scalable, editor-friendly content management.",
    tags: ['Cloud Infrastructure', 'AI Agents', 'Agentic Delivery', 'AWS', 'DevOps', 'Contentful'],
    links: [{ label: 'Visit Site', href: 'https://www.opsguru.com' }],
    image: '/8C064D84-F587-49B1-ACF9-3D9261DECD10.png',
    accent: '#A78BFA',
  },
  {
    index: '03', title: 'Borderless Creatives', role: 'Technical Lead',
    tagline: 'Creative Agency Powering Digital Brands',
    description: 'A forward-thinking creative agency building high-quality digital experiences for brands. As Technical Lead, I drive the technical architecture, frontend engineering, and delivery of client-facing web products.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Web Development'],
    links: [{ label: 'Visit Site', href: 'https://borderlesscreatives.ca' }],
    image: '/DF79DEC8-5253-41B0-BDC7-A4CD0B336667.png',
    accent: '#34D399',
  },
  {
    index: '04', title: 'Commerce Bear', role: 'Technical Lead',
    tagline: 'Software for Lighting, Furniture & Home',
    description: 'A B2B SaaS platform purpose-built for lighting, furniture, and home furnishing dealers. Streamlines catalog management, quoting, and order workflows — helping dealers operate faster and sell smarter.',
    tags: ['B2B SaaS', 'React', 'Node.js', 'PostgreSQL', 'Dealer Management', 'E-commerce'],
    links: [{ label: 'Visit Site', href: 'https://www.commercebear.com' }],
    image: '/9452249F-BB20-4C23-8E22-18A7D35C77D8.png',
    accent: '#FBBF24',
  },
  {
    index: '05', title: 'Digiworks AI', role: 'Technical Lead',
    tagline: 'AI Coworkers for Enterprise',
    description: 'An enterprise AI platform that deploys intelligent AI coworkers into business operations. Ships as a full product suite — a marketing site, a user-facing app, and an admin portal — enabling teams to automate complex workflows at scale.',
    tags: ['AI Agents', 'Enterprise SaaS', 'Next.js', 'Full-Stack', 'Automation', 'Portal'],
    links: [
      { label: 'Website', href: 'https://digiworks.ai' },
      { label: 'App',     href: 'https://app.digiworks.ai' },
      { label: 'Portal',  href: 'https://portal.digiworks.ai' },
    ],
    image: '/967F583B-9221-442E-80FF-E97EBFE044D1.png',
    accent: '#FB923C',
  },
]

const variants = {
  enter: (d: number) => ({ x: d > 0 ? '55%' : '-55%', opacity: 0, scale: 0.97 }),
  center: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] } },
  exit:   (d: number) => ({ x: d < 0 ? '55%' : '-55%', opacity: 0, scale: 0.97, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }),
}

function Placeholder({ accent, title }: { accent: string; title: string }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4 select-none"
      style={{ background: `radial-gradient(ellipse at 50% 55%, ${accent}0E 0%, transparent 65%)` }}>
      <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
        style={{ background: `${accent}12`, border: `1px dashed ${accent}30` }}>
        <ImageIcon size={17} style={{ color: `${accent}60` }} />
      </div>
      <div className="text-center">
        <p className="text-[11px] tracking-[0.18em] uppercase mb-1" style={{ color: `${accent}50`, fontFamily: 'var(--font-mono)' }}>{title}</p>
        <p className="text-[10px] tracking-widest uppercase" style={{ color: `${accent}28`, fontFamily: 'var(--font-mono)' }}>Screenshot coming soon</p>
      </div>
    </div>
  )
}

function NavBtn({ onClick, label, children }: { onClick: () => void; label: string; children: React.ReactNode }) {
  return (
    <button onClick={onClick} aria-label={label}
      className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200"
      style={{ border: '1px solid var(--border)', color: 'var(--faint)' }}
      onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.borderColor = 'var(--border-hover)' }}
      onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--faint)'; e.currentTarget.style.borderColor = 'var(--border)' }}
    >
      {children}
    </button>
  )
}

export default function Projects() {
  const [active, setActive] = useState(0)
  const [dir,    setDir]    = useState(1)

  const go = useCallback((next: number) => {
    setDir(next > active ? 1 : -1)
    setActive(next)
  }, [active])

  const p = projects[active]

  return (
    <section id="projects" className="py-32 overflow-hidden" style={{ background: 'var(--surface)' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-14"
        >
          <div>
            <p className="text-xs tracking-[0.3em] uppercase mb-5"
              style={{ color: '#8B7CF6', fontFamily: 'var(--font-mono)' }}>
              Selected Work
            </p>
            <h2 className="font-extrabold tracking-[-0.03em] leading-[0.9]"
              style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', color: 'var(--text)' }}>
              Projects I&apos;ve<br />
              <span style={{ color: 'var(--faint)' }}>shipped</span>
            </h2>
            <p className="text-sm mt-4" style={{ color: '#4A4A5A' }}>
              A few highlights — there&apos;s a lot more where this came from.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <NavBtn onClick={() => go((active - 1 + projects.length) % projects.length)} label="Previous"><ChevronLeft size={17} /></NavBtn>
            <NavBtn onClick={() => go((active + 1) % projects.length)} label="Next"><ChevronRight size={17} /></NavBtn>
          </div>
        </motion.div>

        {/* Card */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div key={active} custom={dir} variants={variants} initial="enter" animate="center" exit="exit"
              className="relative grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
            >
              {/* Accent line top */}
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: `linear-gradient(90deg, transparent 0%, ${p.accent}60 40%, ${p.accent}60 60%, transparent 100%)` }} />

              {/* Image */}
              <div className="relative h-60 lg:h-[500px] flex items-center justify-center overflow-hidden"
                style={{ borderRight: '1px solid var(--border)', background: 'var(--bg)' }}>
                {p.image
                  ? <img src={p.image} alt={p.title} className="w-full h-full object-contain object-center" />
                  : <Placeholder accent={p.accent} title={p.title} />
                }
                <span className="absolute top-5 left-5 text-[11px] tracking-widest"
                  style={{ color: `${p.accent}45`, fontFamily: 'var(--font-mono)' }}>
                  {p.index} / {String(projects.length).padStart(2, '0')}
                </span>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  {p.role && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide mb-5"
                      style={{ background: `${p.accent}10`, border: `1px solid ${p.accent}25`, color: p.accent }}>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: p.accent }} />
                      {p.role}
                    </div>
                  )}

                  <h3 className="font-extrabold tracking-[-0.03em] leading-tight mb-2"
                    style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: 'var(--text)' }}>
                    {p.title}
                  </h3>
                  <p className="text-sm font-medium mb-6" style={{ color: p.accent }}>
                    {p.tagline}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B6B80' }}>
                    {p.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mt-8 mb-7">
                    {p.tags.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{ background: `${p.accent}09`, border: `1px solid ${p.accent}20`, color: `${p.accent}B0` }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {p.links.map((l) => (
                      <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 hover:-translate-y-px"
                        style={{ background: `${p.accent}0E`, border: `1px solid ${p.accent}30`, color: p.accent }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = `${p.accent}18`; e.currentTarget.style.borderColor = `${p.accent}55` }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = `${p.accent}0E`; e.currentTarget.style.borderColor = `${p.accent}30` }}
                      >
                        {l.label} <ArrowUpRight size={11} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots + mobile arrows */}
        <div className="flex items-center justify-between mt-7">
          <div className="flex sm:hidden gap-2">
            <NavBtn onClick={() => go((active - 1 + projects.length) % projects.length)} label="Prev"><ChevronLeft size={16} /></NavBtn>
            <NavBtn onClick={() => go((active + 1) % projects.length)} label="Next"><ChevronRight size={16} /></NavBtn>
          </div>
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            {projects.map((_, i) => (
              <button key={i} onClick={() => go(i)}
                className="rounded-full transition-all duration-300"
                style={{ width: i === active ? '26px' : '6px', height: '6px', background: i === active ? p.accent : 'rgba(255,255,255,0.1)' }}
              />
            ))}
          </div>
          <span className="hidden sm:block text-xs" style={{ color: 'var(--faint)', fontFamily: 'var(--font-mono)' }}>
            {String(active + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  )
}
