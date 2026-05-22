import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import {
  defaultViewport,
  sectionReveal,
  sectionRevealGentle,
} from '../../lib/motion'
import { SectionBackdrop } from './SectionBackdrop'

type ScrollSectionVariant = 'default' | 'gentle'

type ScrollSectionProps = {
  children: ReactNode
  className?: string
  variant?: ScrollSectionVariant
  withBackdrop?: boolean
  backdropGrayscale?: boolean
  backdropProminent?: boolean
}

const variants = {
  default: sectionReveal,
  gentle: sectionRevealGentle,
} as const

export function ScrollSection({
  children,
  className = '',
  variant = 'default',
  withBackdrop = true,
  backdropGrayscale = true,
  backdropProminent = false,
}: ScrollSectionProps) {
  const prefersReducedMotion = useReducedMotion()

  const rootClassName = `relative ${className}`.trim()
  const content = withBackdrop ? (
    <>
      <SectionBackdrop
        grayscale={backdropGrayscale}
        prominent={backdropProminent}
      />
      <div className="relative z-10">{children}</div>
    </>
  ) : (
    children
  )

  if (prefersReducedMotion) {
    return <div className={rootClassName}>{content}</div>
  }

  return (
    <motion.div
      className={rootClassName}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={variants[variant]}
    >
      {content}
    </motion.div>
  )
}
