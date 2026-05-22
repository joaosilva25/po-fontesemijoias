type OrnamentProps = {
  className?: string
}

export function Ornament({ className = '' }: OrnamentProps) {
  return (
    <div
      className={`ornament flex items-center justify-center ${className}`}
      aria-hidden="true"
    >
      <span className="ornament-line ornament-line--left" />
      <svg
        className="ornament-star shrink-0"
        width="12"
        height="12"
        viewBox="0 0 10 10"
        fill="none"
      >
        <path
          d="M5 0 L5.7 4.3 L10 5 L5.7 5.7 L5 10 L4.3 5.7 L0 5 L4.3 4.3 Z"
          fill="currentColor"
        />
      </svg>
      <span className="ornament-line ornament-line--right" />
    </div>
  )
}
