import { PropsWithChildren } from "react";
import styled from "styled-components";

export default function Form (props: PropsWithChildren<React.FormHTMLAttributes<HTMLFormElement>>): JSX.Element {
  return <StyledForm {...props} />
}

const StyledForm = styled.form``

Form.Styled = StyledForm