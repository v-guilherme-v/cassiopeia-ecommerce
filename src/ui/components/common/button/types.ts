import { type MouseEventHandler, type ReactNode } from "react"

export enum ButtonModels {
  PRIMARY = "primary",
  OUTLINED = "outlined",
  LINK = "link"
}

export enum ButtonSizes {
  NORMAL = "normal",
  ICON = "icon",
  LARGE = "large"
}

export enum ButtonIconPositions {
  PREPEND = "prepend",
  APPEND = "append"
}

export interface ButtonProps {
  model?: ButtonModels
  size?: ButtonSizes
  backgroundColor?: string
  icon?: {
    element: ReactNode
    position?: ButtonIconPositions
  }
  disabled?: boolean
  rounded?: boolean
  onClick?: MouseEventHandler<HTMLElement>
}