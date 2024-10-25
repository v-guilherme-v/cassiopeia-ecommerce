export interface FooterProps {
  title?: string
  contactNumber?: string
}

export interface Link {
  label?: string
  route?: string
}

export interface FooterLinksSection {
  sectionName?: string
  linksList?: Link[]
}

export interface FooterLinksProps extends FooterProps {
  sections?: FooterLinksSection[]
}