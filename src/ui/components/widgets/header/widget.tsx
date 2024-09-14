import { getViewPortsStyles } from "@ui/theme/selectors"
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
  z-index: ${({ theme }) => theme.general.headerLayer};
  padding: 0 1rem;

  @media (max-width: ${props => getViewPortsStyles(props).small}) {
    margin-bottom: 30px;
  }
`

export default Header