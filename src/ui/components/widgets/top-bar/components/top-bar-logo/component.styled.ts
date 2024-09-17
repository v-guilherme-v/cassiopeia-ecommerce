import { getViewPortsStyles } from "@ui/theme/selectors"
import styled from "styled-components"

export default styled.div`
  line-height: 10px;

  a { 
    display: block;
  }

  a,
  a:is(
    :active,
    :visited,
    :hover
  ) {
    color: unset;
  }

  @media (min-width: ${props => getViewPortsStyles(props).medium}) {
    :hover {
      cursor: pointer;
      opacity: .6;
    }
  }
`