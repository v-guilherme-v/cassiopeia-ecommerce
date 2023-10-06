import { StyledHeroBanner, StyledHeroBannerActions } from "./widget.styled"
import { Container, Image, Title, Button } from "@components/common"
import { ThinArrowIcon } from "@components/icons"

import { useTheme } from "styled-components"

interface HeroBannerProps {
  title: string
  description: string
  buttonLabel: string
  image: {
    src: string
    alt: string
  }
}

function HeroBanner (props: HeroBannerProps): JSX.Element {
  const theme = useTheme()
  return (
    <Container>
      <StyledHeroBanner>
        <Image src={props.image.src} alt="Flower banner"/>
        <StyledHeroBannerActions>
          <Title.Large weight="medium">{props.title}</Title.Large>
          <Title.Small>{props.description}</Title.Small>
          <Button
            background={theme.color.black}
            icon={{ element: <ThinArrowIcon /> }}
          >{props.buttonLabel}</Button>
        </StyledHeroBannerActions>
      </StyledHeroBanner>
    </Container>
  )
}

HeroBanner.Styled = StyledHeroBanner

export default HeroBanner