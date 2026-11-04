import salonStoryImg from '../Assets/Images/Foundation-Img/FRK03687.jpg'

export type CommunityStory = {
  id: string
  title: string
  summary: string
  body: string
  programme: string
  location: string
  image: {
    src: string
    alt: string
    focalPoint: string
  }
  approvedForPublication: boolean
  imageConsentConfirmed: boolean
}

export const communityStoriesContent = {
  heading: 'Community in Action',
  themes: ['People.', 'Places.', 'Activities.', 'Stories.'],
} as const

// Verified CFDO accounts with approved, consented imagery.
export const communityStories: CommunityStory[] = [
  {
    id: 'massalemas-salon-enterprise',
    title: 'From Vocational Trainees to Thriving Salon Business Owners',
    summary: 'Through the Tanzania Youth Empowerment Project (TYEP) in partnership with Dorcas Aid, young women in Arusha acquired hairdressing, salon management, and financial skills, creating an independent commercial livelihood.',
    body: 'In peri-urban Arusha, young women often face systemic barriers to formal employment. Through the Tanzania Youth Empowerment Project (TYEP)—a collaborative initiative between CFDO and Dorcas Aid—trainees undertook rigorous vocational coursework in hair dressing, cosmetology, customer care, and business bookkeeping.\n\nUpon graduation, the cohort joined forces to launch MASSALEMAS Unisex Salon. Equipped with professional startup kits and ongoing CFDO mentorship, they established an active storefront serving neighborhood residents daily.\n\nToday, the salon generates sustainable household income, provides mentorship to new apprentices, and demonstrates the transformative power of practical skills when combined with grassroots community backing.',
    programme: 'Economic Education & Innovation',
    location: 'Arusha, Tanzania',
    image: {
      src: salonStoryImg,
      alt: 'Young women entrepreneurs smiling inside MASSALEMAS Unisex Salon in Arusha',
      focalPoint: '50% 40%',
    },
    approvedForPublication: true,
    imageConsentConfirmed: true,
  },
]

export function getFeaturedCommunityStory(): CommunityStory | undefined {
  return communityStories.find((story) =>
    story.approvedForPublication &&
    story.imageConsentConfirmed &&
    Boolean(story.id && story.title && story.summary && story.body && story.programme && story.location && story.image.src && story.image.alt)
  )
}
