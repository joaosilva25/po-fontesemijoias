import type { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  href: string
  variant?: 'primary' | 'outline'
  className?: string
}

const variants = {
  primary: 'btn-cinematic',
  outline:
    'inline-flex items-center justify-center gap-3 rounded-sm border border-gold/35 bg-transparent px-8 py-4 text-sm font-medium uppercase tracking-[0.08em] text-gold transition-all duration-300 hover:border-gold/60 hover:bg-gold/5 active:scale-[0.98]',
}

function isExternalHref(href: string) {
  return href.startsWith('http://') || href.startsWith('https://')
}

export function Button({
  children,
  href,
  variant = 'primary',
  className = '',
}: ButtonProps) {
  const external = isExternalHref(href)

  return (
    <a
      href={href}
      {...(external
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : undefined)}
      className={`group ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  )
}
