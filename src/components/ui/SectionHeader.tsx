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

  const widthClass =
    align === 'center' ? 'w-full max-w-[21rem] min-[400px]:max-w-[23rem] sm:max-w-3xl' : 'max-w-3xl'

  return (
    <header className={`flex flex-col ${widthClass} ${alignClass}`}>
      {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}
      <h2 className="font-display text-[clamp(2rem,6.5vw,2.75rem)] font-normal leading-[1.2] tracking-normal text-balance text-pretty text-ink">
        <span>{title}</span>
        {titleHighlight && (
          <>
            <span className="md:hidden">&nbsp;</span>
            <br className="hidden md:block" />
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
