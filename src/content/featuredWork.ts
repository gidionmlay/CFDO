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

// Add only verified CFDO projects with approved imagery.
export const featuredProjects: FeaturedProject[] = []

export function getPublishedFeaturedProjects(): FeaturedProject[] {
  return featuredProjects.filter((project) =>
    project.approvedForPublication &&
    project.imageApprovedForPublication &&
    Boolean(project.id && project.title && project.programme && project.location && project.image.src && project.image.alt)
  )
}
