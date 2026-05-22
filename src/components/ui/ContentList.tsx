import type { ReactNode } from 'react'

type ContentListProps = {
  children: ReactNode
  className?: string
}

export function ContentList({ children, className = '' }: ContentListProps) {
  return (
    <div className={`flex flex-col gap-11 md:gap-14 ${className}`}>
      {children}
    </div>
  )
}

type ContentListItemProps = {
  label: string
  children: ReactNode
  step?: string
  title?: string
}

export function ContentListItem({
  label,
  children,
  step,
  title,
}: ContentListItemProps) {
  return (
    <article className="group flex flex-col items-center gap-3 text-center md:flex-row md:items-start md:gap-8 md:text-left">
      {step && (
        <span
          className="hidden shrink-0 font-display text-2xl tabular-nums leading-none text-gold/25 transition-colors duration-300 group-hover:text-gold/50 md:block md:w-10 md:pt-0.5"
          aria-hidden="true"
        >
          {step}
        </span>
      )}

      <div
        className={`min-w-0 flex-1 ${step ? 'w-full pt-4 transition-colors duration-300 md:border-l md:border-gold/12 md:pl-7 md:pt-0.5 md:group-hover:border-gold/30' : ''}`}
      >
        <p className="mb-2.5 font-sans text-[0.62rem] font-medium uppercase tracking-[0.22em] text-gold/65 md:mb-3">
          {label}
        </p>

        {title && (
          <h3 className="mb-2 font-display font-medium tracking-normal text-ink">
            {title}
          </h3>
        )}

        <p className="font-sans text-[0.9375rem] leading-relaxed text-muted md:text-base">
          {children}
        </p>
      </div>
    </article>
  )
}
