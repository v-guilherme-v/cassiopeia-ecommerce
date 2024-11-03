import type { ReactNode } from "react"

export type TStepState = "complete" | "current" | "pending"

export interface IStepActionsProps {
  prevButtonLabel?: string
  onPrevButtonClick: () => void
  isPrevButtonHidden?: boolean
  isPrevButtonDisabled?: boolean
  nextButtonLabel?: string
  onNextButtonClick: () => void
  isNextButtonHidden?: boolean
  isNextButtonDisabled?: boolean
}

export interface IStepperStep {
  id: string
  title: string
  component: ReactNode
  state?: TStepState
  actions?: Omit<IStepActionsProps, "onPrevButtonClick" | "onNextButtonClick">
}

export interface IStepperProps {
  steps: IStepperStep[]
}

export interface IStepBulletProps {
  order: number
  name: string
  state: TStepState
}