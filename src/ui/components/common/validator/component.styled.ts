import styled from "styled-components"
import { ValidatorProps } from "./component"

export default styled.div<ValidatorProps>`
  color: ${(props) =>
    props.isValid ? props.theme.color.positive : props.theme.color.negative};
`
