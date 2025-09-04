import {
  Suspense,
  useState,
  useEffect
} from "react"

import { createPortal } from "react-dom"

import Block from "../block"

import { StyledStepper } from "./component.styled"
import { IStepperProps, TStepState } from "./types"
import { StepActions, StepBullet } from "./components"

import { StepperActionsContext } from "@ui/contexts"
import { useStepper } from "./hooks"

function Stepper(props: IStepperProps): JSX.Element {
  const { state, goToStep } = useStepper({ steps: props.steps })

  const [isPrevActionDisabled, setIsPrevActionDisabled] = useState<boolean>(false)
  const [isNextActionDisabled, setIsNextActionDisabled] = useState<boolean>(false)
  const [portalElement, setPortalElement] = useState<Element | null>(null)

  useEffect(() => {
    if (!portalElement && props.portalSelector) {
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
    <StyledStepper data-name="StyledStepper">
      <Block data-name="Stepper__Steps">
        {state.statefulSteps.map((step, index) => {
          return (
            <StepBullet
              role="button"
              aria-current={step.state === "current" ? "current" : "step"}
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
          <StepperActionsContext.Provider value={{
            isPrevActionDisabled,
            setIsPrevActionDisabled,
            isNextActionDisabled,
            setIsNextActionDisabled
          }}>
            <Suspense>
              {state.currentStep?.component && <state.currentStep.component />}
            </Suspense>
          </StepperActionsContext.Provider>
        </Block>
        <Block data-name="Stepper__CurrentStepActions">
          {portalElement ? createPortal(<StepActions {...stepActionsProps} />, portalElement) : <StepActions {...stepActionsProps} />}
        </Block>
      </Block>
    </StyledStepper>
  )
}

import StepperMobile from "./component.mobile"
Stepper.Mobile = StepperMobile

export default Stepper