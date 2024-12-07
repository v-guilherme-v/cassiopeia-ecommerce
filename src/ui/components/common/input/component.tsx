import StyledInput from "./component.styled"
import type { InputProps, IInputWithValidationProps } from "./types"

import Text from "../text"
import Validator from "../validator"

function RawInput (props: InputProps): JSX.Element {
  const { customStyles, ...restProps } = props
  
  return (
    <>
      <input
        data-testid="Input"
        id={restProps.name}
        { ...restProps }
      />
      { restProps.icon }
    </>
  )
}

function InlineInput (props: InputProps): JSX.Element {
  return (
    <StyledInput.Inline>
      <RawInput { ...props } />
    </StyledInput.Inline>
  )
}

function Input (props: InputProps): JSX.Element {
  return (
    <StyledInput.Default>
      <RawInput { ...props } />
    </StyledInput.Default>
  )
}

function InputWithValidator (props: IInputWithValidationProps): JSX.Element {
  const isInputValid = props.isValid ?? false
  const inputIcon = props.showValidator ?
    <Validator isValid={isInputValid} /> :
    null

  const inputProps = { ...props }
  delete inputProps.isValid
  delete inputProps.showValidator
  delete inputProps.errorMessage

  return (
    <StyledInput.ValidatorContainer isValid={isInputValid}>
      <StyledInput.Default>
        <RawInput icon={inputIcon} { ...inputProps } />
      </StyledInput.Default>
      <Text.Caption>
        { !props.isValid ? props.errorMessage : null }
      </Text.Caption>
    </StyledInput.ValidatorContainer>
  )
}

Input.Inline = InlineInput
Input.Validator = InputWithValidator
Input.Styled = StyledInput

export default Input