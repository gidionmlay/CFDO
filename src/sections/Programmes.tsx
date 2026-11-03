import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { programmeContent } from '../content/programmes'
import './Programmes.css'

export function Programmes() {
  const sectionRef = useRef<HTMLElement>(null)
  const [motionReady, setMotionReady] = useState(false)
  const [revealedCards, setRevealedCards] = useState<Set<number>>(() => new Set())

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const cards = Array.from(section.querySelectorAll<HTMLElement>('.programme-area'))
    setMotionReady(true)
    const observer = new IntersectionObserver((entries) => {
      const indices: number[] = []
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const index = cards.indexOf(entry.target as HTMLElement)
        if (index >= 0) indices.push(index)
        observer.unobserve(entry.target)
      }
      if (indices.length) {
        setRevealedCards((current) => new Set([...current, ...indices]))
      }
    }, { threshold: 0.05, rootMargin: '0px 0px 8% 0px' })
    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="programmes"
      className={`programmes ${motionReady ? 'motion-ready' : ''}`}
      aria-labelledby="programmes-title"
    >
      <div className="programmes-inner">
        <div className="programmes-heading-row">
          <h2 id="programmes-title">{programmeContent.heading}</h2>
          <span className="programmes-heading-mark" aria-hidden="true">05</span>
        </div>
        <div className="programme-grid">
          {programmeContent.areas.map((area, index) => (
            <article
              className={`programme-area programme-area-${area.number} programme-area-${area.treatment} ${revealedCards.has(index) ? 'is-visible' : ''}`}
              key={area.id}
              aria-labelledby={`${area.id}-title`}
            >
              {area.media && (
                <div
                  className="programme-feature-media"
                  aria-hidden="true"
                  style={{ '--programme-focal': area.media.focalPoint } as CSSProperties}
                >
                  <img src={area.media.src} alt={area.media.alt} loading="lazy" decoding="async" />
                </div>
              )}
              <div className="programme-area-content">
                <span className="programme-area-number" aria-hidden="true">{area.number}</span>
                <h3 id={`${area.id}-title`}>{area.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
