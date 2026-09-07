import type { ReactNode } from 'react'

/** Centred content column used by every section. */
export function Shell({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`relative z-2 mx-auto w-full max-w-[1180px] px-[clamp(20px,5vw,64px)] ${className}`}
    >
      {children}
    </div>
  )
}

/** Section heading plus optional standfirst, shared by Work / Stack / About. */
export function BandHead({
  title,
  note,
}: {
  title: string
  note?: string
}) {
  return (
    <div className="mb-[clamp(36px,4.6vw,60px)] flex flex-wrap items-baseline justify-between gap-6">
      <h2 className="m-0 font-display text-[clamp(27px,3.5vw,42px)] leading-[1.04] font-extrabold tracking-[-0.028em]">
        {title}
      </h2>
      {note && (
        <p className="m-0 max-w-[40ch] text-[15.5px] text-muted">{note}</p>
      )}
    </div>
  )
}
