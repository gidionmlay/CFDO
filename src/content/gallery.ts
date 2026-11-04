import imgAssembly from '../Assets/Images/Foundation-Img/FRK04302.jpg'
import imgAgroChopper from '../Assets/Images/Foundation-Img/FRK04921.jpg'
import imgSalonExt from '../Assets/Images/Foundation-Img/FRK03517.jpg'
import imgTailoringMachine from '../Assets/Images/Foundation-Img/FRK03541.jpg'
import imgAnzaSeminar from '../Assets/Images/Foundation-Img/FRK04580.jpg'
import imgMetalSheet from '../Assets/Images/Foundation-Img/FRK04491.jpg'
import imgBiogasDiagram from '../Assets/Images/Foundation-Img/FRK04674.jpg'
import imgVicobaCircle from '../Assets/Images/Foundation-Img/FRK04122.jpg'
import imgSalonTeam from '../Assets/Images/Foundation-Img/FRK03687.jpg'
import imgSidoPartners from '../Assets/Images/Foundation-Img/FRK04529.jpg'
import imgDigitalWoman from '../Assets/Images/Foundation-Img/FRK04584.jpg'
import imgOverallsTech from '../Assets/Images/Foundation-Img/FRK03845.jpg'
import imgCamartecSteps from '../Assets/Images/Foundation-Img/FRK04963 (2).jpg'
import imgYouthSpeak from '../Assets/Images/Foundation-Img/FRK04060.jpg'
import imgKitengeCutting from '../Assets/Images/Foundation-Img/FRK03751 - Copy.jpg'
import imgBriquettePress from '../Assets/Images/Foundation-Img/FRK04936.jpg'
import imgWorkshopHall from '../Assets/Images/Foundation-Img/FRK03931.jpg'
import imgClassroomSewing from '../Assets/Images/Foundation-Img/FRK03762 - Copy.jpg'

export type GalleryCategory = 'all' | 'vocational' | 'agro-tech' | 'digital-enterprise' | 'community'

export type GalleryItem = {
  id: string
  title: string
  category: GalleryCategory
  categoryLabel: string
  location: string
  description: string
  src: string
  alt: string
  focalPoint: string
}

