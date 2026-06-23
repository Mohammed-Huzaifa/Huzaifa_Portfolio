'use client'
import { motion } from 'motion/react'
import { BookOpen, PenLine, Video, Lightbulb } from 'lucide-react'

const interests = [
  {
    icon: BookOpen,
    title: 'Reading',
    description: 'Fiction and non-fiction across human behavior, personal growth, technology, and storytelling — reading is how I think in slow motion.',
    accent: '#FB923C',
    tag: 'Books & Ideas',
  },
  {
    icon: PenLine,
    title: 'Writing & Journaling',
    description: 'Documenting ideas, reflections, lessons, and observations through journaling and long-form writing. Thinking on paper.',
    accent: '#34D399',
    tag: 'Reflection',
  },
  {
    icon: Video,
    title: 'Content Creation',
    description: 'I run "Our Odyssey" (@odysseywithhuzaifa on Instagram) — a page on a journey of kindness, wisdom, and growth. Creating short-form content around books, ideas, personal development, and life experiences.',
    accent: '#A78BFA',
    tag: 'Storytelling',
  },
  {
    icon: Lightbulb,
    title: 'Continuous Learning',
    description: 'Exploring new technologies, AI capabilities, product strategies, and creative tools — always through hands-on experimentation.',
    accent: '#60A5FA',
    tag: 'Curiosity',
  },
]

export default function Personal() {
  return (
    <section id="personal" className="py-32" style={{ background: 'var(--cream)' }}>
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="section-label mb-5">Beyond Work</p>
          <h2
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 0.9, color: 'var(--cream-text)' }}
          >
            What keeps me
            <br />
            <span style={{ color: '#B4B0A8' }}>curious</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {interests.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.44, delay: i * 0.07 }}
              className="group p-8 rounded-2xl bg-white cursor-default transition-all duration-300"
              style={{ border: '1px solid var(--cream-border)' }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.boxShadow = `0 8px 32px rgba(0,0,0,0.07), 0 0 0 1px ${item.accent}20`
                el.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.boxShadow = 'none'
                el.style.transform = 'translateY(0)'
              }}
            >
              <div className="flex items-start justify-between mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${item.accent}12`, border: `1px solid ${item.accent}25` }}
                >
                  <item.icon size={17} style={{ color: item.accent }} />
                </div>
                <span
                  className="text-[10px] font-semibold tracking-[0.15em] uppercase px-3 py-1 rounded-full"
                  style={{
                    background: `${item.accent}10`,
                    color: item.accent,
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {item.tag}
                </span>
              </div>
              <h3 className="font-bold text-base mb-2.5 tracking-tight" style={{ color: 'var(--cream-text)' }}>
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--cream-muted)' }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
