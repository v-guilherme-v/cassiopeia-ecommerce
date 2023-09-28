import { Header, Navigation, TopBar, HeroBanner, Footer } from "@components/widgets"
import styled from "styled-components"

import flowers from "src/assets/flowers-faded.png"

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