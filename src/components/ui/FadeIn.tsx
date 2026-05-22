import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

type FadeInProps = {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

const ease = [0.22, 1, 0.36, 1] as const

export function FadeIn({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: FadeInProps) {
  const ref = useRef(null)
  const prefersReducedMotion = useReducedMotion()
  const isInView = useInView(ref, {
    once: false,
    margin: '-40px 0px -60px 0px',
    amount: 0.2,
  })

  const axis = {
    up:    { y: 32, x: 0 },
    down:  { y: -32, x: 0 },
    left:  { y: 0, x: -32 },
    right: { y: 0, x: 32 },
    none:  { y: 0, x: 0 },
  }[direction]

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...axis }}
      animate={
        isInView
          ? { opacity: 1, y: 0, x: 0 }
          : { opacity: 0, ...axis }
      }
      transition={{
        duration: 0.75,
        delay: isInView ? delay : 0,
        ease,
      }}
    >
      {children}
    </motion.div>
  )
}
