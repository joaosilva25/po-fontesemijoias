import { Circle, Crown, Gem, Heart, Link, Sparkles } from 'lucide-react'
import { CAROUSEL_ITEMS } from '../constants/event'

const ITEM_ICONS = {
  Brincos:   Gem,
  Colares:   Crown,
  'Anéis':   Circle,
  Pulseiras: Link,
  Conjuntos: Sparkles,
  Piercing:  Heart,
} as const

type ItemLabel = keyof typeof ITEM_ICONS

function CarouselCard({
  label,
  gradient,
}: {
  label: string
  gradient: string
}) {
  const Icon = (ITEM_ICONS[label as ItemLabel] ?? Gem)

  return (
    <article
      className={`group relative h-64 w-52 shrink-0 overflow-hidden rounded-sm border border-gold/10 bg-gradient-to-br ${gradient} shadow-card md:h-72 md:w-60`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_15%,rgba(212,175,55,0.15),transparent_60%)]" />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6">
        <div className="flex h-20 w-20 items-center justify-center rounded-sm border border-gold/25 bg-black/40 backdrop-blur-sm transition-all duration-500 group-hover:scale-105 group-hover:border-gold/45 group-hover:bg-black/55 md:h-24 md:w-24">
          <Icon
            size={30}
            strokeWidth={1}
            className="text-gold/80 transition-colors duration-300 group-hover:text-gold md:size-9"
          />
        </div>
        <span className="font-display text-lg italic tracking-wide text-ink/80">
          {label}
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
    </article>
  )
}

export function JewelryCarousel() {
  const items = [...CAROUSEL_ITEMS, ...CAROUSEL_ITEMS]

  return (
    <div
      className="relative w-full overflow-hidden py-4"
      aria-label="Galeria de semijoias"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-cream to-transparent md:w-36" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-cream to-transparent md:w-36" />

      <div className="carousel-track flex w-max gap-5 px-8 md:gap-6">
        {items.map((item, index) => (
          <CarouselCard
            key={`${item.id}-${index}`}
            label={item.label}
            gradient={item.gradient}
          />
        ))}
      </div>
    </div>
  )
}
