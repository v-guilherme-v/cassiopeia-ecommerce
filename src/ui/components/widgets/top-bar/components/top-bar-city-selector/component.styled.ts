import { getViewPortsStyles } from "@ui/theme/selectors"
import styled from "styled-components"

export default styled.div`
  display: flex;
  align-items: center;
  gap: 7px;

  @media (min-width: ${props =>  getViewPortsStyles(props).medium}) {
    &:hover {
      cursor: pointer;
      opacity: .6;
    }
  }
`