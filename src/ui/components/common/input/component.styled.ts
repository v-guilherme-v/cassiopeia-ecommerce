import styled from "styled-components"

const ICON_RIGHT_GAP: string = "8px"
const ICON_MAX_WIDTH: string = "21px"

const RawInput = styled.div`
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

    &::placeholder {
      color: ${({ theme }) => theme.color.darkGrey};
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

const InputInlineStyled = styled(RawInput)`
  & input {
    padding-left: 3px;
    border: 0;
    border-bottom: 1px solid color-mix(
      in srgb,
      ${({ theme }) => theme.color.darkGrey} 30%,
      ${({ theme }) => theme.color.lightGrey}
    );
  }

  & input:focus {
    border-bottom: 1px solid ${({ theme }) => theme.color.primary};
  }
`

const InputStyled = styled(RawInput)`
  & input {
    padding-left: 13px;

    border: 1px solid color-mix(
      in srgb,
      ${({ theme }) => theme.color.darkGrey} 30%,
      ${({ theme }) => theme.color.lightGrey}
    );
    border-radius: 4px;
  }

  & input:focus {
    border: 1px solid ${({ theme }) => theme.color.primary};
  }
`

export default {
  Default: InputStyled,
  Inline: InputInlineStyled
}