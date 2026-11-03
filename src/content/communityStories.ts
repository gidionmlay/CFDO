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

// Add only verified CFDO accounts with approved, consented imagery.
export const communityStories: CommunityStory[] = []

export function getFeaturedCommunityStory(): CommunityStory | undefined {
  return communityStories.find((story) =>
    story.approvedForPublication &&
    story.imageConsentConfirmed &&
    Boolean(story.id && story.title && story.summary && story.body && story.programme && story.location && story.image.src && story.image.alt)
  )
}
