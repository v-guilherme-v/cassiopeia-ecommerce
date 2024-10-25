import type { ChangeEventHandler } from "react"

export interface RadioProps extends React.PropsWithChildren {
  checked?: boolean
  label?: string
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
}