import { type PropsWithChildren } from "react"
import { type IconProps } from "./types"

import StyledIcon from "./component.styled"

function Icon (props: PropsWithChildren<IconProps>): JSX.Element | null {
  return (
    props?.children != null
      ? <StyledIcon {...props}>{props.children}</StyledIcon>
      : null
  )
}

export default Icon