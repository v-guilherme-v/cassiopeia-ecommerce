import styled from "styled-components"
import { Autoplay, Navigation, Pagination } from "swiper/modules"

import { HeroBanner } from "@widgets/index"
import { type IHeroBannerCarouselProps } from "@widgets/types"

import { Block, Button, Carousel, Container } from "@components/common"
import CarouselNavigationControls from "@components/common/carousel/components/navigation-controls/component"
import { getColorStyles, getViewPortsStyles } from "@ui/theme/selectors"

export default function HeroBannerCarousel (props: IHeroBannerCarouselProps): JSX.Element | null {
  if (props.heroBanners.length === 0)
    return null

  return (
    <StyledHeroBannerCarousel>
      <Carousel
        pagination={{ clickable: true }}
        modules={[ Navigation, Autoplay, Pagination ]}
        navigationControls={<CarouselNavigationControls />}
      >
        {props.heroBanners.map((heroBanner, index) =>
          <HeroBanner
            key={index}
            title={heroBanner.title}
            button={heroBanner.button}
            description={heroBanner.description}
            image={heroBanner.image}
          />
        )}
      </Carousel>
    </StyledHeroBannerCarousel>
  )
}

const StyledHeroBannerCarousel = styled.div`
  --container-size: 1160px;
  max-width: calc(var(--container-size) + 2rem);
  margin: 0 auto;
  padding: 0 16px;

  ${Container.Styled} {
    padding: 0;
  }

  ${CarouselNavigationControls.Styled} {
    position: absolute;
    bottom: 8px;
    right: 8px;
    z-index: 1;

    ${Block.Styled}[data-name="CarouselNavigationControls"] {
      gap: 0;
    }

    ${Button.Styled.AsIcon} {
      padding: 4px 8px;
      background-color: ${props => getColorStyles(props).black};
    
      svg,
      &:disabled svg {
        color: ${props => getColorStyles(props).white};
      }
    }

    ${Button.Styled.AsIcon}:disabled {
      background-color: ${props => getColorStyles(props).grey};
    }

    ${Button.Styled.AsIcon}[data-name="CarouselPrev__Control"] {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    ${Button.Styled.AsIcon}[data-name="CarouselNext__Control"] {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }

  @media (max-width: ${props => getViewPortsStyles(props).medium}) {
    // Images won't break on mobile (rule will be removed)
    ${HeroBanner.Styled} img {
      object-fit: cover;
    }

    ${CarouselNavigationControls.Styled} {
      display: none;
    }
  }
`