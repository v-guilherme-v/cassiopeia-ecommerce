import { type ReactNode, type ChangeEventHandler } from "react"

export interface InputProps {
  icon?: ReactNode
  name: string
  type?: string
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
  placeholder?: string
}