import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, FormEvent } from 'react'
import { consultancyContent } from '../content/consultancy'
import './ConsultancyPage.css'

export function ConsultancyPage() {
  const pageRef = useRef<HTMLElement>(null)
  const heroRef = useRef<HTMLElement>(null)
  const heroMediaRef = useRef<HTMLDivElement>(null)
  const enquiryRef = useRef<HTMLDivElement>(null)

  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    service: 'general',
    description: '',
    contactMethod: 'email',
  })

  // Handle URL hash navigation or pre-selected service
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Consultancy Services | CFDO'
    const targetHash = window.location.hash.slice(1)
    if (targetHash === 'enquiry') {
      enquiryRef.current?.scrollIntoView({ behavior: 'smooth' })
    } else if (targetHash) {
      const match = consultancyContent.services.find((s) => s.id === targetHash)
      if (match) {
        setFormData((prev) => ({ ...prev, service: match.id }))
      }
      requestAnimationFrame(() => {
        document.getElementById(targetHash)?.scrollIntoView({ behavior: 'smooth' })
      })
    }
    return () => {
      document.title = previousTitle
    }
  }, [])

  // Parallax motion and IntersectionObserver reveal
  useEffect(() => {
    const page = pageRef.current
    const hero = heroRef.current
    const heroMedia = heroMediaRef.current
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    let frame = 0
    function updateParallax() {
      frame = 0
      if (!hero || !heroMedia) return
      if (reducedMotion.matches) {
        heroMedia.style.removeProperty('--consultancy-hero-parallax-y')
        return
      }

      const bounds = hero.getBoundingClientRect()
      const progress = Math.min(1, Math.max(0, -bounds.top / bounds.height))
      const distance = Math.min(90, bounds.height * 0.09) * (window.innerWidth <= 600 ? 0.6 : 1)
      heroMedia.style.setProperty('--consultancy-hero-parallax-y', `${(-progress * distance).toFixed(2)}px`)
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
      const items = page.querySelectorAll<HTMLElement>('[data-consultancy-reveal]')
      observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-visible')
          observer?.unobserve(entry.target)
        }
      }, { threshold: 0.08, rootMargin: '0px 0px 6% 0px' })
      items.forEach((item) => observer?.observe(item))
      page.classList.add('consultancy-motion-ready')
    }

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', scheduleParallax)
      window.removeEventListener('resize', scheduleParallax)
      reducedMotion.removeEventListener('change', scheduleParallax)
      observer?.disconnect()
    }
  }, [])

  function handleServiceSelect(serviceId: string) {
    setFormData((prev) => ({ ...prev, service: serviceId }))
    enquiryRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  const { hero, audiences, services, engagement, purpose, enquiry } = consultancyContent

  return (
    <article ref={pageRef} className="consultancy-page">
      {/* 1. EDITORIAL HERO (Preserves CFDO Layout, Enhanced with Magazine Folio) */}
      <header ref={heroRef} className="consultancy-hero" aria-labelledby="consultancy-hero-title">
        <div
          ref={heroMediaRef}
          className="consultancy-hero-media"
          aria-hidden={hero.media.src ? undefined : true}
          style={{
            '--consultancy-hero-desktop-focal': hero.media.desktopFocalPoint,
            '--consultancy-hero-mobile-focal': hero.media.mobileFocalPoint,
          } as CSSProperties}
        >
          {hero.media.src && <img src={hero.media.src} alt={hero.media.alt} />}
        </div>
        <div className="consultancy-hero-shade" aria-hidden="true" />

        <div className="consultancy-hero-inner">
          <div className="consultancy-hero-folio" aria-hidden="true">
            <span>CFDO Editorial</span>
            <span>Folio 02 — Advisory & Enterprise</span>
            <span>Tanzania Mainland</span>
          </div>

          <div className="consultancy-hero-content">
            <div className="consultancy-hero-heading-group">
              <span className="consultancy-hero-kicker">{hero.eyebrow}</span>
              <h1 id="consultancy-hero-title" className="consultancy-hero-title">
                {hero.titleLines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h1>
            </div>

            <div className="consultancy-hero-aside">
              <h2 className="consultancy-hero-headline">{hero.headline}</h2>
              <p className="consultancy-hero-mission">{hero.supporting}</p>
              <div className="consultancy-hero-actions">
                <a className="consultancy-hero-action consultancy-hero-action-primary" href={hero.primaryAction.href}>
                  {hero.primaryAction.label} <span aria-hidden="true">↗</span>
                </a>
                <a className="consultancy-hero-action consultancy-hero-action-secondary" href={hero.secondaryAction.href}>
                  {hero.secondaryAction.label} <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. WHO WE WORK WITH (Magazine Asymmetric Spread with Authentic Photography) */}
      <section className="consultancy-audiences" aria-labelledby="consultancy-audiences-title">
        <div className="consultancy-audiences-spread">
          {/* Left Column: Text & Client Groups */}
          <div className="consultancy-audiences-text-col" data-consultancy-reveal>
            <span className="consultancy-section-kicker">{audiences.kicker}</span>
            <h2 id="consultancy-audiences-title" className="consultancy-audiences-heading">
              {audiences.headline}
            </h2>
            <p className="consultancy-audiences-lead">{audiences.supporting}</p>

            <blockquote className="consultancy-editorial-quote">
              <p>“{audiences.quote}”</p>
            </blockquote>

            <div className="consultancy-client-sectors">
              {audiences.groups.map((group, idx) => (
                <div key={group.id} className="consultancy-sector-block">
                  <div className="consultancy-sector-header">
                    <span className="consultancy-sector-idx">0{idx + 1}</span>
                    <span className="consultancy-sector-kicker">{group.kicker}</span>
                  </div>
                  <h3 className="consultancy-sector-title">{group.title}</h3>
                  <p className="consultancy-sector-target">{group.target}</p>

                  <ul className="consultancy-ledger-list">
                    {group.points.map((pt, pIdx) => (
                      <li key={pt}>
                        <span className="consultancy-ledger-num">0{pIdx + 1}</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Documentary Photography & Sidebar Note */}
          <div className="consultancy-audiences-media-col" data-consultancy-reveal>
            <div className="consultancy-photo-frame">
              <img src={audiences.image.src} alt={audiences.image.alt} />
              <div className="consultancy-photo-caption">
                <span className="caption-tag">{audiences.image.caption}</span>
                <span className="caption-meta">{audiences.image.location}</span>
              </div>
            </div>

            <aside className="consultancy-marginal-note" aria-label="Development Partners Note">
              <span className="marginal-tag">Institutional Notice</span>
              <p>{audiences.partnersNote}</p>
            </aside>
          </div>
        </div>
      </section>

      {/* 3. OUR CONSULTANCY SERVICES (Curated Magazine Catalogue Spread) */}
      <section id="services" className="consultancy-services-section" aria-labelledby="consultancy-services-title">
        <div className="consultancy-services-header" data-consultancy-reveal>
          <div className="consultancy-services-header-main">
            <span className="consultancy-section-kicker">Folio 02 — Services Catalogue</span>
            <h2 id="consultancy-services-title" className="consultancy-services-heading">
              Support shaped around your priorities.
            </h2>
          </div>
          <p className="consultancy-services-lead">
            Explore CFDO’s consultancy service areas to identify the type of support relevant to your business, institution or project.
          </p>
        </div>

        {/* Lead Feature Spread: 01 Entrepreneurship Consultation */}
        {services[0] && (
          <article id={services[0].id} className="consultancy-feature-spread" data-consultancy-reveal>
            <div className="consultancy-feature-content">
              <div className="consultancy-feature-header">
                <span className="consultancy-feature-num">{services[0].number}</span>
                <span className="consultancy-feature-badge">Feature Service</span>
              </div>
              <h3 className="consultancy-feature-title">{services[0].title}</h3>
              <p className="consultancy-feature-tagline">{services[0].tagline}</p>
              <p className="consultancy-feature-desc">{services[0].description}</p>

              <div className="consultancy-deliverables-panel">
                <span className="consultancy-deliverables-heading">Deliverables & Scope</span>
                <ul className="consultancy-ledger-list clean">
                  {services[0].deliverables.map((del, dIdx) => (
                    <li key={del}>
                      <span className="consultancy-ledger-num">0{dIdx + 1}</span>
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="consultancy-feature-footer">
                <span className="consultancy-ideal-tag">Target: {services[0].idealFor}</span>
                <button
                  type="button"
                  className="consultancy-editorial-action"
                  onClick={() => handleServiceSelect(services[0].id)}
                >
                  <span>{services[0].cta}</span>
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>

            {services[0].image && (
              <div className="consultancy-feature-photo">
                <img src={services[0].image.src} alt={services[0].image.alt} />
                <div className="consultancy-photo-caption overlay">
                  <span className="caption-tag">{services[0].image.caption}</span>
                </div>
              </div>
            )}
          </article>
        )}

        {/* Subsequent Services Grid (02, 03, 04) */}
        <div className="consultancy-catalogue-grid">
          {/* Service 02: Business Advisory */}
          {services[1] && (
            <article id={services[1].id} className="consultancy-catalogue-card" data-consultancy-reveal>
              <div className="consultancy-card-meta">
                <span className="consultancy-card-num">{services[1].number}</span>
                <span className="consultancy-card-kicker">Advisory & Mentoring</span>
              </div>
              <h3 className="consultancy-card-title">{services[1].title}</h3>
              <p className="consultancy-card-tagline">{services[1].tagline}</p>
              <p className="consultancy-card-desc">{services[1].description}</p>

              <div className="consultancy-deliverables-panel">
                <span className="consultancy-deliverables-heading">Deliverables & Scope</span>
                <ul className="consultancy-ledger-list clean">
                  {services[1].deliverables.map((del, dIdx) => (
                    <li key={del}>
                      <span className="consultancy-ledger-num">0{dIdx + 1}</span>
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="consultancy-card-footer">
                <span className="consultancy-ideal-tag">Target: {services[1].idealFor}</span>
                <button
                  type="button"
                  className="consultancy-editorial-action"
                  onClick={() => handleServiceSelect(services[1].id)}
                >
                  <span>{services[1].cta}</span>
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </article>
          )}

          {/* Service 03: Project Planning & Management (with Embedded Image) */}
          {services[2] && (
            <article id={services[2].id} className="consultancy-catalogue-card with-photo" data-consultancy-reveal>
              <div className="consultancy-card-photo-header">
                {services[2].image && (
                  <div className="consultancy-card-thumb">
                    <img src={services[2].image.src} alt={services[2].image.alt} />
                    <span className="caption-tag micro">{services[2].image.caption}</span>
                  </div>
                )}
              </div>

              <div className="consultancy-card-meta">
                <span className="consultancy-card-num">{services[2].number}</span>
                <span className="consultancy-card-kicker">Project Coordination</span>
              </div>
              <h3 className="consultancy-card-title">{services[2].title}</h3>
              <p className="consultancy-card-tagline">{services[2].tagline}</p>
              <p className="consultancy-card-desc">{services[2].description}</p>

              <div className="consultancy-deliverables-panel">
                <span className="consultancy-deliverables-heading">Deliverables & Scope</span>
                <ul className="consultancy-ledger-list clean">
                  {services[2].deliverables.map((del, dIdx) => (
                    <li key={del}>
                      <span className="consultancy-ledger-num">0{dIdx + 1}</span>
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="consultancy-card-footer">
                <span className="consultancy-ideal-tag">Target: {services[2].idealFor}</span>
                <button
                  type="button"
                  className="consultancy-editorial-action"
                  onClick={() => handleServiceSelect(services[2].id)}
                >
                  <span>{services[2].cta}</span>
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </article>
          )}

          {/* Service 04: IT Services */}
          {services[3] && (
            <article id={services[3].id} className="consultancy-catalogue-card" data-consultancy-reveal>
              <div className="consultancy-card-meta">
                <span className="consultancy-card-num">{services[3].number}</span>
                <span className="consultancy-card-kicker">Technology Systems</span>
              </div>
              <h3 className="consultancy-card-title">{services[3].title}</h3>
              <p className="consultancy-card-tagline">{services[3].tagline}</p>
              <p className="consultancy-card-desc">{services[3].description}</p>

              <div className="consultancy-deliverables-panel">
                <span className="consultancy-deliverables-heading">Deliverables & Scope</span>
                <ul className="consultancy-ledger-list clean">
                  {services[3].deliverables.map((del, dIdx) => (
                    <li key={del}>
                      <span className="consultancy-ledger-num">0{dIdx + 1}</span>
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="consultancy-card-footer">
                <span className="consultancy-ideal-tag">Target: {services[3].idealFor}</span>
                <button
                  type="button"
                  className="consultancy-editorial-action"
                  onClick={() => handleServiceSelect(services[3].id)}
                >
                  <span>{services[3].cta}</span>
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </article>
          )}
        </div>
      </section>

      {/* 4. THE ENGAGEMENT PROCESS (Editorial Timeline Spread) */}
      <section className="consultancy-engagement" aria-labelledby="consultancy-engagement-title">
        <div className="consultancy-engagement-header" data-consultancy-reveal>
          <span className="consultancy-section-kicker">{engagement.kicker}</span>
          <h2 id="consultancy-engagement-title" className="consultancy-engagement-heading">
            {engagement.headline}
          </h2>
          <p className="consultancy-engagement-lead">{engagement.supporting}</p>
        </div>

        <div className="consultancy-timeline-bar" data-consultancy-reveal>
          {engagement.steps.map((st) => (
            <div key={st.number} className="consultancy-timeline-step">
              <div className="consultancy-timeline-num-wrap">
                <span className="consultancy-timeline-num">{st.number}</span>
                <span className="consultancy-timeline-node" aria-hidden="true" />
              </div>
              <h3 className="consultancy-timeline-title">{st.title}</h3>
              <p className="consultancy-timeline-desc">{st.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CONSULTANCY WITH A COMMUNITY PURPOSE (Magazine Editorial Feature) */}
      <section className="consultancy-purpose" aria-labelledby="consultancy-purpose-title">
        <div className="consultancy-purpose-spread">
          <header className="consultancy-purpose-intro" data-consultancy-reveal>
            <span className="consultancy-section-kicker light">{purpose.kicker}</span>
            <h2 id="consultancy-purpose-title" className="consultancy-purpose-heading">
              {purpose.headline}
            </h2>
            <blockquote className="consultancy-purpose-pullquote">
              <p>{purpose.pullquote}</p>
            </blockquote>
          </header>

          <div className="consultancy-purpose-grid">
            <div className="consultancy-purpose-media" data-consultancy-reveal>
              <div className="consultancy-photo-frame dark">
                <img src={purpose.image.src} alt={purpose.image.alt} />
                <div className="consultancy-photo-caption">
                  <span className="caption-tag">{purpose.image.caption}</span>
                  <span className="caption-meta">{purpose.image.note}</span>
                </div>
              </div>
              <p className="consultancy-purpose-desc">{purpose.supporting}</p>
            </div>

            <div className="consultancy-purpose-ledger-col" data-consultancy-reveal>
              <span className="consultancy-ledger-title">The Reinvestment Ledger</span>
              <ol className="consultancy-purpose-ledger">
                {purpose.flowSteps.map((step) => (
                  <li key={step.num} className="consultancy-purpose-ledger-item">
                    <span className="ledger-step-num">{step.num}</span>
                    <div className="ledger-step-text">
                      <span className="ledger-step-label">{step.label}</span>
                      <span className="ledger-step-note">{step.note}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CLOSING ENQUIRY & BESPOKE CLIENT DESK */}
      <section id="enquiry" ref={enquiryRef} className="consultancy-enquiry-section" aria-labelledby="consultancy-enquiry-title">
        <div className="consultancy-enquiry-spread">
          <div className="consultancy-enquiry-info" data-consultancy-reveal>
            <span className="consultancy-section-kicker light">{enquiry.kicker}</span>
            <h2 id="consultancy-enquiry-title" className="consultancy-enquiry-heading">
              {enquiry.headline}
            </h2>
            <p className="consultancy-enquiry-lead">{enquiry.supporting}</p>
            <p className="consultancy-enquiry-notice">{enquiry.notice}</p>

            <div className="consultancy-desk-meta">
              <span className="desk-meta-label">Client Dispatch Location</span>
              <p>Community for Future Development Organization (CFDO)<br />Tanzania Mainland</p>
            </div>

            <div className="consultancy-enquiry-quicklinks">
              <span className="consultancy-quicklinks-title">Related Directories</span>
              <div className="consultancy-quicklinks-group">
                <a href="/our-work">Explore Our Work <span aria-hidden="true">↗</span></a>
                <a href="/how-we-work">How We Work <span aria-hidden="true">↗</span></a>
                <a href="/about">About CFDO <span aria-hidden="true">↗</span></a>
              </div>
            </div>
          </div>

          <div className="consultancy-enquiry-desk" data-consultancy-reveal>
            {submitted ? (
              <div className="consultancy-desk-success" role="alert">
                <span className="consultancy-success-stamp">RECEIVED</span>
                <h3>Consultation Request Registered</h3>
                <p>
                  Thank you, <strong>{formData.fullName}</strong>. Your consultation submission regarding{' '}
                  <em>
                    {formData.service === 'general'
                      ? 'general advisory'
                      : services.find((s) => s.id === formData.service)?.title}
                  </em>{' '}
                  has been recorded.
                </p>
                <p className="consultancy-success-dispatch">
                  An advisor will review your scope and follow up directly via your preferred channel ({formData.contactMethod}).
                </p>
                <button
                  type="button"
                  className="consultancy-reset-btn"
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({
                      fullName: '',
                      organization: '',
                      email: '',
                      phone: '',
                      service: 'general',
                      description: '',
                      contactMethod: 'email',
                    })
                  }}
                >
                  Submit Another Consultation Enquiry
                </button>
              </div>
            ) : (
              <form className="consultancy-desk-form" onSubmit={handleSubmit}>
                <div className="consultancy-desk-header">
                  <span>Client Request Sheet</span>
                  <span>Form Ref: CR-2026</span>
                </div>

                <div className="consultancy-form-row">
                  <div className="consultancy-field">
                    <label htmlFor="fullName">
                      Full Name <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      placeholder="e.g. Amina Rashid"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>

                  <div className="consultancy-field">
                    <label htmlFor="organization">Organization or Business</label>
                    <input
                      id="organization"
                      type="text"
                      placeholder="e.g. Mwanga Enterprise / CBO"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    />
                  </div>
                </div>

                <div className="consultancy-form-row">
                  <div className="consultancy-field">
                    <label htmlFor="email">
                      Direct Email Address <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. amina@enterprise.co.tz"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="consultancy-field">
                    <label htmlFor="phone">Phone / WhatsApp</label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="e.g. +255 700 000 000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="consultancy-field">
                  <label htmlFor="service">
                    Consultancy Area Required <span aria-hidden="true">*</span>
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="general">General Advisory / Unsure of Category</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.number}. {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="consultancy-field">
                  <label htmlFor="description">
                    Summary of Business or Project Requirement <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    required
                    placeholder="Outline your enterprise status, project objectives, timeline or primary questions..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>

                <div className="consultancy-field">
                  <label htmlFor="contactMethod">Preferred Communication Method</label>
                  <select
                    id="contactMethod"
                    value={formData.contactMethod}
                    onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone Call</option>
                    <option value="whatsapp">WhatsApp</option>
                  </select>
                </div>

                <button type="submit" className="consultancy-submit-btn">
                  <span>Register Consultation Request</span>
                  <span aria-hidden="true">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </article>
  )
}
