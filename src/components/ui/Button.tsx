import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  href: string
  variant?: 'primary' | 'outline'
  className?: string
  showArrow?: boolean
}

const variants = {
  primary: 'btn-cinematic',
  outline:
    'inline-flex items-center justify-center gap-3 rounded-sm border border-gold/35 bg-transparent px-8 py-4 text-sm font-medium uppercase tracking-[0.08em] text-gold transition-all duration-300 hover:border-gold/60 hover:bg-gold/5 active:scale-[0.98]',
}

export function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  showArrow = true,
}: ButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group ${variants[variant]} ${className}`}
    >
      {children}
      {showArrow && variant === 'primary' && (
        <ArrowRight
          size={15}
          strokeWidth={2}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </a>
  )
}
