import styled from "styled-components"
import { Block, Button, Container, Text, Title } from "@components/common"
import { Footer } from "@components/widgets"
import { getColorStyles, getViewPortsStyles } from "@theme/selectors"

export default styled.section`
  display: flex;
  flex-direction: column;
  height: 100dvh;

  ${Container.Styled}[data-name="CategoryPage__Container"] {
    flex: 1;
  }

  ${Block.Styled}[data-name="CategoryPage__Heading"] {
    ${Title.Styled.Normal}[data-name="CategoryPage__DisplayName"] {
      font-size: 22px;
      line-height: 28px;
    }
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

    svg {
      color: #505050
    }

    @media (max-width: ${props => getViewPortsStyles(props).medium}) {
      flex-direction: row-reverse;
      border-bottom: none;
      margin-top: 13px;
      padding: 0;
    }
  }

  ${Block.Styled}[data-name="CategoryPage__Results"] {
    margin-top: 40px;

    ${Block.Styled}[data-name="CategoryPage__ResultList"] {
      display: grid;
      grid-template: repeat(2, 1fr) / repeat(4, 260px);
      justify-content: space-between;
      
      @media (max-width: ${props => getViewPortsStyles(props).extraLarge}) {
        grid-template-columns: repeat(3, 260px);
        justify-content: space-evenly;
      }

      @media (max-width: 900px) {
        grid-template-columns: repeat(2, 260px);
      }

      @media (max-width: ${props => getViewPortsStyles(props).medium}) {
        grid-template-columns: repeat(3, 163px);
      }

      @media (max-width: 540px) {
        grid-template-columns: repeat(2, 163px);
      }

      @media (max-width: 390px) {
        justify-content: space-between;
      }

      @media (max-width: 370px) {
        grid-template-columns: 163px;
        justify-content: center;
      }
    }

    ${Button.Styled.Normal}[data-name="CategoryPage__ResultsLoadMore"] {
      max-width: 223px;
      width: 100%;
      margin: 40px auto 0;
    }

    @media (max-width: ${props => getViewPortsStyles(props).medium}) {
      margin-top: 38px;
    }
  }
  
  ${Footer.Styled} {
    margin-top: 100px;
  }

  @media(max-width: ${props => getViewPortsStyles(props).medium}) {
    ${Footer.Styled} {
      margin-top: 2rem;
    }
  }
`