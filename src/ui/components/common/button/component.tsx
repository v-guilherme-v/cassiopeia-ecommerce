import { type PropsWithChildren } from "react"

import StyledButton from "@components/common/button/component.styled"
import Text from "@components/common/text"

import {
  type ButtonProps,
  type ButtonPropsHasIcon,
  type ButtonPropsAsIcon,
  ButtonIconPositions
} from "./types"

function RawButton (props: PropsWithChildren<ButtonProps>): JSX.Element {
  const { label = "Button" } = props

  return (
    <StyledButton.Default {...props}>
      <Text.Button>
        { label }
      </Text.Button>
    </StyledButton.Default>
  )
}

function ButtonHasIcon (props: PropsWithChildren<ButtonPropsHasIcon>): JSX.Element {
  const {
    label = "Button",
    icon = {
      element: <></>,
      position: ButtonIconPositions.APPEND
    }
  } = props

  return (
    <StyledButton.HasIcon {...props}>
      <Text.Button>
        { label }
      </Text.Button>
      { icon.element }
    </StyledButton.HasIcon>
  )
}

function ButtonAsIcon (props: PropsWithChildren<ButtonPropsAsIcon>): JSX.Element {
  const {
    icon = {
      element: <></>
    }
  } = props

  return (
    <StyledButton.AsIcon {...props}>
      { icon.element }
    </StyledButton.AsIcon>
  )
}

function Button (props: PropsWithChildren<ButtonProps>): JSX.Element {
  return <RawButton {...props} />
}

Button.HasIcon = ButtonHasIcon
Button.AsIcon = ButtonAsIcon

export default Button