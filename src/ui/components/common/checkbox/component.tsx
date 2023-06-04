import StyledCheckbox from "./component.styled"
import Text from "../text/component"

import { type CheckboxProps } from "./types"
import type { PropsWithChildren } from "react"

function Checkbox (props: PropsWithChildren<CheckboxProps>): JSX.Element {
  const {
    children,
    checked = false,
    onChange
  } = props

  return (
    <StyledCheckbox className="Checkbox">
      <label>
        <input data-testid="Checkbox" type="checkbox" checked={checked} onChange={onChange}/>
        <Text>{ children }</Text>
      </label>
    </StyledCheckbox>
  )
}

export default Checkbox