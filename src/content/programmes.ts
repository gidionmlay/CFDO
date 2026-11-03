import educationImage from '../Assets/Images/Education.jpeg'
import empowermentImage from '../Assets/Images/empowerment.jpeg'
import leadershipImage from '../Assets/Images/leadership.jpeg'
import healthImage from '../Assets/Images/health.jpeg'
import environmentalImage from '../Assets/Images/environmental.jpeg'

export type ProgrammeArea = {
  id: string
  number: string
  title: string
  treatment: 'feature' | 'plain' | 'accent' | 'dark' | 'landscape'
  overview?: string
  activities?: string[]
  media?: {
    src: string
    alt: string
    focalPoint: string
    approvedForPublication: boolean
  }
}

export const programmeContent: {
  heading: string
  areas: ProgrammeArea[]
  featureMedia: { src: string | null; alt: string; focalPoint: string }
} = {
  heading: 'Where we create change.',
  areas: [
    { id: 'economic-education', number: '01', title: 'Economic Education & Innovation', treatment: 'feature', media: { src: educationImage, alt: 'Economic education and vocational training session in Tanzania', focalPoint: '50% 50%', approvedForPublication: true } },
    { id: 'community-empowerment', number: '02', title: 'Community Empowerment', treatment: 'plain', media: { src: empowermentImage, alt: 'Community members participating in local empowerment discussion', focalPoint: '50% 50%', approvedForPublication: true } },
    { id: 'youth-leadership', number: '03', title: 'Youth Leadership', treatment: 'accent', media: { src: leadershipImage, alt: 'Youth leaders collaborating on community initiative planning', focalPoint: '50% 50%', approvedForPublication: true } },
    { id: 'community-health', number: '04', title: 'Community Health', treatment: 'dark', media: { src: healthImage, alt: 'Community health education and awareness outreach program', focalPoint: '50% 50%', approvedForPublication: true } },
    { id: 'youth-environment', number: '05', title: 'Youth Networking & Environmental Conservation', treatment: 'landscape', media: { src: environmentalImage, alt: 'Youth team engaged in environmental conservation and reforestation', focalPoint: '50% 50%', approvedForPublication: true } },
  ],
  featureMedia: {
    src: null,
    alt: '',
    focalPoint: '50% 50%',
  },
}
