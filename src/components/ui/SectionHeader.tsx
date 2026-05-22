import { Ornament } from './Ornament'
import { SectionEyebrow } from './SectionEyebrow'

type SectionHeaderProps = {
  eyebrow?: string
  title: string
  titleHighlight?: string
  description?: string
  align?: 'center' | 'left'
}

export function SectionHeader({
  eyebrow,
  title,
  titleHighlight,
  description,
  align = 'center',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start'

  return (
    <header className={`flex max-w-3xl flex-col ${alignClass}`}>
      {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}
      <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-normal leading-[1.15] tracking-normal text-ink">
        {title}
        {titleHighlight && (
          <>
            <br />
            <em className="text-shimmer not-italic">{titleHighlight}</em>
          </>
        )}
      </h2>
      {description && (
        <>
          <Ornament className="my-6" />
          <p className="font-sans text-base leading-relaxed text-muted md:text-lg">
            {description}
          </p>
        </>
      )}
    </header>
  )
}
