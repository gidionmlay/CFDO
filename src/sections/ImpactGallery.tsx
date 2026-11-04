import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'
import { galleryCategories, galleryItems } from '../content/gallery'
import type { GalleryCategory, GalleryItem } from '../content/gallery'
import './ImpactGallery.css'

export function ImpactGallery() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('all')
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null)

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory)

  // Keyboard navigation for modal lightbox
  useEffect(() => {
    if (!activeItem) return

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setActiveItem(null)
      } else if (e.key === 'ArrowRight') {
        const currentIndex = filteredItems.findIndex((i) => i.id === activeItem?.id)
        if (currentIndex >= 0 && currentIndex < filteredItems.length - 1) {
          setActiveItem(filteredItems[currentIndex + 1])
        } else if (currentIndex === filteredItems.length - 1) {
          setActiveItem(filteredItems[0])
        }
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = filteredItems.findIndex((i) => i.id === activeItem?.id)
        if (currentIndex > 0) {
          setActiveItem(filteredItems[currentIndex - 1])
        } else if (currentIndex === 0) {
          setActiveItem(filteredItems[filteredItems.length - 1])
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeItem, filteredItems])

  return (
    <section id="gallery" className="impact-gallery" aria-labelledby="gallery-title">
      <div className="impact-gallery-inner">
        <div className="impact-gallery-topline">
          <span>09 / Impact Gallery</span>
          <span>{filteredItems.length} Field {filteredItems.length === 1 ? 'Photograph' : 'Photographs'}</span>
        </div>

        <div className="impact-gallery-header">
          <div className="impact-gallery-header-text">
            <span className="impact-gallery-kicker">Visual Archive & Evidence</span>
            <h2 id="gallery-title" className="impact-gallery-title">
              Moments of transformation across Tanzania.
            </h2>
          </div>
          <p className="impact-gallery-intro">
            An authentic photographic record documenting CFDO’s programs in action—from agricultural fabrication and biogas clean energy with CAMARTEC to vocational enterprises and youth business incubation at Anza Hub.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="impact-gallery-filters" role="tablist" aria-label="Gallery category filters">
          {galleryCategories.map((cat) => {
            const count = cat.id === 'all'
              ? galleryItems.length
              : galleryItems.filter((i) => i.category === cat.id).length
            const isSelected = selectedCategory === cat.id

            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                className={`gallery-filter-btn ${isSelected ? 'is-active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <span>{cat.label}</span>
                <span className="gallery-filter-count">({count})</span>
              </button>
            )
          })}
        </div>

        {/* Photography Grid */}
        <div className="impact-gallery-grid">
          {filteredItems.map((item, index) => (
            <article
              key={item.id}
              className="gallery-card"
              onClick={() => setActiveItem(item)}
              tabIndex={0}
              role="button"
              aria-label={`View photograph: ${item.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setActiveItem(item)
                }
              }}
            >
              <div
                className="gallery-card-media"
                style={{ '--gal-focal': item.focalPoint } as CSSProperties}
              >
                <img src={item.src} alt={item.alt} loading="lazy" />
                <span className="gallery-card-zoom-indicator" aria-hidden="true">+</span>
              </div>
              <div className="gallery-card-info">
                <div className="gallery-card-meta">
                  <span className="gallery-card-index">{String(index + 1).padStart(2, '0')}</span>
                  <span className="gallery-card-tag">{item.categoryLabel}</span>
                </div>
                <h3 className="gallery-card-title">{item.title}</h3>
                <p className="gallery-card-location">{item.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="gallery-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="gallery-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="gallery-modal-close"
              onClick={() => setActiveItem(null)}
              aria-label="Close photograph preview"
            >
              ✕
            </button>

            <div className="gallery-modal-image-wrap">
              <img src={activeItem.src} alt={activeItem.alt} />
            </div>

            <div className="gallery-modal-sidebar">
              <div className="gallery-modal-header">
                <span className="gallery-modal-category">{activeItem.categoryLabel}</span>
                <h3 id="modal-title" className="gallery-modal-title">{activeItem.title}</h3>
                <span className="gallery-modal-location">{activeItem.location}</span>
              </div>

              <div className="gallery-modal-description">
                <span className="gallery-modal-desc-heading">Field Context</span>
                <p>{activeItem.description}</p>
              </div>

              <div className="gallery-modal-footer">
                <span className="gallery-modal-archive-tag">Tanzania Youth Empowerment Project</span>
                <div className="gallery-modal-nav-btns">
                  <button
                    type="button"
                    className="gallery-modal-nav-btn"
                    onClick={() => {
                      const cur = filteredItems.findIndex((i) => i.id === activeItem.id)
                      const prev = cur > 0 ? cur - 1 : filteredItems.length - 1
                      setActiveItem(filteredItems[prev])
                    }}
                    aria-label="Previous photograph"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    className="gallery-modal-nav-btn"
                    onClick={() => {
                      const cur = filteredItems.findIndex((i) => i.id === activeItem.id)
                      const next = cur < filteredItems.length - 1 ? cur + 1 : 0
                      setActiveItem(filteredItems[next])
                    }}
                    aria-label="Next photograph"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