export const galleryCategories: { id: GalleryCategory; label: string }[] = [
  { id: 'all', label: 'All Field Work' },
  { id: 'vocational', label: 'Vocational & Enterprises' },
  { id: 'agro-tech', label: 'Agro-Mechanization & Energy' },
  { id: 'digital-enterprise', label: 'Youth Innovation' },
  { id: 'community', label: 'Community Leadership' },
]

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-assembly',
    title: 'Grand Assembly of Community Leaders & Youth',
    category: 'community',
    categoryLabel: 'Community Leadership',
    location: 'Arusha District, Tanzania',
    description: 'Elder in Maasai shúkà, clergy, CFDO officers, Dorcas Aid coordinators, and over thirty youth beneficiaries celebrating milestone achievements.',
    src: imgAssembly,
    alt: 'Grand assembly of community leaders, CFDO staff, Dorcas Aid partners, and youth participants',
    focalPoint: '50% 36%',
  },
  {
    id: 'gal-agro-chopper',
    title: 'Motorized Crop Chopper Demonstration',
    category: 'agro-tech',
    categoryLabel: 'Agro-Mechanization & Energy',
    location: 'CAMARTEC, Arusha',
    description: 'Hands-on instruction on motorized forage processing and post-harvest technology for youth agricultural entrepreneurs.',
    src: imgAgroChopper,
    alt: 'Youth trainees and instructors inspecting motorized agricultural crop chopping equipment at CAMARTEC',
    focalPoint: '50% 50%',
  },
  {
    id: 'gal-salon-ext',
    title: 'MASSALEMAS Unisex Salon Enterprise',
    category: 'vocational',
    categoryLabel: 'Vocational & Enterprises',
    location: 'Arusha, Tanzania',
    description: 'Dorcas Aid partners and CFDO coordinators outside the independent cosmetology enterprise launched by youth trainees.',
    src: imgSalonExt,
    alt: 'CFDO and Dorcas Aid coordinators outside MASSALEMAS Unisex Salon enterprise with youth founders',
    focalPoint: '50% 45%',
  },
  {
    id: 'gal-tailoring-machine',
    title: 'Textile Construction & Tailoring Mastery',
    category: 'vocational',
    categoryLabel: 'Vocational & Enterprises',
    location: 'Arusha Vocational Center',
    description: 'Young woman developing precision garment assembly on a Singer manual sewing machine.',
    src: imgTailoringMachine,
    alt: 'Young woman tailoring on a sewing machine with measuring tape during vocational class',
    focalPoint: '50% 40%',
  },
  {
    id: 'gal-anza-seminar',
    title: 'Youth Business Incubation at Anza Hub',
    category: 'digital-enterprise',
    categoryLabel: 'Youth Innovation',
    location: 'Anza Hub, Arusha',
    description: 'Young entrepreneurs in business model structuring and market feasibility workshops with TYEP booklets.',
    src: imgAnzaSeminar,
    alt: 'Youth entrepreneurs engaged in business planning seminar at Anza Hub in Arusha',
    focalPoint: '50% 40%',
  },
  {
    id: 'gal-metal-sheet',
    title: 'Industrial Sheet Metal Fabrication',
    category: 'vocational',
    categoryLabel: 'Vocational & Enterprises',
    location: 'SIDO Industrial Estate, Arusha',
    description: 'Technical instructor demonstrating sheet metal bending and machinery fabrication to youth apprentices.',
    src: imgMetalSheet,
    alt: 'Master craftsman demonstrating industrial sheet metal bending equipment to youth trainees',
    focalPoint: '50% 50%',
  },
  {
    id: 'gal-biogas-diagram',
    title: 'Biogas Plant Engineering & Schematic Review',
    category: 'agro-tech',
    categoryLabel: 'Agro-Mechanization & Energy',
    location: 'Arusha Clean Energy Station',
    description: 'Trainees studying the structural blueprint of domestic fixed-dome Mtambo wa Biogesi installations.',
    src: imgBiogasDiagram,
    alt: 'Youth technical trainees studying renewable biogas plant engineering blueprint in Arusha',
    focalPoint: '50% 45%',
  },
  {
    id: 'gal-vicoba-circle',
    title: 'VICOBA Community Banking Circle',
    category: 'community',
    categoryLabel: 'Community Leadership',
    location: 'Arusha Rural District',
    description: 'Village Community Banking meeting facilitating grassroots micro-savings, loan distribution, and financial self-reliance.',
    src: imgVicobaCircle,
    alt: 'Community members seated in a circle for a VICOBA grassroots savings and loan meeting',
    focalPoint: '50% 45%',
  },
  {
    id: 'gal-salon-team',
    title: 'Empowered Salon Entrepreneurs',
    category: 'vocational',
    categoryLabel: 'Vocational & Enterprises',
    location: 'MASSALEMAS Unisex Salon',
    description: 'Three young women salon co-founders smiling inside their active commercial shop.',
    src: imgSalonTeam,
    alt: 'Three young women salon entrepreneurs smiling inside MASSALEMAS Unisex Salon in Arusha',
    focalPoint: '50% 40%',
  },
  {
    id: 'gal-sido-partners',
    title: 'SIDO & Development Partners Assembly',
    category: 'community',
    categoryLabel: 'Community Leadership',
    location: 'SIDO Arusha Regional Offices',
    description: 'CFDO team alongside SIDO, JICA, and Dorcas Aid institutional representatives.',
    src: imgSidoPartners,
    alt: 'CFDO leadership and development partners gathered outside SIDO Arusha regional training facility',
    focalPoint: '50% 35%',
  },
  {
    id: 'gal-digital-woman',
    title: 'Digital Tools & Mobile Enterprise',
    category: 'digital-enterprise',
    categoryLabel: 'Youth Innovation',
    location: 'Anza Hub, Arusha',
    description: 'Young entrepreneur engaging with online bookkeeping and digital business platforms.',
    src: imgDigitalWoman,
    alt: 'Young woman entrepreneur working with laptop and smartphone during digital skills workshop',
    focalPoint: '50% 35%',
  },
  {
    id: 'gal-overalls-tech',
    title: 'Industrial Field Machinery Maintenance',
    category: 'agro-tech',
    categoryLabel: 'Agro-Mechanization & Energy',
    location: 'Arusha Industrial Zone',
    description: 'Young technician in safety goggles and overalls conducting maintenance inspection on electrical machinery.',
    src: imgOverallsTech,
    alt: 'Young male technician in overalls and safety goggles kneeling beside industrial machinery',
    focalPoint: '50% 45%',
  },
  {
    id: 'gal-camartec-steps',
    title: 'CAMARTEC Institutional Partnership',
    category: 'agro-tech',
    categoryLabel: 'Agro-Mechanization & Energy',
    location: 'CAMARTEC Headquarters, Arusha',
    description: 'Joint technical delegation and trainees on the steps of the Centre for Agricultural Mechanization.',
    src: imgCamartecSteps,
    alt: 'CFDO delegation and technical trainees posing on the entrance steps of CAMARTEC HQ',
    focalPoint: '50% 40%',
  },
  {
    id: 'gal-youth-speak',
    title: 'Youth Dialogue & Civic Leadership',
    category: 'community',
    categoryLabel: 'Community Leadership',
    location: 'Arusha Training Hall',
    description: 'Young woman addressing facilitator and peers during community leadership workshop.',
    src: imgYouthSpeak,
    alt: 'Young woman speaking up and sharing thoughts during community empowerment workshop',
    focalPoint: '50% 35%',
  },
  {
    id: 'gal-kitenge-cutting',
    title: 'African Wax Print (Kitenge) Design',
    category: 'vocational',
    categoryLabel: 'Vocational & Enterprises',
    location: 'Vocational Tailoring Studio',
    description: 'Precision measurement and pattern cutting on vibrant African wax print textiles.',
    src: imgKitengeCutting,
    alt: 'Tailor carefully measuring and cutting vibrant Kitenge wax print fabric with measuring tape',
    focalPoint: '50% 50%',
  },
  {
    id: 'gal-briquette-press',
    title: 'Briquette & Agricultural Fabrication Review',
    category: 'agro-tech',
    categoryLabel: 'Agro-Mechanization & Energy',
    location: 'CAMARTEC Fabrication Facility',
    description: 'Female technical instructor and trainees examining metal briquette press machinery.',
    src: imgBriquettePress,
    alt: 'Instructor and trainees inspecting metal briquette press equipment in outdoor workshop',
    focalPoint: '50% 50%',
  },
  {
    id: 'gal-workshop-hall',
    title: 'Grassroots Community Engagement Forum',
    category: 'community',
    categoryLabel: 'Community Leadership',
    location: 'Arusha Community Hall',
    description: 'Community members gathered in hall with Maasai facilitator in red shúkà discussing local development.',
    src: imgWorkshopHall,
    alt: 'Community members seated in plastic chairs listening attentively in large training hall',
    focalPoint: '50% 45%',
  },
  {
    id: 'gal-classroom-sewing',
    title: 'Vocational Tailoring Studio in Session',
    category: 'vocational',
    categoryLabel: 'Vocational & Enterprises',
    location: 'Arusha Vocational Center',
    description: 'Multiple trainees simultaneously practicing stitchwork on manual sewing machines.',
    src: imgClassroomSewing,
    alt: 'Group of young women practicing sewing simultaneously on rows of manual machines',
    focalPoint: '50% 45%',
  },
]
