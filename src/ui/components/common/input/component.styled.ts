import styled from "styled-components"
import { InputProps } from "./types"
import { getColorStyles } from "@theme/selectors"

const ICON_RIGHT_GAP: string = "8px"
const ICON_MAX_WIDTH: string = "21px"

const BaseInput = styled.div<InputProps>`
  // preventing autofill styles
  & :-webkit-autofill,
  & :-webkit-autofill:hover, 
  & :-webkit-autofill:focus, 
  & :-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }

  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.text.caption.fontSize};
  position: relative;
  max-width: 265px;

  & input {
    /* it will prevent that input and icon to occupy the same space */
    /* the calc is, icon max-width + the right gap from the div that wraps everything */
    padding: 12px calc(${ICON_MAX_WIDTH} + ${ICON_RIGHT_GAP}) 12px 12px;
    width: 100%;
    background-color: ${props => props?.customStyles?.backgroundColor ?? getColorStyles(props).white};
    color: ${props => props?.customStyles?.textColor ?? getColorStyles(props).black};

    &::placeholder {
      color: ${props => props?.customStyles?.placeholderColor ?? getColorStyles(props).darkGrey};
      user-select: none;
    }
  }

  & svg {
    position: absolute;
    top: 50%;
    right: ${ICON_RIGHT_GAP};
    transform: translateY(-50%);
    max-width: 21px;
  }
`

const InputInlineStyled = styled(BaseInput)`
  & input {
    padding-left: 3px;
    border: 0;
    border-bottom: 1px solid ${props => getColorStyles(props).lightGrey};
  }

  & input:focus {
    border-bottom: 1px solid ${props => getColorStyles(props).primary};
  }
`

const InputStyled = styled(BaseInput)`
  & input {
    padding-left: 13px;

    border: 1px solid ${props => getColorStyles(props).lightGrey};
    border-radius: 4px;
  }

  & input:focus {
    border: 1px solid ${props => getColorStyles(props).primary};
  }
`

export default {
  Default: InputStyled,
  Inline: InputInlineStyled
}