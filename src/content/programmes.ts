import vocationalTailoringImg from '../Assets/Images/Foundation-Img/FRK03541.jpg'
import vicobaMeetingImg from '../Assets/Images/Foundation-Img/FRK04122.jpg'
import youthLeadershipImg from '../Assets/Images/Foundation-Img/FRK04060.jpg'
import healthEducationImg from '../Assets/Images/Foundation-Img/FRK04041.jpg'
import biogasRenewableImg from '../Assets/Images/Foundation-Img/FRK04674.jpg'

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
    {
      id: 'economic-education',
      number: '01',
      title: 'Economic Education & Innovation',
      treatment: 'feature',
      overview: 'Equipping youth and women with marketable vocational capabilities, financial literacy, and enterprise startup toolkits across Arusha.',
      activities: [
        'Vocational training in tailoring, industrial fabrication, and cosmetology',
        'Business model design, financial planning, and micro-enterprise mentorship',
        'Practical tools, toolkits, and cooperative linkage for independent livelihoods',
      ],
      media: {
        src: vocationalTailoringImg,
        alt: 'CFDO youth vocational tailoring and economic empowerment training session in Arusha',
        focalPoint: '50% 40%',
        approvedForPublication: true,
      },
    },
    {
      id: 'community-empowerment',
      number: '02',
      title: 'Community Empowerment',
      treatment: 'plain',
      overview: 'Fostering grassroots financial inclusion through Village Community Banking (VICOBA) and participatory community-led decision making.',
      activities: [
        'Establishing and supporting community VICOBA savings and credit circles',
        'Participatory community needs assessment and priority setting',
        'Capacity building for local community leaders and women-led cooperatives',
      ],
      media: {
        src: vicobaMeetingImg,
        alt: 'VICOBA community group financial literacy and micro-savings meeting in Arusha',
        focalPoint: '50% 45%',
        approvedForPublication: true,
      },
    },
    {
      id: 'youth-leadership',
      number: '03',
      title: 'Youth Leadership',
      treatment: 'accent',
      overview: 'Nurturing confident, ethical young leaders and digital entrepreneurs prepared to spearhead civic initiatives and modern enterprises.',
      activities: [
        'Youth civic leadership forums, governance workshops, and public dialogue',
        'Digital literacy, incubation, and tech entrepreneurship at Anza Hub',
        'Peer-to-peer mentoring networks and youth advocacy roundtables',
      ],
      media: {
        src: youthLeadershipImg,
        alt: 'Youth participant speaking and leading dialogue during community workshop in Arusha',
        focalPoint: '50% 35%',
        approvedForPublication: true,
      },
    },
    {
      id: 'community-health',
      number: '04',
      title: 'Community Health',
      treatment: 'dark',
      overview: 'Promoting preventive health literacy, community hygiene, adolescent wellbeing, and maternal health education in underserved settlements.',
      activities: [
        'Community health workshops, hygiene awareness, and disease prevention',
        'Adolescent sexual and reproductive health education and rights sessions',
        'Community health volunteer training and referral network support',
      ],
      media: {
        src: healthEducationImg,
        alt: 'Community members taking notes during healthcare and hygiene education seminar',
        focalPoint: '50% 38%',
        approvedForPublication: true,
      },
    },
    {
      id: 'youth-environment',
      number: '05',
      title: 'Youth Networking & Environmental Conservation',
      treatment: 'landscape',
      overview: 'Mobilizing youth for sustainable natural resource management, domestic renewable biogas technology, and climate adaptation.',
      activities: [
        'Domestic biogas plant engineering, installation, and maintenance training',
        'Agricultural mechanization and post-harvest technology with CAMARTEC',
        'Community reforestation, agroforestry, and environmental stewardship campaigns',
      ],
      media: {
        src: biogasRenewableImg,
        alt: 'Youth trainees inspecting renewable energy and domestic biogas plant installation diagram',
        focalPoint: '50% 45%',
        approvedForPublication: true,
      },
    },
  ],
  featureMedia: {
    src: null,
    alt: '',
    focalPoint: '50% 50%',
  },
}
