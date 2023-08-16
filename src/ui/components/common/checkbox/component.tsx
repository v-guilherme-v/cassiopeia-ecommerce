import { useId } from "react"
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

  /**
   * Unique ids to many instances that might be on a same page.
   * We can't use the same id for all labels, otherwise a label
   * would reference another checkbox that's on the page.
   */
  const id = useId()

  return (
    <StyledCheckbox className="Checkbox">
      <input id={id} type="checkbox" checked={checked} onChange={onChange} />
      <label htmlFor={id}>
        <Text>{children}</Text>
      </label>
    </StyledCheckbox>
  )
}

export default Checkbox