import { BrandMark } from '../ui/BrandMark'
import { EVENT_GROUP_URL } from '../../constants/event'

const NAV_ITEMS = [
  { label: 'Para quem', href: '#para-quem' },
  { label: 'Importação', href: '#importacao' },
  { label: 'Programação', href: '#programacao' },
] as const

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/8 bg-cream/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 md:h-16 md:px-10 lg:px-12">
        <a
          href="#"
          className="transition-opacity duration-300 hover:opacity-80"
          aria-label="Xingyu — início"
        >
          <BrandMark size="sm" />
        </a>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Navegação principal"
        >
          {NAV_ITEMS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="font-sans text-[0.65rem] font-medium uppercase tracking-[0.2em] text-muted transition-colors duration-300 hover:text-gold"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href={EVENT_GROUP_URL}
          className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-gold transition-opacity duration-300 hover:opacity-75"
        >
          Entrar
        </a>
      </div>
    </header>
  )
}
