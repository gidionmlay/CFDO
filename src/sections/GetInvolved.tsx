import { getInvolvedContent } from '../content/getInvolved'
import './GetInvolved.css'

export function GetInvolved() {
  function handleOpenEnquiry(serviceOption?: string) {
    window.dispatchEvent(
      new CustomEvent('open-cfdo-enquiry', {
        detail: { service: serviceOption || 'Partnership or Other Enquiry' },
      })
    )
  }

  return (
    <section id="get-involved" className="get-involved" aria-labelledby="get-involved-title">
      <div className="get-involved-inner">
        <h2 id="get-involved-title">{getInvolvedContent.heading}</h2>

        <div className="get-involved-paths" aria-label="Ways to get involved">
          {getInvolvedContent.paths.map((path) => (
            <div className="get-involved-path" key={path.number}>
              <span className="get-involved-number" aria-hidden="true">{path.number}</span>
              <h3>{path.title}</h3>
              <span className="get-involved-status">{path.availability}</span>
              {path.actionLabel && (
                <button
                  type="button"
                  className="get-involved-cta-btn"
                  onClick={() => handleOpenEnquiry(path.serviceOption)}
                >
                  <span>{path.actionLabel}</span>
                  <span aria-hidden="true">→</span>
                </button>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
