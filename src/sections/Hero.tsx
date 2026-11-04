import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { heroContent } from '../content/hero'
import './Hero.css'

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const mediaRef = useRef<HTMLDivElement>(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const slides = heroContent.slides || [
    {
      src: heroContent.media.src,
      alt: heroContent.media.alt,
      desktopFocalPoint: heroContent.media.desktopFocalPoint,
      mobileFocalPoint: heroContent.media.mobileFocalPoint,
      label: 'Community Development Initiative',
      theme: 'Tanzania Mainland',
    },
  ]

  // Parallax motion
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

  // Auto-advance carousel
  useEffect(() => {
    if (slides.length <= 1 || isPaused) return
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return

    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 7000)

    return () => clearInterval(timer)
  }, [slides.length, isPaused])

  return (
    <section
      ref={sectionRef}
      className="hero"
      aria-labelledby="hero-title"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div ref={mediaRef} className="hero-media">
        {slides.map((slide, index) => {
          const isActive = index === activeSlide
          return (
            <div
              key={slide.src}
              className={`hero-slide-layer ${isActive ? 'is-active' : ''}`}
              aria-hidden={!isActive}
              style={{
                '--hero-desktop-focal': slide.desktopFocalPoint,
                '--hero-mobile-focal': slide.mobileFocalPoint,
              } as CSSProperties}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                fetchPriority={index === 0 ? 'high' : 'low'}
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
              />
            </div>
          )
        })}
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
              <a className="hero-action hero-action-primary" href="/our-work">
                Explore our work <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
