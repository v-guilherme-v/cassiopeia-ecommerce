import { type ReactNode } from "react"

export enum ButtonSizes {
  DEFAULT = "default",
  ICON = "icon",
  LARGE = "large"
}

export enum ButtonIconPositions {
  PREPEND = "prepend",
  APPEND = "append",
}

export interface ButtonProps {
  label?: string
  size?: ButtonSizes
  outlined?: boolean
  color?: string
}

export interface ButtonPropsHasIcon extends ButtonProps {
  icon?: {
    element: ReactNode
    position?: ButtonIconPositions
  }
}

export interface ButtonPropsAsIcon extends ButtonPropsHasIcon {
  rounded?: boolean
}