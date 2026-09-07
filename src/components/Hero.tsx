import { profile, stops } from '../data/site'
import { useDecodedText, useReducedMotion } from '../hooks'
import { Shell } from './Shell'

function RouteStrip({ calm }: { calm: boolean }) {
  return (
    <div
      className={`relative mt-[clamp(48px,6.4vw,80px)] flex flex-col gap-[26px] pl-0.5 md:flex-row md:gap-0 md:pl-0 ${
        calm ? '' : 'animate-lift opacity-0'
      }`}
      style={calm ? undefined : { animationDelay: '1.15s' }}
      role="list"
      aria-label="Where I am and where I work"
    >
      <span className="route-track" aria-hidden>
        <i className="route-line" />
        {!calm && <span className="route-pod" />}
      </span>

      {stops.map((stop) => (
        <div
          key={stop.name}
          role="listitem"
          className="relative flex-1 pl-[34px] md:pt-8 md:pr-[18px] md:pl-0"
        >
          <span
            aria-hidden
            className={`absolute top-[3px] left-0 size-[14px] rounded-full border-2 bg-void md:top-0 ${
              stop.current
                ? 'border-live shadow-[0_0_16px_rgb(255_176_32_/_0.6)]'
                : 'border-beam shadow-[0_0_14px_rgb(59_107_255_/_0.55)]'
            }`}
          />
          <span className="block font-display text-base leading-[1.3] font-semibold">
            {stop.name}
          </span>
          <span
            className={`mt-1.5 block font-mono text-[12.5px] leading-[1.5] ${
              stop.current ? 'text-live' : 'text-dim'
            }`}
          >
            {stop.note}
          </span>
        </div>
      ))}
    </div>
  )
}

export function Hero() {
  const calm = useReducedMotion()
  const eyebrow = useDecodedText(profile.eyebrow, !calm)
  const words = profile.headline.split(' ')

  return (
    <section className="border-b border-edge pt-[clamp(64px,11vw,140px)] pb-[clamp(52px,7vw,96px)]">
      <Shell>
        <p className="m-0 mb-[26px] inline-flex items-center gap-2.5 font-mono text-[13px] text-beamlite">
          <span className="h-px w-[22px] shrink-0 bg-beam" aria-hidden />
          {/* aria-label keeps the real text available while it decodes */}
          <span aria-label={profile.eyebrow}>{eyebrow}</span>
        </p>

        <h1 className="m-0 max-w-[16ch] font-display text-[clamp(36px,6.4vw,80px)] leading-none font-extrabold tracking-[-0.038em] text-balance">
          {words.map((word, i) => (
            <span key={`${word}-${i}`}>
              <span
                className={
                  calm
                    ? undefined
                    : 'inline-block translate-y-[0.42em] animate-lift opacity-0 blur-[6px]'
                }
                style={
                  calm ? undefined : { animationDelay: `${0.28 + i * 0.045}s` }
                }
              >
                {word}
              </span>{' '}
            </span>
          ))}
        </h1>

        <p
          className={`mt-7 max-w-[54ch] text-[clamp(17px,1.3vw,19.5px)] leading-[1.6] text-muted ${
            calm ? '' : 'animate-lift opacity-0'
          }`}
          style={calm ? undefined : { animationDelay: '1s' }}
        >
          {profile.sub}
        </p>

        <RouteStrip calm={calm} />
      </Shell>
    </section>
  )
}
