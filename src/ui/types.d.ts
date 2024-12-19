import { Dispatch, SetStateAction } from "react"
import { GuestUser } from "@app/types/commerce"

export interface SwiperControls {
  isBeginning?: boolean
  isEnd?: boolean
}

/**
 * A utility type that combines a React forwardRef component with a styled component.
 *
 * @template E - The DOM element to the ref attributes.
 * @template P - The props type for the component.
 * @template S - The type of the styled component.
 *
 * @typedef {React.ForwardRefExoticComponent<P & React.RefAttributes<E>> & { Styled: S }} ForwardRefWithStyled
 * - `E`: The DOM element to the ref attributes.
 * - `P`: The props type passed to the component.
 * - `S`: The type of the styled component or DOM element.
 * - `Styled`: The styled component itself, accessible as a static property.
 */
export type ForwardRefWithStyled<E, P, S> = React.ForwardRefExoticComponent<P & React.RefAttributes<E>> & { Styled: S }

export interface IStepperActionsContext {
  isPrevActionDisabled: boolean
  setIsPrevActionDisabled: Dispatch<SetStateAction<boolean>>
  isNextActionDisabled: boolean
  setIsNextActionDisabled: Dispatch<SetStateAction<boolean>>
}

export interface CheckoutReducerState {
  guestUser: Partial<GuestUser>
}

export interface CheckoutReducerAction {
  type: "UPDATE_USER"
  payload: Partial<GuestUser>
}