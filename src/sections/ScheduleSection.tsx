import { ContentList, ContentListItem } from '../components/ui/ContentList'
import { Container } from '../components/ui/Container'
import { SectionHeader } from '../components/ui/SectionHeader'
import { SCHEDULE } from '../constants/event'

export function ScheduleSection() {
  return (
    <section id="programacao" className="section-padding relative scroll-mt-20">
      <Container className="relative">
        <SectionHeader
          eyebrow={SCHEDULE.eyebrow}
          title={SCHEDULE.title}
          titleHighlight={SCHEDULE.titleHighlight}
        />

        <div className="mx-auto mt-14 max-w-xl md:mt-16">
          <ContentList>
            {SCHEDULE.days.map((day) => (
              <ContentListItem
                key={day.day}
                step={day.day}
                label={`Dia ${day.day} · Junho`}
                title={day.title}
              >
                {day.description}
              </ContentListItem>
            ))}
          </ContentList>
        </div>
      </Container>
    </section>
  )
}
