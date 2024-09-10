import styled from "styled-components"
import { Block, Container, Text } from "@components/common"
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
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 16px 0;
    margin-top: 8px;
    border-bottom: 1px solid ${props => getColorStyles(props).lightGrey};

    ${Block.Styled}[data-name="CategoryPage__FilterOptions"] {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
    }

    ${Text.Styled.Normal}[data-name="CategoryPage__FilterTotalItems"] {
      user-select: none;
    }
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