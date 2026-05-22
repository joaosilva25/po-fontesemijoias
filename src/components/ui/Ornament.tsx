type OrnamentProps = {
  className?: string
}

export function Ornament({ className = '' }: OrnamentProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`} aria-hidden="true">
      <span className="gold-line w-12" />
      <svg width="10" height="10" viewBox="0 0 10 10">
        <path
          d="M5 0 L5.7 4.3 L10 5 L5.7 5.7 L5 10 L4.3 5.7 L0 5 L4.3 4.3 Z"
          fill="currentColor"
          className="text-gold/60"
        />
      </svg>
      <span className="gold-line w-12" />
    </div>
  )
}
