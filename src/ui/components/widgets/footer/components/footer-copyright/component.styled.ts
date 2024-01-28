import styled from "styled-components"
import { getViewPortsStyles } from "@theme/selectors"


export default styled.div`
  padding: 20px 0 33px;
  border-top: 1px solid ${({ theme }) => theme.color.grey + "20"};

  @media(max-width: ${props => getViewPortsStyles(props).medium}){
    border-top: none;
    padding-top: 0;
  }
`