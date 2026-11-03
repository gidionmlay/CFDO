import { useEffect, useRef } from 'react'
import type { CSSProperties } from 'react'
import { heroContent } from '../content/hero'
import './Hero.css'

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const mediaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const media = mediaRef.current
    if (!section || !media) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0

    function update() {
      frame = 0
      if (!section || !media) return
      if (reducedMotion.matches) {
        media.style.removeProperty('--hero-parallax-y')
        return
      }

      const bounds = section.getBoundingClientRect()
      const progress = Math.min(1, Math.max(0, -bounds.top / bounds.height))
      const distance = Math.min(90, bounds.height * 0.09) * (window.innerWidth <= 600 ? 0.6 : 1)
      media.style.setProperty('--hero-parallax-y', `${(-progress * distance).toFixed(2)}px`)
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
    <section ref={sectionRef} className="hero" aria-labelledby="hero-title">
      <div
        ref={mediaRef}
        className="hero-media"
        aria-hidden={heroContent.media.src ? undefined : true}
        style={{
          '--hero-desktop-focal': heroContent.media.desktopFocalPoint,
          '--hero-mobile-focal': heroContent.media.mobileFocalPoint,
        } as CSSProperties}
      >
        {heroContent.media.src && (
          <img
            src={heroContent.media.src}
            alt={heroContent.media.alt}
            fetchPriority="high"
            decoding="async"
          />
        )}
        {!heroContent.media.src && (
          <div className="hero-media-placeholder">
            <span className="hero-landform hero-landform-back" />
            <span className="hero-landform hero-landform-front" />
            <span className="hero-light" />
          </div>
        )}
      </div>
      <div className="hero-shade" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-content">
          <h1 id="hero-title" className="hero-title">
            {heroContent.titleLines.map((line) => <span key={line}>{line}</span>)}
          </h1>
          <div className="hero-aside">
            <p className="hero-mission">{heroContent.mission}</p>
            <div className="hero-actions">
              <a className="hero-action hero-action-primary" href="/our-work">Explore our work <span aria-hidden="true">↗</span></a>
              <a className="hero-action hero-action-secondary" href="#get-involved">Partner with us <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
