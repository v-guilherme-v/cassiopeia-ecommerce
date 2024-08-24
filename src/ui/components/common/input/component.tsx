import StyledInput from "./component.styled"
import type { InputProps } from "./types"

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

Input.Inline = InlineInput
Input.Styled = StyledInput

export default Input