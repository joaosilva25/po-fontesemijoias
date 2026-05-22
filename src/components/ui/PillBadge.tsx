import type { ReactNode } from 'react'

type PillBadgeProps = {
  children: ReactNode
  className?: string
}

export function PillBadge({ children, className = '' }: PillBadgeProps) {
  return (
    <span className={`pill-badge ${className}`}>
      <span className="pill-badge-dot animate-flicker" aria-hidden="true" />
      <span className="font-sans text-[0.65rem] font-medium uppercase tracking-[0.2em] text-gold">
        {children}
      </span>
    </span>
  )
}
