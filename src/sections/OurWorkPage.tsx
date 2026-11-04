import { useEffect, useRef } from 'react'
import type { CSSProperties } from 'react'
import { ourWorkContent } from '../content/ourWork'
import { programmeContent } from '../content/programmes'
import { FeaturedWork } from './FeaturedWork'
import { ImpactGallery } from './ImpactGallery'
import './OurWorkPage.css'

export function OurWorkPage() {
  const heroRef = useRef<HTMLElement>(null)
  const heroMediaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Our Work | CFDO'
    const targetId = decodeURIComponent(window.location.hash.slice(1))
    if (targetId) {
      requestAnimationFrame(() => document.getElementById(targetId)?.scrollIntoView({ behavior: 'instant' as ScrollBehavior }))
    }
    return () => { document.title = previousTitle }
  }, [])

  useEffect(() => {
    const hero = heroRef.current
    const heroMedia = heroMediaRef.current
    if (!hero || !heroMedia) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0

    function update() {
      frame = 0
      if (!hero || !heroMedia) return
      if (reducedMotion.matches) {
        heroMedia.style.removeProperty('--our-work-hero-parallax-y')
        return
      }

      const bounds = hero.getBoundingClientRect()
      const progress = Math.min(1, Math.max(0, -bounds.top / bounds.height))
      const distance = Math.min(90, bounds.height * 0.09) * (window.innerWidth <= 600 ? 0.6 : 1)
      heroMedia.style.setProperty('--our-work-hero-parallax-y', `${(-progress * distance).toFixed(2)}px`)
    }

    function scheduleUpdate() {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    scheduleUpdate()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    reducedMotion.addEventListener('change', scheduleUpdate)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      reducedMotion.removeEventListener('change', scheduleUpdate)
    }
  }, [])

  return (
    <article className="our-work-page">
      <header ref={heroRef} className="our-work-hero" aria-labelledby="our-work-title">
        <div
          ref={heroMediaRef}
          className="our-work-hero-media"
          style={{
            '--our-work-hero-desktop-focal': ourWorkContent.heroMedia.desktopFocalPoint,
            '--our-work-hero-mobile-focal': ourWorkContent.heroMedia.mobileFocalPoint,
          } as CSSProperties}
        >
          <img
            src={ourWorkContent.heroMedia.src}
            alt={ourWorkContent.heroMedia.alt}
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
        </div>
        <div className="our-work-hero-shade" aria-hidden="true" />
        <div className="our-work-hero-inner">
          <h1 id="our-work-title"><span>Our </span><span>work.</span></h1>
          <div className="our-work-hero-bottom">
            <p>{ourWorkContent.introduction}</p>
            <a href="#focus-areas">Explore programmes <span aria-hidden="true">↓</span></a>
          </div>
        </div>
      </header>

      <section id="focus-areas" className="our-work-index" aria-labelledby="our-work-index-title">
        <div className="our-work-index-heading">
          <h2 id="our-work-index-title">{programmeContent.heading}</h2>
          <p>{ourWorkContent.indexIntroduction}</p>
        </div>
        <nav aria-label="Programme areas" className="our-work-index-nav">
          {programmeContent.areas.map((area) => (
            <a href={`#${area.id}`} key={area.id}>
              <span className="our-work-index-number" aria-hidden="true">{area.number}</span>
              <span>{area.title}</span>
              <span className="our-work-index-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>
      </section>

      <div className="our-work-chapters">
        {programmeContent.areas.map((area) => {
          const media = area.media?.approvedForPublication ? area.media : null
          return (
            <section
              id={area.id}
              className={`our-work-chapter our-work-chapter--${area.treatment}`}
              aria-labelledby={`${area.id}-page-title`}
              key={area.id}
            >
              <div className="our-work-chapter-copy">
                <span className="our-work-chapter-number" aria-hidden="true">{area.number} / 05</span>
                <div>
                  <h2 id={`${area.id}-page-title`}>{area.title}</h2>
                  {area.overview && <p className="our-work-chapter-overview">{area.overview}</p>}
                  {area.activities && area.activities.length > 0 && (
                    <ul className="our-work-chapter-activities">
                      {area.activities.map((activity) => <li key={activity}>{activity}</li>)}
                    </ul>
                  )}
                </div>
                <a href="#focus-areas">All programme areas <span aria-hidden="true">↑</span></a>
              </div>
              <div
                className={`our-work-chapter-media ${media ? 'has-image' : ''}`}
                style={media ? { '--work-focal': media.focalPoint } as CSSProperties : undefined}
                aria-hidden={media ? undefined : true}
              >
                {media && <img src={media.src} alt={media.alt} loading="lazy" />}
              </div>
            </section>
          )
        })}
      </div>

      <FeaturedWork />
      <ImpactGallery />

      <section className="our-work-closing" aria-labelledby="our-work-closing-title">
        <h2 id="our-work-closing-title">{ourWorkContent.closing}</h2>
        <a href="/#get-involved">Ways to get involved <span aria-hidden="true">↗</span></a>
      </section>
    </article>
  )
}
