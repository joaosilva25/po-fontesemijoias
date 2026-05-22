import { EventPage } from './pages/EventPage'
import { RedirectPage } from './pages/RedirectPage'

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'

  if (path === '/redirect') {
    return <RedirectPage />
  }

  return <EventPage />
}

export default App
