import { useState } from 'react'
import type { CSSProperties } from 'react'
import { formatNewsDate, getApprovedNewsImage, getPublishedNewsArticles, newsContent } from '../content/news'
import './News.css'

export function News() {
  const [showAll, setShowAll] = useState(false)
  const articles = getPublishedNewsArticles()
  if (articles.length === 0) return null

  const [feature, ...remaining] = articles
  const listed = showAll ? remaining : remaining.slice(0, 3)
  const featureImage = getApprovedNewsImage(feature)

  return (
    <section id="news" className="news" aria-labelledby="news-title">
      <div className="news-inner">
        <div className="news-topline">
          <span>08 / News</span>
          <span>{String(articles.length).padStart(2, '0')} published {articles.length === 1 ? 'article' : 'articles'}</span>
        </div>

        <div className="news-heading-row">
          <h2 id="news-title">{newsContent.heading}</h2>
          <span className="news-heading-mark" aria-hidden="true">↗</span>
        </div>

        <div className={`news-layout ${listed.length === 0 ? 'news-layout-single' : ''}`}>
          <article className="news-feature" aria-labelledby={`${feature.id}-title`}>
            {featureImage && (
              <div className="news-feature-media" style={{ '--news-focal': featureImage.focalPoint } as CSSProperties}>
                <img src={featureImage.src} alt={featureImage.alt} loading="lazy" />
              </div>
            )}
            <div className="news-feature-copy">
              <div className="news-article-meta">
                <span>{feature.category}</span>
                <time dateTime={feature.publishedAt}>{formatNewsDate(feature.publishedAt)}</time>
              </div>
              <h3 id={`${feature.id}-title`}>{feature.title}</h3>
              <p>{feature.summary}</p>
              <a className="news-read-link" href={`/news/${feature.slug}`}>Read article <span aria-hidden="true">↗</span></a>
            </div>
          </article>

          {listed.length > 0 && (
            <div className="news-list">
              {listed.map((article, index) => (
                <article className="news-list-item" key={article.id} aria-labelledby={`${article.id}-title`}>
                  <span className="news-list-number" aria-hidden="true">{String(index + 2).padStart(2, '0')}</span>
                  <div className="news-list-copy">
                    <div className="news-article-meta">
                      <span>{article.category}</span>
                      <time dateTime={article.publishedAt}>{formatNewsDate(article.publishedAt)}</time>
                    </div>
                    <h3 id={`${article.id}-title`}><a href={`/news/${article.slug}`}>{article.title}</a></h3>
                    <p>{article.summary}</p>
                  </div>
                  <span className="news-list-arrow" aria-hidden="true">↗</span>
                </article>
              ))}
            </div>
          )}
        </div>

        {remaining.length > 3 && (
          <button className="news-more" type="button" aria-expanded={showAll} onClick={() => setShowAll((value) => !value)}>
            {showAll ? 'Show fewer stories' : 'Explore all news'} <span aria-hidden="true">{showAll ? '↑' : '↗'}</span>
          </button>
        )}
      </div>
    </section>
  )
}
