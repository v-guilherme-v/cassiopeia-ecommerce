import { type IconProps } from "../types"

export default function Chevron (props: IconProps): JSX.Element {
  const {
    height = "9",
    width = "21",
    color = "currentColor"
  } = props

  return (
    <svg width={width} height={height} viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill={color} d="M8.15097 0.141977C8.34871 -0.0507849 8.66526 -0.0467568 8.85802 0.150974C9.02937 0.326735 9.04522 0.596383 8.90776 0.789517L8.84903 0.858024L3.72014 5.85802C3.55023 6.02366 3.29188 6.04437 3.09987 5.92014L3.02208 5.85802L0.150974 3.05906C-0.0467568 2.8663 -0.0507849 2.54975 0.141977 2.35202C0.313321 2.17625 0.582478 2.15354 0.779048 2.28605L0.849026 2.34302L3.371 4.801L8.15097 0.141977Z"/>
    </svg>
  )
}