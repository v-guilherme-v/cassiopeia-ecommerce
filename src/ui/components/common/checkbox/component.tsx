import { type CheckboxProps } from "./types"
import StyledCheckbox from "./component.styled"
import Text from "../text/component"

function Checkbox (props: CheckboxProps): JSX.Element {
  const {
    label,
    isChecked,
    onChange
  } = props

  return (
    <StyledCheckbox className="Checkbox">
      <label>
        <input type="checkbox" checked={isChecked} onChange={onChange}/>
        <Text>{ label }</Text>
      </label>
    </StyledCheckbox>
  )
}

export default Checkbox