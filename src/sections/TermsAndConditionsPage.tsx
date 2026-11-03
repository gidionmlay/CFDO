import { useEffect } from 'react'
import './TermsAndConditionsPage.css'

export function TermsAndConditionsPage() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Terms and Conditions | CFDO'
    return () => { document.title = previousTitle }
  }, [])

  return (
    <section className="terms-page" aria-labelledby="terms-page-title">
      <div className="terms-page-inner">
        <h1 id="terms-page-title">Terms and Conditions</h1>
        <p>Terms and Conditions are not available yet.</p>
        <a href="/">Return to the homepage <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  )
}
