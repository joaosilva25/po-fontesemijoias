import { SiteFooter } from '../components/layout/SiteFooter'
import { SiteHeader } from '../components/layout/SiteHeader'
import { ScrollSection } from '../components/ui/ScrollSection'
import { AudienceSection } from '../sections/AudienceSection'
import { FinalCtaSection } from '../sections/FinalCtaSection'
import { HeroSection } from '../sections/HeroSection'
import { ImportSection } from '../sections/ImportSection'
import { JewelryCarouselSection } from '../sections/JewelryCarouselSection'
import { ScheduleSection } from '../sections/ScheduleSection'

export function EventPage() {
  return (
    <>
      <SiteHeader />
      <main className="relative min-h-svh overflow-hidden bg-cream">
        <div
          className="pointer-events-none fixed inset-0 z-0"
          aria-hidden="true"
        >
          <div className="light-leak-tl absolute inset-0" />
          <div className="light-leak-br absolute inset-0" />
          <div className="animate-pulse-glow absolute -top-40 right-[-10%] h-[600px] w-[600px] rounded-full bg-gold/[0.07] blur-[130px]" />
          <div className="animate-pulse-glow animation-delay-500 absolute top-[40vh] left-[-12%] h-[500px] w-[500px] rounded-full bg-gold/[0.05] blur-[110px]" />
          <div className="animate-pulse-glow animation-delay-300 absolute top-[90vh] right-[5%] h-[400px] w-[400px] rounded-full bg-gold/[0.04] blur-[90px]" />
          <div className="animate-pulse-glow animation-delay-700 absolute top-[160vh] left-[8%] h-[350px] w-[350px] rounded-full bg-gold/[0.035] blur-[80px]" />
        </div>

        <div className="relative z-10">
          <ScrollSection>
            <HeroSection />
          </ScrollSection>

          <ScrollSection>
            <div className="section-divider mx-auto max-w-4xl opacity-60" aria-hidden="true" />
            <AudienceSection />
          </ScrollSection>

          <ScrollSection delay={0.05}>
            <div className="section-divider mx-auto max-w-4xl opacity-40" aria-hidden="true" />
            <ImportSection />
          </ScrollSection>

          <ScrollSection delay={0.05}>
            <JewelryCarouselSection />
          </ScrollSection>

          <ScrollSection delay={0.05}>
            <div className="section-divider mx-auto max-w-4xl opacity-40" aria-hidden="true" />
            <ScheduleSection />
          </ScrollSection>

          <ScrollSection delay={0.08}>
            <FinalCtaSection />
          </ScrollSection>

          <ScrollSection delay={0.1}>
            <SiteFooter />
          </ScrollSection>
        </div>
      </main>
    </>
  )
}
