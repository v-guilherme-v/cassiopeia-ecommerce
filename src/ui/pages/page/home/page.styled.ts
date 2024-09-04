import styled from "styled-components"
import { HeroBanner, Footer } from "@components/widgets"
import { getViewPortsStyles } from "@theme/selectors"

export default styled.section`
  position: relative;
  overflow-x: hidden;

  ${HeroBanner.Styled} {
    margin-top: 40.5px;
  }

  ${Footer.Styled} {
    margin-top: 100px;
  }

  @media(max-width: ${props => getViewPortsStyles(props).medium}) {
    ${HeroBanner.Styled} {
      margin-top: 0;
    }

    ${Footer.Styled} {
      margin-top: 0;
    }
  }

  @media(max-width: ${props => getViewPortsStyles(props).small}) {
    ${HeroBanner.Styled} {
      margin-top: 1.75rem;
    } 
  }
`