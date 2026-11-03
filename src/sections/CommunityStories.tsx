import type { CSSProperties } from 'react'
import { communityStoriesContent, getFeaturedCommunityStory } from '../content/communityStories'
import './CommunityStories.css'

export function CommunityStories() {
  const story = getFeaturedCommunityStory()

  return (
    <section id="community-stories" className="community-stories" aria-labelledby="community-stories-title">
      <div className="community-stories-inner">
        <div className="community-stories-heading-row">
          <h2 id="community-stories-title">{communityStoriesContent.heading}</h2>
          <span className="community-stories-heading-mark" aria-hidden="true">↘</span>
        </div>

        {story ? (
          <article className="community-story" aria-labelledby={`${story.id}-title`}>
            <div className="community-story-media" style={{ '--story-focal': story.image.focalPoint } as CSSProperties}>
              <img src={story.image.src} alt={story.image.alt} loading="lazy" />
            </div>
            <div className="community-story-copy">
              <div className="community-story-meta">
                <span>{story.programme}</span>
                <span>{story.location}</span>
              </div>
              <h3 id={`${story.id}-title`}>{story.title}</h3>
              <p>{story.summary}</p>
              <details className="community-story-details">
                <summary>Read the story <span aria-hidden="true">↗</span></summary>
                <div className="community-story-body">{story.body.split('\n\n').map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
              </details>
            </div>
          </article>
        ) : (
          <div className="community-stories-themes">
            {communityStoriesContent.themes.map((theme, index) => (
              <div className="community-stories-theme" key={theme}>
                <span className="community-stories-theme-number" aria-hidden="true">0{index + 1}</span>
                <span>{theme}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
