import { type FooterLinksSection } from "@widgets/footer/types"

export const linksMock: FooterLinksSection[] = Array(3).fill(1)
  .map((_, index, arr) => ({
    sectionName: `Title ${index + 1}`,
    linksList: arr.map((_, aIndex) => ({
      label: `Item ${aIndex + 1}`,
      route: `title-${index + 1}-item-${aIndex + 1}`
    }))
  }))