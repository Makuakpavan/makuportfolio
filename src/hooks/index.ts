import { useEffect, useRef, useState, type RefObject } from 'react'

/**
 * True when the visitor has asked their operating system to reduce motion.
 * Animated components check this and skip the animation entirely rather
 * than just shortening it.
 */
export function useReducedMotion(): boolean {
  const [calm, setCalm] = useState(() =>
    typeof window === 'undefined'
      ? false
      : window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setCalm(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return calm
}

/* ---------------------------------------------------------------
   One shared scroll ticker for the whole page. Every subscriber runs
   inside a single requestAnimationFrame callback per frame, instead of
   each hook attaching its own scroll listener. Adding more scroll-driven
   UI later costs nothing extra.
   --------------------------------------------------------------- */

const subscribers = new Set<() => void>()
let ticking = false
let wired = false

function flush() {
  subscribers.forEach((fn) => fn())
  ticking = false
}

function schedule() {
  if (!ticking) {
    ticking = true
    requestAnimationFrame(flush)
  }
}

function subscribe(fn: () => void) {
  if (!wired) {
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    wired = true
  }
  subscribers.add(fn)
  fn()
  return () => {
    subscribers.delete(fn)
  }
}

/** How far down the whole page the visitor is, 0 to 1. */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0)

  useEffect(
    () =>
      subscribe(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight
        setProgress(max > 0 ? window.scrollY / max : 0)
      }),
    [],
  )

  return progress
}

/**
 * How far the reading line has travelled through one element, 0 to 1.
 * Fills the rail beside the project list as you scroll past it.
 */
export function useElementFill(ref: RefObject<HTMLElement | null>): number {
  const [fill, setFill] = useState(0)

  useEffect(
    () =>
      subscribe(() => {
        const el = ref.current
        if (!el) return
        const box = el.getBoundingClientRect()
        const readingLine = window.innerHeight * 0.62
        const raw = (readingLine - box.top) / box.height
        setFill(Math.max(0, Math.min(1, raw)))
      }),
    [ref],
  )

  return fill
}

/** Fires once, the first time the element scrolls into view. */
export function useInView<T extends HTMLElement>(
  threshold = 0.18,
): [RefObject<T | null>, boolean] {
  const ref = useRef<T>(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setSeen(true)
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true)
          io.disconnect()
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  return [ref, seen]
}

const NOISE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/\\<>[]'

/** Resolves a string out of random characters, left to right, once. */
export function useDecodedText(target: string, enabled: boolean): string {
  const [text, setText] = useState(enabled ? '' : target)

  useEffect(() => {
    if (!enabled) {
      setText(target)
      return
    }

    let frame = 0
    const id = window.setInterval(() => {
      frame += 1
      const revealed = frame * 0.9

      if (revealed > target.length) {
        setText(target)
        window.clearInterval(id)
        return
      }

      let out = ''
      for (let i = 0; i < target.length; i += 1) {
        const ch = target[i]
        if (ch === ' ' || ch === ',') out += ch
        else if (i < revealed) out += ch
        else out += NOISE[Math.floor(Math.random() * NOISE.length)]
      }
      setText(out)
    }, 34)

    return () => window.clearInterval(id)
  }, [target, enabled])

  return text
}
