import StyledThinArrow from "./thin-arrow.styled"
import { type IconProps } from "../types"

export default function ThinArrow (props: IconProps): JSX.Element {
  const {
    height = "9",
    width = "21",
    color = "#000"
  } = props

  return (
    <StyledThinArrow {...props}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 21 9"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.1402 0.116733C15.3271 -0.0389109 15.6302 -0.0389109 15.8171 0.116733L20.8598 4.31579L20.916 4.37195C21.0467 4.53002 21.0246 4.74876 20.8517 4.88605L15.8089 8.88989L15.7413 8.93468C15.5518 9.03856 15.2944 9.01808 15.1322 8.87648L15.0784 8.8202C14.9537 8.66236 14.9783 8.44802 15.1483 8.31301L19.3211 5H0.976191L0.890594 4.99194C0.668451 4.94961 0.5 4.74546 0.5 4.5C0.5 4.22386 0.713198 4 0.976191 4H19.1277L15.1402 0.680368L15.0848 0.625171C14.9556 0.469841 14.974 0.255083 15.1402 0.116733Z"
          fill={color}
        />
      </svg>
    </StyledThinArrow>
  )
}