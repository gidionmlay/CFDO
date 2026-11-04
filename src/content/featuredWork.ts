import tailoringProjectImg from '../Assets/Images/Foundation-Img/FRK03547.jpg'
import agroProjectImg from '../Assets/Images/Foundation-Img/FRK04921.jpg'
import anzaProjectImg from '../Assets/Images/Foundation-Img/FRK04580.jpg'
import salonProjectImg from '../Assets/Images/Foundation-Img/FRK03517.jpg'
import metalFabProjectImg from '../Assets/Images/Foundation-Img/FRK04491.jpg'
import biogasProjectImg from '../Assets/Images/Foundation-Img/FRK04674.jpg'

export type FeaturedProject = {
  id: string
  title: string
  programme: string
  location: string
  image: {
    src: string
    alt: string
    focalPoint: string
  }
  approvedForPublication: boolean
  imageApprovedForPublication: boolean
}

export const featuredWorkContent = {
  heading: 'Featured Work',
} as const

// Verified CFDO projects with approved field photography
export const featuredProjects: FeaturedProject[] = [
  {
    id: 'tyep-vocational-tailoring',
    title: 'Youth Vocational Tailoring & Textile Production',
    programme: 'Economic Education & Innovation',
    location: 'Arusha, Tanzania',
    image: {
      src: tailoringProjectImg,
      alt: 'Youth trainees developing garment construction skills in vocational tailoring workshop',
      focalPoint: '50% 45%',
    },
    approvedForPublication: true,
    imageApprovedForPublication: true,
  },
  {
    id: 'camartec-agro-mechanization',
    title: 'Agro-Mechanization & Post-Harvest Technology',
    programme: 'Youth Networking & Environmental Conservation',
    location: 'CAMARTEC, Arusha',
    image: {
      src: agroProjectImg,
      alt: 'Demonstration and hands-on training on motorized forage chopping machinery at CAMARTEC',
      focalPoint: '50% 50%',
    },
    approvedForPublication: true,
    imageApprovedForPublication: true,
  },
  {
    id: 'anza-hub-digital-incubation',
    title: 'Digital Business Incubation & Entrepreneurship',
    programme: 'Youth Leadership',
    location: 'Anza Hub, Arusha',
    image: {
      src: anzaProjectImg,
      alt: 'Young entrepreneurs attending business incubation and planning sessions at Anza Hub',
      focalPoint: '50% 40%',
    },
    approvedForPublication: true,
    imageApprovedForPublication: true,
  },
  {
    id: 'massalemas-hair-salon-enterprise',
    title: 'Beauty & Cosmetology Micro-Enterprise Incubation',
    programme: 'Community Empowerment',
    location: 'Arusha, Tanzania',
    image: {
      src: salonProjectImg,
      alt: 'CFDO and Dorcas Aid coordinators with youth graduates outside Massalemas Unisex Salon',
      focalPoint: '50% 45%',
    },
    approvedForPublication: true,
    imageApprovedForPublication: true,
  },
  {
    id: 'sido-industrial-metal-fabrication',
    title: 'Industrial Metal Fabrication & Toolmaking',
    programme: 'Economic Education & Innovation',
    location: 'SIDO Industrial Estate, Arusha',
    image: {
      src: metalFabProjectImg,
      alt: 'Master craftsman instructing youth on industrial sheet metal bending machinery',
      focalPoint: '50% 50%',
    },
    approvedForPublication: true,
    imageApprovedForPublication: true,
  },
  {
    id: 'biogas-renewable-energy-systems',
    title: 'Biogas Technology & Clean Energy Installation',
    programme: 'Youth Networking & Environmental Conservation',
    location: 'Arusha, Tanzania',
    image: {
      src: biogasProjectImg,
      alt: 'Youth technical trainees reviewing Mtambo wa Biogesi engineering schematic for rural households',
      focalPoint: '50% 45%',
    },
    approvedForPublication: true,
    imageApprovedForPublication: true,
  },
]

export function getPublishedFeaturedProjects(): FeaturedProject[] {
  return featuredProjects.filter((project) =>
    project.approvedForPublication &&
    project.imageApprovedForPublication &&
    Boolean(project.id && project.title && project.programme && project.location && project.image.src && project.image.alt)
  )
}
