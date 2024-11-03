import styled from "styled-components";

import Block from "../block";

export const StyledStepper = styled.div`
  ${Block.Styled}[data-name="Stepper__Steps"] {
    display: flex;
    align-items: center;
  }

  ${Block.Styled}[data-name="Stepper__CurrentStep"] {
    margin-top: 1rem;

    ${Block.Styled}[data-name="Stepper__CurrentStepContent"] {
      min-height: 200px;
    }
  }
  
`