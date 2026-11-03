import { useState } from 'react'
import { getPublishedPartnerMarks, getPublishedVoices, voicesContent } from '../content/voices'
import './Voices.css'

export function Voices() {
  const [activeIndex, setActiveIndex] = useState(0)
  const voices = getPublishedVoices()
  const marks = getPublishedPartnerMarks()
  if (voices.length === 0) return null

  const index = Math.min(activeIndex, voices.length - 1)
  const voice = voices[index]
  const multiple = voices.length > 1

  function move(direction: -1 | 1) {
    setActiveIndex((current) => (current + direction + voices.length) % voices.length)
  }

  return (
    <section id="voices" className="voices" aria-labelledby="voices-title">
      <div className="voices-inner">
        <div className="voices-topline">
          <span>07 / Voices</span>
          <span>{String(voices.length).padStart(2, '0')} {voices.length === 1 ? 'voice' : 'voices'}</span>
        </div>

        <div className="voices-layout">
          <div className="voices-heading-group">
            <h2 id="voices-title">{voicesContent.heading}</h2>
            <span className="voices-heading-mark" aria-hidden="true">“</span>
          </div>

          <div className="voices-feature">
            <div className="voices-quote" aria-live={multiple ? 'polite' : undefined} aria-atomic={multiple ? 'true' : undefined}>
              <figure key={voice.id}>
                <blockquote><p>{voice.quote}</p></blockquote>
                <figcaption>
                  <span className="voices-attribution">{voice.attribution}</span>
                  <span className="voices-context">{voice.context}</span>
                </figcaption>
              </figure>
            </div>

            {multiple && (
              <div className="voices-controls">
                <span className="voices-count" aria-hidden="true">{String(index + 1).padStart(2, '0')} / {String(voices.length).padStart(2, '0')}</span>
                <div className="voices-control-buttons">
                  <button type="button" onClick={() => move(-1)} aria-label="Previous community voice">←</button>
                  <button type="button" onClick={() => move(1)} aria-label="Next community voice">→</button>
                </div>
              </div>
            )}
          </div>
        </div>

        {marks.length > 0 && (
          <div className="voices-partners" aria-label="Approved partners">
            {marks.map((mark) => <img key={mark.id} src={mark.image.src} alt={mark.image.alt} loading="lazy" />)}
          </div>
        )}
      </div>
    </section>
  )
}
