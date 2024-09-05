import { type PropsWithChildren } from "react"
import styled from "styled-components"

function Container ({ children, ...restProps }: PropsWithChildren): JSX.Element {
  return (
    <StyledContainer {...restProps}>{children}</StyledContainer>
  )
}

const StyledContainer = styled.div`
  --container-size: ${({ theme }) => theme.general.containerSize};
  max-width: calc(var(--container-size) + 2rem);
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
`

Container.Styled = StyledContainer

export default Container