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
  index?: number
  title: string
  component: () => JSX.Element
  state?: TStepState
  actions?: Omit<IStepActionsProps, "onPrevButtonClick" | "onNextButtonClick">
}

export interface IStepperProps {
  steps: IStepperStep[]
}

export interface IStepBulletProps extends Pick<React.HTMLAttributes<HTMLDivElement>, "role">{
  order: number
  name: string
  state: TStepState
}

export type TGoToStepAction = "prev" | "next"
