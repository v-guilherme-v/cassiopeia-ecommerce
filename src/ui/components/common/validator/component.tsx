import { memo } from "react"
import { CheckIcon, CloseIcon } from "@components/icons"
import StyledValidator from "./component.styled"

export interface ValidatorProps {
  isValid: boolean
}

function Validator (props: ValidatorProps): JSX.Element {
  return (
    <StyledValidator {...props} >
      { props.isValid ? <CheckIcon data-testid="CheckIcon" /> : <CloseIcon data-testid="CloseIcon" /> }
    </StyledValidator>
  )
}

export default memo(Validator)