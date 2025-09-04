import styled from "styled-components";

import Block from "../block";
import Text from "../text";

import { StepBullet } from "./components";
import { getStatusColor } from "./components/step-bullet/component.styled";

export const StyledStepper = styled.div`
  --bullet-width: 24px;
  --bullet-height: 24px;

  ${Block.Styled}[data-name="Stepper__Steps"] {
    display: flex;
    align-items: center;
    max-width: 100%;
    overflow: hidden;
  }

  ${Block.Styled}[data-name="Stepper__CurrentStep"] {
    margin-top: 1rem;

    ${Block.Styled}[data-name="Stepper__CurrentStepContent"] {
      min-height: 200px;
    }
  }
  
`

export const StyledStepperMobile = styled.div`
  --bullet-width: 36px;
  --bullet-height: 36px;

  ${Block.Styled}[data-name="Stepper__Steps"] {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    overflow: hidden;
  }
    
  ${Block.Styled}[data-name="Stepper__Step"] {
    border-left: 2px solid;
    position: relative;
    padding: 16px;
    margin: 16px 0;
    margin-left: calc(var(--bullet-width) / 2);

    ${StepBullet.Styled} {
      display: none;
    }
  }

  ${Block.Styled}[data-step-state="complete"] {
    border-color: ${props => getStatusColor({ state: "complete" }, props.theme).titleTextColor};
  }

  ${Block.Styled}[data-step-state="current"] {
    border-color: ${props => getStatusColor({ state: "current" }, props.theme).titleTextColor};
  }

  ${Block.Styled}[data-step-state="pending"] {
    border-color: ${props => getStatusColor({ state: "pending" }, props.theme).titleTextColor};
  }

  ${Block.Styled}[data-name="StepActions"] {
    border-top: none;
  }

  ${StepBullet.Styled} ${Text.Styled.Body} {
    font-size: 22px;
  }
`