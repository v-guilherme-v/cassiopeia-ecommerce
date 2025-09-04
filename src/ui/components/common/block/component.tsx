import { forwardRef, type HTMLAttributes, type PropsWithChildren } from "react"
import styled from "styled-components"
import type { ForwardRefWithStyled } from "@ui/types"

interface BlockCommonAttrs extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {}

const Block = forwardRef<HTMLDivElement, BlockCommonAttrs>((props, ref) => {
  const { children, ...restProps } = props
  return (
    <StyledBlock ref={ref} style={props.style} {...restProps}>{ children }</StyledBlock>
  )
}) as ForwardRefWithStyled<HTMLDivElement, BlockCommonAttrs, typeof StyledBlock>

const StyledBlock = styled.div``
Block.displayName = "Block"
Block.Styled = StyledBlock

export default Block