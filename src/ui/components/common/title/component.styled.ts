import styled from "styled-components"

const ExtraLarge = styled.h1`
  font-size: ${({ theme }) => theme.title.extraLarge.fontSize};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  line-height: ${({ theme }) => theme.title.extraLarge.lineHeight};
  color: ${({ theme }) => theme.color.black};
`

const Large = styled.h2`
  font-size: ${({ theme }) => theme.title.large.fontSize};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  line-height: ${({ theme }) => theme.title.large.lineHeight};
  color: ${({ theme }) => theme.color.black};
`

const Medium = styled.h3`
  font-size: ${({ theme }) => theme.title.medium.fontSize};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  line-height: ${({ theme }) => theme.title.medium.lineHeight};
  color: ${({ theme }) => theme.color.black};
`

const Small = styled.h4`
  font-size: ${({ theme }) => theme.title.small.fontSize};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  line-height: ${({ theme }) => theme.title.small.lineHeight};
  color: ${({ theme }) => theme.color.black};
`

const ExtraSmall = styled.h5`
  font-size: ${({ theme }) => theme.title.extraSmall.fontSize};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  line-height: ${({ theme }) => theme.title.extraSmall.lineHeight};
  color: ${({ theme }) => theme.color.black};
`

export default {
  ExtraLarge,
  Large,
  Medium,
  Small,
  ExtraSmall
}