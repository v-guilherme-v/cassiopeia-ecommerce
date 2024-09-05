import styled from "styled-components"
import { Block, Container } from "@components/common"
import { Footer } from "@components/widgets"
import { getColorStyles, getViewPortsStyles } from "@theme/selectors"

export default styled.section`
  display: flex;
  flex-direction: column;
  height: 100dvh;

  ${Container.Styled}[data-name="CategoryPage__Container"] {
    flex: 1;
  }

  ${Block.Styled}[data-name="CategoryPage__Filters"] {
    display: flex;
    justify-content: space-between;
    padding: 16px 0;
    margin-top: 24px;
    border-bottom: 1px solid ${props => getColorStyles(props).lightGrey};
  }
  
  ${Footer.Styled} {
    margin-top: 100px;
  }

  @media(max-width: ${props => getViewPortsStyles(props).medium}) {
    ${Footer.Styled} {
      margin-top: 0;
    }
  }
`