import styled from "styled-components";
import { Block, Container } from "@components/common"
import { Footer } from "@components/widgets"

export default styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;

  ${Container.Styled}[data-name="CheckoutPage__Container"] {
    flex: 1;
  }

  ${Block.Styled}[data-name="CheckoutPage__Content"] {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
  }

  ${Footer.Styled} {
    margin-top: 32px;
  }
`