import { type IconProps } from "../types"

export default function Close (props: IconProps): JSX.Element {
  const {
    height = "9",
    width = "21",
    color = "currentColor"
  } = props

  return (
    <svg width={width} height={height} viewBox="0 0 19 19" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="M1 17.5L17.5 1" stroke={color} strokeWidth="2"/>
      <path d="M17.5 17.5L0.999999 1" stroke={color} strokeWidth="2"/>
    </svg>
  )
}