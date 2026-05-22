import { FadeIn } from '../components/ui/FadeIn'
import { JewelryCarousel } from '../components/JewelryCarousel'
import { Container } from '../components/ui/Container'
import { Ornament } from '../components/ui/Ornament'

export function JewelryCarouselSection() {
  return (
    <section className="section-padding-sm relative overflow-hidden" aria-label="Semijoias em destaque">
      <div
        className="pointer-events-none absolute inset-0 light-leak-center"
        aria-hidden="true"
      />

      <Container className="relative mb-12 text-center">
        <FadeIn>
          <p className="mb-3 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold">
            Coleção em destaque
          </p>
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-normal leading-snug text-ink">
            Peças para{' '}
            <em className="text-shimmer not-italic">todos os estilos</em>
          </h2>
          <Ornament className="mx-auto mt-6 justify-center" />
        </FadeIn>
      </Container>

      <FadeIn delay={0.15}>
        <JewelryCarousel />
      </FadeIn>
    </section>
  )
}
