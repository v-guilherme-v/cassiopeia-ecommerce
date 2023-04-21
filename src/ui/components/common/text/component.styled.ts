import styled from "styled-components"
import { type TextProps } from "./component"

const Large = styled.span<TextProps>`
  font-family: ${(props) => props.theme.font.family};
  font-size: ${(props) => props.theme.text.large.fontSize};
  font-weight: ${(props) => props.theme.font.weight.medium};
  line-height: ${(props) => props.theme.text.large.lineHeight};
  color: ${(props) => props.theme.color[
    props.color ?? "inherit"
  ]};
`

const Default = styled.span<TextProps>`
  font-family: ${(props) => props.theme.font.family};
  font-size: ${(props) => props.theme.text.default.fontSize};
  font-weight: ${(props) => props.theme.font.weight.regular};
  line-height: ${(props) => props.theme.text.default.lineHeight};
  color: ${(props) => props.theme.color[
    props.color ?? "inherit"
  ]};
`

const Button = styled.span<TextProps>`
  font-family: ${(props) => props.theme.font.family};
  font-size: ${(props) => props.theme.text.button.fontSize};
  font-weight: ${(props) => props.theme.font.weight.medium};
  line-height: ${(props) => props.theme.text.button.lineHeight};
  color: ${(props) => props.theme.color[
    props.color ?? "inherit"
  ]};
`

const Caption = styled.span<TextProps>`
  font-family: ${(props) => props.theme.font.family};
  font-size: ${(props) => props.theme.text.caption.fontSize};
  font-weight: ${(props) => props.theme.font.weight.medium};
  line-height: ${(props) => props.theme.text.caption.lineHeight};
  color: ${(props) => props.theme.color[
    props.color ?? "inherit"
  ]};
`

const StrikeLarge = styled.span<TextProps>`
  font-family: ${(props) => props.theme.font.family};
  font-size: ${(props) => props.theme.text.strikeLarge.fontSize};
  font-weight: ${(props) => props.theme.font.weight.medium};
  line-height: ${(props) => props.theme.text.strikeLarge.lineHeight};
  color: ${(props) => props.theme.color[
    props.color ?? "inherit"
  ]};
`

const Strike = styled.span<TextProps>`
  font-family: ${(props) => props.theme.font.family};
  font-size: ${(props) => props.theme.text.strike.fontSize};
  font-weight: ${(props) => props.theme.font.weight.medium};
  line-height: ${(props) => props.theme.text.strike.lineHeight};
  color: ${(props) => props.theme.color[
    props.color ?? "inherit"
  ]};
`

const Radio = styled.span<TextProps>`
  font-family: ${(props) => props.theme.font.family};
  font-size: ${(props) => props.theme.text.default.fontSize};
  font-weight: ${(props) => props.theme.font.weight.medium};
  line-height: ${(props) => props.theme.text.default.lineHeight};
  color: ${(props) => props.theme.color[
    props.color ?? "inherit"
  ]};
`

export default {
  Large,
  Default,
  Button,
  Caption,
  StrikeLarge,
  Strike,
  Radio
}