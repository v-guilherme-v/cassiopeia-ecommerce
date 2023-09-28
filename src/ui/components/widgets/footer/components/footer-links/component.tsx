import { linksMock } from "@widgets/__mocks__"

import { StyledFooterLinks, StyledFooterLinksColumn } from "./component.styled"
import type { FooterLinksSection, FooterLinksProps } from "../../types"

import { Text, Title } from "@components/common"

export function FooterLinksColumn ({ sectionName = "Section name", linksList = [] }: FooterLinksSection): JSX.Element {
  return (
    <StyledFooterLinksColumn>
      <Title.ExtraSmall weight="regular" lineHeight="24px">{sectionName}</Title.ExtraSmall>
      { linksList.map(link => (
        <a key={link.route} href={link.route}>
          <Text.Button>{link.label}</Text.Button>
        </a>
      )) }
    </StyledFooterLinksColumn>
  )
}

function FooterLinks ({ sections = linksMock }: FooterLinksProps): JSX.Element {
  return (
    <StyledFooterLinks>
      {sections.map(column =>
        <FooterLinksColumn
          key={column.sectionName}
          sectionName={column.sectionName}
          linksList={column.linksList}
        />)}
    </StyledFooterLinks>
  )
}

export default FooterLinks