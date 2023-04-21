import { type ReactNode } from "react"

export enum ButtonTypes {
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
  buttonType: ButtonTypes
  label?: string
  size?: ButtonSizes
  color?: string
  icon?: {
    element: ReactNode
    position?: ButtonIconPositions
  }
  rounded?: boolean
}