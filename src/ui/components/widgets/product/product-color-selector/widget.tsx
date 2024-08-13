import {
  type ChangeEvent,
  type ChangeEventHandler,
  type PropsWithChildren,
  useId,
  useState
} from "react"

import styled from "styled-components"
import { getColorStyles } from "@theme/selectors"
import { getOptionStyleRules } from "./widget.styled.utils"

export interface ColorSelectionOptionProps {
  name: string
  color?: string
  selected?: boolean
  onColorOptionSelected: ChangeEventHandler<HTMLInputElement>
}

function ColorSelectionOption (props: PropsWithChildren<ColorSelectionOptionProps>): JSX.Element {
  const { onColorOptionSelected: _, ...restProps } = props
  return (
    <StyledColorSelectionOption {...restProps}>
      <input
        type="radio"
        name={props.name}
        checked={props.selected}
        onChange={event => { props.onColorOptionSelected(event) }}
      />
    </StyledColorSelectionOption>
  )
}

const StyledColorSelectionOption = styled.div<Omit<ColorSelectionOptionProps, "onColorOptionSelected">>`
  & input {
    appearance: none;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    cursor: pointer;
    background-color: ${props => getColorStyles(props).paleGrey};
    background-color: ${props => props.color};
    outline: ${props => getOptionStyleRules(props).outline};
    border: ${props => getOptionStyleRules(props).border};
  }
`

interface ColorSelectorProps {
  initialColor?: string
  colorOptions: Array<{
    id: string
    value: string
  }>
}

function ColorSelector (props: ColorSelectorProps): JSX.Element {
  const randomId = useId()
  const initialColor = props.colorOptions.find(color => color.id === props.initialColor)
  const [ selectedColor, setSelectedColor ] = useState<string>(initialColor?.id ?? "")

  const onColorOptionSelected = (event: ChangeEvent<HTMLInputElement>): void => {
    setSelectedColor(event.target.name)
  }

  return (
    <StyledColorSelector>
      <div data-name="ColorSelectorGroup">
        {props.colorOptions.map((colorOption, index) =>
          <ColorSelectionOption
            key={`${randomId}-${index}`}
            name={colorOption.id}
            color={colorOption.value}
            selected={colorOption.id === selectedColor}
            onColorOptionSelected={onColorOptionSelected}
          />
        )}
      </div>
    </StyledColorSelector>
  )
}

const StyledColorSelector = styled.div`
  div[data-name="ColorSelectorGroup"] {
    display: flex;
    align-items: center;
    gap: 19px;
  }
`

ColorSelector.Styled = StyledColorSelector

export default ColorSelector