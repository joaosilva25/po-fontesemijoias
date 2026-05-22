import { EVENT_DATES } from '../../constants/event'

export function HeroEventDates() {
  const label = `${EVENT_DATES.range}. ${EVENT_DATES.detail}`

  return (
    <div className="w-full text-center" aria-label={label}>
      <div className="flex flex-col items-center gap-4 pb-1 sm:hidden">
        <div className="flex w-full max-w-[17.5rem] items-center gap-3">
          <span className="gold-line min-w-6 flex-1" aria-hidden="true" />
          <p className="shrink-0 font-sans text-sm font-semibold uppercase tracking-[0.14em] text-gold">
            {EVENT_DATES.range}
          </p>
          <span className="gold-line min-w-6 flex-1" aria-hidden="true" />
        </div>
        <p className="mt-0.5 font-sans text-xs font-medium uppercase tracking-[0.2em] text-gold/75">
          {EVENT_DATES.detail}
        </p>
      </div>

      <div className="hidden items-center justify-center gap-3 sm:flex sm:gap-4">
        <span className="gold-line w-10 shrink-0 md:w-12" aria-hidden="true" />
        <p className="font-sans text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-gold/80 md:text-[0.8125rem] md:tracking-[0.26em]">
          {EVENT_DATES.range}
          <span className="mx-2.5 text-gold/35" aria-hidden="true">
            ·
          </span>
          <span className="text-gold/70">{EVENT_DATES.detail}</span>
        </p>
        <span className="gold-line w-10 shrink-0 md:w-12" aria-hidden="true" />
      </div>
    </div>
  )
}
