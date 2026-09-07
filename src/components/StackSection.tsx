import { stackGroups } from '../data/site'
import { BandHead, Shell } from './Shell'

export function StackSection() {
  return (
    <section
      id="stack"
      className="border-b border-edge py-[clamp(60px,8vw,110px)]"
    >
      <Shell>
        <BandHead
          title="What I work with"
          note="Deep in React and TypeScript, comfortable enough on the backend to build and deploy an API on my own."
        />

        <div className="grid gap-[clamp(24px,3vw,34px)] [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
          {stackGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-[3px] border border-edge bg-panel p-[clamp(20px,2.6vw,28px)] backdrop-blur-[6px] transition-all duration-300 hover:-translate-y-[3px] hover:border-edgehi"
            >
              <h3 className="m-0 mb-2.5 border-b-2 border-beam pb-3 font-display text-[17px] font-semibold">
                {group.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.55] text-muted">
                {group.note}
              </p>
              <ul className="mt-[18px] grid list-none gap-[9px] p-0 font-mono text-[13px] text-[#B9CFDA]">
                {group.items.map((item) => (
                  <li key={item} className="flex items-baseline gap-2.5">
                    <span
                      aria-hidden
                      className="size-[5px] shrink-0 -translate-y-0.5 rounded-full bg-beam"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Shell>
    </section>
  )
}
