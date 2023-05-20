import { useContext, memo } from "react"
import { ThemeContext } from "styled-components"
import { Chevron, Close } from "@components/icons"
import { type ThemeType } from "@theme/types"

interface ValidatorProps {
  isValid: boolean
}

function Validator (props: ValidatorProps): JSX.Element {
  const { color }: ThemeType = useContext(ThemeContext)
  return props.isValid ? <Chevron color={color.positive} /> : <Close color={color.negative} />
}

export default memo(Validator)