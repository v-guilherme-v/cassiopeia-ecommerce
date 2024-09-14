/* eslint-disable multiline-ternary */
import { useState } from "react"

import {
  Text,
  Block,
  Container,
  Select,
  Button,
  Title
} from "@components/common"

import {
  Header,
  Navigation,
  Breadcrumbs,
  TopBar,
  MiniCart,
  Footer
} from "@components/widgets"

import { SettingsIcon } from "@components/icons"

import { ProductCard } from "@components/commerce"

import StyledCategoryPage from "./page.styled"
import { MiniCartContext } from "@contexts"

import randomFlower from "src/assets/flower-1.png"
import { useViewPorts } from "@ui/hooks/use-viewports"

const breadcrumbs = [
  { name: "Level 1" },
  { name: "Level 2" },
  { name: "Level 3" },
  { name: "Level 4" }
]

const categoryResults = Array(8).fill(1).map((_, index) => ({
  id: index.toString(),
  displayName: `Flower ${index + 1}`,
  imageSource: randomFlower,
  pricing: {
    listPrice: 90.99,
    salePrice: 80.99
  }
}))

export default function CategoryPage (): JSX.Element {
  const [ isMiniCartOpen, setIsMiniCartOpen ] = useState<boolean>(false)

  const viewPorts = useViewPorts()

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
            {viewPorts.minWidthMedium ? (
              <Breadcrumbs breadcrumbs={breadcrumbs} displayMode="title" />
            ) : (
              <Title data-name="CategoryPage__DisplayName">{breadcrumbs[breadcrumbs.length - 1].name}</Title>
            )}
          </Block>
          <Block data-name="CategoryPage__Filters">
            {viewPorts.minWidthMedium ? (
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
            ) : (
              <SettingsIcon />
            )}
            <Text data-name="CategoryPage__FilterTotalItems">24 items</Text>
          </Block>
          <Block data-name="CategoryPage__Results">
            <Block data-name="CategoryPage__ResultList">
              {categoryResults.map(result => {
                return (
                  <ProductCard
                    key={result.id}
                    product={{
                      pageRoute: "/product",
                      displayName: result.displayName,
                      imageSource: randomFlower,
                      pricing: { listPrice: 49.99 }
                    }}
                  />
                )
              })}
            </Block>
            <Button data-name="CategoryPage__ResultsLoadMore">See more</Button>
          </Block>
        </Container>

        <MiniCart />
      </MiniCartContext.Provider>

      <Footer contactNumber="(16) 3635-6304" />
    </StyledCategoryPage>
  )
}