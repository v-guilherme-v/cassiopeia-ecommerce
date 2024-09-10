import { useState } from "react"

import {
  Text,
  Block,
  Container,
  Select
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
            <Block data-name="CategoryPage__FilterOptions">
              <Select placeholder="Sort by" mode="multi" options={[
                { value: "popular", label: "Popular" },
                { value: "best-sellers", label: "Best sellers" },
                { value: "news", label: "Just arrived" }
              ]} />
              <Select placeholder="Occasion" mode="multi" options={[
                { value: "first-date", label: "First date" },
                { value: "valentines", label: "Valentines" },
                { value: "mothers-day", label: "Mother's Day" }
              ]} />
              <Select placeholder="Price" options={[
                { value: "asc", label: "Most expensive" },
                { value: "desc", label: "Cheapest" }
              ]} />
            </Block>
            <Text data-name="CategoryPage__FilterTotalItems">24 items</Text>
          </Block>
        </Container>

        <MiniCart />
      </MiniCartContext.Provider>

      <Footer contactNumber="(16) 3635-6304" />
    </StyledCategoryPage>
  )
}