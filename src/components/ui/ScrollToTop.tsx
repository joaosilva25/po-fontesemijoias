import { ChevronUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.intersectionRatio < 0.35),
      { threshold: [0, 0.35, 0.5, 0.75, 1] },
    )

    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  const scrollToTop = () => {
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 'auto'
      : 'smooth'
    window.scrollTo({ top: 0, behavior })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className={`fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white text-cream shadow-[0_2px_12px_-2px_rgba(0,0,0,0.35)] transition-all duration-300 hover:bg-white/90 hover:text-cream md:bottom-6 md:right-6 md:h-12 md:w-12 ${
        visible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-1 opacity-0'
      }`}
    >
      <ChevronUp className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
    </button>
  )
}
