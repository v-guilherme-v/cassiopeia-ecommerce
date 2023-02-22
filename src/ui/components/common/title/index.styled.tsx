import styled from "styled-components"

const ExtraLarge = styled.h1`
    font-size: ${props => props.theme.title.extraLarge};
    font-weight: ${props => props.theme.font.weight.medium};
    color: #000;
`

const Large = styled.h2`
    font-size: ${props => props.theme.title.large};
    font-weight: ${props => props.theme.font.weight.semibold};
    color: #000;
`

const Medium = styled.h3`
    font-size: ${props => props.theme.title.medium};
    font-weight: ${props => props.theme.font.weight.medium};
    color: #000;

`

const Small = styled.h4`
    font-size: ${props => props.theme.title.small};
    font-weight: ${props => props.theme.font.weight.medium};
    color: #000;
`

const ExtraSmall = styled.h5`
    font-size: ${props => props.theme.title.extraSmall};
    font-weight: ${props => props.theme.font.weight.medium};
    color: #000;
`

export default {
    ExtraLarge,
    Large,
    Medium,
    Small,
    ExtraSmall
}