import heroGrandGathering from '../Assets/Images/Foundation-Img/FRK04302.jpg'
import heroAgroMachinery from '../Assets/Images/Foundation-Img/FRK04921.jpg'
import heroAnzaHub from '../Assets/Images/Foundation-Img/FRK04580.jpg'
import heroTailoring from '../Assets/Images/Foundation-Img/FRK03541.jpg'

export type HeroSlide = {
  src: string
  alt: string
  desktopFocalPoint: string
  mobileFocalPoint: string
  label: string
  theme: string
}

export const heroContent = {
  titleLines: ['Community', 'for future', 'development', 'organization'],
  mission: 'Building stronger communities for a sustainable future.',
  slides: [
    {
      src: heroGrandGathering,
      alt: 'Community leaders, Dorcas Aid partners, and CFDO youth participants gathered in Arusha',
      desktopFocalPoint: '50% 36%',
      mobileFocalPoint: '50% 32%',
      label: 'Community Assembly & Institutional Partnership',
      theme: 'Arusha District Community Cohort',
    },
    {
      src: heroAgroMachinery,
      alt: 'Agricultural mechanization training and crop chopper demonstration at CAMARTEC',
      desktopFocalPoint: '50% 50%',
      mobileFocalPoint: '50% 45%',
      label: 'Agro-Mechanization & Post-Harvest Innovation',
      theme: 'CAMARTEC Centre for Agricultural Mechanization',
    },
    {
      src: heroAnzaHub,
      alt: 'Youth entrepreneurs participating in business incubation training at Anza Hub in Arusha',
      desktopFocalPoint: '50% 40%',
      mobileFocalPoint: '50% 35%',
      label: 'Digital Business Incubation & Mentorship',
      theme: 'Anza Hub Youth Enterprise Programme',
    },
    {
      src: heroTailoring,
      alt: 'Young woman mastering vocational tailoring skills on Singer sewing machine',
      desktopFocalPoint: '50% 40%',
      mobileFocalPoint: '50% 35%',
      label: 'Vocational Livelihoods & Practical Skills',
      theme: 'Tanzania Youth Empowerment Project (TYEP)',
    },
  ],
  media: {
    src: heroGrandGathering,
    alt: 'Community leaders, Dorcas Aid partners, and CFDO youth participants gathered in Arusha',
    desktopFocalPoint: '50% 36%',
    mobileFocalPoint: '50% 32%',
  },
}
