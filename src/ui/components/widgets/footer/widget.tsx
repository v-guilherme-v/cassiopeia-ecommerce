import { Container, FlexContainer } from "@components/common"
import { FooterInfo, FooterLinks, FooterCopyright } from "./components"

import StyledFooter from "./widget.styled"
import { type FooterProps } from "./types"

const styles = {
  flexContainer: {
    justifyContent: "space-between",
    gap: "130px",
    medium: {
      direction: "column",
      gap: "1.5rem"
    }
  }
}

function Footer (props: FooterProps): JSX.Element {
  return (
    <StyledFooter>
      <Container>
        <FlexContainer {...styles.flexContainer}>
          <FooterInfo {...props} />
          <FooterLinks {...props} />
        </FlexContainer>
        <FooterCopyright />
      </Container>
    </StyledFooter>
  )
}

Footer.Styled = StyledFooter

export default Footer