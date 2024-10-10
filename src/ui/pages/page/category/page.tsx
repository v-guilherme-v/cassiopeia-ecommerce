import {
  Text,
  Block,
  Container,
  Select,
  Button,
  Title,
  SideMenu
} from "@components/common"

import {
  Header,
  Navigation,
  Breadcrumbs,
  TopBar,
  MiniCart,
  MobileFilters,
  Footer,
  MobileNavigation
} from "@components/widgets"

import { ProductCard } from "@components/commerce"
import { SettingsIcon } from "@components/icons"

import StyledCategoryPage from "./page.styled"

import {
  MiniCartContext,
  MobileFiltersContext
} from "@contexts"

import {
  MiniCartContextProvider,
  MobileNavigationContextProvider,
  MobileFiltersContextProvider
} from "@providers"

import randomFlower from "src/assets/flower-1.png"
import { useViewPorts } from "@ui/hooks/use-viewports"
import { ButtonModels } from "@ui/components/common/button"
import { doNothing } from "@utils/index"

import { categoriesMock } from "@widgets/__mocks__"

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
  const viewPorts = useViewPorts()

  return (
    <StyledCategoryPage>
      <MiniCartContextProvider>
        <MobileNavigationContextProvider>
          <Header>
            <TopBar />
            { viewPorts.minWidthMedium
              ? <Navigation categories={categoriesMock}/>
              : <MobileNavigation categories={categoriesMock}/>
            }
          </Header>
        </MobileNavigationContextProvider>

        <MiniCartContext.Consumer>
          {miniCartContext => (
            <SideMenu isOpen={miniCartContext?.isOpen}>
              <MiniCart />
            </SideMenu>
          )}
        </MiniCartContext.Consumer>
      </MiniCartContextProvider>

      <MobileFiltersContextProvider>
        <Container data-name="CategoryPage__Container">
          <Block data-name="CategoryPage__Heading">
            {viewPorts.minWidthMedium ? (
              <Breadcrumbs breadcrumbs={breadcrumbs} displayMode="title" />
            ) : (
              <Title data-name="CategoryPage__DisplayName">
                {breadcrumbs[breadcrumbs.length - 1].name}
              </Title>
            )}
          </Block>
          <Block data-name="CategoryPage__Filters">
            {viewPorts.minWidthMedium ? (
              <Block data-name="CategoryPage__FilterOptions">
                <Select onChange={doNothing} placeholder="Sort by" mode="multi" options={[
                  { value: "popular", label: "Popular" },
                  { value: "best-sellers", label: "Best sellers" },
                  { value: "news", label: "Just arrived" }
                ]} />
                <Select onChange={doNothing} placeholder="Occasion" mode="multi" options={[
                  { value: "first-date", label: "First date" },
                  { value: "valentines", label: "Valentines" },
                  { value: "mothers-day", label: "Mother's Day" }
                ]} />
                <Select onChange={doNothing} placeholder="Price" options={[
                  { value: "asc", label: "Most expensive" },
                  { value: "desc", label: "Cheapest" }
                ]} />
              </Block>
            ) : (
              <MobileFiltersContext.Consumer>
                {mobileFiltersContext => (
                  <>
                    <Button
                      model={ButtonModels.LINK}
                      onClick={mobileFiltersContext?.toggleMobileFilters}
                      data-name="CategoryPage__MobileFiltersAction"
                    >
                      <SettingsIcon />
                    </Button>

                    <SideMenu isOpen={mobileFiltersContext?.isFilterMenuOpen}>
                      <MobileFilters />
                    </SideMenu>
                  </>
                )}
              </MobileFiltersContext.Consumer>
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
                      pricing: { listPrice: result.pricing.listPrice }
                    }}
                  />
                )
              })}
            </Block>
            <Button data-name="CategoryPage__ResultsLoadMore">See more</Button>
          </Block>
        </Container>
      </MobileFiltersContextProvider>

      <Footer contactNumber="(16) 3635-6304" />
    </StyledCategoryPage>
  )
}