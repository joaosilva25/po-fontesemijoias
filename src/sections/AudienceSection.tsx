import { AudienceCarousel } from '../components/AudienceCarousel'
import { Container } from '../components/ui/Container'
import { Ornament } from '../components/ui/Ornament'
import { SectionHeader } from '../components/ui/SectionHeader'
import { AUDIENCE } from '../constants/event'

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

        <p className="mx-auto mt-12 text-center font-sans text-[0.7rem] font-medium uppercase tracking-[0.22em] text-gold md:mt-14">
          {AUDIENCE.subtitle}
        </p>
      </Container>

      <div className="relative mt-8 md:mt-10">
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-cream via-cream/80 to-transparent sm:w-28"
          aria-hidden="true"
        />

        <div className="mx-auto w-full max-w-6xl px-6 md:px-10 lg:px-12">
          <AudienceCarousel />
        </div>
      </div>

      <Container>
        <div className="mx-auto mt-14 max-w-lg text-center md:mt-16">
          <Ornament className="mb-7 justify-center" />
          <p className="text-sm font-regular leading-relaxed text-gold/65 md:text-lg">
            &ldquo;{AUDIENCE.closing}&rdquo;
          </p>
        </div>
      </Container>
    </section>
  )
}
