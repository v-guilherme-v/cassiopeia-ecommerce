import { lazy } from "react"
import { useTranslation } from "react-i18next"
import styled from "styled-components"

import { Block, Stepper } from "@components/common"
import { useViewPorts } from "@ui/hooks/use-viewports"

const CheckoutCartItems = lazy(() => import("./cart-items/widget"))
const CheckoutUserIdentificationStep = lazy(() => import("./shipping/widget"))

function CheckoutSteps(): JSX.Element {
  const { t } = useTranslation()

  const steps = [
    {
      id: "cart",
      title: t("labels.cart"),
      component: () => <CheckoutCartItems />,
      actions: {
        nextButtonLabel: t("labels.shipping"),
        isNextButtonDisabled: false
      }
    },
    {
      id: "shipping",
      title: t("labels.shipping"),
      component: () => <CheckoutUserIdentificationStep />,
      actions: {
        prevButtonLabel: t("labels.cart"),
        nextButtonLabel: t("labels.payment")
      }
    },
    {
      id: "payment",
      title: t("labels.payment"),
      component: () => <>Payment</>,
      actions: {
        prevButtonLabel: t("labels.shipping"),
        isNextButtonHidden: true
      }
    }
  ]

  const { maxWidthMedium } = useViewPorts()

  return (
    <StyledCheckoutSteps>
      {!maxWidthMedium ? <Stepper steps={steps} portalSelector="#CartSummary__Actions"/> : <Stepper.Mobile steps={steps} portalSelector="#CartSummary__StepperActions" />}
    </StyledCheckoutSteps>
  )
}

export const StyledCheckoutSteps = styled.div`
  ${Block.Styled}[data-name="Stepper__CurrentStep"]
  ${Block.Styled}[data-name="Stepper__CurrentStepContent"] {
    min-height: 560px;
  }
`

CheckoutSteps.Styled = StyledCheckoutSteps;
export default CheckoutSteps;
