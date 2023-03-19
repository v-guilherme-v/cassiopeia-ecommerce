import styled from "styled-components"
import { type TextProps } from "./component"

const Large = styled.span<TextProps>`
  font-family: ${(props) => props.theme.font.family};
  font-size: ${(props) => props.theme.text.large};
  font-weight: ${(props) => props.theme.font.weight.medium};
  line-height: ${(props) => props.theme.text.large};
  color: ${(props) => props.theme.color[
    props.color ?? "inherit"
  ]};
`

const Default = styled.span<TextProps>`
  font-family: ${(props) => props.theme.font.family};
  font-size: ${(props) => props.theme.text.default};
  font-weight: ${(props) => props.theme.font.weight.regular};
  line-height: ${(props) => props.theme.text.default};
  color: ${(props) => props.theme.color[
    props.color ?? "inherit"
  ]};
`

const Button = styled.span<TextProps>`
  font-family: ${(props) => props.theme.font.family};
  font-size: ${(props) => props.theme.text.button};
  font-weight: ${(props) => props.theme.font.weight.medium};
  line-height: ${(props) => props.theme.text.button};
  color: ${(props) => props.theme.color[
    props.color ?? "inherit"
  ]};
`

const Caption = styled.span<TextProps>`
  font-family: ${(props) => props.theme.font.family};
  font-size: ${(props) => props.theme.text.caption};
  font-weight: ${(props) => props.theme.font.weight.medium};
  line-height: ${(props) => props.theme.text.caption};
  color: ${(props) => props.theme.color[
    props.color ?? "inherit"
  ]};
`

const StrikeLarge = styled.span<TextProps>`
  font-family: ${(props) => props.theme.font.family};
  font-size: ${(props) => props.theme.text.strikeLarge};
  font-weight: ${(props) => props.theme.font.weight.medium};
  line-height: ${(props) => props.theme.text.strikeLarge};
  color: ${(props) => props.theme.color[
    props.color ?? "inherit"
  ]};
`

const Strike = styled.span<TextProps>`
  font-family: ${(props) => props.theme.font.family};
  font-size: ${(props) => props.theme.text.strike};
  font-weight: ${(props) => props.theme.font.weight.medium};
  line-height: ${(props) => props.theme.text.strike};
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
  Strike
}