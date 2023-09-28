import styled from "styled-components";

export default styled.nav`
  max-width: 482px;
  margin: 0 auto;
  padding: 1.75rem 0;

  .Navigation__Links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;

    & .Navigation__Link:hover {
      opacity: .6;
    }

    & .Navigation__Link a {
      color: inherit;
      text-decoration: none;
    }
  }
`