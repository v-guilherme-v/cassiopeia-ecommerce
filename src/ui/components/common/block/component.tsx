import type { PropsWithChildren } from "react"
import styled from "styled-components"

function Block ({ children, ...restProps }: PropsWithChildren): JSX.Element {
  return (
    <StyledBlock {...restProps}>{ children }</StyledBlock>
  )
}

const StyledBlock = styled.div``

Block.Styled = StyledBlock

export default Block