import { useState } from 'react'
import { consultancyContent } from '../content/consultancy'
import './Consultancy.css'

export function Consultancy() {
  const [openService, setOpenService] = useState<string | null>(null)

  return (
    <section id="consultancy" className="consultancy" aria-labelledby="consultancy-title">
      <div className="consultancy-inner">
        <div className="consultancy-intro">
          <p className="consultancy-transition">{consultancyContent.transition}</p>
          <span className="consultancy-intro-mark" aria-hidden="true">↗</span>
        </div>

        <div className="consultancy-main">
          <div className="consultancy-heading-group">
            <span className="consultancy-kicker">Our services</span>
            <h2 id="consultancy-title">{consultancyContent.heading}</h2>
          </div>

          <div className="consultancy-services">
            {consultancyContent.services.map((service) => {
              const open = openService === service.id
              const panelId = `${service.id}-detail`
              const triggerId = `${service.id}-trigger`
              return (
                <article className={`consultancy-service ${open ? 'is-open' : ''}`} key={service.id}>
                  <h3>
                    <button
                      id={triggerId}
                      className="consultancy-service-trigger"
                      type="button"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onFocus={(event) => {
                        if (event.currentTarget.matches(':focus-visible')) setOpenService(service.id)
                      }}
                      onClick={() => setOpenService((current) => current === service.id ? null : service.id)}
                    >
                      <span className="consultancy-service-number">{service.number}</span>
                      <span className="consultancy-service-labels">
                        <span className="consultancy-service-title">{service.title}</span>
                      </span>
                      <span className="consultancy-service-icon" aria-hidden="true">{open ? '−' : '+'}</span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    className="consultancy-service-panel"
                    role="region"
                    aria-labelledby={triggerId}
                    hidden={!open}
                  >
                    <p>{service.description}</p>
                    <a className="consultancy-service-link" href={`/consultancy#${service.id}`}>
                      Explore service <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
