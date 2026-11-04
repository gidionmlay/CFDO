import consultancyHeroImg from '../Assets/Images/Foundation-Img/FRK04536.jpg'
import audiencesAdvisoryImg from '../Assets/Images/Foundation-Img/FRK04442.jpg'
import entrepreneurshipImg from '../Assets/Images/Foundation-Img/FRK04584.jpg'
import projectManagementImg from '../Assets/Images/Foundation-Img/FRK04946.jpg'
import purposeCamartecImg from '../Assets/Images/Foundation-Img/FRK04963 (2).jpg'

export const consultancyContent = {
  transition: "Our work doesn't stop at community programmes.",
  heading: 'Expertise for Organisations, Entrepreneurs & Institutions',
  hero: {
    eyebrow: 'CFDO Consultancy Services — Tanzania Mainland',
    titleLines: ['Practical', 'expertise for', 'progress.'],
    headline: 'Practical expertise. Stronger enterprises. Sustainable progress.',
    supporting: 'CFDO provides consultancy services designed to support entrepreneurs, businesses, institutions and development organizations with their professional and organizational needs. Through advisory support, project planning and technology-related services, we aim to help turn ideas and priorities into practical action.',
    primaryAction: { label: 'Request a Consultation', href: '#enquiry' },
    secondaryAction: { label: 'Explore Our Services', href: '#services' },
    media: {
      src: consultancyHeroImg,
      alt: 'CFDO advisors and youth enterprise team in strategy session at Anza Hub in Arusha',
      desktopFocalPoint: '50% 35%',
      mobileFocalPoint: '50% 30%',
    },
  },
  audiences: {
    kicker: 'Folio 01 — Client Sectors',
    headline: 'Different challenges. A shared need for practical support.',
    supporting: 'Every business and organization faces different priorities. CFDO’s consultancy services are intended for people and institutions seeking relevant advice, structured planning and professional support.',
    quote: 'Sustainable enterprise is not built in isolation—it requires sound structure, clear operational discipline, and grounded local knowledge.',
    image: {
      src: audiencesAdvisoryImg,
      alt: 'Enterprise advisors and field program coordinators in consultation',
      caption: 'Plate 01 — Field Consultation & Stakeholder Advisory',
      location: 'Arusha & Regional Districts',
    },
    groups: [
      {
        id: 'enterprises',
        title: 'Businesses & Enterprises',
        kicker: 'Commercial Sector',
        summary: 'Support for those building, structuring and scaling economic ventures.',
        target: 'Individuals developing business ideas, small and medium-sized enterprises (SMEs), agricultural cooperatives, and family-owned businesses.',
        points: [
          'Concept feasibility, market exploration and business modeling',
          'Operational structuring, governance and cash-flow discipline',
          'Day-to-day workflow review and management decision support',
          'Founder mentorship and organizational capacity building',
        ],
      },
      {
        id: 'institutions',
        title: 'Organizations & Institutions',
        kicker: 'Civic & Non-Profit',
        summary: 'Strategic planning and operational execution for mission-driven entities.',
        target: 'Non-governmental organizations (NGOs), community-based organizations (CBOs), faith-based organizations, schools, and civic institutions.',
        points: [
          'Project design, structuring and proposal development readiness',
          'Stakeholder coordination and field monitoring systems',
          'Information technology, cloud systems and administrative workflows',
          'Reporting compliance, governance and institutional capability',
        ],
      },
    ],
    partnersNote: 'Development Partners & Civic Bodies: We also collaborate with local government authorities, international donors, and development agencies seeking structured project implementation and technical advisory across Tanzania Mainland.',
  },
  services: [
    {
      id: 'entrepreneurship-consultation',
      number: '01',
      title: 'Entrepreneurship Consultation',
      tagline: 'Turn ideas into viable, structured enterprises.',
      description: 'Support for individuals exploring business ideas and entrepreneurs seeking guidance as they develop or strengthen an enterprise.',
      deliverables: [
        'Idea validation and market feasibility exploration',
        'Business model canvas and value proposition design',
        'Startup roadmap and practical launch milestones',
        'Basic financial planning and resource requirement assessment',
      ],
      idealFor: 'Aspiring founders, early-stage innovators and cooperative leaders.',
      cta: 'Consult on Entrepreneurship',
      image: {
        src: entrepreneurshipImg,
        alt: 'Early-stage digital entrepreneur working through enterprise structuring and technology tools',
        caption: 'Plate 02 — Enterprise Structuring & Incubation',
      },
    },
    {
      id: 'business-advisory-mentoring',
      number: '02',
      title: 'Business Advisory & Mentoring',
      tagline: 'Strengthen planning, decision-making and day-to-day operations.',
      description: 'Advisory and mentoring support for business owners seeking to strengthen business planning, decision-making and day-to-day operations.',
      deliverables: [
        'Operational diagnosis and workflow bottleneck review',
        'Cash-flow discipline, pricing strategy and cost control',
        'Growth planning and market adaptation guidance',
        'One-on-one founder mentoring for confident decision-making',
      ],
      idealFor: 'SME owners, managers, family businesses and commercial ventures.',
      cta: 'Request Business Advisory',
    },
    {
      id: 'project-planning-management',
      number: '03',
      title: 'Project Planning & Management',
      tagline: 'Structure, coordinate and deliver projects with measurable discipline.',
      description: 'Support for organizations and institutions working to structure, plan and coordinate projects in line with their objectives.',
      deliverables: [
        'Logical framework (LogFrame) and project workplan design',
        'Activity scheduling, budgeting and milestone tracking',
        'Field monitoring systems and progress reporting framework',
        'Stakeholder coordination and risk mitigation strategies',
      ],
      idealFor: 'NGOs, community-based groups, educational institutions and project teams.',
      cta: 'Plan a Project Engagement',
      image: {
        src: projectManagementImg,
        alt: 'Industrial project coordination and safety compliance review at technical training facility',
        caption: 'Plate 03 — Technical Operations & Field Project Management',
      },
    },
    {
      id: 'it-services',
      number: '04',
      title: 'IT Services',
      tagline: 'Practical digital tools and systems that help organizations work better.',
      description: 'Technology-related services intended to support the operational and communication needs of businesses and organizations.',
      deliverables: [
        'Digital systems assessment and technical needs identification',
        'Website development, digital presence and communications setup',
        'Data management, cloud workflow and information security basics',
        'Hands-on staff digital literacy and systems training',
      ],
      idealFor: 'Businesses modernizing operations and organizations digitizing records.',
      cta: 'Request IT Services',
    },
  ],
  engagement: {
    kicker: 'Folio 03 — The Engagement Process',
    headline: 'A clear starting point for meaningful work.',
    supporting: 'Good consultancy begins with understanding the need. CFDO uses an initial conversation to establish the nature of a request and determine the appropriate next steps.',
    steps: [
      {
        number: '01',
        title: 'Share your needs',
        description: 'Tell us about your business, organization, project or current challenge through our consultation enquiry form.',
      },
      {
        number: '02',
        title: 'Understand the scope',
        description: 'We hold an initial conversation to discuss your priorities, requirements, timeline and the support you are seeking.',
      },
      {
        number: '03',
        title: 'Agree on the approach',
        description: 'Clarify the proposed service, expected deliverables, responsibilities, timing and relevant terms before moving forward.',
      },
      {
        number: '04',
        title: 'Begin the engagement',
        description: 'Proceed with dedicated, practical execution once the scope and arrangements have been agreed upon.',
      },
    ],
  },
  purpose: {
    kicker: 'Folio 04 — Organizational Model',
    headline: 'Professional services. A broader development mission.',
    pullquote: '“We do not treat professional services and social development as separate worlds. Every commercial engagement strengthens our capacity to empower Tanzanian communities.”',
    supporting: 'CFDO’s consultancy work is connected to its wider commitment to sustainable community development. Income generated through consultancy services is intended to be reinvested into community programmes, helping connect professional activity with the organization’s social and environmental mission.',
    image: {
      src: purposeCamartecImg,
      alt: 'CFDO leadership and institutional partners on the steps of CAMARTEC headquarters',
      caption: 'Plate 04 — Institutional Alliances & Reinvestment',
      note: 'Self-Sustaining Development Model',
    },
    flowSteps: [
      { num: '01', label: 'Professional Expertise', note: 'Management & IT Capacity' },
      { num: '02', label: 'Consultancy Services', note: 'Tailored Client Advisory' },
      { num: '03', label: 'Income Generation', note: 'Earned Commercial Revenue' },
      { num: '04', label: 'Reinvestment in Programmes', note: 'Grassroots Allocation' },
      { num: '05', label: 'Sustainable Development', note: 'Lasting Community Resilience' },
    ],
  },
  enquiry: {
    kicker: 'Desk / Registry',
    headline: 'Let’s discuss what you need to achieve.',
    supporting: 'Whether you are developing a business, strengthening an organization, planning a project or exploring technology-related support, begin by telling us about your needs.',
    notice: 'All enquiries are reviewed directly by our advisory team. We will contact you via your preferred channel with recommended next steps.',
  },
} as const
