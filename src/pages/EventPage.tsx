import { SiteFooter } from '../components/layout/SiteFooter'
import { ScrollSection } from '../components/ui/ScrollSection'
import { ScrollToTop } from '../components/ui/ScrollToTop'

import { AudienceSection } from '../sections/AudienceSection'

import { FinalCtaSection } from '../sections/FinalCtaSection'

import { HeroSection } from '../sections/HeroSection'

import { ImportSection } from '../sections/ImportSection'

import { ScheduleSection } from '../sections/ScheduleSection'



export function EventPage() {

  return (

    <>

      <main className="relative min-h-svh overflow-hidden bg-cream">

        <HeroSection />



          <ScrollSection>

            <AudienceSection />

          </ScrollSection>



          <ScrollSection>

            <ImportSection />

          </ScrollSection>



          <ScrollSection>

            <ScheduleSection />

          </ScrollSection>



          <ScrollSection backdropGrayscale={false} backdropProminent>

            <FinalCtaSection />

          </ScrollSection>



          <ScrollSection variant="gentle" withBackdrop={false}>

            <SiteFooter />

          </ScrollSection>

      </main>

      <ScrollToTop />
    </>

  )

}


