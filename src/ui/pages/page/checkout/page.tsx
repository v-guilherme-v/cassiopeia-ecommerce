import StyledCheckoutPage from "./page.styled"

import {
  Header,
  TopBar,
  Footer,
  CheckoutSteps
} from "@components/widgets"

import {
  Block,
  Title,
  Container
} from "@components/common"

import { CheckoutContextProvider } from "@providers"

export default function CheckoutPage (): JSX.Element {

  return (
    <StyledCheckoutPage>
        <Header><TopBar.LogoOnly/></Header>
        <Container data-name="CheckoutPage__Container">
          <Title.ExtraLarge data-name="CheckoutPage__Title">
            Checkout
          </Title.ExtraLarge>
          <Block data-name="CheckoutPage__Content">
            <Block data-name="CheckoutContent__Forms">
              <CheckoutContextProvider>
                <CheckoutSteps />
              </CheckoutContextProvider>
            </Block>
            <Block data-name="CheckoutContent__CartSummary"></Block>
          </Block>
        </Container>
      <Footer contactNumber="(16) 3635-6304" />
    </StyledCheckoutPage>
  )
}