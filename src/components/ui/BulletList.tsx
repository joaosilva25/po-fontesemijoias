type BulletListProps = {
  items: readonly string[]
  className?: string
}

export function BulletList({ items, className = '' }: BulletListProps) {
  return (
    <ul className={`space-y-4 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-4 text-left">
          <span
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
            aria-hidden="true"
          />
          <span className="font-sans text-base leading-relaxed text-ink/85 md:text-[1.0625rem]">
            {item}
          </span>
        </li>
      ))}
    </ul>
  )
}
