import { useEffect, useRef } from 'react'
import type { CSSProperties } from 'react'
import { howWeWorkContent } from '../content/howWeWork'
import './HowWeWorkPage.css'

export function HowWeWorkPage() {
  const pageRef = useRef<HTMLElement>(null)
  const heroRef = useRef<HTMLElement>(null)
  const heroMediaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const previousTitle = document.title
    document.title = 'How We Work | CFDO'
    const page = pageRef.current
    const hero = heroRef.current
    const heroMedia = heroMediaRef.current
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    let frame = 0
    function updateParallax() {
      frame = 0
      if (!hero || !heroMedia) return
      if (reducedMotion.matches) {
        heroMedia.style.removeProperty('--how-hero-parallax-y')
        return
      }

      const bounds = hero.getBoundingClientRect()
      const progress = Math.min(1, Math.max(0, -bounds.top / bounds.height))
      const distance = Math.min(90, bounds.height * 0.09) * (window.innerWidth <= 600 ? 0.6 : 1)
      heroMedia.style.setProperty('--how-hero-parallax-y', `${(-progress * distance).toFixed(2)}px`)
    }

    function scheduleParallax() {
      if (!frame) frame = window.requestAnimationFrame(updateParallax)
    }

    scheduleParallax()
    window.addEventListener('scroll', scheduleParallax, { passive: true })
    window.addEventListener('resize', scheduleParallax)
    reducedMotion.addEventListener('change', scheduleParallax)

    let observer: IntersectionObserver | null = null
    if (page && !reducedMotion.matches && ('IntersectionObserver' in window)) {
      const items = page.querySelectorAll<HTMLElement>('[data-how-reveal]')
      observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-visible')
          observer?.unobserve(entry.target)
        }
      }, { threshold: 0.08, rootMargin: '0px 0px 6% 0px' })
      items.forEach((item) => observer?.observe(item))
      page.classList.add('how-motion-ready')
    }

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', scheduleParallax)
      window.removeEventListener('resize', scheduleParallax)
      reducedMotion.removeEventListener('change', scheduleParallax)
      observer?.disconnect()
      document.title = previousTitle
    }
  }, [])

  const { hero, concept, stages, applications, reinvestment, collaboration, principles, closing } = howWeWorkContent

  return (
    <article ref={pageRef} className="how-page">
      {/* 1. Hero Section */}
      <header ref={heroRef} className="how-hero" aria-labelledby="how-hero-title">
        <div
          ref={heroMediaRef}
          className="how-hero-media"
          aria-hidden={hero.media.src ? undefined : true}
          style={{
            '--how-hero-desktop-focal': hero.media.desktopFocalPoint,
            '--how-hero-mobile-focal': hero.media.mobileFocalPoint,
          } as CSSProperties}
        >
          {hero.media.src && <img src={hero.media.src} alt={hero.media.alt} />}
        </div>
        <div className="how-hero-shade" aria-hidden="true" />

        <div className="how-hero-inner">
          <div className="how-hero-content">
            <div className="how-hero-heading-group">
              <span className="how-hero-kicker">{hero.kicker}</span>
              <h1 id="how-hero-title" className="how-hero-title">
                {hero.titleLines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h1>
            </div>

            <div className="how-hero-aside">
              <h2 className="how-hero-headline">{hero.headline}</h2>
              <p className="how-hero-mission">{hero.mission}</p>
              <div className="how-hero-actions">
                <a className="how-hero-action how-hero-action-primary" href={hero.primaryAction.href}>
                  {hero.primaryAction.label} <span aria-hidden="true">↗</span>
                </a>
                <a className="how-hero-action how-hero-action-secondary" href={hero.secondaryAction.href}>
                  {hero.secondaryAction.label} <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Core Concept & 5 Questions */}
      <section className="how-concept" aria-labelledby="how-concept-title">
        <div className="how-concept-grid">
          <div className="how-concept-main" data-how-reveal>
            <span className="how-section-kicker">{concept.kicker}</span>
            <h2 id="how-concept-title" className="how-concept-heading">{concept.headline}</h2>
            <p className="how-concept-lead">{concept.introduction}</p>
          </div>

          <div className="how-concept-questions" data-how-reveal>
            <span className="how-section-kicker">{concept.questionsHeading}</span>
            <ol className="how-questions-list">
              {concept.questions.map((q) => (
                <li key={q.number} className="how-question-item">
                  <span className="how-question-num">{q.number}</span>
                  <p className="how-question-text">{q.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 3. The Four Stages */}
      <section className="how-stages" aria-labelledby="how-stages-title">
        <div className="how-stages-header" data-how-reveal>
          <div>
            <span className="how-section-kicker">{stages.kicker}</span>
            <h2 id="how-stages-title" className="how-stages-heading">{stages.heading}</h2>
          </div>
          <p className="how-stages-subheading">{stages.subheading}</p>
        </div>

        <div className="how-stages-grid">
          {stages.items.map((stage) => (
            <article key={stage.id} className="how-stage-card" data-how-reveal>
              <div className="how-stage-top">
                <span className="how-stage-number">{stage.number}</span>
                <span className="how-stage-badge">{stage.title}</span>
              </div>
              <h3 className="how-stage-tagline">{stage.tagline}</h3>
              <p className="how-stage-summary">{stage.summary}</p>
              
              <div className="how-stage-focus">
                <span className="how-stage-focus-label">Key Focus</span>
                <ul className="how-stage-points">
                  {stage.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>

              <div className="how-stage-principle">
                <span className="how-principle-label">Core Principle</span>
                <p>“{stage.principle}”</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. One Philosophy, Two Applications */}
      <section className="how-applications" aria-labelledby="how-applications-title">
        <div className="how-applications-header" data-how-reveal>
          <span className="how-section-kicker">{applications.kicker}</span>
          <h2 id="how-applications-title" className="how-applications-heading">{applications.heading}</h2>
          <p className="how-applications-lead">{applications.lead}</p>
        </div>

        <div className="how-applications-grid">
          {/* Stream A: Community Development */}
          <article className="how-app-card how-app-community" data-how-reveal>
            <div className="how-app-top">
              <span className="how-app-badge">{applications.community.tag}</span>
              <h3 className="how-app-title">{applications.community.title}</h3>
              <h4 className="how-app-tagline">{applications.community.tagline}</h4>
              <p className="how-app-desc">{applications.community.description}</p>
            </div>

            <div className="how-app-pathway">
              <span className="how-pathway-title">{applications.community.pathwayTitle}</span>
              <ol className="how-pathway-steps">
                {applications.community.pathway.map((step, idx) => (
                  <li key={step} className="how-pathway-step">
                    <span className="how-step-index">0{idx + 1}</span>
                    <span className="how-step-name">{step}</span>
                    {idx < applications.community.pathway.length - 1 && (
                      <span className="how-step-arrow" aria-hidden="true">→</span>
                    )}
                  </li>
                ))}
              </ol>
            </div>

            <div className="how-app-action-wrapper">
              <a className="how-app-link" href={applications.community.action.href}>
                {applications.community.action.label} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>

          {/* Stream B: Professional Consultancy */}
          <article className="how-app-card how-app-consultancy" data-how-reveal>
            <div className="how-app-top">
              <span className="how-app-badge">{applications.consultancy.tag}</span>
              <h3 className="how-app-title">{applications.consultancy.title}</h3>
              <h4 className="how-app-tagline">{applications.consultancy.tagline}</h4>
              <p className="how-app-desc">{applications.consultancy.description}</p>
            </div>

            <div className="how-app-pathway">
              <span className="how-pathway-title">{applications.consultancy.pathwayTitle}</span>
              <ol className="how-pathway-steps">
                {applications.consultancy.pathway.map((step, idx) => (
                  <li key={step} className="how-pathway-step">
                    <span className="how-step-index">0{idx + 1}</span>
                    <span className="how-step-name">{step}</span>
                    {idx < applications.consultancy.pathway.length - 1 && (
                      <span className="how-step-arrow" aria-hidden="true">→</span>
                    )}
                  </li>
                ))}
              </ol>
            </div>

            <div className="how-app-services">
              <span className="how-services-label">Four Specialized Advisory Areas</span>
              <ul className="how-services-list">
                {applications.consultancy.services.map((srv) => (
                  <li key={srv}>{srv}</li>
                ))}
              </ul>
            </div>

            <div className="how-app-action-wrapper">
              <a className="how-app-link" href={applications.consultancy.action.href}>
                {applications.consultancy.action.label} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* 5. Reinvestment Engine (Dual Value Model) */}
      <section className="how-reinvestment" aria-labelledby="how-reinvestment-title">
        <div className="how-reinvestment-inner" data-how-reveal>
          <div className="how-reinvestment-intro">
            <span className="how-section-kicker light">{reinvestment.kicker}</span>
            <h2 id="how-reinvestment-title" className="how-reinvestment-heading">{reinvestment.heading}</h2>
            <p className="how-reinvestment-desc">{reinvestment.description}</p>
          </div>

          <div className="how-reinvestment-flow">
            {reinvestment.steps.map((st, idx) => (
              <div key={st.number} className="how-reinvest-node">
                <div className="how-reinvest-header">
                  <span className="how-reinvest-num">{st.number}</span>
                  {idx < reinvestment.steps.length - 1 && (
                    <span className="how-reinvest-arrow" aria-hidden="true">→</span>
                  )}
                </div>
                <h3 className="how-reinvest-title">{st.title}</h3>
                <p className="how-reinvest-detail">{st.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Collaboration */}
      <section className="how-collaboration" aria-labelledby="how-collab-title">
        <div className="how-collab-grid">
          <div className="how-collab-media-col" data-how-reveal>
            <div className="how-collab-image-frame">
              <img src={collaboration.image.src} alt={collaboration.image.alt} />
            </div>
            <blockquote className="how-collab-quote">
              <p>“{collaboration.statement}”</p>
            </blockquote>
          </div>

          <div className="how-collab-content-col" data-how-reveal>
            <span className="how-section-kicker">{collaboration.kicker}</span>
            <h2 id="how-collab-title" className="how-collab-heading">{collaboration.heading}</h2>
            <p className="how-collab-desc">{collaboration.description}</p>

            <div className="how-collab-areas-grid">
              {collaboration.areas.map((area) => (
                <div key={area.title} className="how-collab-item">
                  <h3 className="how-collab-item-title">{area.title}</h3>
                  <p className="how-collab-item-detail">{area.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Guiding Principles */}
      <section className="how-principles" aria-labelledby="how-principles-title">
        <div className="how-principles-header" data-how-reveal>
          <span className="how-section-kicker">{principles.kicker}</span>
          <h2 id="how-principles-title" className="how-principles-heading">{principles.heading}</h2>
          <p className="how-principles-lead">{principles.lead}</p>
        </div>

        <div className="how-principles-grid">
          {principles.items.map((principle) => (
            <article key={principle.number} className="how-principle-card" data-how-reveal>
              <span className="how-principle-number">{principle.number}</span>
              <h3 className="how-principle-title">{principle.title}</h3>
              <p className="how-principle-desc">{principle.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 8. Closing Section */}
      <section className="how-closing" aria-labelledby="how-closing-title">
        <div className="how-closing-inner" data-how-reveal>
          <span className="how-closing-kicker">{closing.location}</span>
          <h2 id="how-closing-title" className="how-closing-heading">{closing.heading}</h2>
          <p className="how-closing-desc">{closing.description}</p>
        </div>

        <div className="how-closing-actions" data-how-reveal>
          {closing.actions.map((act) => (
            <a
              key={act.label}
              href={act.href}
              className={`how-closing-btn ${act.primary ? 'primary' : 'secondary'}`}
            >
              <span>{act.label}</span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>
    </article>
  )
}
