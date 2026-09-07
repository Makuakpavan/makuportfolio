import { elsewhere, profile } from '../data/site'
import { Shell } from './Shell'

export function Contact() {
  return (
    <section id="contact" className="relative py-[clamp(64px,8vw,118px)]">
      <Shell>
        <h2 className="m-0 max-w-[18ch] font-display text-[clamp(30px,4.8vw,58px)] leading-[1.03] font-extrabold tracking-[-0.032em] text-balance">
          Have something that needs building?
        </h2>

        <p className="mt-[22px] max-w-[54ch] text-muted">
          Send me the problem, not the spec. I'll tell you honestly whether I'm
          the right person for it and how long I think it takes.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-[clamp(30px,3.6vw,44px)] inline-block rounded-[3px] border border-edgehi px-[26px] py-3.5 font-display text-[clamp(19px,2.5vw,30px)] font-semibold tracking-[-0.02em] break-words text-beamlite transition-all duration-300 hover:border-beam hover:bg-beam/15 hover:shadow-[0_0_32px_rgb(59_107_255_/_0.35)]"
        >
          {profile.email}
        </a>

        <nav
          className="mt-[clamp(32px,4vw,48px)] flex flex-wrap gap-x-7 gap-y-3.5 font-mono text-[13px]"
          aria-label="Elsewhere"
        >
          {elsewhere.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-edge pb-1 text-muted transition-colors hover:border-beam hover:text-beamlite"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </Shell>
    </section>
  )
}

export function Colophon() {
  return (
    <footer>
      <Shell className="flex flex-wrap justify-between gap-[18px] border-t border-edge pt-[26px] pb-9 font-mono text-xs text-dim">
        <span>{profile.fullName}, Jos, Nigeria</span>
        <span>React, TypeScript and Tailwind</span>
      </Shell>
    </footer>
  )
}
