type LogoProps = {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  src?: string
  alt?: string
  variant?: 'default' | 'light'
}

const titleSizes = {
  sm: 'text-xl',
  md: 'text-2xl',
  lg: 'text-[clamp(2rem,4vw,2.75rem)]',
}

export function Logo({
  className = '',
  size = 'md',
  src,
  alt = 'Xingyu',
  variant = 'default',
}: LogoProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`h-auto w-auto max-w-[200px] object-contain ${className}`}
      />
    )
  }

  const titleColor = variant === 'light' ? 'text-ink' : 'text-gold'
  const subtitleColor = variant === 'light' ? 'text-muted' : 'text-muted/80'

  return (
    <div
      className={`flex flex-col gap-2 ${className}`}
      aria-label="Xingyu — Fonte das Semijoias"
    >
      <span
        className={`font-display font-medium uppercase leading-[var(--leading-title)] tracking-normal ${titleColor} ${titleSizes[size]}`}
      >
        Xingyu
      </span>
      <span className="h-px w-14 bg-gradient-to-r from-gold/80 via-gold/40 to-transparent" />
      <span
        className={`font-sans text-[0.6rem] font-medium uppercase tracking-[0.38em] ${subtitleColor}`}
      >
        Fonte das Semijoias
      </span>
    </div>
  )
}
