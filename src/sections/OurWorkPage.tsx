import { useEffect } from 'react'
import type { CSSProperties } from 'react'
import { ourWorkContent } from '../content/ourWork'
import { programmeContent } from '../content/programmes'
import { FeaturedWork } from './FeaturedWork'
import './OurWorkPage.css'

export function OurWorkPage() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Our Work | CFDO'
    const targetId = decodeURIComponent(window.location.hash.slice(1))
    if (targetId) {
      requestAnimationFrame(() => document.getElementById(targetId)?.scrollIntoView({ behavior: 'instant' as ScrollBehavior }))
    }
    return () => { document.title = previousTitle }
  }, [])

  return (
    <article className="our-work-page">
      <header className="our-work-hero" aria-labelledby="our-work-title">
        <div className="our-work-hero-art" aria-hidden="true" />
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

      <section className="our-work-closing" aria-labelledby="our-work-closing-title">
        <h2 id="our-work-closing-title">{ourWorkContent.closing}</h2>
        <a href="/#get-involved">Ways to get involved <span aria-hidden="true">↗</span></a>
      </section>
    </article>
  )
}
