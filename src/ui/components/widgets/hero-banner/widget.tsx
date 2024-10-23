import { StyledHeroBanner, StyledHeroBannerActions } from "./widget.styled"
import { Container, Image, Title, Button } from "@components/common"
import { ThinArrowIcon } from "@components/icons"
import { useHeroBannerConfig } from "./hooks"

import type { HeroBannerProps } from "@widgets/types"

function HeroBanner (props: HeroBannerProps): JSX.Element {
  // Props may contain custom colors, buttons...
  const config = useHeroBannerConfig(props)

  return (
    <Container>
      <StyledHeroBanner>
        <Image src={config.image.src} alt={config.image.alt}/>
        <StyledHeroBannerActions>
          <Title.Large fontColor={config.title.color} weight="medium">
            { config.title.text }
          </Title.Large>
          <Title.Small fontColor={config.description.color}>
            { config.description.text }
          </Title.Small>
          <Button
            model={config.button.model}
            icon={{ element: <ThinArrowIcon /> }}
          >
            { config.button.text }
          </Button>
        </StyledHeroBannerActions>
      </StyledHeroBanner>
    </Container>
  )
}

HeroBanner.Styled = StyledHeroBanner

export default HeroBanner