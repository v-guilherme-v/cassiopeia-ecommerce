import StyledInput from "./component.styled"
import type { InputProps } from "./types"

function RawInput (props: InputProps): JSX.Element {
  return (
    <>
      <input
        data-testid="Input"
        id={props.name}
        type={props?.type ?? "text"}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
      { props.icon }
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

export default Input