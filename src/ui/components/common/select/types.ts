export interface ISelectOption {
  label: string
  value: string
}

export interface ISelectProps {
  mode?: "single" | "multi"
  options: ISelectOption[]
  onChange: (options: ISelectOption | ISelectOption[]) => void
  placeholder: string
}

export interface ISelectedOptionsProps extends Pick<ISelectProps, "mode"> {
  selectedOptions: ISelectOption[]
  onCrumbClick: (option: ISelectOption) => void
}

export interface IMultiOptionsCrumbsProps extends Pick<ISelectedOptionsProps, "selectedOptions" | "onCrumbClick"> {}