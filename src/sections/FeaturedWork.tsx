import type { CSSProperties } from 'react'
import { featuredWorkContent, getPublishedFeaturedProjects } from '../content/featuredWork'
import './FeaturedWork.css'

export function FeaturedWork() {
  const projects = getPublishedFeaturedProjects()
  if (projects.length === 0) return null

  return (
    <section id="featured-work" className="featured-work" aria-labelledby="featured-work-title">
      <div className="featured-work-inner">
        <div className="featured-work-heading-row">
          <h2 id="featured-work-title">{featuredWorkContent.heading}</h2>
          <span className="featured-work-heading-mark" aria-hidden="true">{String(projects.length).padStart(2, '0')}</span>
        </div>

        <div className="featured-work-grid" style={{ '--featured-work-columns': Math.min(projects.length, 3) } as CSSProperties}>
          {projects.map((project, index) => (
            <article className="featured-project" key={project.id} aria-labelledby={`${project.id}-title`}>
              <div className="featured-project-media" style={{ '--project-focal': project.image.focalPoint } as CSSProperties}>
                <img src={project.image.src} alt={project.image.alt} loading="lazy" />
              </div>
              <div className="featured-project-meta">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <span>{project.programme}</span>
              </div>
              <h3 id={`${project.id}-title`}>{project.title}</h3>
              <p className="featured-project-location">{project.location}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
