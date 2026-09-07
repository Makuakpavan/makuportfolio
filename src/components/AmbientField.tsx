import { useReducedMotion, useScrollProgress } from '../hooks'

/**
 * Everything behind the content: the blueprint grid and two slow light
 * blooms. Fixed, non-interactive, hidden from screen readers.
 */
export function AmbientField() {
  const calm = useReducedMotion()

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="field-grid" />
      <div
        className={`absolute -top-[22vw] -left-[12vw] h-[56vw] w-[56vw] rounded-full opacity-50 blur-[120px] ${
          calm ? '' : 'animate-drift-a'
        }`}
        style={{
          background:
            'radial-gradient(circle, rgb(59 107 255 / 0.5), transparent 66%)',
        }}
      />
      <div
        className={`absolute top-[26vh] -right-[16vw] h-[44vw] w-[44vw] rounded-full opacity-50 blur-[120px] ${
          calm ? '' : 'animate-drift-b'
        }`}
        style={{
          background:
            'radial-gradient(circle, rgb(0 190 190 / 0.3), transparent 66%)',
        }}
      />
    </div>
  )
}

/** Hairline at the very top showing how far down the page you are. */
export function ScrollReadout() {
  const progress = useScrollProgress()

  return (
    <div className="fixed inset-x-0 top-0 z-80 h-0.5" aria-hidden>
      <span
        className="block h-full w-full origin-left bg-linear-to-r from-beam to-beamlite shadow-[0_0_12px_rgb(59_107_255_/_0.8)]"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  )
}
