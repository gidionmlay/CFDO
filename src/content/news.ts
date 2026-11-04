import newsCamartecImg from '../Assets/Images/Foundation-Img/FRK04921.jpg'
import newsAnzaImg from '../Assets/Images/Foundation-Img/FRK04580.jpg'
import newsSalonImg from '../Assets/Images/Foundation-Img/FRK03517.jpg'
import newsBiogasImg from '../Assets/Images/Foundation-Img/FRK04674.jpg'

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

// Factual articles approved for publication with real field photography
export const newsArticles: NewsArticle[] = [
  {
    id: 'news-camartec-training',
    slug: 'camartec-agricultural-mechanization-training',
    title: 'CFDO and CAMARTEC Conclude Hands-On Agro-Mechanization Training Series',
    category: 'Technology & Agriculture',
    publishedAt: '2026-08-15',
    featured: true,
    summary: 'Youth trainees in Arusha completed intensive practical training on agricultural forage choppers, crop processing equipment, and rural toolmaking at CAMARTEC.',
    body: 'In partnership with the Centre for Agricultural Mechanization and Rural Technology (CAMARTEC), CFDO successfully concluded a multi-week technical training cohort for young artisans and aspiring agro-entrepreneurs.\n\nParticipants gained direct experience operating, troubleshooting, and fabricating motorized forage chopping machines and post-harvest processors. The curriculum emphasized affordable local manufacturing techniques, equipment safety standards, and commercial opportunities in post-harvest services for smallholder farming communities.\n\nGraduates will receive follow-up business advisory and linkage to regional agricultural cooperatives seeking mechanical service providers.',
    image: {
      src: newsCamartecImg,
      alt: 'Youth trainees inspecting agricultural forage chopper machinery with instructors at CAMARTEC',
      focalPoint: '50% 50%',
      approvedForPublication: true,
    },
    approvedForPublication: true,
  },
  {
    id: 'news-anza-incubation',
    slug: 'anza-hub-digital-incubation-cohort',
    title: 'Young Entrepreneurs Graduate From Digital Business Incubation at Anza Hub',
    category: 'Enterprise & Innovation',
    publishedAt: '2026-06-20',
    featured: false,
    summary: 'A new cohort of youth founders finalized market testing, financial modeling, and digital operations training under the Tanzania Youth Empowerment Project.',
    body: 'At the Anza Hub facility in Arusha, dozens of young entrepreneurs presented their business plans following completion of the TYEP digital business incubation program.\n\nThe curriculum guided founders through value proposition design, unit economics, mobile digital tools, and statutory compliance. CFDO mentors worked one-on-one with participants to refine their launch plans and connect them with local savings circles (VICOBA) for seed finance.',
    image: {
      src: newsAnzaImg,
      alt: 'Youth entrepreneurs engaged in business planning seminar at Anza Hub in Arusha',
      focalPoint: '50% 40%',
      approvedForPublication: true,
    },
    approvedForPublication: true,
  },
  {
    id: 'news-massalemas-launch',
    slug: 'massalemas-salon-vocational-launch',
    title: 'TYEP Cosmetology Graduates Launch MASSALEMAS Unisex Salon in Arusha',
    category: 'Livelihoods',
    publishedAt: '2026-04-10',
    featured: false,
    summary: 'Following six months of hands-on beauty therapy and cosmetology training delivered with Dorcas Aid, graduates opened their independent storefront.',
    body: 'MASSALEMAS Unisex Salon officially opened its doors in Arusha, marking the practical realization of vocational skills training under the Tanzania Youth Empowerment Project.\n\nCFDO and Dorcas Aid representatives joined community elders to celebrate the launch. The enterprise offers full hair grooming and cosmetology services, delivering immediate daily income to its founding women operators while serving as a peer training hub for upcoming apprentices.',
    image: {
      src: newsSalonImg,
      alt: 'CFDO and Dorcas Aid field team outside the newly launched MASSALEMAS Unisex Salon',
      focalPoint: '50% 45%',
      approvedForPublication: true,
    },
    approvedForPublication: true,
  },
  {
    id: 'news-biogas-renewable',
    slug: 'biogas-clean-energy-capacity-building',
    title: 'Youth Technicians Master Domestic Biogas Plant Installation & Maintenance',
    category: 'Clean Energy',
    publishedAt: '2026-02-18',
    featured: false,
    summary: 'Technical trainees completed field coursework on fixed-dome biogas digester construction to expand clean cooking fuel in peri-urban and rural homesteads.',
    body: 'Addressing household energy poverty and deforestation, CFDO conducted field masterclasses on domestic biogas plant construction (Mtambo wa Biogesi).\n\nTrainees studied the biological digestion process, masonry construction specifications, gas piping safety, and bio-slurry fertilizer utilization. The program trains certified community technicians to construct and service household digesters, creating green jobs while cutting biomass fuel dependence.',
    image: {
      src: newsBiogasImg,
      alt: 'Youth technicians studying renewable biogas plant engineering blueprint in Arusha',
      focalPoint: '50% 45%',
      approvedForPublication: true,
    },
    approvedForPublication: true,
  },
]

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
