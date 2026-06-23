'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowUpRight, ImageIcon } from 'lucide-react'

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
    description: 'Helps organizations move beyond AI pilots by deploying AI as a coordinated operating layer — structured systems, governed workflows, and role-based team training for repeatable, measurable AI adoption. Built on WordPress with custom plugin integrations for content management and dynamic service delivery.',
    tags: ['AI Strategy', 'RAG', 'MCP', 'AI Agents', 'WordPress'],
    links: [{ label: 'Visit', href: 'https://fieldsignal.ai' }],
    image: '/5FDEFB50-089D-43EA-88FC-77923748E463.png',
    accent: '#60A5FA',
  },
  {
    index: '02', title: 'OpsGuru',
    tagline: "North America's First Governed AI Delivery Model",
    description: "Fixed-fee AI delivery platform helping enterprises harness cloud infrastructure and AI agents to ship production-grade solutions at scale. I integrated Contentful as the headless CMS, connecting structured content to the Next.js frontend for scalable, editor-friendly content management.",
    tags: ['Cloud Infrastructure', 'AI Agents', 'AWS', 'Contentful'],
    links: [{ label: 'Visit', href: 'https://www.opsguru.com' }],
    image: '/8C064D84-F587-49B1-ACF9-3D9261DECD10.png',
    accent: '#A78BFA',
  },
  {
    index: '03', title: 'Borderless Creatives', role: 'Technical Lead',
    tagline: 'Creative Agency Powering Digital Brands',
    description: 'A forward-thinking creative agency building high-quality digital experiences for brands. As Technical Lead, I drive the technical architecture, frontend engineering, and delivery of client-facing web products.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    links: [{ label: 'Visit', href: 'https://borderlesscreatives.ca' }],
    image: '/DF79DEC8-5253-41B0-BDC7-A4CD0B336667.png',
    accent: '#34D399',
  },
  {
    index: '04', title: 'Commerce Bear', role: 'Technical Lead',
    tagline: 'B2B SaaS for Lighting, Furniture & Home',
    description: 'A B2B SaaS platform purpose-built for lighting, furniture, and home furnishing dealers. Streamlines catalog management, quoting, and order workflows — helping dealers operate faster and sell smarter.',
    tags: ['B2B SaaS', 'React', 'Node.js', 'PostgreSQL'],
    links: [{ label: 'Visit', href: 'https://www.commercebear.com' }],
    image: '/9452249F-BB20-4C23-8E22-18A7D35C77D8.png',
    accent: '#FBBF24',
  },
  {
    index: '05', title: 'Digiworks AI', role: 'Technical Lead',
    tagline: 'AI Coworkers for Enterprise Teams',
    description: 'An enterprise AI platform that deploys intelligent AI coworkers into business operations. Ships as a full product suite — a marketing site, a user-facing app, and an admin portal — enabling teams to automate complex workflows at scale.',
    tags: ['AI Agents', 'Enterprise SaaS', 'Next.js', 'Automation'],
    links: [
      { label: 'Website', href: 'https://digiworks.ai' },
      { label: 'App',     href: 'https://app.digiworks.ai' },
      { label: 'Portal',  href: 'https://portal.digiworks.ai' },
    ],
    image: '/967F583B-9221-442E-80FF-E97EBFE044D1.png',
    accent: '#FB923C',
  },
]

