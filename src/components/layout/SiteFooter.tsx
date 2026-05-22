import { BrandMark } from '../ui/BrandMark'

const YEAR = new Date().getFullYear()

export function SiteFooter() {
  return (
    <footer className="relative">
      <div className="mx-auto flex max-w-6xl py-8 border-t border-gold/5 flex-col items-center gap-5 px-6 text-center md:px-10 lg:px-12">
        <BrandMark size="md" />

        <p className="font-sans text-[0.7rem] leading-relaxed tracking-wide text-white/40">
          &copy; {YEAR} Xingyu · Fonte das Semijoias. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
