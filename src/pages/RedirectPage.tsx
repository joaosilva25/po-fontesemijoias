import { useEffect } from 'react'
import { WHATSAPP_GROUP_URL } from '../constants/event'

const DELAY_MS = 1000

export function RedirectPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = WHATSAPP_GROUP_URL
    }, DELAY_MS)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-6 px-6 text-center">
      <div
        className="h-10 w-10 animate-spin rounded-full border-2 border-gold/25 border-t-gold"
        role="status"
        aria-label="Carregando"
      />
      <p className="font-sans text-base text-muted">
        Estamos redirecionando você para o grupo
      </p>
    </main>
  )
}
