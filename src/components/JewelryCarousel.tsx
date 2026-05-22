import { useEffect, useMemo } from 'react'
import { useReducedMotion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { CAROUSEL_ITEMS } from '../constants/event'

const SLIDES = [...CAROUSEL_ITEMS, ...CAROUSEL_ITEMS, ...CAROUSEL_ITEMS]

const EMBLA_OPTIONS = {
  loop: true,
  align: 'start' as const,
  dragFree: true,
  containScroll: false as const,
}

function CarouselSlide({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="group/slide relative aspect-square overflow-hidden bg-black">
      <img
        src={src}
        alt={alt}
        className="jewelry-slide-img h-full w-full object-cover"
        loading="lazy"
        draggable={false}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[rgba(212,175,55,0.04)] mix-blend-soft-light"
        aria-hidden="true"
      />
    </div>
  )
}

export function JewelryCarousel() {
  const prefersReducedMotion = useReducedMotion()

  const plugins = useMemo(
    () =>
      prefersReducedMotion
        ? []
        : [
            AutoScroll({
              speed: 0.85,
              startDelay: 0,
              playOnInit: true,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ],
    [prefersReducedMotion],
  )

  const [emblaRef, emblaApi] = useEmblaCarousel(EMBLA_OPTIONS, plugins)

  useEffect(() => {
    if (!emblaApi || prefersReducedMotion) return
    emblaApi.plugins()?.autoScroll?.play()
  }, [emblaApi, prefersReducedMotion])

  return (
    <div className="jewelry-carousel relative w-full" aria-label="Galeria de semijoias">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.22)_0%,rgba(0,0,0,0.1)_35%,rgba(0,0,0,0.03)_62%,transparent_88%)] md:h-32 lg:h-44"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-[linear-gradient(to_top,rgba(0,0,0,0.22)_0%,rgba(0,0,0,0.1)_35%,rgba(0,0,0,0.03)_62%,transparent_88%)] md:h-32 lg:h-44"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-cream to-transparent sm:w-24 md:w-32"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-cream to-transparent sm:w-24 md:w-32"
        aria-hidden="true"
      />

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {SLIDES.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="min-w-0 flex-[0_0_72%] sm:flex-[0_0_48%] md:flex-[0_0_36%] lg:flex-[0_0_28%] xl:flex-[0_0_24%]"
            >
              <div className="p-[1px]">
                <CarouselSlide src={item.src} alt={item.alt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
