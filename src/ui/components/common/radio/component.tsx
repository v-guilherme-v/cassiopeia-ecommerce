import StyledRadio from "./component.styled"
import Text from "../text/component"
import { type RadioProps } from "./types"

function Radio (props: RadioProps): JSX.Element {
  const {
    checked = false,
    label,
    value
  } = props

  return (
    <StyledRadio>
      <label>
        <input
          className="radio"
          type="radio"
          value={value}
          checked={checked}
        />
        <Text.Radio>{label}</Text.Radio>
      </label>
    </StyledRadio>
  )
}

export default Radio