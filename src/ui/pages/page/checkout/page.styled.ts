import styled from "styled-components";
import { Block, Container } from "@components/common"
import { Footer } from "@components/widgets"
import { getViewPortsStyles } from "@app/ui/theme/selectors";

export default styled.div`
  --checkout-forms-max-width: 490px;
  --checkout-summary-max-width: 440px;
  --checkout-content-gap: 48px;

  display: flex;
  flex-direction: column;
  height: 100dvh;

  ${Container.Styled}[data-name="CheckoutPage__Container"] {
    max-width: calc(
      var(--checkout-forms-max-width) +
      var(--checkout-summary-max-width) + 
      var(--checkout-content-gap) -
      1rem 
    );
      flex: 1;
  }

  ${Block.Styled}[data-name="CheckoutPage__Content"] {
    display: flex;
    justify-content: center;
    gap: 48px;
    margin-top: 32px;
  }

  ${Block.Styled}[data-name="CheckoutContent__Forms"] {
    max-width: var(--checkout-forms-max-width);
    width: 100%;
  }

  ${Block.Styled}[data-name="CheckoutContent__CartSummary"] {    
    max-width: var(--checkout-summary-max-width);
    width: 100%;

    &:empty {
      display: none;
    }
  }

  ${Footer.Styled} {
    margin-top: 32px;
  }

  @media(max-width: ${props => getViewPortsStyles(props).medium}) {
    ${Block.Styled}[data-name="CheckoutContent__Forms"] {
      max-width: unset;
    }

    ${Block.Styled}[data-name="CheckoutContent__CartSummary"] {    
      display: contents;
      width: 100%;
      height: 100%;
      max-width: unset;
    }
  }
`