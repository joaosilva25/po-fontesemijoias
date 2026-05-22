import { FadeIn } from '../components/ui/FadeIn'
import { ContentList, ContentListItem } from '../components/ui/ContentList'
import { Container } from '../components/ui/Container'
import { Ornament } from '../components/ui/Ornament'
import { SectionHeader } from '../components/ui/SectionHeader'
import { IMPORT } from '../constants/event'

const LABELS = [
  'Margem',
  'Importação',
  'Fornecedor',
  'Posicionamento',
  'Recorrência',
] as const

export function ImportSection() {
  return (
    <section id="importacao" className="section-padding relative scroll-mt-20">
      <Container>
        <FadeIn>
          <SectionHeader
            title={IMPORT.title}
            titleHighlight={IMPORT.titleHighlight}
            description={IMPORT.intro}
          />
        </FadeIn>

        <div className="mx-auto mt-14 max-w-xl md:mt-16">
          <FadeIn delay={0.1}>
            <p className="mb-10 text-center font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold">
              {IMPORT.subtitle}
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <ContentList>
              {IMPORT.items.map((item, i) => (
                <ContentListItem
                  key={item}
                  step={String(i + 1).padStart(2, '0')}
                  label={LABELS[i]}
                >
                  {item}
                </ContentListItem>
              ))}
            </ContentList>
          </FadeIn>

          <FadeIn delay={0.55}>
            <div className="mt-14 text-center md:mt-16">
              <Ornament className="mb-6 justify-center" />
              <p className="font-sans text-base leading-relaxed text-muted md:text-lg">
                {IMPORT.closing}
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}
