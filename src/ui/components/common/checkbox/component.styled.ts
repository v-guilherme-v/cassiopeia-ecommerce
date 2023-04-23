import styled from "styled-components"

const StyledCheckbox = styled.div`
  & label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
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

    background-image: url("/src/ui/components/icons/chevron/icon.svg");
    filter: invert(1);
    transition: all .2s;
  }

  & input[type="checkbox"]:checked::after {
    visibility: visible;
  }
`

export default StyledCheckbox