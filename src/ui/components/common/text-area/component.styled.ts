import styled from "styled-components"

const StyledTextArea = styled.div`
  position: relative;
  max-width: max-content;

  textarea::-webkit-resizer {
    display: none;
  }

  textarea::-o-resizer {
    display: none;
  }

  textarea::-ms-resizer {
    display: none;
  }  
  
  textarea {
    resize: both;
    display: block;
    position: relative;

    font-family: ${({ theme }) => theme.font.family};
    font-size: ${({ theme }) => theme.text.caption.fontSize};
    line-height: ${({ theme }) => theme.text.caption.lineHeight};
    border: 1px solid ${({ theme }) => theme.color.lightGrey};
    padding: 12px 16px;
    border-radius: 4px;

    &:focus {
      border-color: ${({ theme }) => theme.color.primary};
    }

    &::placeholder {
      color: ${({ theme }) => theme.color.darkGrey};
    }
  }

  textarea:focus ~ svg {
    color: ${({ theme }) => theme.color.primary};
  }

  svg {
    color: ${({ theme }) => theme.color.lightGrey};
    pointer-events: none;
    position: absolute;
    right: 3px;
    bottom: 5px;
    transform: rotate(-45deg);
  }

  @-moz-document url-prefix() {
    & svg {
      display: none;
    }
  }
`

export default StyledTextArea