import styled, { useTheme } from "styled-components"

import {
  Header,
  Navigation,
  TopBar,
  BannerContainer,
  HeroBanner,
  Footer
} from "@components/widgets"

import { ProductCarousel } from "@components/commerce"

import flowersBanner from "src/assets/flowers-banner.png"
import randomFlower from "src/assets/flower-1.png"

import { getColorStyles, getViewPortsStyles } from "@theme/selectors"
import type { ColorStyles } from "@theme/types"

export default function Home (): JSX.Element {
  const colors: ColorStyles = getColorStyles({ theme: useTheme() })

  return (
    <StyledHome className="Home">
      <Header>
        <TopBar />
        <Navigation />
      </Header>

      <HeroBanner
        title={{ text: "Flowers", color: colors.snow }}
        description={{ text: "Our flowers", color: colors.snow }}
        button={{ text: "See more", backgroundColor: colors.black }}
        image={{ src: flowersBanner, alt: "Flowers banner" }}
      />

      <BannerContainer>
        <HeroBanner
          title={{ text: "Flowers", color: colors.snow }}
          description={{ text: "Our flowers", color: colors.snow }}
          button={{ text: "See more", backgroundColor: colors.black }}
          image={{ src: flowersBanner, alt: "Flowers banner" }}
        />
        <HeroBanner
          title={{ text: "Flowers", color: colors.snow }}
          description={{ text: "Our flowers", color: colors.snow }}
          button={{ text: "See more", backgroundColor: colors.black }}
          image={{
            src: flowersBanner,
            alt: "Flowers banner"
          }}
        />
      </BannerContainer>

      <ProductCarousel carouselTitle="Recommended for you"
        products={
          Array(16).fill(1).map((_, index) => ({
            id: index.toString(),
            displayName: `Flower ${index + 1}`,
            imageSource: randomFlower,
            pricing: {
              listPrice: 90.99,
              salePrice: 80.99
            }
          }))
        }/>

      <Footer />
    </StyledHome>
  )
}

const StyledHome = styled.section`
  ${HeroBanner.Styled} {
    margin-top: 40.5px;
  }

  ${Footer.Styled} {
    margin-top: 100px;
  }

  @media(max-width: ${props => getViewPortsStyles(props).small}) {
    ${HeroBanner.Styled} {
      margin-top: 1.75rem;
    } 
  }
`