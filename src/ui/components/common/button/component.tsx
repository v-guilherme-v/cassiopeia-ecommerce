import { type PropsWithChildren } from "react"
import StyledButton from "./component.styled"
import Text from "@components/common/text"
import Icon from "../icon/component"

import { ButtonSizes, type ButtonProps } from "./types"

function Button (props: PropsWithChildren<ButtonProps>): JSX.Element {
  const {
    icon,
    size,
    children
  } = props

  return (
    <StyledButton data-testid="Button" {...props}>
      {
        size !== ButtonSizes.ICON && (
          <Text.Button>
            { children }
          </Text.Button>
        )
      }
      <Icon>{ icon?.element }</Icon>
    </StyledButton>
  )
}

export default Button