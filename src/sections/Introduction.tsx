import { useEffect, useRef, useState } from 'react'
import { introductionContent } from '../content/introduction'
import './Introduction.css'

export function Introduction() {
  const sectionRef = useRef<HTMLElement>(null)
  const [motionReady, setMotionReady] = useState(false)
  const [revealed, setRevealed] = useState<Set<string>>(() => new Set())

  useEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const section = sectionRef.current
    if (!section) return
    const title = section.querySelector<HTMLElement>('.introduction-title')
    const purpose = section.querySelector<HTMLElement>('.introduction-aside')
    if (!title || !purpose) return

    const observer = new IntersectionObserver((entries) => {
      const newlyVisible: string[] = []
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        newlyVisible.push(entry.target === title ? 'title' : 'purpose')
        observer.unobserve(entry.target)
      }
      if (newlyVisible.length) {
        setRevealed((current) => new Set([...current, ...newlyVisible]))
      }
    }, { threshold: 0.08, rootMargin: '0px 0px 8% 0px' })

    observer.observe(title)
    observer.observe(purpose)
    setMotionReady(true)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="introduction"
      className={`introduction ${motionReady ? 'motion-ready' : ''}`}
      aria-labelledby="introduction-title"
    >
      <div className="introduction-inner">
        <div className="introduction-main">
          <h2 id="introduction-title" className={`introduction-title ${revealed.has('title') ? 'is-visible' : ''}`}>
            {introductionContent.headingStart} <em>{introductionContent.headingEmphasis}</em> {introductionContent.headingEnd}
          </h2>
          <div className={`introduction-aside ${revealed.has('purpose') ? 'is-visible' : ''}`}>
            <span className="introduction-aside-label">Our purpose</span>
            <p>{introductionContent.description}</p>
          </div>
        </div>

      </div>
    </section>
  )
}
