import styled from "styled-components"
import { type TextProps } from "./component"

const Large = styled.span<TextProps>`
  font-family: ${(props) => props.theme.font.family};
  font-size: ${(props) => props.theme.text.large};
  font-weight: ${(props) => props.theme.font.weight.medium};
  color: ${(props) => props.theme.color[
    props.color ?? "black"
  ]};
`

const Default = styled.span<TextProps>`
  font-family: ${(props) => props.theme.font.family};
  font-size: ${(props) => props.theme.text.default};
  font-weight: ${(props) => props.theme.font.weight.regular};
  color: ${(props) => props.theme.color[
    props.color ?? "black"
  ]};
`

const Button = styled.span<TextProps>`
  font-family: ${(props) => props.theme.font.family};
  font-size: ${(props) => props.theme.text.button};
  font-weight: ${(props) => props.theme.font.weight.medium};
  color: ${(props) => props.theme.color[
    props.color ?? "black"
  ]};
`

const Caption = styled.span<TextProps>`
  font-family: ${(props) => props.theme.font.family};
  font-size: ${(props) => props.theme.text.caption};
  font-weight: ${(props) => props.theme.font.weight.medium};
  color: ${(props) => props.theme.color[
    props.color ?? "black"
  ]};
`

const StrikeLarge = styled.span<TextProps>`
  font-family: ${(props) => props.theme.font.family};
  font-size: ${(props) => props.theme.text.strikeLarge};
  font-weight: ${(props) => props.theme.font.weight.medium};
  color: ${(props) => props.theme.color[
    props.color ?? "black"
  ]};
`

const Strike = styled.span<TextProps>`
  font-family: ${(props) => props.theme.font.family};
  font-size: ${(props) => props.theme.text.strike};
  font-weight: ${(props) => props.theme.font.weight.medium};
  color: ${(props) => props.theme.color[
    props.color ?? "black"
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