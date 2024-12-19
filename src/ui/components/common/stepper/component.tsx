import {
  Suspense,
  useState,
} from "react"

import Block from "../block"

import { StyledStepper } from "./component.styled"
import { IStepperProps, TStepState } from "./types"
import { StepActions, StepBullet } from "./components"

import { StepperActionsContext } from "@ui/contexts"
import { useStepper } from "./hooks"

export default function Stepper (props: IStepperProps): JSX.Element {
  const {
    state,
    goToStep,
    stepsElementRef,
    stepperBulletsRefList,
  } = useStepper({ steps: props.steps })

  const [isPrevActionDisabled, setIsPrevActionDisabled] = useState<boolean>(false)
  const [isNextActionDisabled, setIsNextActionDisabled] = useState<boolean>(false)

  return (
    <StyledStepper data-name="StyledStepper">
      <Block data-name="Stepper__Steps" ref={stepsElementRef}>
        {state.statefulSteps.map((step, index) => {
          return  (
            <StepBullet
              role="button"
              aria-current={step.state === "current" ? "current" : "step"}
              key={step.id}
              order={index + 1}
              name={step.title}
              ref={stepperBulletsRefList[step.id] ?? null}
              state={step.state as TStepState}
            />
          )
        })}
      </Block>
      <Block data-name="Stepper__CurrentStep">
        <Block data-name="Stepper__CurrentStepContent">
          <StepperActionsContext.Provider value={{
            isPrevActionDisabled,
            setIsPrevActionDisabled,
            isNextActionDisabled,
            setIsNextActionDisabled
          }}>
            <Suspense>
              { state.currentStep?.component && <state.currentStep.component />}
            </Suspense>
          </StepperActionsContext.Provider>
        </Block>
        <Block data-name="Stepper__CurrentStepActions">
          <StepActions
            prevButtonLabel={state.currentStep?.actions?.prevButtonLabel}
            isPrevButtonHidden={!state.currentStep || state.currentStep?.index === 0}
            onPrevButtonClick={() => { goToStep("prev") }}
            isPrevButtonDisabled={isPrevActionDisabled}
            nextButtonLabel={state.currentStep?.actions?.nextButtonLabel}
            isNextButtonHidden={!state.currentStep || state.currentStep?.index === state.statefulSteps.length - 1}
            onNextButtonClick={() => { goToStep("next") }}
            isNextButtonDisabled={isNextActionDisabled}
          />
        </Block>
      </Block>
    </StyledStepper>
  )
}