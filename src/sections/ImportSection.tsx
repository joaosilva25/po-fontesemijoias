import {
  Plane,
  RefreshCw,
  ShieldCheck,
  Target,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react'
import { JewelryCarousel } from '../components/JewelryCarousel'
import { Container } from '../components/ui/Container'
import { Ornament } from '../components/ui/Ornament'
import { SectionHeader } from '../components/ui/SectionHeader'
import { IMPORT } from '../constants/event'

const ICONS: Record<(typeof IMPORT.topics)[number]['label'], LucideIcon> = {
  Margem: TrendingUp,
  Importação: Plane,
  Fornecedor: ShieldCheck,
  Posicionamento: Target,
  Recorrência: RefreshCw,
}

function ImportTopicRow({
  text,
  Icon,
  striped,
}: {
  text: string
  Icon: LucideIcon
  striped: boolean
}) {
  return (
    <li
      className={`grid grid-cols-[1fr_auto] items-center gap-5 rounded-full px-5 py-4 sm:gap-8 sm:px-6 sm:py-[1.125rem] ${
        striped ? 'bg-white/[0.04]' : ''
      }`}
    >
      <p className="font-sans text-[0.9375rem] leading-snug text-ink-soft/90 sm:text-base">
        {text}
      </p>
      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/12 md:h-9 md:w-9"
        aria-hidden="true"
      >
        <Icon className="h-5 w-5 text-gold/75 md:h-4 md:w-4" strokeWidth={1.5} />
      </div>
    </li>
  )
}

export function ImportSection() {
  return (
    <section id="importacao" className="relative pt-[6rem]">
      <Container>
        <SectionHeader
          eyebrow={IMPORT.eyebrow}
          title={IMPORT.title}
          titleHighlight={IMPORT.titleHighlight}
          description={IMPORT.intro}
        />

        <div className="mx-auto mt-14 w-full max-w-2xl md:mt-16">
          <p className="text-center font-sans text-[0.7rem] font-medium uppercase tracking-[0.22em] text-gold md:text-left">
            {IMPORT.subtitle}
          </p>

          <ul className="mt-5 list-none space-y-1 p-0 md:mt-6">
            {IMPORT.topics.map((topic, i) => (
              <ImportTopicRow
                key={topic.label}
                text={topic.text}
                Icon={ICONS[topic.label]}
                striped={i % 2 === 1}
              />
            ))}
          </ul>

          <div className="mt-14 text-center md:mt-16">
            <Ornament className="mb-7 justify-center" />
            <p className="font-display text-base font-light italic leading-relaxed text-gold/65 md:text-lg">
              {IMPORT.closing}
            </p>
          </div>
        </div>
      </Container>

      <div className="relative mt-20 w-full md:mt-24">
        <JewelryCarousel />
      </div>
    </section>
  )
}
