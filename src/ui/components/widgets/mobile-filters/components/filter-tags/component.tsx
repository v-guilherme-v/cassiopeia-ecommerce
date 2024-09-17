/* eslint-disable indent */
import styled, { css } from "styled-components"

import { Block, Text } from "@ui/components/common"
import { getColorStyles } from "@ui/theme/selectors"
import { type PropsWithChildren } from "react"

interface ISelectableFilterTagProps {
  name: string
  label: string
  colorIndicator?: string
  isSelected?: boolean
  onFilterTagClick?: (tagInfo: Pick<ISelectableFilterTagProps, "name" | "isSelected">) => void
}

export default function SelectableFilterTag (
  props: PropsWithChildren<ISelectableFilterTagProps>
): JSX.Element {
  return (
    <StyledSelectableFilterTag
      isSelected={props.isSelected}
      colorIndicator={props.colorIndicator}
    >
      <Block
        data-name="SelectableFilterTag"
        onClick={() => {
          if (typeof props?.onFilterTagClick === "function") {
            props.onFilterTagClick({ name: props.name, isSelected: props?.isSelected ?? false })
          }
        }}
      >
        <Block data-name="SelectableFilterTag__Color"/>
        <Text.Caption>
          {props.label}
        </Text.Caption>
      </Block>
    </StyledSelectableFilterTag>
  )
}

interface IStyledSelectableFilterTag extends Pick<ISelectableFilterTagProps, "isSelected" | "colorIndicator"> {}

const StyledSelectableFilterTag = styled.div.attrs({
  "data-name": "StyledSelectableFilterTag"
})<IStyledSelectableFilterTag>`
  cursor: pointer;

  ${Block.Styled}[data-name="SelectableFilterTag"] {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid ${props => getColorStyles(props).grey};

    ${props => props.isSelected === true && css`
      color: ${props => getColorStyles(props).white};      
      background-color: ${props => getColorStyles(props).primary};
      border: 1px solid ${props => getColorStyles(props).primary};
    `}

    ${Text.Styled.Caption} {
      white-space: nowrap;
    }

    ${Block.Styled}[data-name="SelectableFilterTag__Color"] {
      display: none;
      width: 13px;
      height: 13px;
      border-radius: 50%;
    }

    ${props => {
      return props.colorIndicator !== null &&
        props.colorIndicator !== undefined && css`
          ${Block.Styled}[data-name="SelectableFilterTag__Color"] {
            display: block;
            background-color: ${props.colorIndicator};
          }
        `
    }}
  }
`