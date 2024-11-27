import {
  type Reducer,
  type PropsWithChildren,
  useReducer
} from "react"

import {
  CheckoutGuestUserContext,
  CheckoutReducerDispatchContext
} from "@app/ui/contexts"

import {
  CheckoutReducerState,
  CheckoutReducerAction
} from "@app/ui/types"

function checkoutProviderReducer(state: CheckoutReducerState, action: CheckoutReducerAction): CheckoutReducerState {
  switch (action.type) {
    case "UPDATE_USER":
      return {
        ...state,
        guestUser: {
          ...state.guestUser,
          ...action.payload,
          errors: {
            ...state.guestUser.errors,
            ...action.payload.errors
          }
        }
      }
    default: return state
  }
}

export function CheckoutContextProvider(props: PropsWithChildren): JSX.Element {
  const reducerInitialValue = {
    guestUser: {
      fullName: "",
      email: "",
      cellphone: "",
      errors: {}
    }
  }
  
  const [ state, dispatch ] = useReducer<Reducer<CheckoutReducerState, CheckoutReducerAction>>(checkoutProviderReducer, reducerInitialValue)

  return (
    <CheckoutReducerDispatchContext.Provider value={dispatch}>
      <CheckoutGuestUserContext.Provider value={state.guestUser}>
        { props.children }
      </CheckoutGuestUserContext.Provider>
    </CheckoutReducerDispatchContext.Provider>
  )
}