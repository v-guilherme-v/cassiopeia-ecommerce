import { lazy, useContext } from "react"
import { Stepper } from "@components/common"
import { CheckoutGuestUserContext } from "@ui/contexts"

const CheckoutUserIdentification = lazy(() => import("./identification/widget"))

export default function CheckoutSteps(): JSX.Element {
  const guestUser = useContext(CheckoutGuestUserContext)

  function isGuestUserInvalid(): boolean {
    return Boolean(
      (guestUser.fullName === "" || guestUser.errors?.fullName === false) ||
      (guestUser.email === "" || guestUser.errors?.email === false ) ||
      (guestUser.cellphone === "" || guestUser.errors?.cellphone === false)
    )
  }

  const steps = [
    {
      id: "identification",
      title: "Identification",
      component: () => <CheckoutUserIdentification />,
      actions: {
        nextButtonLabel: "Shipping",
        isNextButtonDisabled: isGuestUserInvalid()
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