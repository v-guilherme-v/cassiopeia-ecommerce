import { IStepperProps, IStepperStep } from "./types"

export function mountSteps({ steps }: Pick<IStepperProps, "steps">): IStepperStep[] {
  const completeStepIndex = steps.findIndex(
    (step) => step.state === "complete"
  )

  return steps.map((step, index) => {
    if (index <= completeStepIndex) {
      return {
        ...step,
        index,
        state: "complete",
      }
    } else if (index === completeStepIndex + 1) {
      return {
        ...step,
        index,
        state: "current",
      }
    } else {
      return {
        ...step,
        index,
        state: "pending",
      }
    }
  })
}
