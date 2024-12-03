import { Suspense, useEffect, useState, useCallback } from "react"
import Block from "../block"

import { StyledStepper } from "./component.styled"
import { IStepperProps, IStepperStep, TStepState } from "./types"
import { StepActions, StepBullet } from "./components"

interface IStepperStepIndexed extends IStepperStep {
  index: number
}

function getStepsState(props: IStepperProps): IStepperStepIndexed[] {
  const completeStepIndex = props.steps.findIndex(step => step.state === "complete")

  return props.steps.map((step, index) => {
    if(index <= completeStepIndex) {
      return {
        ...step,
        index,
        state: "complete",
      }
    } else if(index === completeStepIndex + 1) {
      return {
        ...step,
        index,
        state: "current"
      }
    } else {
      return {
        ...step,
        index,
        state: "pending"
      }
    }
  })
}

export default function Stepper (props: IStepperProps): JSX.Element {
  const [statefulSteps, setStatefulSteps] = useState<IStepperStepIndexed[]>(getStepsState(props))
  const currentStep = statefulSteps.find(step => step.state === "current")
  
  const goToStep = useCallback((action: "prev" | "next") => {
    const currentStepsCopy = [ ...statefulSteps ]

    if (
      action === "prev" &&
      currentStep?.index !== 0 &&
      !currentStep?.actions?.isPrevButtonDisabled
    ) {
      if (
        currentStep?.index !== undefined &&
        currentStepsCopy[currentStep.index - 1] !== undefined
      ) {
        currentStepsCopy[currentStep.index].state = "pending"
        currentStepsCopy[currentStep.index - 1].state = "current"
        setStatefulSteps(currentStepsCopy)
      }
    } else if (
      action === "next" &&
      currentStep?.index !== statefulSteps.length - 1 &&
      !currentStep?.actions?.isPrevButtonDisabled
    ) {
      if (
        currentStep?.index !== undefined &&
        currentStepsCopy[currentStep.index + 1] !== undefined
      ) {
        currentStepsCopy[currentStep.index].state = "complete"
        currentStepsCopy[currentStep.index + 1].state = "current"
        setStatefulSteps(currentStepsCopy)
      }
    }
  }, [ statefulSteps ])

  useEffect(() => {
    setStatefulSteps(getStepsState(props))
  }, [ props.steps ])

  return (
    <StyledStepper data-name="StyledStepper">
      <Block data-name="Stepper__Steps">
        {statefulSteps.map((step, index) => {
          return  (
            <StepBullet
              key={step.id}
              order={index + 1}
              name={step.title}
              state={step.state as TStepState}
            />
          )
        })}
      </Block>
      <Block data-name="Stepper__CurrentStep">
        <Block data-name="Stepper__CurrentStepContent">
          <Suspense>
            { currentStep?.component && <currentStep.component />}
          </Suspense>
        </Block>
        <Block data-name="Stepper__CurrentStepActions">
          <StepActions
            prevButtonLabel={currentStep?.actions?.prevButtonLabel}
            isPrevButtonHidden={!currentStep || currentStep?.index === 0}
            onPrevButtonClick={() => { goToStep("prev") }}
            isPrevButtonDisabled={currentStep?.actions?.isPrevButtonDisabled}
            nextButtonLabel={currentStep?.actions?.nextButtonLabel}
            isNextButtonHidden={!currentStep || currentStep?.index === statefulSteps.length - 1}
            onNextButtonClick={() => { goToStep("next") }}
            isNextButtonDisabled={currentStep?.actions?.isNextButtonDisabled}
          />
        </Block>
      </Block>
    </StyledStepper>
  )
}