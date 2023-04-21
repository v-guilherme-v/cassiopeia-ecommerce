import styled from "styled-components"
import { type IconProps, IconDirections } from "../types"

function getDirectionInDegrees (direction?: IconDirections): string {
  switch (direction) {
    case IconDirections.LEFT:
      return "rotate(180deg)"
    case IconDirections.UPWARDS:
      return "rotate(270deg)"
    case IconDirections.DOWNWARDS:
      return "rotate(90deg)"
    default:
      return ""
  }
}

const StyledThinArrow = styled.div<IconProps>`
  transform: ${(props) => getDirectionInDegrees(props.direction)};
`

export default StyledThinArrow