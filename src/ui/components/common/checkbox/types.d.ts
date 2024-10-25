import { type ChangeEventHandler } from "react"

export interface CheckboxProps {
  label?: string
  checked?: boolean
  onChange?: ChangeEventHandler<HTMLInputElement>
}