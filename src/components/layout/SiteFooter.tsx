import { BrandMark } from '../ui/BrandMark'

const YEAR = new Date().getFullYear()

export function SiteFooter() {
  return (
    <footer className="relative border-t border-gold/8 py-10 md:py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-6 text-center md:px-10 lg:px-12">
        <BrandMark size="md" />

        <p className="font-sans text-[0.6rem] leading-relaxed tracking-wide text-muted/50">
          &copy; {YEAR} Xingyu · Fonte das Semijoias. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
