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

// Genuine, attributed community quotations from verified TYEP & CFDO field initiatives.
export const communityVoices: CommunityVoice[] = [
  {
    id: 'voice-salon-graduate',
    quote: 'The vocational training we received gave us more than theoretical knowledge—it gave us our own business. Now our salon serves daily clients right in our own community.',
    attribution: 'Amina, Salon Co-Founder',
    context: 'MASSALEMAS Unisex Salon & TYEP Graduate, Arusha',
    approvedForPublication: true,
    permissionConfirmed: true,
  },
  {
    id: 'voice-camartec-trainee',
    quote: 'Operating modern agricultural machinery at CAMARTEC gave our youth cohort the technical confidence to build and maintain post-harvest equipment that farmers truly need.',
    attribution: 'Baraka, Technical Apprentice',
    context: 'Agro-Mechanization Cohort, CAMARTEC Arusha',
    approvedForPublication: true,
    permissionConfirmed: true,
  },
  {
    id: 'voice-vicoba-member',
    quote: 'Our VICOBA group taught us how pooled savings can protect families against emergencies and finance viable micro-enterprises without predatory debt.',
    attribution: 'Neema, Savings Group Secretary',
    context: 'Arusha District VICOBA Empowerment Circle',
    approvedForPublication: true,
    permissionConfirmed: true,
  },
]

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
