import styled from "styled-components"

const StyledTextArea = styled.div`
  position: relative;

  textarea {
    resize: both;
  }

  textarea::-webkit-resizer {
    display: none;
  }

  textarea::-o-resizer {
    display: none;
  }

  textarea::-ms-resizer {
    display: none;
  }
  
  & .TextArea {
    display: block;
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

  & .Icon {
    position: absolute;
    right: 2px;
    bottom: 3px;
    pointer-events: none;
    color: ${({ theme }) => theme.color.lightGrey};
    transform: rotate(-45deg);
  }

  & .TextArea:focus ~ .Icon {
    color: ${({ theme }) => theme.color.primary};
  }

  @-moz-document url-prefix() {
    .Icon {
      display: none;
    }
  }
`

export default StyledTextArea