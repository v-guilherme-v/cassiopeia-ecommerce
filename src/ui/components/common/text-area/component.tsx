import { memo } from "react"
import StyledTextArea from "./component.styled"
import { type TextAreaProps } from "./types"
import Icon from "../icon/component"
import Rectangle from "@components/icons/rectangle/icon"

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
      <textarea className="TextArea" {...textAreaProps}/>
      <Icon>
        <Rectangle />
      </Icon>
    </StyledTextArea>
  )
}

export default memo(TextArea)