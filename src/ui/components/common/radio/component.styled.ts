import styled from "styled-components"

const StyledRadio = styled.div`
  label {
    display: flex;
    align-items: center;
    gap: 12px;
    user-select: none;
  }

  input[type="radio"] {
    appearance: none;
    -webkit-appearance: none;
    width: 20px;
    height: 20px;

    border: 1px solid ${({ theme }) => theme.color.primary};
    border-radius: 50%;

    transition: border 0.2s;
  }

  input[type="radio"]:checked {
    border-width: 6px;
  }
`

export default StyledRadio