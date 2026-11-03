export type CommunityVoice = {
  id: string
  quote: string
  attribution: string
  context: string
  approvedForPublication: boolean
  permissionConfirmed: boolean
}

export type PartnerMark = {
  id: string
  image: {
    src: string
    alt: string
  }
  approvedForPublication: boolean
}

export const voicesContent = {
  heading: 'Voices From Our Community',
} as const

// Add only genuine, attributed quotations with publication permission.
export const communityVoices: CommunityVoice[] = []

// Add only approved partner marks; an association must be verified before display.
export const partnerMarks: PartnerMark[] = []

export function getPublishedVoices(): CommunityVoice[] {
  return communityVoices.filter((voice) =>
    voice.approvedForPublication &&
    voice.permissionConfirmed &&
    Boolean(voice.id && voice.quote && voice.attribution && voice.context)
  )
}

export function getPublishedPartnerMarks(): PartnerMark[] {
  return partnerMarks.filter((mark) =>
    mark.approvedForPublication &&
    Boolean(mark.id && mark.image.src && mark.image.alt)
  )
}
