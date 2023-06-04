import StyledRadio from "./component.styled"
import Text from "../text/component"
import { type RadioProps } from "./types"

function Radio (props: RadioProps): JSX.Element {
  const {
    value,
    checked = false,
    children,
    onChange
  } = props

  return (
    <StyledRadio>
      <label>
        <input
          data-testid="Radio"
          className="radio"
          type="radio"
          value={value}
          checked={checked}
          onChange={onChange}
        />
        <Text.Radio>{ children }</Text.Radio>
      </label>
    </StyledRadio>
  )
}

export default Radio