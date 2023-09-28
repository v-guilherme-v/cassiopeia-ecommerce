import type { ChangeEventHandler } from "react"

export interface TextAreaProps {
  cols?: number
  rows?: number
  placeholder?: string
  value: string
  onChange: ChangeEventHandler<HTMLTextAreaElement>
}