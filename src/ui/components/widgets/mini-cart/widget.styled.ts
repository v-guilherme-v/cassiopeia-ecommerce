import styled from "styled-components"
import { getColorStyles, getViewPortsStyles } from "@theme/selectors"
import { Block, Title, Input, Button } from "@components/common"

interface MiniCartProps {
  isOpen?: boolean
}

export const StyledMiniCartContent = styled.div<MiniCartProps>`
  padding: 2.5rem 3.75rem;
  box-shadow: -5px 10px 52px 0px rgba(90, 92, 102, 0.06);
  background-color: ${props => getColorStyles(props).white};

  ${Block.Styled}[data-name="MiniCart__Items"] {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  ${Block.Styled}[data-name="MiniCart__Heading"]{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;
    margin-bottom: 40px;
    border-bottom: 2px solid ${props => getColorStyles(props).paleGrey};

    ${Title.Styled.Normal} {
      user-select: none;
    }

    & svg {
      width: 16.5px;
      height: 16.5px;
      color: ${props => getColorStyles(props).grey};
    }
  }

  ${Block.Styled}[data-name="MiniCart__PromotionEntry"]{
    display: flex;
    justify-content: space-between;
    margin: 40px 0;
    max-height: 40px;
    gap: 9px;

    & ${Input.Styled.Default} {
      flex: 1;
      max-width: unset;

      & input {
        font-size: 0.75rem;
        line-height: 1rem;
        max-height: 40px;
      }
    }

    & button {
      min-width: 151px;
      max-height: 40px;
    }
  }

  button[data-name="MiniCart__Checkout"] {
    width: 221px;
    margin: auto;
    margin-top: 2.5rem;
  }

  @media(max-width: ${props => getViewPortsStyles(props).medium}) {
    padding: 0 24px 50px 24px;
    
    ${Block.Styled}[data-name="MiniCart__Heading"]{
      margin: 0;
      padding: 0;
      border: none;
      height: 72px;

      ${Title.Styled.ExtraSmall} {
        line-height: 19px;
      }

      ${Button.Styled.AsIcon}[data-name="MiniCart__HeadingAction"] {
        display: flex;
        align-items: center;
        gap: 23px;
      }

      & svg {
        width: 14px;
        height: 14px;
        color: ${props => getColorStyles(props).black};
      }
    }

    ${Block.Styled}[data-name="MiniCart__Items"] {
      gap: 18px;
    }
  }

  @media(max-width: ${props => getViewPortsStyles(props).small}) {
    ${Block.Styled}[data-name="MiniCart__PromotionEntry"] {
      & button {
        width: auto;
        padding: 0 1rem;
      }

      & > div, & input {
        flex: 1;
      }
    }
  }
`