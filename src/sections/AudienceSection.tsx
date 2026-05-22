import { FadeIn } from '../components/ui/FadeIn'
import { ContentList, ContentListItem } from '../components/ui/ContentList'
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
    <section id="para-quem" className="section-padding relative scroll-mt-20">
      <Container className="relative">
        <FadeIn>
          <SectionHeader
            title={AUDIENCE.title}
            titleHighlight={AUDIENCE.titleHighlight}
            description={AUDIENCE.intro}
          />
        </FadeIn>

        <div className="mx-auto mt-14 max-w-xl md:mt-16">
          <FadeIn delay={0.1}>
            <p className="mb-10 text-center font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold">
              {AUDIENCE.subtitle}
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <ContentList>
              {AUDIENCE.items.map((item, i) => (
                <ContentListItem key={item} label={LABELS[i]}>
                  {item}
                </ContentListItem>
              ))}
            </ContentList>
          </FadeIn>

          <FadeIn delay={0.5}>
            <p className="mt-14 text-center font-display text-xl italic leading-relaxed text-gold/40 md:mt-16 md:text-2xl">
              &ldquo;{AUDIENCE.closing}&rdquo;
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}
