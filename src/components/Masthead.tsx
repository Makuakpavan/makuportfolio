import { profile } from '../data/site'
import { useReducedMotion } from '../hooks'
import { Shell } from './Shell'

const links = [
  { label: 'work', href: '#work' },
  { label: 'stack', href: '#stack' },
  { label: 'about', href: '#about' },
]

export function Masthead() {
  const calm = useReducedMotion()

  return (
    <header className="sticky top-0 z-60 border-b border-edge bg-void/72 backdrop-blur-[14px]">
      <Shell className="flex min-h-[60px] items-center justify-between gap-6">
        <a
          href="#top"
          className="inline-flex items-center gap-[11px] font-display text-base font-semibold tracking-[-0.01em]"
        >
          <span className="relative size-[9px] shrink-0 rounded-full bg-live" aria-hidden>
            {!calm && (
              <span className="absolute inset-0 animate-beacon rounded-full bg-live" />
            )}
          </span>
          {profile.name}
        </a>

        <nav
          className="flex items-center gap-[clamp(16px,2.4vw,32px)] font-mono text-[13px] text-muted"
          aria-label="Sections"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden border-b border-transparent py-[7px] transition-colors hover:border-beam hover:text-ink sm:inline-block"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-[2px] border border-edgehi px-[14px] py-1.5 text-beamlite transition-all hover:border-beam hover:bg-beam/15 hover:shadow-[0_0_18px_rgb(59_107_255_/_0.28)]"
          >
            Hire me
          </a>
        </nav>
      </Shell>
    </header>
  )
}
