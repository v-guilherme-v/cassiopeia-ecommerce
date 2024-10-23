import styled from "styled-components"
import { BannerContainer, HeroBanner, Footer } from "@components/widgets"
import { getViewPortsStyles } from "@theme/selectors"

export default styled.section`
  position: relative;
  overflow-x: hidden;

  ${BannerContainer.Styled} {
    margin-top: 40px;

    ${HeroBanner.Styled} img {
      object-fit: none;
    }
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
`