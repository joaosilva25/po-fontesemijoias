import { Container } from '../components/ui/Container'
import { Ornament } from '../components/ui/Ornament'
import { SectionEyebrow } from '../components/ui/SectionEyebrow'
import { EVENT_GROUP_URL, FINAL_CTA } from '../constants/event'

export function FinalCtaSection() {
  return (
    <section className="section-padding relative scroll-mt-20">
      <Container className="flex flex-col items-center text-center">
        <SectionEyebrow>{FINAL_CTA.eyebrow}</SectionEyebrow>

        <h2 className="max-w-2xl font-display text-[clamp(2rem,4.5vw,3.25rem)] font-normal leading-[1.15] text-ink">
          {FINAL_CTA.title}
        </h2>

        <Ornament className="my-8 justify-center" />

        <p className="max-w-lg font-sans text-base leading-relaxed text-muted md:text-lg">
          {FINAL_CTA.description}
        </p>

        <div className="mt-9">
          <a href={EVENT_GROUP_URL} className="btn-cinematic group">
            {FINAL_CTA.cta}
          </a>
        </div>

        <p className="mt-6 font-sans text-sm text-muted/70">{FINAL_CTA.note}</p>
      </Container>
    </section>
  )
}
