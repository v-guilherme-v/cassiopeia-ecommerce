import styled from "styled-components"
import { Header, Navigation, TopBar, HeroBanner, Footer } from "@components/widgets"
import { ProductCard } from "@components/commerce"

import flowers from "src/assets/flowers-faded.png"
import flower1 from "src/assets/flower-1.jpg"

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
        image={{ src: flowers, alt: "Flowers banner" }}/>

      <ProductCard product={{
        displayName: "Flower 1",
        imageSource: flower1,
        pageRoute: ""
      }}/>

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
`