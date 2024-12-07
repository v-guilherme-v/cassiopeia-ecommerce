import { lazy } from "react"
import { Stepper } from "@components/common"

const CheckoutUserIdentification = lazy(() => import("./identification/widget"))

export default function CheckoutSteps(): JSX.Element {
  const steps = [
    {
      id: "identification",
      title: "Identification",
      component: () => <CheckoutUserIdentification />,
      actions: {
        nextButtonLabel: "Shipping",
        isNextButtonDisabled: false
      }
    },
    {
      id: "shipping",
      title: "Shipping",
      component: () => <>Shipping</>
    },
    {
      id: "payment",
      title: "Payment",
      component: () => <>Payment</>,
    }
  ]

  return <Stepper steps={steps} />
}