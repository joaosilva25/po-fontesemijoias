import type { Transition, Variants } from 'framer-motion'

export const cinematicEase = [0.22, 1, 0.36, 1] as const

export const sectionEnter: Transition = {
  duration: 0.95,
  ease: cinematicEase,
}

export const sectionExit: Transition = {
  duration: 0.65,
  ease: cinematicEase,
}

export const sectionReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
    scale: 0.985,
    transition: sectionExit,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: sectionEnter,
  },
}

export const sectionRevealGentle: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.55, ease: cinematicEase },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: cinematicEase },
  },
}

export const heroContainer: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.06,
      staggerDirection: -1,
      when: 'afterChildren',
    },
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.12,
      when: 'beforeChildren',
    },
  },
}

export const heroItem: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    transition: sectionExit,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: cinematicEase,
    },
  },
}

export const heroItemFade: Variants = {
  hidden: {
    opacity: 0,
    transition: sectionExit,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: cinematicEase,
    },
  },
}

/** Replays on every enter/exit — animation resets when the section leaves the viewport. */
export const defaultViewport = {
  once: false,
  amount: 0.15,
  margin: '0px 0px -8% 0px',
} as const

export const heroViewport = {
  once: false,
  amount: 0.25,
  margin: '0px 0px -5% 0px',
} as const
