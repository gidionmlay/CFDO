import { introductionContent } from './introduction'
import { getInvolvedContent } from './getInvolved'
import aboutHeroImage from '../Assets/Images/629870697869727003.jpeg'

export const aboutContent = {
  name: getInvolvedContent.organization,
  location: getInvolvedContent.location,
  titleLines: ['About', 'us.'],
  introduction: 'CFDO is a Tanzanian organisation working across community development and consultancy.',
  media: {
    src: aboutHeroImage,
    alt: 'CFDO community members gathered in Tanzania',
    desktopFocalPoint: '50% 32%',
    mobileFocalPoint: '50% 28%',
  },
  purpose: introductionContent.description,
  belief: `${introductionContent.headingStart} ${introductionContent.headingEmphasis} ${introductionContent.headingEnd}`,
  practices: [
    {
      number: '01',
      title: 'Community development',
      description: 'Social-economic programmes and environmental conservation are at the heart of CFDO’s community work.',
      href: '/our-work',
      action: 'Explore our work',
    },
    {
      number: '02',
      title: 'Consultancy',
      description: 'CFDO also offers entrepreneurship, business advisory and mentoring, project planning and management, and IT services.',
      href: '/consultancy',
      action: 'Explore services',
    },
  ],
} as const
