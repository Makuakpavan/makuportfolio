import { aboutParagraphs, facts } from '../data/site'
import { BandHead, Shell } from './Shell'

export function About() {
  return (
    <section
      id="about"
      className="border-b border-edge py-[clamp(60px,8vw,110px)]"
    >
      <Shell>
        <BandHead title="About" />

        <div className="grid items-start gap-[clamp(32px,5vw,72px)] lg:[grid-template-columns:minmax(0,1.35fr)_minmax(0,1fr)]">
          <div>
            {aboutParagraphs.map((text) => (
              <p key={text.slice(0, 24)} className="mb-5 max-w-[62ch] text-inksoft last:mb-0">
                {text}
              </p>
            ))}
          </div>

          <dl className="m-0 rounded-[3px] border border-edge bg-panel p-[clamp(20px,2.6vw,30px)] backdrop-blur-[6px]">
            {facts.map((fact, i) => (
              <div
                key={fact.label}
                className={i > 0 ? 'mt-[18px] border-t border-edge pt-[18px]' : ''}
              >
                <dt className="mb-[5px] font-mono text-xs text-dim">
                  {fact.label}
                </dt>
                <dd className="m-0 text-base leading-[1.45]">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Shell>
    </section>
  )
}
