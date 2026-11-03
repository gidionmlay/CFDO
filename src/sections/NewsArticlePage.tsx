import { useEffect } from 'react'
import type { CSSProperties } from 'react'
import { formatNewsDate, getApprovedNewsImage, getPublishedNewsArticleBySlug } from '../content/news'
import './News.css'

export function NewsArticlePage({ slug }: { slug: string }) {
  const article = getPublishedNewsArticleBySlug(slug)

  useEffect(() => {
    if (!article) return
    const previousTitle = document.title
    document.title = `${article.title} | CFDO`
    return () => { document.title = previousTitle }
  }, [article])

  if (!article) {
    return (
      <section className="news-article-page news-not-found" aria-labelledby="news-not-found-title">
        <span className="news-page-label">CFDO / News</span>
        <h1 id="news-not-found-title">Article unavailable</h1>
        <a href="/">Return to the homepage <span aria-hidden="true">↗</span></a>
      </section>
    )
  }

  const image = getApprovedNewsImage(article)

  return (
    <article className="news-article-page" aria-labelledby="news-article-title">
      <div className="news-article-header">
        <a className="news-article-back" href="/#news">← Latest from CFDO</a>
        <div className="news-article-meta">
          <span>{article.category}</span>
          <time dateTime={article.publishedAt}>{formatNewsDate(article.publishedAt)}</time>
        </div>
        <h1 id="news-article-title">{article.title}</h1>
        <p>{article.summary}</p>
      </div>
      {image && (
        <div className="news-article-hero" style={{ '--news-focal': image.focalPoint } as CSSProperties}>
          <img src={image.src} alt={image.alt} />
        </div>
      )}
      <div className="news-article-body">
        {article.body.split('\n\n').map((paragraph, index) => <p key={index}>{paragraph}</p>)}
      </div>
      <a className="news-article-footer-link" href="/#news">← Back to news</a>
    </article>
  )
}
