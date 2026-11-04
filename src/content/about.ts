import { introductionContent } from './introduction'
import { getInvolvedContent } from './getInvolved'
import sidoPartnershipHeroImg from '../Assets/Images/Foundation-Img/FRK04529.jpg'
import teamImg1 from '../Assets/Images/Foundation-Img/FRK04060.jpg'
import teamImg2 from '../Assets/Images/Foundation-Img/FRK03541.jpg'
import teamImg3 from '../Assets/Images/Foundation-Img/FRK04584.jpg'
import teamImg4 from '../Assets/Images/Foundation-Img/FRK03845.jpg'
import teamImg5 from '../Assets/Images/Foundation-Img/FRK03687.jpg'
import teamImg6 from '../Assets/Images/Foundation-Img/FRK04529.jpg'

export type TeamMember = {
  id: string
  name: string
  role: string
  image: string
  imageAlt: string
  socials: {
    instagram: string
    linkedin: string
  }
}

export const aboutContent = {
  name: getInvolvedContent.organization,
  location: getInvolvedContent.location,
  titleLines: ['About', 'us.'],
  introduction: 'CFDO is a Tanzanian organisation working across community development and consultancy.',
  media: {
    src: sidoPartnershipHeroImg,
    alt: 'CFDO leadership and development partners gathered outside SIDO Arusha regional training offices',
    desktopFocalPoint: '50% 35%',
    mobileFocalPoint: '50% 30%',
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
  teamHeading: 'Our team',
  teamTitle: 'The leadership driving community impact.',
  teamMembers: [
    {
      id: 'member-1',
      name: 'Name 1',
      role: 'Executive Director',
      image: teamImg1,
      imageAlt: 'Name 1 - Executive Director',
      socials: {
        instagram: 'https://instagram.com/',
        linkedin: 'https://linkedin.com/',
      },
    },
    {
      id: 'member-2',
      name: 'Name 2',
      role: 'Head of Programmes & Community Partnerships',
      image: teamImg2,
      imageAlt: 'Name 2 - Head of Programmes & Community Partnerships',
      socials: {
        instagram: 'https://instagram.com/',
        linkedin: 'https://linkedin.com/',
      },
    },
    {
      id: 'member-3',
      name: 'Name 3',
      role: 'Finance & Operations Director',
      image: teamImg3,
      imageAlt: 'Name 3 - Finance & Operations Director',
      socials: {
        instagram: 'https://instagram.com/',
        linkedin: 'https://linkedin.com/',
      },
    },
    {
      id: 'member-4',
      name: 'Name 4',
      role: 'Vocational Training & Livelihoods Coordinator',
      image: teamImg4,
      imageAlt: 'Name 4 - Vocational Training & Livelihoods Coordinator',
      socials: {
        instagram: 'https://instagram.com/',
        linkedin: 'https://linkedin.com/',
      },
    },
    {
      id: 'member-5',
      name: 'Name 5',
      role: 'Monitoring, Evaluation & Learning Lead',
      image: teamImg5,
      imageAlt: 'Name 5 - Monitoring, Evaluation & Learning Lead',
      socials: {
        instagram: 'https://instagram.com/',
        linkedin: 'https://linkedin.com/',
      },
    },
    {
      id: 'member-6',
      name: 'Name 6',
      role: 'Youth Innovation & Field Officer',
      image: teamImg6,
      imageAlt: 'Name 6 - Youth Innovation & Field Officer',
      socials: {
        instagram: 'https://instagram.com/',
        linkedin: 'https://linkedin.com/',
      },
    },
  ] as TeamMember[],
} as const
