import { type PropsWithChildren } from "react"
import styled from "styled-components"

function Header (props: PropsWithChildren): JSX.Element {
  return (
    <StyledHeader>{ props.children }</StyledHeader>
  )
}

const StyledHeader = styled.header`
  position: sticky;
  top: 0;

  background-color: ${({ theme }) => theme.color.white};
  padding: 0 1rem;
`

export default Header