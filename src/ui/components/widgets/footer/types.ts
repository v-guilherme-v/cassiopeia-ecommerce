export interface FooterProps {
  title?: string
}

export interface Link {
  label?: string
  route?: string
}

export interface FooterInfoProps extends FooterProps { contactNumber?: string }

export interface FooterLinksSection {
  sectionName?: string
  linksList?: Link[]
}

export interface FooterLinksProps extends FooterProps {
  sections?: FooterLinksSection[]
}