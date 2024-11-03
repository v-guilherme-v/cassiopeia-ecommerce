import styled from "styled-components"
import { type TextProps } from "./component"
import { ColorStylesKey } from "@theme/types"

const Normal = styled.span.attrs({
  "data-name": "StyledText"
})<TextProps>`
  font-family: ${(props) => props.theme.font.family};
  font-size: ${(props) => props.theme.text.default.fontSize};
  font-weight: ${(props) => props.theme.font.weight[
    props?.weight || "regular"
  ]};
  line-height: ${(props) => props.theme.text.default.lineHeight};
  color: ${(props) => props.theme.color[
    (props?.color ?? "inherit") as ColorStylesKey
  ]};
`

const Large = styled(Normal)`
  font-size: ${(props) => props.theme.text.large.fontSize};
  font-weight: ${(props) => props.theme.font.weight[
    props?.weight || "regular"
  ]};
  line-height: ${(props) => props.lineHeight || props.theme.text.large.lineHeight};
  color: ${(props) => props.theme.color[
    (props.color ?? "inherit") as ColorStylesKey
  ]};
`

const Button = styled(Normal)`
  font-size: ${(props) => props.theme.text.button.fontSize};
  font-weight: ${(props) => props.theme.font.weight[
    props?.weight || "medium"
  ]};
  line-height: ${(props) => props.theme.text.button.lineHeight};
  color: ${(props) => props.theme.color[
    (props?.color ?? "inherit") as ColorStylesKey
  ]};
`

const Body = styled(Normal)`
  font-size: ${(props) => props.theme.text.body.fontSize};
  line-height: ${(props) => props.theme.text.body.lineHeight};
  color: ${(props) => props.theme.color[
    (props?.color ?? "inherit") as ColorStylesKey
  ]};
`

const Caption = styled(Normal)`
  font-size: ${(props) => props.theme.text.caption.fontSize};
  font-weight: ${(props) => props.theme.font.weight[
    props?.weight || "regular"
  ]};
  line-height: ${(props) => props.theme.text.caption.lineHeight};
  color: ${(props) => props.theme.color[
    (props.color ?? "inherit") as ColorStylesKey
  ]};
`

const StrikeLarge = styled(Normal)`
  font-size: ${(props) => props.theme.text.strikeLarge.fontSize};
  font-weight: ${(props) => props.theme.font.weight[
    props?.weight || "medium"
  ]};
  line-height: ${(props) => props.theme.text.strikeLarge.lineHeight};
  color: ${(props) => props.theme.color[
    (props.color ?? "inherit") as ColorStylesKey
  ]};
  text-decoration: line-through;
`

const Strike = styled(Normal)`
  font-size: ${(props) => props.theme.text.strike.fontSize};
  font-weight: ${(props) => props.theme.font.weight[
    props?.weight || "medium"
  ]};
  line-height: ${(props) => props.theme.text.strike.lineHeight};
  color: ${(props) => props.theme.color[
    (props.color ?? "inherit") as ColorStylesKey
  ]};
  text-decoration: line-through;
`

const Radio = styled(Normal)`
  font-size: ${(props) => props.theme.text.default.fontSize};
  font-weight: ${(props) => props.theme.font.weight[
    props?.weight || "medium"
  ]};
  line-height: ${(props) => props.theme.text.default.lineHeight};
  color: ${(props) => props.theme.color[
    (props.color ?? "inherit") as ColorStylesKey
  ]};
`

export default {
  Large,
  Normal,
  Button,
  Body,
  Caption,
  StrikeLarge,
  Strike,
  Radio
}