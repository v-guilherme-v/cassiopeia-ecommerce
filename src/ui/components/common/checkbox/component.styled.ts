import styled from "styled-components"

const StyledCheckboxAttrs = { "data-testid": "StyledCheckbox" }
const StyledCheckbox = styled.div.attrs(() => StyledCheckboxAttrs)`
  display: flex;
  align-items: center;
  gap: 10px;
  
  & label {
    user-select: none;
  }

  & input[type="checkbox"] {
    position: relative;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.color.paleGrey};
    transition: all .2s;
  }
  
  & input[type="checkbox"]:checked {
    background-color: ${({ theme }) => theme.color.primary};
  }
  
  & input[type="checkbox"]::after {
    content: "";
    position: absolute;
    visibility: hidden;
    width: 9px;
    height: 6px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-image: url("/src/ui/components/icons/check.svg");
    filter: invert(1);
    transition: all .2s;
  }

  & input[type="checkbox"]:checked::after {
    visibility: visible;
  }

  & label,
  & input[type="checkbox"] {
    cursor: pointer;
  }
`

export default StyledCheckbox