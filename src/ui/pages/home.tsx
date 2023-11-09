import styled from "styled-components"
import { Header, Navigation, TopBar, HeroBanner, Footer } from "@components/widgets"
import { ProductCarousel } from "@components/commerce"

import flowersBanner from "src/assets/flowers-banner.png"
import randomFlower from "src/assets/flower-1.jpg"
import { getViewPortsStyles } from "@theme/selectors"

const navigationLinksMock = Array(5).fill(1)
  .map((_, index) => ({ label: `Item ${index}`, route: `item-${index}` }))

export default function Home (): JSX.Element {
  return (
    <StyledHome className="Home">
      <Header>
        <TopBar />
        <Navigation navigationLinks={navigationLinksMock} />
      </Header>

      <HeroBanner
        title="Flowers"
        description="Our flowers..."
        buttonLabel="Take a look"
        image={{ src: flowersBanner, alt: "Flowers banner" }} />

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