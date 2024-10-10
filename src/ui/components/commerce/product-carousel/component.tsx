import styled from "styled-components"

import ProductCarouselNavigationControls from "./components/product-carousel-navigation-controls/component"
import { Block, Container, Title } from "@components/common"
import ProductCard from "../product-card/component"

import { type Product } from "@schemas/commerce"
import { SwiperContext } from "@contexts"
import { SwiperContextProvider } from "@providers"

import { Swiper, SwiperSlide } from "swiper/react"
import swiperConfigs from "./settings"

import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/navigation"
import { getViewPortsStyles } from "@theme/selectors"

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
            <Block data-name="HeadingContainer">
              <Title>{carouselTitle}</Title>
              <ProductCarouselNavigationControls />
            </Block>
          </StyledProductCarouselHeading>
          <SwiperContext.Consumer>
            {swiperContext => (
              <Swiper
                loop
                // Disabling autoplay for now
                // autoplay={{
                //   disableOnInteraction: false
                // }}
                spaceBetween={swiperConfigs.spaceBetween}
                onSwiper={swiperContext?.onSwiper}
                onAutoplay={swiperContext?.onAutoplay}
                modules={swiperConfigs.modules}
                breakpoints={swiperConfigs.breakpoints}
              >
                {products.map(product => (
                  <SwiperSlide key={product.id}>
                    <ProductCard product={product} mobileResolution="892px"/>
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

  [data-name="HeadingContainer"] {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media(max-width: ${props => getViewPortsStyles(props).medium}) {
    ${Title.Styled.Normal} {
      font-size: 17px;
      line-height: 19px;
      font-weight: 600;
    }

    ${ProductCarouselNavigationControls.Styled} {
      display: none;
    }

    margin-bottom: 23.5px;
  }
`

const StyledProductCarousel = styled.div`
  margin: 80px 0 60px;

  @media(max-width: 1200px) {
    max-width: 865px;
    margin: 2rem auto 2rem;
  }

  @media(max-width: 767px) {
    max-width: 550px;
  }

  @media(max-width: 576px) {
    max-width: 350px;
  }

  @media(max-width: 360px) {
    max-width: 163px;
  }

  @media(max-width: ${props => getViewPortsStyles(props).medium}) {
    margin: 27px auto 27px;
  }
`

ProductCarousel.Styled = StyledProductCarousel

export default ProductCarousel