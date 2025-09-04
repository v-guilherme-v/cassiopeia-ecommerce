import StyledCheckoutPage from "./page.styled"

import {
  Header,
  TopBar,
  Footer,
  CartSummary
} from "@components/widgets"

import {
  Block,
  Title,
  Container
} from "@components/common"

import { LayoutContext } from "@contexts"
import { CheckoutContextProvider } from "@providers"
import CheckoutSteps from "@widgets/checkout/checkout-steps"

import { useCheckoutLayoutProperties } from "@ui/hooks/checkout/use-checkout-layout"
import { useTheme } from "styled-components"
import { getGeneralStyles } from "@app/ui/theme/selectors"

export default function CheckoutPage (): JSX.Element {
  const layoutProperties = useCheckoutLayoutProperties()
  const generalStyles = getGeneralStyles({ theme: useTheme() })

  return (
    <StyledCheckoutPage>
        <LayoutContext.Provider value={{ properties: layoutProperties }}>
          <Header style={{
            zIndex: !layoutProperties.isMobileSummaryVisible ? generalStyles.headerLayer: "-1",
            position: !layoutProperties.isMobileSummaryVisible ? "sticky": "static"
          }}>
            <TopBar.LogoOnly />
          </Header>
          <Container data-name="CheckoutPage__Container">
            <Title data-name="CheckoutPage__Title">
              Checkout
            </Title>
            <Block data-name="CheckoutPage__Content">
              <Block data-name="CheckoutContent__Forms">
                <CheckoutContextProvider>
                  <CheckoutSteps />
                </CheckoutContextProvider>
              </Block>
              <Block data-name="CheckoutContent__CartSummary">
                <CartSummary />
              </Block>
            </Block>
          </Container>
          <Footer contactNumber="(16) 3635-6304" />
        </LayoutContext.Provider>
    </StyledCheckoutPage>
  )
}