import { type ReactNode } from "react"

export interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  icon?: ReactNode
  customStyles?: {
    textColor?: string
    borderColor?: string
    backgroundColor?: string
    placeholderColor?: string
  }
}