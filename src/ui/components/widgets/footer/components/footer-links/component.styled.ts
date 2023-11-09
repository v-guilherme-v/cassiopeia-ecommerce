import styled from "styled-components"
import { getViewPortsStyles } from "@theme/selectors"

export const StyledFooterLinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  max-width: 150px;

  a {
    color: ${({ theme }) => theme.color.black };
    text-decoration: none;

    @media(min-width: ${props => getViewPortsStyles(props).medium}) {
      &:hover {
        text-decoration: underline;
        text-underline-offset: 2px;
      }
    }
  }
`

export const StyledFooterLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  column-gap: 2rem;
  max-width: 662px;
  user-select: none;
  flex: 1;
  
  ${StyledFooterLinksColumn}:nth-child(even){
    justify-self: center;
  }

  @media(max-width: ${props => getViewPortsStyles(props).small}) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 2rem;
  }
`