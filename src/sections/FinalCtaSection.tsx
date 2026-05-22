import { ArrowRight } from 'lucide-react'
import { FadeIn } from '../components/ui/FadeIn'
import { Container } from '../components/ui/Container'
import { Ornament } from '../components/ui/Ornament'
import { EVENT_GROUP_URL, FINAL_CTA } from '../constants/event'

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden border-t border-gold/15 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(212,175,55,0.12),transparent)]" />
        <div className="light-leak-center absolute inset-0" />
      </div>

      <Container className="relative flex flex-col items-center text-center">
        <FadeIn>
          <div className="mb-6 flex items-center gap-4">
            <span className="gold-line w-10" />
            <span className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-gold/70">
              Evento gratuito
            </span>
            <span className="gold-line w-10" />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mb-6 font-display text-[clamp(1.3rem,3vw,2rem)] italic text-gold/30">
            &ldquo;A margem começa na fonte.&rdquo;
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h2 className="max-w-2xl font-display text-[clamp(2rem,4.5vw,3.25rem)] font-normal leading-[1.15] text-ink">
            {FINAL_CTA.title}
          </h2>
        </FadeIn>

        <FadeIn delay={0.25}>
          <Ornament className="my-8 justify-center" />
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="max-w-lg font-sans text-base leading-relaxed text-muted md:text-lg">
            {FINAL_CTA.description}
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-12 md:mt-14">
            <a
              href={EVENT_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cinematic group"
            >
              {FINAL_CTA.cta}
              <ArrowRight
                size={15}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <p className="mt-8 font-sans text-sm text-muted/70">
            {FINAL_CTA.note}
          </p>
        </FadeIn>
      </Container>
    </section>
  )
}
