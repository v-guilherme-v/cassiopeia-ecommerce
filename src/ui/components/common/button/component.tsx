import { type PropsWithChildren } from "react"
import StyledButton from "./component.styled"
import Text from "@components/common/text"

import { ButtonSizes, type ButtonProps } from "./types"

function Button (props: PropsWithChildren<ButtonProps>): JSX.Element {
  const {
    label,
    icon,
    size
  } = props

  return (
    <StyledButton {...props}>
      {
        size !== ButtonSizes.ICON && (
          <Text.Button>
            { label }
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