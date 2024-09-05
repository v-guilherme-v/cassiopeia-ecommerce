import { useState } from "react"

import {
  Block,
  Container,
  Text
} from "@components/common"

import {
  Header,
  Navigation,
  Breadcrumbs,
  TopBar,
  MiniCart,
  Footer
} from "@components/widgets"

import StyledCategoryPage from "./page.styled"
import { MiniCartContext } from "@contexts"

const breadcrumbs = [
  { name: "Level 1" },
  { name: "Level 2" },
  { name: "Level 3" },
  { name: "Level 4" }
]

export default function CategoryPage (): JSX.Element {
  const [ isMiniCartOpen, setIsMiniCartOpen ] = useState<boolean>(false)

  return (
    <StyledCategoryPage>
      <MiniCartContext.Provider value={{
        isOpen: isMiniCartOpen,
        toggleMiniCart: () => {
          setIsMiniCartOpen(c => !c)
        }
      }}>
        <Header>
          <TopBar />
          <Navigation />
        </Header>

        <Container data-name="CategoryPage__Container">
          <Block data-name="CategoryPage__Heading">
            <Breadcrumbs breadcrumbs={breadcrumbs} displayMode="title" />
          </Block>
          <Block data-name="CategoryPage__Filters">
            <Block data-name="CategoryPage__Filters__Options">

            </Block>
            <Text>24 items</Text>
          </Block>
        </Container>

        <MiniCart />
      </MiniCartContext.Provider>

      <Footer contactNumber="(16) 3635-6304" />
    </StyledCategoryPage>
  )
}