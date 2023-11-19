import styled from "styled-components"
import { TitleProps } from "./component"

import {
  getColorStyles,
  getFontStyles,
  getTitleStyles
} from "@theme/selectors"

import { TitleStyle } from "@theme/types"

const ExtraLarge = styled.h1<TitleProps>`
  font-size: ${props => getTitleStyles(props).extraLarge.fontSize};
  font-weight: ${props => ( props.weight || getFontStyles(props).weight.medium )};
  line-height: ${props => ( props.lineHeight || getTitleStyles(props).extraLarge.lineHeight)};
  color: ${props => getColorStyles(props).black};
`

const Large = styled.h2<TitleProps>`
  font-size: ${props => getTitleStyles(props).large.fontSize};
  font-weight: ${props => getFontStyles(props).weight[props?.weight || "semibold"]};
  line-height: ${props => getTitleStyles(props).large[
    (props?.lineHeight || "lineHeight") as keyof TitleStyle
  ]};
  color: ${props => props?.fontColor || getColorStyles(props).black};
`

const Normal = styled.h3<TitleProps>`
  font-size: ${props => getTitleStyles(props).medium.fontSize};
  font-weight: ${props => getFontStyles(props).weight[props?.weight || "medium"]};
  line-height: ${props => props?.lineHeight || getTitleStyles(props).medium.lineHeight};
  color: ${props => getColorStyles(props).black};
`

const Small = styled.h4<TitleProps>`
  font-size: ${props => getTitleStyles(props).small.fontSize};
  font-weight: ${props => getFontStyles(props).weight[props?.weight || "medium"]};
  line-height: ${(props) => props.lineHeight || getTitleStyles(props).small.lineHeight};
  color: ${(props) => props?.fontColor || getColorStyles(props).black};
`

const ExtraSmall = styled.h5<TitleProps>`
  font-size: ${props => getTitleStyles(props).extraSmall.fontSize};
  font-weight: ${props => getFontStyles(props).weight[props?.weight || "medium"]};
  line-height: ${(props) => props.lineHeight || getTitleStyles(props).extraSmall.lineHeight};
  color: ${props => getColorStyles(props).black};
`

export default {
  ExtraLarge,
  Large,
  Normal,
  Small,
  ExtraSmall
}