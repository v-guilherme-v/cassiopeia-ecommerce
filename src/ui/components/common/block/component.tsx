import { forwardRef, type PropsWithChildren } from "react"
import styled from "styled-components"
import type { ForwardRefWithStyled } from "@ui/types"

const Block = forwardRef<HTMLDivElement, PropsWithChildren>((props, ref) => {
  const { children, ...restProps } = props
  return (
    <StyledBlock ref={ref} {...restProps}>{ children }</StyledBlock>
  )
}) as ForwardRefWithStyled<HTMLDivElement, PropsWithChildren, typeof StyledBlock>

const StyledBlock = styled.div``
Block.displayName = "Block"
Block.Styled = StyledBlock

export default Block