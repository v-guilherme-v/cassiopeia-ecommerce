import styled from "styled-components"
import { Container, FlexContainer } from "@components/common"

export default styled.footer`
  display: flex;
  background-color: ${({ theme }) => theme.color.snow};
  padding-top: 3.625rem;

  ${Container.Styled} {
    display: flex;
    flex-direction: column;
    gap: 3.75rem;
  }

  ${FlexContainer.Styled} {
    max-width: 1005px;
  }
`