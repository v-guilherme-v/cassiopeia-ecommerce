import styled from "styled-components"

const StyledTitleAttrs = { "data-testid": "StyledTitle" }
const ExtraLarge = styled.h1.attrs(() => StyledTitleAttrs)`
  font-size: ${({ theme }) => theme.title.extraLarge.fontSize};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  line-height: ${({ theme }) => theme.title.extraLarge};
  color: ${({ theme }) => theme.color.black};
`

const Large = styled.h2.attrs(() => StyledTitleAttrs)`
  font-size: ${({ theme }) => theme.title.large.fontSize};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  line-height: ${({ theme }) => theme.title.large};
  color: ${({ theme }) => theme.color.black};
`

const Medium = styled.h3.attrs(() => StyledTitleAttrs)`
  font-size: ${({ theme }) => theme.title.medium.fontSize};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  line-height: ${({ theme }) => theme.title.medium};
  color: ${({ theme }) => theme.color.black};
`

const Small = styled.h4.attrs(() => StyledTitleAttrs)`
  font-size: ${({ theme }) => theme.title.small.fontSize};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  line-height: ${({ theme }) => theme.title.small};
  color: ${({ theme }) => theme.color.black};
`

const ExtraSmall = styled.h5.attrs(() => StyledTitleAttrs)`
  font-size: ${({ theme }) => theme.title.extraSmall.fontSize};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  line-height: ${({ theme }) => theme.title.extraSmall};
  color: ${({ theme }) => theme.color.black};
`

export default {
  ExtraLarge,
  Large,
  Medium,
  Small,
  ExtraSmall
}