import styled from "styled-components"

export default styled.div`
  line-height: 10px;

  a:is(
    :active,
    :visited,
    :hover
  ) {
    color: unset;
  }

  :hover {
    cursor: pointer;
    opacity: .6;
  }
`