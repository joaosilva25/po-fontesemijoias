type BrandMarkProps = {
  size?: 'sm' | 'md'
  className?: string
}

const sizes = {
  sm: {
    label: 'text-[0.45rem] tracking-[0.32em]',
    mark: 'text-xl tracking-[0.18em]',
    solid: 'font-semibold',
    outline: 'text-[1.15rem] font-light',
  },
  md: {
    label: 'text-[0.5rem] tracking-[0.36em]',
    mark: 'text-3xl tracking-[0.2em]',
    solid: 'font-semibold',
    outline: 'text-[1.65rem] font-light',
  },
}

export function BrandMark({ size = 'sm', className = '' }: BrandMarkProps) {
  const s = sizes[size]

  return (
    <div className={`flex flex-col items-center gap-1.5 ${className}`}>
      <span
        className={`font-sans font-medium uppercase text-muted/70 ${s.label}`}
      >
        Fonte das Semijoias
      </span>
      <div className={`flex items-baseline font-sans leading-none ${s.mark}`}>
        <span className={`text-gold ${s.solid}`}>X</span>
        <span
          className={`${s.outline}`}
          style={{
            WebkitTextStroke: '1px rgba(212, 175, 55, 0.65)',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Y
        </span>
      </div>
    </div>
  )
}
