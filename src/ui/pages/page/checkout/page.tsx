import { lazy } from "react"
import StyledCheckoutPage from "./page.styled"

import {
  Header,
  TopBar,
  Footer
} from "@components/widgets"

import {
  Block,
  Title,
  Container
} from "@components/common"

import Stepper from "@components/common/stepper/component"

export default function CheckoutPage (): JSX.Element {
  const steps = [
    {
      id: "identification",
      title: "Identification",
      component: <>Identification</>,
    },
    {
      id: "shipping",
      title: "Shipping",
      component: <>Shipping</>,
      state: "complete" as const
    },
    {
      id: "payment",
      title: "Payment",
      component: <>Payment</>,
    }
  ]

  return (
    <StyledCheckoutPage>
        <Header><TopBar.LogoOnly/></Header>
        <Container data-name="CheckoutPage__Container">
          <Title.ExtraLarge data-name="CheckoutPage__Title">
            Checkout
          </Title.ExtraLarge>
          <Block data-name="CheckoutPage__Content">
            <Block data-name="CheckoutContent__Forms">
              <Stepper steps={steps} />
            </Block>
            <Block data-name="CheckoutContent__CartSummary"></Block>
          </Block>
        </Container>
      <Footer contactNumber="(16) 3635-6304" />
    </StyledCheckoutPage>
  )
}