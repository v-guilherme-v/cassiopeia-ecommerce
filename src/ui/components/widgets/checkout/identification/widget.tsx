import { useCallback, useContext } from "react"
import styled from "styled-components"

import { Block, Form, Input, Text } from "@components/common"

import {
  CheckoutGuestUserContext,
  CheckoutReducerDispatchContext
} from "@contexts"

import * as RegExps from "@utils/expressions"

const locales = {
  guestUserFullNameInvalid: "O nome completo não é válido",
  guestUserEmailInvalid: "O e-mail não é válido",
  guestUserCellphoneInvalid: "O celular não é válido"
}

export default function CheckoutUserIdentification(): JSX.Element {
  const guestUser = useContext(CheckoutGuestUserContext)
  const dispatch = useContext(CheckoutReducerDispatchContext)

  const onChange = useCallback<React.ChangeEventHandler<HTMLFormElement>>(event => {
    const inputName = event.target.name
    const inputValue = event.target.value

    if (inputName === "fullName") {
      const isFullNameValid = new RegExp(RegExps.userFullNameRegEx).test(inputValue)

      dispatch({
        type: "UPDATE_USER",
        payload: {
          [inputName]: inputValue,
          errors: {
            [inputName]: isFullNameValid
          }
        }
      })
    } else if (inputName === "email") {
      const isEmailValid = new RegExp(RegExps.userEmailRegEx).test(inputValue)
      
      dispatch({
        type: "UPDATE_USER",
        payload: {
          [inputName]: inputValue,
          errors: {
            [inputName]: isEmailValid
          }
        }
      })
    } else if (inputName === "cellphone") {
      const isCellPhoneValid = new RegExp(RegExps.userCellphoneRegEx).test(inputValue)

      dispatch({
        type: "UPDATE_USER",
        payload: {
          [inputName]: inputValue,
          errors: {
            [inputName]: isCellPhoneValid
          }
        }
      })
    }
  }, [])

  return (
    <StyledCheckoutUserIdentification>
      <Block data-name="CheckoutUserIdentification">
        <Block data-name="CheckoutUserIdentification__Heading">
          <Text.Body>User identification</Text.Body>
        </Block>
        <Block data-name="CheckoutUserIdentification__Content">
          <Form onChange={onChange}>
            <Input.Validator
              name="fullName"
              placeholder="Full Name"
              defaultValue={guestUser.fullName}
              showValidator={(guestUser.fullName ?? "").length > 0}
              isValid={!guestUser.fullName || guestUser.errors?.fullName}
              errorMessage={locales.guestUserFullNameInvalid}
              maxLength={60}
            />
            <Input.Validator
              name="email"
              placeholder="Email"
              defaultValue={guestUser.email}
              showValidator={(guestUser.email ?? "").length > 0}
              isValid={!guestUser.email || guestUser.errors?.email}
              errorMessage={locales.guestUserEmailInvalid}
              maxLength={254}
            />
            <Input.Validator
              name="cellphone"
              placeholder="Cellphone"
              defaultValue={guestUser.cellphone}
              showValidator={(guestUser.cellphone ?? "").length > 0}
              isValid={!guestUser.cellphone || guestUser.errors?.cellphone}
              errorMessage={locales.guestUserCellphoneInvalid}
              maxLength={30}
            />
          </Form>
        </Block>
      </Block>
    </StyledCheckoutUserIdentification>
  )
}

const StyledCheckoutUserIdentification = styled.div`
  margin-top: 32px;

  ${Block.Styled}[data-name="CheckoutUserIdentification__Heading"] {
    margin-bottom: 20px;
  }

  ${Block.Styled}[data-name="CheckoutUserIdentification__Content"] ${Form.Styled} {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    ${Input.Styled.ValidatorContainer} {
      flex: 0 0 50%;
    }
  }
`