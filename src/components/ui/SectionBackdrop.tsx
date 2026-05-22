type SectionBackdropProps = {
  grayscale?: boolean
  prominent?: boolean
}

export function SectionBackdrop({
  grayscale = true,
  prominent = false,
}: SectionBackdropProps) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      <div
        className={`absolute inset-0 bg-[url('/BannerMobile.png')] bg-cover bg-center bg-no-repeat md:bg-[url('/Banner.png')] ${prominent ? 'opacity-50' : 'opacity-30'} ${grayscale ? 'grayscale' : ''}`}
      />
      <div className={`absolute inset-0 ${prominent ? 'bg-black/30' : 'bg-black/50'}`} />
      <div className="section-edge-fade-top absolute inset-x-0 top-0 h-32 md:h-40 lg:h-52" />
      <div className="section-edge-fade-bottom absolute inset-x-0 bottom-0 h-32 md:h-40 lg:h-52" />
    </div>
  )
}