export default function Projects() {
  const [hovered, setHovered] = useState<number | null>(null)
  const active = hovered !== null ? projects[hovered] : null

  return (
    <section id="projects" className="py-32" style={{ background: 'var(--surface)' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="section-label mb-5">Selected Work</p>
          <h2
            className="font-bold tracking-[-0.035em] leading-[0.9] mb-4"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', color: 'var(--text)' }}
          >
            Projects I&apos;ve
            <br />
            <span style={{ color: 'var(--faint)' }}>shipped</span>
          </h2>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            A few highlights — there&apos;s a lot more where this came from.
          </p>
        </motion.div>

        {/* Two-column: list + sticky preview */}
        <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-14 items-start">

          {/* Project list */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ borderTop: '1px solid var(--border)' }}
          >
            {projects.map((p, i) => (
              <div
                key={p.title}
                className="project-row group flex items-center gap-4 py-6 cursor-default"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Index */}
                <span
                  className="w-7 shrink-0 text-xs"
                  style={{ fontFamily: 'var(--font-mono)', color: 'var(--faint)' }}
                >
                  {p.index}
                </span>

                {/* Main info */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2.5 mb-1">
                    <h3
                      className="font-semibold text-[15px] transition-colors duration-150"
                      style={{ color: hovered === i ? 'var(--text)' : 'var(--text-secondary)', letterSpacing: '-0.02em' }}
                    >
                      {p.title}
                    </h3>
                    {p.role && (
                      <span
                        className="text-[11px] px-2 py-0.5 rounded-full font-medium"
                        style={{
                          background: `${p.accent}12`,
                          border: `1px solid ${p.accent}25`,
                          color: p.accent,
                          fontFamily: 'var(--font-mono)',
                        }}
                      >
                        {p.role}
                      </span>
                    )}
                  </div>
                  <p className="text-xs truncate" style={{ color: 'var(--text-muted)' }}>
                    {p.tagline}
                  </p>
                </div>

                {/* Tags — desktop only */}
                <div className="hidden md:flex gap-1.5 shrink-0">
                  {p.tags.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2.5 py-1 rounded-full"
                      style={{
                        background: 'var(--card)',
                        border: '1px solid var(--border)',
                        color: 'var(--text-muted)',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div
                  className="flex items-center gap-3 shrink-0 transition-all duration-150"
                  style={{ opacity: hovered === i ? 1 : 0, transform: hovered === i ? 'translateX(0)' : 'translateX(-4px)' }}
                >
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium transition-colors duration-150"
                      style={{ color: p.accent }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {l.label}
                      <ArrowUpRight size={11} />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Sticky preview panel — desktop only */}
          <div className="hidden lg:block sticky top-32">
            <AnimatePresence mode="wait">
              {active ? (
                <motion.div
                  key={active.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Screenshot */}
                  <div
                    className="w-full rounded-xl overflow-hidden mb-5"
                    style={{
                      aspectRatio: '16/10',
                      background: 'var(--card)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    {active.image ? (
                      <img
                        src={active.image}
                        alt={active.title}
                        className="w-full h-full object-contain object-center"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <ImageIcon size={20} style={{ color: 'var(--faint)' }} />
                      </div>
                    )}
                  </div>

                  {/* Project meta */}
                  <div
                    className="rounded-xl p-5"
                    style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-sm" style={{ color: 'var(--text)', letterSpacing: '-0.02em' }}>
                        {active.title}
                      </h4>
                      <span
                        className="text-[11px]"
                        style={{ color: active.accent, fontFamily: 'var(--font-mono)' }}
                      >
                        {active.index}
                      </span>
                    </div>
                    <p
                      className="text-xs leading-relaxed mb-5"
                      style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}
                    >
                      {active.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {active.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-150"
                          style={{
                            background: `${active.accent}0f`,
                            border: `1px solid ${active.accent}28`,
                            color: active.accent,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = `${active.accent}1e`
                            e.currentTarget.style.borderColor = `${active.accent}50`
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = `${active.accent}0f`
                            e.currentTarget.style.borderColor = `${active.accent}28`
                          }}
                        >
                          {l.label} <ArrowUpRight size={10} />
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full rounded-xl flex flex-col items-center justify-center gap-3"
                  style={{
                    aspectRatio: '16/10',
                    background: 'var(--card)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: 'var(--card-hover)', border: '1px solid var(--border-hover)' }}
                  >
                    <ImageIcon size={14} style={{ color: 'var(--faint)' }} />
                  </div>
                  <p
                    className="text-xs"
                    style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}
                  >
                    hover a project
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile: project cards (no sticky panel) */}
        <div className="lg:hidden mt-10 grid gap-4">
          {projects.map((p) => (
            <div
              key={p.title}
              className="rounded-xl p-5"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="font-semibold text-sm" style={{ color: 'var(--text)', letterSpacing: '-0.02em' }}>{p.title}</span>
                {p.role && (
                  <span
                    className="text-[11px] px-2 py-0.5 rounded-full"
                    style={{ background: `${p.accent}12`, color: p.accent, border: `1px solid ${p.accent}25` }}
                  >
                    {p.role}
                  </span>
                )}
              </div>
              <p className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>{p.tagline}</p>
              <div className="flex flex-wrap gap-2">
                {p.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-full"
                    style={{ background: `${p.accent}0f`, border: `1px solid ${p.accent}28`, color: p.accent }}
                  >
                    {l.label} <ArrowUpRight size={10} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
