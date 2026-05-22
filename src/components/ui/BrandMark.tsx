type BrandMarkProps = {
  size?: 'sm' | 'md'
  className?: string
}

const sizes = {
  sm: 'h-8 w-auto max-w-[160px] md:h-9',
  md: 'h-12 w-auto max-w-[220px] md:h-14',
}

export function BrandMark({ size = 'sm', className = '' }: BrandMarkProps) {
  return (
    <img
      src="/Logo.png"
      alt="Xingyu — Fonte das Semijoias"
      className={`object-contain ${sizes[size]} ${className}`}
    />
  )
}
