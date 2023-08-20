import { type PropsWithChildren } from "react"
import styled from "styled-components"

function Container (props: PropsWithChildren): JSX.Element {
  return (
    <StyledContainer>{props.children}</StyledContainer>
  )
}

const StyledContainer = styled.div`
  max-width: ${({ theme }) => theme.general.containerSize};
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
`

export default Container