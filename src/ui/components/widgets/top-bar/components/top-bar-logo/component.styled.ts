import { getViewPortsStyles } from "@ui/theme/selectors"
import styled from "styled-components"

export default styled.div`
  line-height: 10px;

  a { 
    display: block;
    cursor: default;
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
    a:hover,
    :hover {
      cursor: pointer;
      opacity: .6;
    }
  }
`