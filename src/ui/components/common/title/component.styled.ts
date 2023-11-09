import styled from "styled-components"
import { TitleProps } from "./component"

const ExtraLarge = styled.h1<TitleProps>`
  font-size: ${({ theme }) => theme.title.extraLarge.fontSize};
  font-weight: ${(props) => ( props.weight || props.theme.font.weight.medium )};
  line-height: ${(props) => ( props.lineHeight || props.theme.title.extraLarge.lineHeight )};
  color: ${({ theme }) => theme.color.black};
`

const Large = styled.h2<TitleProps>`
  font-size: ${({ theme }) => theme.title.large.fontSize};
  font-weight: ${props => props.theme.font.weight[
    props?.weight || "semibold"
  ]};
  line-height: ${(props) => (
    props.lineHeight || props.theme.title.large.lineHeight
  )};
  color: ${(props) => props.theme.color[
    props?.fontColor || "black"
  ]};
`

const Normal = styled.h3<TitleProps>`
  font-size: ${({ theme }) => theme.title.medium.fontSize};
  font-weight: ${props => props.theme.font.weight[
    props?.weight || "medium"
  ]};
  line-height: ${(props) => (
    props.lineHeight || props.theme.title.medium.lineHeight
  )};
  color: ${({ theme }) => theme.color.black};
`

const Small = styled.h4<TitleProps>`
  font-size: ${({ theme }) => theme.title.small.fontSize};
  font-weight: ${props => props.theme.font.weight[
    props?.weight || "medium"
  ]};
  line-height: ${(props) => (
    props.lineHeight || props.theme.title.small.lineHeight
  )};
  color: ${(props) => props.theme.color[
    props?.fontColor || "black"
  ]};
`

const ExtraSmall = styled.h5<TitleProps>`
  font-size: ${({ theme }) => theme.title.extraSmall.fontSize};
  font-weight: ${props => props.theme.font.weight[
    props?.weight || "medium"
  ]};
  line-height: ${(props) => (
    props.lineHeight || props.theme.title.extraSmall.lineHeight
  )};
  color: ${({ theme }) => theme.color.black};
`

export default {
  ExtraLarge,
  Large,
  Normal,
  Small,
  ExtraSmall
}