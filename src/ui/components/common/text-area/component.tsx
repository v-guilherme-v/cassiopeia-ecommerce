import { memo } from "react"

import StyledTextArea from "./component.styled"
import { RectangleIcon } from "@components/icons"
import { type TextAreaProps } from "./types"

function TextArea (props: TextAreaProps): JSX.Element {
  const {
    cols = 50,
    rows = 5,
    placeholder = "",
    ...restProps
  } = props

  const textAreaProps = {
    cols, rows, placeholder, ...restProps
  }

  return (
    <StyledTextArea>
      <textarea {...textAreaProps}/>
      <RectangleIcon />
    </StyledTextArea>
  )
}

export default memo(TextArea)