import { useEffect, useRef, useState } from 'react'
import { methodContent } from '../content/method'
import './Method.css'

export function Method() {
  const sectionRef = useRef<HTMLElement>(null)
  const [motionReady, setMotionReady] = useState(false)
  const [revealedCount, setRevealedCount] = useState(0)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const stages = Array.from(section.querySelectorAll<HTMLElement>('.method-stage'))
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setRevealedCount(stages.length)
      return
    }

    setMotionReady(true)
    const observer = new IntersectionObserver((entries) => {
      let lastVisibleIndex = -1
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const index = stages.indexOf(entry.target as HTMLElement)
        lastVisibleIndex = Math.max(lastVisibleIndex, index)
        observer.unobserve(entry.target)
      }
      if (lastVisibleIndex >= 0) {
        setRevealedCount((current) => Math.max(current, lastVisibleIndex + 1))
      }
    }, { threshold: 0.18, rootMargin: '0px 0px -30% 0px' })
    stages.forEach((stage) => observer.observe(stage))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const list = sectionRef.current?.querySelector<HTMLOListElement>('.method-stages')
    if (!list) return
    const markers = Array.from(list.querySelectorAll<HTMLElement>('.method-stage-marker'))

    function updateLine() {
      if (!list || markers.length < 2) return
      const listTop = list.getBoundingClientRect().top
      const centers = markers.map((marker) => {
        const bounds = marker.getBoundingClientRect()
        return bounds.top + bounds.height / 2 - listTop
      })
      const first = centers[0]
      const length = centers[centers.length - 1] - first
      const current = centers[Math.max(0, revealedCount - 1)]
      list.style.setProperty('--method-line-top', `${first}px`)
      list.style.setProperty('--method-line-length', `${length}px`)
      list.style.setProperty('--method-line-progress', `${revealedCount ? (current - first) / length : 0}`)
    }

    updateLine()
    window.addEventListener('resize', updateLine)
    return () => window.removeEventListener('resize', updateLine)
  }, [revealedCount])

  return (
    <section
      ref={sectionRef}
      id="method"
      className={`method ${motionReady ? 'motion-ready' : ''}`}
      aria-labelledby="method-title"
    >
      <div className="method-inner">
        <div className="method-layout">
          <div className="method-intro">
            <h2 id="method-title">{methodContent.heading}</h2>
          </div>

          <ol className="method-stages">
            {methodContent.stages.map((stage, index) => (
              <li className={`method-stage ${index < revealedCount ? 'is-visible' : ''}`} key={stage.id}>
                <span className="method-stage-marker" aria-hidden="true"><span /></span>
                <div className="method-stage-content">
                  <h3>{stage.title}</h3>
                  <p>{stage.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
