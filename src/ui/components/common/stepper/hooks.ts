import {
  useState,
  useCallback,
  useRef
} from "react"

import { IStepperProps, IStepperStep, TGoToStepAction } from "./types"
import { mountSteps } from "./utils"
import { useViewPorts } from "@app/ui/hooks/use-viewports"

export function useStepper({ steps }: Pick<IStepperProps, "steps">) {
  const [statefulSteps, setStatefulSteps] = useState<IStepperStep[]>(mountSteps({ steps }))
  const currentStep = statefulSteps.find(step => step.state === "current")

  const stepsElementRef = useRef<HTMLDivElement>(null)

  const stepperBulletsRefList = useRef<{[name: string]: HTMLDivElement | null }>({});

  const { maxWidthMedium } = useViewPorts()

  function scrollToBulletPosition(targetStep: IStepperStep) {
    if(stepperBulletsRefList.current) {
      const targetStepElement = stepperBulletsRefList.current[targetStep.id]

      if (targetStepElement) {
        const elementTop = targetStepElement.getBoundingClientRect().top + window.scrollY;
        const offset = targetStep.id === "cart" ? 80 : 20; 

        window.scrollTo({
          top: elementTop - offset, // Scroll to the element's position minus the offset
          behavior: "smooth", // Enable smooth scrolling
        });
      }
    }
  }

  const goToStep = useCallback((action : TGoToStepAction) => {
    const currentStepsCopy = [ ...statefulSteps ]
    const isOnFirstStep = currentStep?.index === 0
    const isOnLastStep = currentStep?.index === statefulSteps.length - 1

    if (
      action === "prev" && !isOnFirstStep &&
      !currentStep?.actions?.isPrevButtonDisabled
    ) {
      if (
        currentStep?.index !== undefined &&
        currentStepsCopy[currentStep.index - 1] !== undefined
      ) {
        const prevStep = currentStepsCopy[currentStep.index - 1];

        currentStepsCopy[currentStep.index].state = "pending"
        prevStep.state = "current"

        if(maxWidthMedium) {
          scrollToBulletPosition(prevStep)
        }

        setStatefulSteps(currentStepsCopy)
      }

    } else if (
      action === "next" && !isOnLastStep &&
      !currentStep?.actions?.isPrevButtonDisabled
    ) {
      if (
        currentStep?.index !== undefined &&
        currentStepsCopy[currentStep.index + 1] !== undefined
      ) {
        const nextStep = currentStepsCopy[currentStep.index + 1]

        currentStepsCopy[currentStep.index].state = "complete"
        nextStep.state = "current"

        if(maxWidthMedium) {
          scrollToBulletPosition(nextStep)
        }
        
        setStatefulSteps(currentStepsCopy)
      }
    }

  }, [ statefulSteps, maxWidthMedium ])

  return {
    goToStep,
    mountSteps,
    stepsElementRef,
    stepperBulletsRefList,
    state: { currentStep, statefulSteps }
  }
}