import { useCallback, useState } from "react"
import { ArrowDownIcon } from "@components/icons"

import StyledSelect from "./component.styled"
import { Block, Text } from "@components/common"

import type {
  ISelectOption,
  ISelectProps,
  ISelectedOptionsProps,
  IMultiOptionsCrumbsProps
} from "./types"

function MultiOptionsCrumbs (props: IMultiOptionsCrumbsProps): JSX.Element {
  return (
    <Block data-name="MultiOptionsCrumbs">
      {
        props.selectedOptions.map(option => {
          return (
            <Block data-name="MultiOptionsCrumbs__Crumb" key={option.value}
              onMouseDown={(event) => {
                event.preventDefault()
                props.onCrumbClick(option)
              }}
            >
              <Text.Caption color="white" weight="semibold">{option.label}</Text.Caption>
            </Block>
          )
        })
      }
    </Block>
  )
}

function SelectedOptions (props: ISelectedOptionsProps): JSX.Element {
  return (
    <Block data-name="Select__SelectedOptions">
      { props.mode === "single"
        ? <Text.Caption data-name="Select__SelectedOption">{props.selectedOptions[0].label}</Text.Caption>
        : <MultiOptionsCrumbs selectedOptions={props.selectedOptions} onCrumbClick={props.onCrumbClick}/>
      }
    </Block>
  )
}

function SelectOption (props: { option: ISelectOption, onOptionSelection: (option: ISelectOption) => void }): JSX.Element {
  return (
    <Text.Caption data-name="Select__SelectOption"
      onMouseDown={(event) => {
        // This way onBlur is not triggered
        event.preventDefault()
        props.onOptionSelection(props.option)
      }}
    >
      {props.option.label}
    </Text.Caption>
  )
}

function Select (props: ISelectProps): JSX.Element {
  const selectionMode = props.mode ?? "single"

  const [ isSelectOpen, setIsSelectOpen ] = useState<boolean>(false)
  const [ selectedOptions, setSelectedOptions ] = useState<ISelectOption[]>([])

  const onClickOverSelect = useCallback(() => {
    setIsSelectOpen(curr => !curr)
  }, [])

  const onSelectBlur = useCallback(() => {
    setIsSelectOpen(false)
  }, [])

  const onOptionSelection = useCallback((newOption: ISelectOption) => {
    if (selectionMode === "single") {
      setSelectedOptions([ newOption ])
      setIsSelectOpen(false)
    } else if (selectionMode === "multi") {
      setSelectedOptions(currOptions => {
        return [
          ...currOptions,
          newOption
        ]
      })
    }
  }, [ selectedOptions, selectionMode ])

  const onCrumbClick = useCallback((clickedCrumb: ISelectOption) => {
    setSelectedOptions(currOptions => {
      return currOptions.filter(option => option.value !== clickedCrumb.value)
    })
  }, [ selectedOptions ])

  return (
    <StyledSelect isSelectOpen={isSelectOpen}>
      <Block data-name="Select">
        <Block data-name="Select__Box"
          tabIndex={0}
          onBlur={onSelectBlur}
          onClick={onClickOverSelect}
        >
          {
            selectedOptions.length === 0
              ? <Text.Caption data-name="Select__Placeholder">{props.placeholder}</Text.Caption>
              : <SelectedOptions mode={selectionMode} selectedOptions={selectedOptions} onCrumbClick={onCrumbClick}/>
          }
          <Block data-name="Select__ToggleAction">
            <ArrowDownIcon />
          </Block>
        </Block>
        {isSelectOpen && selectedOptions.length !== props.options.length && (
          <Block data-name="Select__SelectOptions">
            {props.options
              .filter(option => !selectedOptions.includes(option))
              .map(option => {
                return (
                  <SelectOption key={option.value}
                    option={option}
                    onOptionSelection={onOptionSelection}
                  />
                )
              })
            }
          </Block>
        )}

      </Block>
    </StyledSelect>
  )
}

export default Select