import { ArrowDown } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Container'
import { FadeIn } from '../components/ui/FadeIn'
import { Ornament } from '../components/ui/Ornament'
import { PillBadge } from '../components/ui/PillBadge'
import { EVENT_DATES, EVENT_GROUP_URL, HERO } from '../constants/event'

export function HeroSection() {
  return (
    <section className="relative flex min-h-svh flex-col justify-center overflow-hidden pb-24 pt-24 md:pb-28 md:pt-28">
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none"
        aria-hidden="true"
      >
        <span className="font-display text-[min(42vw,28rem)] font-light leading-none text-gold/[0.04]">
          X
        </span>
      </div>

      <div
        className="pointer-events-none absolute inset-0 light-leak-tl opacity-80"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-0 h-[70%] w-[45%] bg-[radial-gradient(ellipse_at_100%_0%,rgba(212,175,55,0.1),transparent_65%)]"
        aria-hidden="true"
      />

      <div
        className="animate-float pointer-events-none absolute right-[6%] top-[18%] hidden h-48 w-48 rounded-full border border-gold/15 opacity-60 md:block"
        aria-hidden="true"
      />
      <div
        className="animate-float-slow animation-delay-300 pointer-events-none absolute right-[7%] top-[20%] hidden h-32 w-32 rounded-full border border-gold/8 opacity-40 md:block"
        aria-hidden="true"
      />
      <div
        className="animate-float-slow pointer-events-none absolute bottom-[28%] left-[4%] h-28 w-28 rounded-full border border-gold/12 opacity-40 md:h-36 md:w-36"
        aria-hidden="true"
      />

      <Container className="relative flex justify-center">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          <FadeIn delay={0.1} className="mb-8">
            <PillBadge>{EVENT_DATES}</PillBadge>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-balance font-display text-[clamp(2rem,5vw,3.75rem)] font-normal leading-[1.12] tracking-tight text-ink">
              {HERO.title.lead}{' '}
              <span className="whitespace-nowrap">{HERO.title.keep}</span>
              <br />
              <em className="text-shimmer not-italic">
                {HERO.titleHighlight[0]}
                <br />
                {HERO.titleHighlight[1]}
              </em>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3} className="my-8 flex justify-center md:my-9">
            <Ornament />
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="max-w-2xl font-sans text-base leading-relaxed text-ink-soft md:text-lg">
              {HERO.subtitle}
            </p>
          </FadeIn>

          <FadeIn delay={0.5} className="mt-4">
            <p className="max-w-xl font-sans text-sm leading-relaxed text-muted md:text-[0.9375rem]">
              {HERO.audience}
            </p>
          </FadeIn>

          <FadeIn delay={0.6} className="mt-10 flex justify-center md:mt-12">
            <Button href={EVENT_GROUP_URL}>{HERO.cta}</Button>
          </FadeIn>
        </div>
      </Container>

      <FadeIn delay={0.8} direction="none" className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 opacity-35">
          <span className="font-sans text-[0.6rem] uppercase tracking-[0.28em] text-muted">
            Explorar
          </span>
          <ArrowDown size={13} className="animate-bounce text-gold" strokeWidth={1.5} />
        </div>
      </FadeIn>
    </section>
  )
}
