'use client'
import { motion } from 'motion/react'
import { Mail, Phone, ArrowUpRight, GitBranch, X, ExternalLink, Camera } from 'lucide-react'

const socials = [
  { icon: GitBranch,    label: 'GitHub',    href: 'https://github.com/Mohammed-Huzaifa' },
  { icon: X,            label: 'X',         href: 'https://x.com/iamhuzaifa_18' },
  { icon: ExternalLink, label: 'LinkedIn',  href: 'https://www.linkedin.com/in/huzaifa-surveykar-106ba12a1' },
  { icon: Camera,       label: 'Instagram', href: 'https://www.instagram.com/odysseywithhuzaifa' },
]

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative py-28 grain overflow-hidden"
      style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}
    >
      {/* Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[240px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <p
              className="text-xs tracking-[0.3em] uppercase mb-6"
              style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}
            >
              Get in Touch
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 0.92,
                color: 'var(--text)',
                marginBottom: '24px',
              }}
            >
              Have a project
              <br />
              <span style={{ color: 'var(--faint)' }}>in mind?</span>
            </h2>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'var(--text-muted)' }}>
              Whether it&apos;s an AI product, a full-stack app, or an idea you&apos;d
              like to explore — I&apos;m open to conversations.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-center gap-4"
          >
            {/* Email */}
            <a
              href="mailto:mohammedhuzaifa857@gmail.com"
              className="group flex items-center gap-4 p-5 rounded-2xl transition-all duration-300"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.borderColor = 'rgba(99,102,241,0.25)'
                el.style.background = 'rgba(99,102,241,0.04)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.borderColor = 'var(--border)'
                el.style.background = 'var(--card)'
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)' }}
              >
                <Mail size={15} style={{ color: 'var(--accent-light)' }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] mb-0.5" style={{ color: 'var(--faint)', fontFamily: 'var(--font-mono)' }}>Email</p>
                <p className="text-sm font-semibold truncate" style={{ color: 'var(--text)' }}>mohammedhuzaifa857@gmail.com</p>
              </div>
              <ArrowUpRight size={14} className="flex-shrink-0" style={{ color: 'var(--faint)' }} />
            </a>

            {/* Phone */}
            <a
              href="tel:+918072176391"
              className="group flex items-center gap-4 p-5 rounded-2xl transition-all duration-300"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.borderColor = 'rgba(52,211,153,0.25)'
                el.style.background = 'rgba(52,211,153,0.04)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.borderColor = 'var(--border)'
                el.style.background = 'var(--card)'
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.2)' }}
              >
                <Phone size={15} style={{ color: '#34D399' }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] mb-0.5" style={{ color: 'var(--faint)', fontFamily: 'var(--font-mono)' }}>Phone</p>
                <p className="text-sm font-semibold" style={{ color: 'var(--text)' }}>+91 80721 76391</p>
              </div>
              <ArrowUpRight size={14} className="flex-shrink-0" style={{ color: 'var(--faint)' }} />
            </a>

            {/* Socials */}
            <div className="grid grid-cols-4 gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 py-4 rounded-xl transition-all duration-200"
                  style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.borderColor = 'var(--border-hover)'
                    el.style.background = 'var(--card-hover)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.borderColor = 'var(--border)'
                    el.style.background = 'var(--card)'
                  }}
                >
                  <s.icon size={15} style={{ color: 'var(--text-muted)' }} />
                  <span
                    className="text-[11px] font-medium"
                    style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}
                  >
                    {s.label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <img src="/favicon.svg" width="32" height="32" alt="MH logo" style={{ borderRadius: '7px' }} />
          <p
            className="text-[11px]"
            style={{ color: 'var(--faint)', fontFamily: 'var(--font-mono)' }}
          >
            © {new Date().getFullYear()} Mohammed Huzaifa. Made with code and genuine opinions.
          </p>
        </div>
      </div>
    </footer>
  )
}
