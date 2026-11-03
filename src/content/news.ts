export type NewsArticle = {
  id: string
  slug: string
  title: string
  summary: string
  body: string
  category: string
  publishedAt: string
  featured: boolean
  image?: {
    src: string
    alt: string
    focalPoint: string
    approvedForPublication: boolean
  }
  approvedForPublication: boolean
}

export const newsContent = {
  heading: 'Latest From CFDO',
} as const

// Add only factual articles approved for publication.
export const newsArticles: NewsArticle[] = []

function hasValidDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false
  const parsed = new Date(`${value}T00:00:00Z`)
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value
}

export function getPublishedNewsArticles(): NewsArticle[] {
  return newsArticles
    .filter((article) =>
      article.approvedForPublication &&
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(article.slug) &&
      hasValidDate(article.publishedAt) &&
      Boolean(article.id && article.title && article.summary && article.body && article.category)
    )
    .sort((a, b) => Number(b.featured) - Number(a.featured) || b.publishedAt.localeCompare(a.publishedAt))
}

export function getPublishedNewsArticleBySlug(slug: string): NewsArticle | undefined {
  return getPublishedNewsArticles().find((article) => article.slug === slug)
}

export function getApprovedNewsImage(article: NewsArticle): NewsArticle['image'] | undefined {
  const image = article.image
  return image?.approvedForPublication && image.src && image.alt ? image : undefined
}

export function formatNewsDate(value: string): string {
  return new Intl.DateTimeFormat('en', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${value}T00:00:00Z`))
}
