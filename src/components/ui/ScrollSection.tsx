import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type ScrollSectionProps = {
  children: ReactNode
  className?: string
  delay?: number
}

const ease = [0.22, 1, 0.36, 1] as const

export function ScrollSection({
  children,
  className = '',
  delay = 0,
}: ScrollSectionProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15, margin: '-60px 0px -80px 0px' }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </motion.div>
  )
}
