import { memo } from "react"
import { Check, Close } from "@components/icons"
import StyledValidator from "./component.styled"

export interface ValidatorProps {
  isValid: boolean
}

function Validator (props: ValidatorProps): JSX.Element {
  return (
    <StyledValidator {...props} >
      { props.isValid ? <Check data-testid="CheckIcon" /> : <Close data-testid="CloseIcon" /> }
    </StyledValidator>
  )
}

export default memo(Validator)