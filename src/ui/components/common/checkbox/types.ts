import { type ChangeEventHandler } from "react"

export interface CheckboxProps {
  label?: string
  isChecked: boolean
  onChange: ChangeEventHandler<HTMLInputElement>
}