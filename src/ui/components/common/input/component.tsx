import StyledInput from "./component.styled"
import { type InputProps } from "./types"

function RawInput (props: InputProps): JSX.Element {
  return (
    <>
      <input
        id={props.name}
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
      {
        Boolean(props.icon) && (
          <div className="Icon">
            {props.icon}
          </div>
        )
      }
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