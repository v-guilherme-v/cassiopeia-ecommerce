import {
  Suspense,
  useState,
  useEffect
} from "react"

import { createPortal } from "react-dom"

import Block from "../block"

import { StyledStepperMobile } from "./component.styled"
import { IStepperProps, TStepState } from "./types"
import { StepActions, StepBullet } from "./components"

import { StepperActionsContext } from "@ui/contexts"
import { useStepper } from "./hooks"

export default function Stepper (props: IStepperProps): JSX.Element {
  const { state, goToStep, stepsElementRef, stepperBulletsRefList } = useStepper({ steps: props.steps })

  const [isPrevActionDisabled, setIsPrevActionDisabled] = useState<boolean>(false)
  const [isNextActionDisabled, setIsNextActionDisabled] = useState<boolean>(false)
  const [portalElement, setPortalElement] = useState<Element | null>(null)

  useEffect(() => {
    if(!portalElement && props.portalSelector) {
      const element = document.querySelector(props.portalSelector)
      setPortalElement(element)
    }
  }, [])

  const stepActionsProps = {
    prevButtonLabel: state.currentStep?.actions?.prevButtonLabel,
    isPrevButtonHidden: !state.currentStep || state.currentStep?.index === 0,
    onPrevButtonClick: () => { goToStep("prev") },
    isPrevButtonDisabled: isPrevActionDisabled,
    nextButtonLabel: state.currentStep?.actions?.nextButtonLabel,
    isNextButtonHidden: !state.currentStep || state.currentStep?.index === state.statefulSteps.length - 1,
    onNextButtonClick: () => { goToStep("next") },
    isNextButtonDisabled: isNextActionDisabled
  }

  return (
    <StyledStepperMobile data-name="StyledStepperMobile">
      <Block data-name="Stepper__Steps" ref={stepsElementRef}>
        {state.statefulSteps.map((step, index) => {
          const isCurrentStep = step.state === "current";

          return  (
            <>
              <StepBullet
                role="button"
                aria-current={isCurrentStep ? "current" : "step"}
                key={step.id}
                order={index + 1}
                name={step.title}
                ref={element => {
                  if (typeof stepperBulletsRefList.current === "object") {
                    stepperBulletsRefList.current[step.id] = element
                  }
                }}
                state={step.state as TStepState}
              />
              <Block data-name="Stepper__Step" data-step-state={step.state} key={step.id}>
                <Block data-name="Stepper__StepContent">
                  <StepperActionsContext.Provider value={{
                    isPrevActionDisabled,
                    setIsPrevActionDisabled,
                    isNextActionDisabled,
                    setIsNextActionDisabled
                  }}>
                    <Suspense>
                      { step.component && <step.component /> }
                    </Suspense>
                  </StepperActionsContext.Provider>
                </Block>

                <Block data-name="Stepper__StepActions">
                  {isCurrentStep && (portalElement ? createPortal(<StepActions {...stepActionsProps} />, portalElement) : <StepActions {...stepActionsProps} />)}
                </Block>
              </Block>
            </>
          )
        })}
      </Block>
    </StyledStepperMobile>
  )
}