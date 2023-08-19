import { Header } from "@components/widgets"
import styled from "styled-components"

import Navigation from "@components/widgets/navigation/widget"
import TopBar from "@components/widgets/top-bar/widget"

const navigationLinksMock = Array(5).fill(1).map((_, index) => ({ label: `Item ${index}`, route: `item-${index}` }))

export default function Home (): JSX.Element {
  return (
    <StyledHome className="Home">
      <Header>
        <TopBar />
        <Navigation navigationLinks={navigationLinksMock} />
      </Header>
    </StyledHome>
  )
}

const StyledHome = styled.section``