import styled from "styled-components";
import { IconDirections, type IconProps } from "./types"

function getIconDirection(direction?: IconDirections): string {
  switch (direction) {
    case IconDirections.DOWNWARDS:
      return "rotate(90deg)";
    case IconDirections.UPWARDS:
      return "rotate(-90deg)";
    case IconDirections.LEFT:
      return "rotate(-180deg)";
    default:
      return "none"
  }
}

export default styled.div<IconProps>`
  display: contents;
  color: ${props => props.color || "inherit"};
  transform: ${props => getIconDirection(props.direction)};
`