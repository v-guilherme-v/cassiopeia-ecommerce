import styled from "styled-components"

import ProductCarouselNavigationControls from "./components/product-carousel-navigation-controls/component"
import { Container, Title, FlexContainer } from "@components/common"
import ProductCard from "../product-card/component"

import { type Product } from "@schemas/commerce"
import { SwiperContext } from "@contexts"
import { SwiperContextProvider } from "@providers"

import { Swiper, SwiperSlide } from "swiper/react"
import swiperConfigs from "./settings"

import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/navigation"

interface ProductCarouselProps {
  carouselTitle?: string
  products?: Array<Partial<Product>>
}

function ProductCarousel ({ carouselTitle = "No title", products = [] }: ProductCarouselProps): JSX.Element | null {
  return products.length > 0
    ? (<Container>
      <StyledProductCarousel>
        <SwiperContextProvider>
          <StyledProductCarouselHeading>
            <FlexContainer alignItems="center" justifyContent="space-between">
              <Title>{carouselTitle}</Title>
              <ProductCarouselNavigationControls />
            </FlexContainer>
          </StyledProductCarouselHeading>
          <SwiperContext.Consumer>
            {swiperContext => (
              <Swiper
                autoplay={swiperConfigs.autoplay}
                spaceBetween={swiperConfigs.spaceBetween}
                onSwiper={swiperContext?.onSwiper}
                onAutoplay={swiperContext?.onAutoplay}
                modules={swiperConfigs.modules}
                breakpoints={swiperConfigs.breakpoints}
              >
                {products.map(product => (
                  <SwiperSlide key={product.id}>
                    <ProductCard product={product} />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </SwiperContext.Consumer>
        </SwiperContextProvider>
      </StyledProductCarousel>
    </Container>)
    : null
}

const StyledProductCarouselHeading = styled.div`
  margin-bottom: 44px;

  @media(max-width: 600px) {
    ${Title.Styled.Small} {
      text-align: center;
      width: 100%;
    }

    ${ProductCarouselNavigationControls.Styled} {
      display: none;
    }
  }
`

const StyledProductCarousel = styled.div`
  margin: 80px 0 60px;

  @media(max-width: 1190px) {
    max-width: 865px;
    margin: 2rem auto 2rem;
  }

  @media(max-width: 895px) {
    max-width: 560px;
  }

  @media(max-width: 600px) {
    max-width: 260px;
  }
`

ProductCarousel.Styled = StyledProductCarousel

export default ProductCarousel