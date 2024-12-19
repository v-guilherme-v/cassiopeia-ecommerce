import {
  useState,
  useCallback,
  useMemo,
  useRef,
  createRef,
  RefObject
} from "react"

import { IStepperProps, IStepperStep, TGoToStepAction } from "./types"
import { mountSteps } from "./utils"
import { useViewPorts } from "@app/ui/hooks/use-viewports"

export function useStepper({ steps }: Pick<IStepperProps, "steps">) {
  const [statefulSteps, setStatefulSteps] = useState<IStepperStep[]>(mountSteps({ steps }))
  const currentStep = statefulSteps.find(step => step.state === "current")

  const stepsElementRef = useRef<HTMLDivElement>(null)

  const stepperBulletsRefList = useMemo(() => {
    return steps.reduce<{[key: string]: RefObject<HTMLDivElement>}>((acc, step) => {
      acc[step.id] = createRef()
      return acc;
    }, {})
  }, [steps])

  const { maxWidthMedium } = useViewPorts()

  function scrollToBulletPosition(params: {
    forAction: TGoToStepAction, 
    targetStep: IStepperStep,
    currentStep?: IStepperStep
  }) {
    const targetElementRef = stepperBulletsRefList[params.targetStep.id]
    const currentElementRef = stepperBulletsRefList[params.currentStep?.id ?? ""]

    if(
      params.forAction === "prev" &&
      targetElementRef.current !== null &&
      currentElementRef &&
      currentElementRef.current !== null
    ) {
      const targetElementBounding = targetElementRef.current.getBoundingClientRect()
      const currentElementBounding = currentElementRef.current.getBoundingClientRect()

      const scrollDistance = currentElementBounding.left - Math.abs(targetElementBounding.left)
  
      if(stepsElementRef.current !== null) {
        if(params.targetStep.index === 0) {
          targetElementRef.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start"
          });
        } else {
          stepsElementRef.current.scrollBy({
            left: -Math.abs(scrollDistance),
            behavior: "smooth",
          });
        }
      }
    } else if(params.forAction === "next") {
      if (
        stepsElementRef.current &&
        targetElementRef.current !== null
      ) {
        targetElementRef.current.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center"
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
          scrollToBulletPosition({
            forAction: action,
            targetStep: prevStep,
            currentStep
          })
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
          scrollToBulletPosition({
            forAction: action,
            targetStep: nextStep
          })
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