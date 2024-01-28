import { Block, Container } from "@components/common"
import { FooterInfo, FooterLinks, FooterCopyright } from "./components"

import StyledFooter from "./widget.styled"
import { type FooterProps } from "./types"

function Footer (props: FooterProps): JSX.Element {
  return (
    <StyledFooter>
      <Container data-name="Footer__Container">
        <Block data-name="Footer__Blocks">
          <FooterInfo {...props} />
          <FooterLinks {...props} />
        </Block>
        <FooterCopyright />
      </Container>
    </StyledFooter>
  )
}

Footer.Styled = StyledFooter

export default Footer