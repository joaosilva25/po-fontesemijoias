type SectionBackdropProps = {
  grayscale?: boolean
}

export function SectionBackdrop({ grayscale = true }: SectionBackdropProps) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      <div
        className={`absolute inset-0 bg-[url('/BannerMobile.png')] bg-cover bg-center bg-no-repeat opacity-85 md:bg-[url('/Banner.png')] ${grayscale ? 'grayscale' : ''}`}
      />
      <div className="absolute inset-0 bg-black/50" />
    </div>
  )
}
