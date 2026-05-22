import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
  ChevronLeft,
  ChevronRight,
  Compass,
  Gem,
  Layers,
  Plane,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react'
import { AUDIENCE } from '../constants/event'

const ICONS: Record<(typeof AUDIENCE.points)[number]['label'], LucideIcon> = {
  Margem: TrendingUp,
  'Nova linha': Layers,
  'Primeiro passo': Compass,
  Importação: Plane,
  Qualidade: Gem,
}

const EMBLA_OPTIONS = {
  align: 'start' as const,
  containScroll: 'trimSnaps' as const,
  dragFree: true,
}

function AudienceCard({
  label,
  text,
  Icon,
}: {
  label: string
  text: string
  Icon: LucideIcon
}) {
  return (
    <article className="flex h-[20rem] w-full flex-col items-center justify-center gap-3.5 overflow-hidden rounded-2xl border border-gold/12 bg-transparent px-5 transition-colors duration-300 hover:border-gold/20 sm:grid sm:h-[23.5rem] sm:grid-rows-[10rem_4.75rem_1fr] sm:gap-0 sm:px-0">
      <div className="flex shrink-0 items-center justify-center">
        <div className="relative flex h-[4rem] w-[4rem] items-center justify-center rounded-full border border-gold/20 bg-gold/[0.04] shadow-[0_0_28px_-12px_rgba(212,175,55,0.2)] sm:h-[4.5rem] sm:w-[4.5rem]">
          <div
            className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.1)_0%,transparent_68%)]"
            aria-hidden="true"
          />
          <Icon
            className="relative h-9 w-9 text-gold"
            strokeWidth={1.3}
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="flex shrink-0 flex-col items-center gap-2 text-center sm:justify-end sm:px-5">
        <h3 className="font-sans text-[0.72rem] font-semibold leading-tight tracking-[0.1em] text-ink sm:text-[0.78rem]">
          <span className="block whitespace-nowrap">{label}</span>
        </h3>
        <p className="mt-px shrink-0 font-sans text-[0.55rem] font-medium uppercase leading-none tracking-[0.22em] text-gold sm:text-[0.6rem]">
          Para você
        </p>
      </div>

      <div className="flex shrink-0 justify-center sm:items-start sm:px-5 sm:pb-8 sm:pt-3">
        <p className="max-w-[16rem] text-center font-sans text-[0.8125rem] leading-relaxed text-muted">
          {text}
        </p>
      </div>
    </article>
  )
}

export function AudienceCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(EMBLA_OPTIONS)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const syncButtons = useCallback(() => {
    if (!emblaApi) return
    setCanPrev(emblaApi.canScrollPrev())
    setCanNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    syncButtons()
    emblaApi.on('select', syncButtons).on('reInit', syncButtons)
    return () => {
      emblaApi.off('select', syncButtons).off('reInit', syncButtons)
    }
  }, [emblaApi, syncButtons])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <div className="relative" aria-label={AUDIENCE.subtitle}>
      <div className="mb-5 hidden justify-end gap-2 md:flex">
        <button
          type="button"
          onClick={scrollPrev}
          disabled={!canPrev}
          aria-label="Card anterior"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-ink transition-colors hover:border-gold/30 hover:bg-white/[0.07] disabled:pointer-events-none disabled:opacity-25"
        >
          <ChevronLeft className="h-4 w-4" strokeWidth={2} />
        </button>
        <button
          type="button"
          onClick={scrollNext}
          disabled={!canNext}
          aria-label="Próximo card"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-ink transition-colors hover:border-gold/30 hover:bg-white/[0.07] disabled:pointer-events-none disabled:opacity-25"
        >
          <ChevronRight className="h-4 w-4" strokeWidth={2} />
        </button>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y items-stretch">
          {AUDIENCE.points.map((point) => {
            const Icon = ICONS[point.label]
            return (
              <div
                key={point.label}
                className="flex min-w-0 flex-[0_0_78%] pr-3 sm:flex-[0_0_17.5rem] sm:pr-4 md:flex-[0_0_16.25rem]"
              >
                <AudienceCard label={point.label} text={point.text} Icon={Icon} />
              </div>
            )
          })}
        </div>
      </div>

      <p className="mt-5 font-sans text-[0.5rem] font-medium uppercase tracking-[0.18em] text-muted/50 md:text-[0.65rem] md:tracking-[0.2em]">
        Arraste para o lado
      </p>
    </div>
  )
}
