import styled from "styled-components"

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.white};

  min-width: 120px;
  min-height: 45px;
  border: ${(props) => props.theme.button.border};
  border-radius: ${(props) => props.theme.button.borderRadius};

  cursor: pointer;
  transition: ${(props) => props.theme.button.transition};
  user-select: none;
`

export default StyledButton