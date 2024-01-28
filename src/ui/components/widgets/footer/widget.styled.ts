import styled from "styled-components"
import { Container } from "@components/common"
import { getColorStyles, getViewPortsStyles } from "@theme/selectors"

export default styled.footer`
  display: flex;
  background-color: ${props => getColorStyles(props).black};
  padding-top: 3.625rem;

  ${Container.Styled} {
    display: flex;
    flex-direction: column;
    gap: 3.75rem;
  }

  [data-name="Footer__Blocks"] {
    display: flex;
    justify-content: space-between;
    max-width: 1005px;
    gap: 130px;
  }

  @media(max-width: ${props => getViewPortsStyles(props).medium}){
    padding-top: 42px;
    
    ${Container.Styled} {
      gap: 42px;
    }

    [data-name="Footer__Blocks"] {
      flex-direction: column-reverse;
      gap: 42px;
    }
  }
`