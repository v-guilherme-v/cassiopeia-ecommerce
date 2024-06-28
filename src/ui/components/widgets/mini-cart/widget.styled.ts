import styled from "styled-components"
import { getColorStyles, getGeneralStyles, getViewPortsStyles } from "@theme/selectors"
import { Block, Title, Input } from "@components/common"

interface MiniCartProps {
  isOpen?: boolean
}

const StyledMiniCartContainer = styled.aside<MiniCartProps>`
  --mini-cart-width: 554px;
  --mini-cart-transition-time: 500ms;

  visibility: ${props => props?.isOpen ? "visible" : "hidden"};
` 

const StyledMiniCartOverlay = styled.div<MiniCartProps>`
  position: fixed;
  inset: 0;
  background: rgba(36, 36, 36, 0.38);
  visibility: ${props => props?.isOpen ? "visible" : "hidden"};
  z-index: ${props => getGeneralStyles(props).miniCartLayer - 1};
`

const StyledMiniCartContent = styled.div<MiniCartProps>`
  position: fixed;
  overflow-y: auto;
  top: 0;
  right: ${props => !props?.isOpen ?
    "calc(var(--mini-cart-width) * -1)" :
    "0"
  };

  height: 100svh;
  width: var(--mini-cart-width);

  background-color: ${props => getColorStyles(props).white};
  box-shadow: -5px 10px 52px 0px rgba(90, 92, 102, 0.06);
  z-index: ${props => getGeneralStyles(props).miniCartLayer};
  transition: right var(--mini-cart-transition-time);
  padding: 2.5rem 3.75rem;

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

  ${Block.Styled}[data-name="MiniCart__SummaryItem"] {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid ${props => getColorStyles(props).paleGrey};
    padding: 18px 0 14px;
  }

  button[data-name="MiniCart__Checkout"] {
    width: 221px;
    margin: auto;
    margin-top: 2.5rem;
  }

  @media(max-width: ${props => getViewPortsStyles(props).medium}) {
    --mini-cart-width: 100%;
  }

  @media(max-width: ${props => getViewPortsStyles(props).small}) {
    padding: 2.5rem 1.5rem 2.5rem;

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

export default {
  Container: StyledMiniCartContainer,
  Content: StyledMiniCartContent,
  Overlay: StyledMiniCartOverlay
}