import { Container } from '../components/ui/Container'
import { SectionHeader } from '../components/ui/SectionHeader'
import { AUDIENCE } from '../constants/event'

const LABELS = [
  'Margem',
  'Nova linha',
  'Primeiro passo',
  'Importação',
  'Qualidade',
] as const

export function AudienceSection() {
  return (
    <section id="para-quem" className="section-padding relative">
      <Container>
        <SectionHeader
          eyebrow={AUDIENCE.eyebrow}
          title={AUDIENCE.title}
          titleHighlight={AUDIENCE.titleHighlight}
          description={AUDIENCE.intro}
        />

        <p className="text-center font-sans text-[0.7rem] mt-12 font-semibold uppercase tracking-[0.22em] text-gold">
          {AUDIENCE.subtitle}
        </p>

        <ul className="mx-auto mt-8 grid max-w-3xl list-none gap-3 p-0 sm:grid-cols-2 md:mt-10 md:gap-4">
          {AUDIENCE.items.map((item, i) => (
            <li
              key={item}
              className={i === AUDIENCE.items.length - 1 ? 'sm:col-span-2 sm:max-w-sm sm:justify-self-center' : ''}
            >
              <article className="h-full rounded-sm border border-gold/12 bg-surface/50 px-5 py-4 text-center backdrop-blur-sm transition-colors duration-300 hover:border-gold/22 sm:text-left">
                <p className="font-sans text-[0.62rem] font-medium uppercase tracking-[0.22em] text-gold/75">
                  {LABELS[i]}
                </p>
                <p className="mt-2 font-sans text-[0.9375rem] leading-snug text-ink-soft">
                  {item}
                </p>
              </article>
            </li>
          ))}
        </ul>
        
        <p className="mx-auto mt-10 max-w-lg text-center font-display text-base font-light italic leading-relaxed text-gold/65 md:mt-12 md:text-lg">
          &ldquo;{AUDIENCE.closing}&rdquo;
        </p>
      </Container>
    </section>
  )
}
