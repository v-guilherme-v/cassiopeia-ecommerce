import { CSSProperties, type ReactNode } from "react"

export interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  icon?: ReactNode
  styles?: CSSProperties
  filledBackground?: boolean
  label?: string
}

export interface IInputWithValidationProps extends Omit<InputProps, "icon"> {
  isValid?: boolean
  showValidator?: boolean
  errorMessage?: string
}