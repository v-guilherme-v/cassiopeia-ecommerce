import { type PropsWithChildren } from "react"
import StyledButton from "./component.styled"
import Text from "@components/common/text"

import { ButtonSizes, type ButtonProps } from "./types"
import { motion } from "motion/react"
import { animationConfig } from "@ui/config"

const MButton = motion(StyledButton.Normal);

function Button (props: PropsWithChildren<ButtonProps>): JSX.Element {
  const {
    icon,
    size,
    children
  } = props

  return (
    <MButton whileTap={animationConfig.buttons.whileTap} {...props}>
      {
        size !== ButtonSizes.ICON && (
          <Text.Button>
            { children }
          </Text.Button>
        )
      }
      { icon?.element }
    </MButton>
  )
}

const MButtonAsIcon = motion(StyledButton.AsIcon);

function ButtonAsIcon (props: PropsWithChildren<ButtonProps>): JSX.Element {
  return (
    <MButtonAsIcon whileTap={props.animate ? animationConfig.buttons.whileTap : null} {...props}>
      { props.children }
    </MButtonAsIcon>
  )
}

Button.Styled = StyledButton
Button.AsIcon = ButtonAsIcon

export default Button