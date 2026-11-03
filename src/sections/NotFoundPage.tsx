import { useEffect } from 'react'
import './NotFoundPage.css'

export function NotFoundPage() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Page not found | CFDO'
    return () => { document.title = previousTitle }
  }, [])

  return (
    <section className="not-found-page" aria-labelledby="not-found-title">
      <div>
        <h1 id="not-found-title">Page not found.</h1>
        <p>The page you’re looking for is unavailable.</p>
        <a href="/">Return to the homepage <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  )
}
