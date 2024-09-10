export interface ISelectOption {
  label: string
  value: string
}

export interface ISelectProps {
  mode?: "single" | "multi"
  options: ISelectOption[]
  placeholder: string
}

export interface ISelectedOptionsProps extends Pick<ISelectProps, "mode"> {
  selectedOptions: ISelectOption[]
  onCrumbClick: (option: ISelectOption) => void
}

export interface IMultiOptionsCrumbsProps extends Pick<ISelectedOptionsProps, "selectedOptions" | "onCrumbClick"> {}