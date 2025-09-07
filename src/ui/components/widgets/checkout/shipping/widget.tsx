import { useCallback, useContext, useEffect } from "react"
import styled from "styled-components"

import {
  Block,
  Form,
  Input,
  Text
} from "@components/common"

import {
  CheckoutGuestUserContext,
  CheckoutReducerDispatchContext,
  StepperActionsContext
} from "@contexts"

import * as RegExps from "@utils/expressions"
import { doNothing } from "@app/utils"
import { getViewPortsStyles } from "@app/ui/theme/selectors"
import { useTranslation } from "react-i18next"

export default function CheckoutUserIdentification(): JSX.Element {
  const { t } = useTranslation()
  const guestUser = useContext(CheckoutGuestUserContext)
  const dispatch = useContext(CheckoutReducerDispatchContext)

  const {
    isNextActionDisabled = true,
    setIsNextActionDisabled = doNothing
  } = (useContext(StepperActionsContext) ?? {})

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

  useEffect(() => {
    function isGuestUserInvalid(): boolean {
      return Boolean(
        (guestUser.fullName === "" || guestUser.errors?.fullName === false) ||
        (guestUser.email === "" || guestUser.errors?.email === false ) ||
        (guestUser.cellphone === "" || guestUser.errors?.cellphone === false)
      )
    }

    if(isGuestUserInvalid()) {
      setIsNextActionDisabled(false)
    } else {
      if(isNextActionDisabled) {
        setIsNextActionDisabled(false)
      }
    }
  }, [ isNextActionDisabled, guestUser ])

  return (
    <StyledCheckoutUserIdentification>
      <Block data-name="CheckoutUserIdentification">
      <Block data-name="CheckoutUserIdentification__Heading">
          <Text.Body>{t("labels.contactInformation")}</Text.Body>
        </Block>
        <Block data-name="CheckoutUserIdentification__Content">
          <Form onChange={onChange}>
            <Input.Validator
              name="fullName"
              placeholder={t("labels.fullName")}
              defaultValue={guestUser.fullName}
              showValidator={(guestUser.fullName ?? "").length > 0}
              isValid={!guestUser.fullName || guestUser.errors?.fullName}
              errorMessage={t("message.invalidFullName")}
              maxLength={60}
            />
            <Input.Validator
              name="email"
              placeholder={t("labels.email")}
              defaultValue={guestUser.email}
              showValidator={(guestUser.email ?? "").length > 0}
              isValid={!guestUser.email || guestUser.errors?.email}
              errorMessage={t("messages.invalidEmail")}
              maxLength={254}
            />
            <Input.Validator
              name="cellphone"
              placeholder={t("labels.cellphone")}
              defaultValue={guestUser.cellphone}
              showValidator={(guestUser.cellphone ?? "").length > 0}
              isValid={!guestUser.cellphone || guestUser.errors?.cellphone}
              errorMessage={t("messages.invalidCellphone")}
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

  ${Block.Styled}[data-name="CheckoutUserIdentification__Heading"]:not(:first-child) {
    margin: 20px 0;
  }

  ${Block.Styled}[data-name="CheckoutUserIdentification__Content"] ${Form.Styled} {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    ${Input.Styled.ValidatorContainer} {
      flex: 0 0 45%;
    }
  }

  @media (max-width: ${props => getViewPortsStyles(props).small}) {
    ${Block.Styled}[data-name="CheckoutUserIdentification__Content"]
    ${Form.Styled} ${Input.Styled.ValidatorContainer} {
      flex: 0 0 100%;
      max-width: unset;
    }
    
    ${Block.Styled}[data-name="CheckoutUserIdentification__Content"]
    ${Form.Styled} ${Input.Styled.ValidatorContainer} ${Input.Styled.Default}{
      max-width: unset;
    }
  }
`
