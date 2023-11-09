import { type PropsWithChildren } from "react"
import StyledButton from "./component.styled"
import Text from "@components/common/text"

import { ButtonSizes, type ButtonProps } from "./types"

function Button (props: PropsWithChildren<ButtonProps>): JSX.Element {
  const {
    icon,
    size,
    children
  } = props

  return (
    <StyledButton.Normal {...props}>
      {
        size !== ButtonSizes.ICON && (
          <Text.Button>
            { children }
          </Text.Button>
        )
      }
      { icon?.element }
    </StyledButton.Normal>
  )
}

function ButtonAsIcon (props: PropsWithChildren<ButtonProps>): JSX.Element {
  return (
    <StyledButton.AsIcon {...props}>
      { props.children }
    </StyledButton.AsIcon>
  )
}

Button.Styled = StyledButton
Button.AsIcon = ButtonAsIcon

export default Button