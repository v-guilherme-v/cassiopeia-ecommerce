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
    <StyledButton data-testid="Button" {...props}>
      {
        size !== ButtonSizes.ICON && (
          <Text.Button>
            { children }
          </Text.Button>
        )
      }
      {
        (icon != null) && (
          <div className="Icon">{ icon.element }</div>
        )
      }
    </StyledButton>
  )
}

export default Button