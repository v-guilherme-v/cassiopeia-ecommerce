import { lazy } from "react"
import { Stepper } from "@components/common"
import { useViewPorts } from "@app/ui/hooks/use-viewports"

const CheckoutCartItems = lazy(() => import("./cart-items/widget"))
const CheckoutUserIdentificationStep = lazy(() => import("./shipping/widget"))

export default function CheckoutSteps(): JSX.Element {
  const steps = [
    {
      id: "cart",
      title: "Cart",
      component: () => <CheckoutCartItems />,
      actions: {
        nextButtonLabel: "Shipping",
        isNextButtonDisabled: false
      }
    },
    {
      id: "shipping",
      title: "Shipping",
      component: () => <CheckoutUserIdentificationStep />,
      actions: {
        prevButtonLabel: "Cart",
        nextButtonLabel: "Payment"
      }
    },
    {
      id: "payment",
      title: "Payment",
      component: () => <>Payment</>,
      actions: {
        prevButtonLabel: "Shipping",
        isNextButtonHidden: true
      }
    }
  ]

  const { maxWidthMedium } = useViewPorts()

  return !maxWidthMedium ? <Stepper steps={steps} portalSelector="#CartSummary__Actions"/> : <Stepper.Mobile steps={steps} portalSelector="#CartSummary__StepperActions" />
}