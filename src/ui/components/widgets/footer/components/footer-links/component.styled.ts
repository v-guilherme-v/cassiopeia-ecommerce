import styled from "styled-components"
import { Title } from "@components/common"
import { getViewPorts } from "@theme/selectors"

export const StyledFooterLinks = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  max-width: 662px;

  ${Title.Styled.ExtraSmall} {
    text-align: center;
  }
`
export const StyledFooterLinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  a {
    color: ${({ theme }) => theme.color.black };
    text-decoration: none;
    text-align: center;

    @media(min-width: ${props => getViewPorts(props).medium}) {
      &:hover {
        text-decoration: underline;
        text-underline-offset: 2px;
      }
    }
  }
`
