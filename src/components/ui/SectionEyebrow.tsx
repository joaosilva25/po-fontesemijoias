import type { ReactNode } from 'react'

type SectionEyebrowProps = {
  children: ReactNode
  className?: string
  size?: 'default' | 'lg'
}

const sizeStyles = {
  default: {
    line: 'w-10',
    text: 'text-[0.65rem] tracking-[0.28em]',
  },
  lg: {
    line: 'w-12',
    text: 'text-[0.625rem] tracking-[0.1em] sm:text-[0.8rem] sm:tracking-[0.18em] md:text-[0.8125rem] md:tracking-[0.26em]',
  },
} as const

export function SectionEyebrow({
  children,
  className = '',
  size = 'default',
}: SectionEyebrowProps) {
  const styles = sizeStyles[size]

  return (
    <div
      className={`mb-6 flex max-w-full flex-wrap items-center justify-center gap-x-3 gap-y-2 px-1 sm:gap-4 ${className}`}
    >
      <span
        className={`gold-line hidden shrink-0 sm:block ${styles.line}`}
        aria-hidden="true"
      />
      <span
        className={`min-w-0 max-w-full text-balance text-center font-sans font-semibold uppercase text-gold/70 ${styles.text}`}
      >
        {children}
      </span>
      <span
        className={`gold-line hidden shrink-0 sm:block ${styles.line}`}
        aria-hidden="true"
      />
    </div>
  )
}
