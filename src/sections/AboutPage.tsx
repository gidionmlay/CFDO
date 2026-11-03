import { useEffect, useRef } from 'react'
import type { CSSProperties } from 'react'
import { aboutContent } from '../content/about'
import { methodContent } from '../content/method'
import './AboutPage.css'

export function AboutPage() {
  const pageRef = useRef<HTMLElement>(null)
  const heroRef = useRef<HTMLElement>(null)
  const heroMediaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const previousTitle = document.title
    document.title = 'About Us | CFDO'
    const page = pageRef.current
    const hero = heroRef.current
    const heroMedia = heroMediaRef.current
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    let frame = 0
    function updateParallax() {
      frame = 0
      if (!hero || !heroMedia) return
      if (reducedMotion.matches) {
        heroMedia.style.removeProperty('--about-hero-parallax-y')
        return
      }

      const bounds = hero.getBoundingClientRect()
      const progress = Math.min(1, Math.max(0, -bounds.top / bounds.height))
      const distance = Math.min(90, bounds.height * 0.09) * (window.innerWidth <= 600 ? 0.6 : 1)
      heroMedia.style.setProperty('--about-hero-parallax-y', `${(-progress * distance).toFixed(2)}px`)
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
      const items = page.querySelectorAll<HTMLElement>('[data-about-reveal]')
      observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-visible')
          observer?.unobserve(entry.target)
        }
      }, { threshold: 0.08, rootMargin: '0px 0px 5% 0px' })
      items.forEach((item) => observer?.observe(item))
      page.classList.add('about-motion-ready')
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

  return (
    <article ref={pageRef} className="about-page">
      <header ref={heroRef} className="about-hero" aria-labelledby="about-title">
        <div
          ref={heroMediaRef}
          className="about-hero-media"
          aria-hidden={aboutContent.media.src ? undefined : true}
          style={{
            '--about-hero-desktop-focal': aboutContent.media.desktopFocalPoint,
            '--about-hero-mobile-focal': aboutContent.media.mobileFocalPoint,
          } as CSSProperties}
        >
          {aboutContent.media.src && (
            <img src={aboutContent.media.src} alt={aboutContent.media.alt} />
          )}
        </div>
        <div className="about-hero-shade" aria-hidden="true" />

        <div className="about-hero-inner">
          <div className="about-hero-content">
            <div className="about-hero-heading-group">
              <span className="about-hero-kicker">{aboutContent.name}</span>
              <h1 id="about-title" className="about-hero-title">
                {aboutContent.titleLines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h1>
            </div>
            <div className="about-hero-aside">
              <p className="about-hero-mission">{aboutContent.introduction}</p>
              <div className="about-hero-actions">
                <a className="about-hero-action about-hero-action-primary" href="#about-purpose">
                  Discover our purpose <span aria-hidden="true">↓</span>
                </a>
                <a className="about-hero-action about-hero-action-secondary" href="/our-work">
                  Explore our work <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="about-purpose" className="about-purpose" aria-labelledby="about-purpose-title">
        <div className="about-purpose-label" data-about-reveal>Our purpose</div>
        <div data-about-reveal>
          <h2 id="about-purpose-title">{aboutContent.belief}</h2>
          <p>{aboutContent.purpose}</p>
        </div>
      </section>

      <section className="about-practices" aria-labelledby="about-practices-title">
        <div className="about-practices-heading" data-about-reveal>
          <span>What we do</span>
          <h2 id="about-practices-title">Two paths. One purpose.</h2>
        </div>
        <div className="about-practices-grid">
          {aboutContent.practices.map((practice) => (
            <article className="about-practice" key={practice.number} data-about-reveal>
              <span className="about-practice-number">{practice.number}</span>
              <div>
                <h3>{practice.title}</h3>
                <p>{practice.description}</p>
              </div>
              <a href={practice.href}>{practice.action} <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="about-approach" aria-labelledby="about-approach-title">
        <div className="about-approach-heading" data-about-reveal>
          <span>Our approach</span>
          <h2 id="about-approach-title">How we create sustainable change.</h2>
        </div>
        <ol className="about-approach-list">
          {methodContent.stages.map((stage) => (
            <li key={stage.id} data-about-reveal>
              <span>{stage.number}</span>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="about-closing" aria-labelledby="about-closing-title">
        <div data-about-reveal>
          <span>{aboutContent.location}</span>
          <h2 id="about-closing-title">Building pathways to a sustainable future.</h2>
        </div>
        <div className="about-closing-actions" data-about-reveal>
          <a href="/our-work">Explore our work <span aria-hidden="true">↗</span></a>
          <a href="/#get-involved">Get involved <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </article>
  )
}
