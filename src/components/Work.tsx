import { useRef, type PointerEvent } from 'react'
import { alsoBuilt, projects, type Project } from '../data/site'
import { useElementFill, useInView, useReducedMotion } from '../hooks'
import { BandHead, Shell } from './Shell'

function Entry({ project, calm }: { project: Project; calm: boolean }) {
  const [ref, seen] = useInView<HTMLElement>()
  const lit = calm || seen

  // Feeds the cursor spotlight. Written straight to the DOM node rather than
  // through state so pointer movement never triggers a React render.
  function trackPointer(e: PointerEvent<HTMLElement>) {
    if (calm) return
    const el = e.currentTarget
    const box = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - box.left}px`)
    el.style.setProperty('--my', `${e.clientY - box.top}px`)
  }

  return (
    <article
      ref={ref}
      onPointerMove={trackPointer}
      className={`group relative -ml-[clamp(18px,2.2vw,28px)] border-t border-edge px-[clamp(18px,2.2vw,28px)] py-[clamp(24px,3vw,34px)] transition-all duration-700 ease-out first:border-t-0 ${
        lit ? 'translate-y-0 opacity-100' : 'translate-y-[18px] opacity-0'
      }`}
    >
      {/* station dot on the rail */}
      <span
        aria-hidden
        className={`absolute top-[calc(clamp(24px,3vw,34px)+9px)] left-[calc(clamp(18px,2.2vw,28px)-clamp(28px,3.6vw,46px))] size-[14px] rounded-full border-2 bg-void transition-all duration-500 ${
          lit
            ? 'border-beam shadow-[0_0_16px_rgb(59_107_255_/_0.6)]'
            : 'border-edgehi'
        }`}
      />

      {/* cursor spotlight */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(340px_circle_at_var(--mx,50%)_var(--my,50%),rgb(59_107_255_/_0.13),transparent_70%)]"
      />

      <p className="m-0 mb-2 font-mono text-[12.5px] text-beamlite">
        {project.kind}
      </p>

      <h3 className="m-0 font-display text-[clamp(24px,2.9vw,35px)] leading-[1.1] font-extrabold tracking-[-0.028em]">
        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-linear-to-r from-beam to-beam bg-[length:0%_2px] bg-position-[0_100%] bg-no-repeat pb-[3px] transition-[background-size] duration-400 hover:bg-[length:100%_2px]"
          >
            {project.title}
          </a>
        ) : (
          project.title
        )}
      </h3>

      <p className="mt-3.5 max-w-[64ch] text-inksoft">{project.body}</p>
      <p className="mt-3 max-w-[64ch] text-[15.5px] text-muted">
        {project.build}
      </p>

      <div className="mt-[18px] flex flex-wrap items-center gap-x-3.5 gap-y-3 font-mono text-[12.5px]">
        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[2px] border border-beam bg-beam px-[14px] py-1.5 font-medium text-void shadow-[0_0_18px_rgb(59_107_255_/_0.25)] transition-all hover:-translate-y-0.5 hover:bg-beam/90"
          >
            Preview
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-[2px] border border-edgehi px-[14px] py-1.5 text-dim opacity-70">
            Preview soon
          </span>
        )}

        {project.links?.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[2px] border border-edgehi px-[13px] py-1.5 text-beamlite transition-all hover:border-beam hover:bg-beam/15 hover:shadow-[0_0_18px_rgb(59_107_255_/_0.3)]"
          >
            {link.label}
          </a>
        ))}
        <span
          className={`inline-flex items-center gap-2 py-1.5 ${
            project.status.live ? 'text-live' : 'text-dim'
          }`}
        >
          <span className="size-1.5 shrink-0 rounded-full bg-current" aria-hidden />
          {project.status.label}
        </span>
      </div>
    </article>
  )
}

export function Work() {
  const calm = useReducedMotion()
  const railRef = useRef<HTMLDivElement>(null)
  const fill = useElementFill(railRef)

  return (
    <section
      id="work"
      className="border-b border-edge py-[clamp(60px,8vw,110px)]"
    >
      <Shell>
        <BandHead
          title="Selected work"
          note="Shipped products and products in progress. Each one is real code I wrote, not a tutorial follow-along."
        />

        <div ref={railRef} className="relative pl-[clamp(28px,3.6vw,46px)]">
          {/* dim track */}
          <span
            aria-hidden
            className="absolute top-[9px] bottom-[9px] left-1.5 w-0.5 bg-[rgb(125_190_220_/_0.16)]"
          />
          {/* bright fill, driven by scroll position */}
          <span
            aria-hidden
            className="absolute top-[9px] bottom-[9px] left-1.5 w-0.5 origin-top bg-linear-to-b from-beam to-beamlite shadow-[0_0_14px_rgb(59_107_255_/_0.6)]"
            style={{ transform: `scaleY(${calm ? 1 : fill})` }}
          />

          {projects.map((project) => (
            <Entry key={project.id} project={project} calm={calm} />
          ))}
        </div>

        <div className="mt-[clamp(36px,4vw,54px)] rounded-[3px] border border-edge bg-panel p-[clamp(22px,3vw,34px)] backdrop-blur-[6px]">
          <h3 className="m-0 mb-[18px] font-mono text-[12.5px] font-normal text-muted">
            Also built
          </h3>
          <ul className="m-0 grid list-none gap-4 p-0">
            {alsoBuilt.map((item) => (
              <li key={item.name} className="max-w-[64ch]">
                <b className="font-display font-semibold text-ink">
                  {item.name}
                </b>{' '}
                — {item.text}
              </li>
            ))}
          </ul>
        </div>
      </Shell>
    </section>
  )
}
