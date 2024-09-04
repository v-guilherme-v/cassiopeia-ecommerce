import { forwardRef } from "react"
import { Block, Container } from "@components/common"
import { FooterInfo, FooterLinks, FooterCopyright } from "./components"

import StyledFooter from "./widget.styled"
import { type FooterProps } from "./types"

// This an abstraction of forwardRef returns types + the .Styled component
import { type ForwardRefWithStyled } from "@ui/types"

const Footer = forwardRef<HTMLDivElement, FooterProps>((props, ref) => {
  return (
    <StyledFooter ref={ref}>
      <Container data-name="Footer__Container">
        <Block data-name="Footer__Blocks">
          <FooterInfo {...props} />
          <FooterLinks {...props} />
        </Block>
        <FooterCopyright />
      </Container>
    </StyledFooter>
  )
}) as ForwardRefWithStyled<HTMLDivElement, FooterProps, typeof StyledFooter>

Footer.displayName = "Footer"
Footer.Styled = StyledFooter

export default Footer