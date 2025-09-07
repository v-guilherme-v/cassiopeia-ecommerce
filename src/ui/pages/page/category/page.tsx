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
import { useTranslation } from "react-i18next"

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
  const { t } = useTranslation()

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
                <Select onChange={doNothing} placeholder={t("labels.sortBy")} mode="multi" options={[
                  { value: "popular", label: t("labels.popular") },
                  { value: "best-sellers", label: t("labels.bestSellers") },
                  { value: "news", label: t("mock.category.justArrived") }
                ]} />
                <Select onChange={doNothing} placeholder={t("labels.occasion")} mode="multi" options={[
                  { value: "first-date", label: t("labels.firstDate") },
                  { value: "valentines", label: t("labels.valentinesDay") },
                  { value: "mothers-day", label: t("labels.mothersDay") }
                ]} />
                <Select onChange={doNothing} placeholder={t("mock.category.price") } options={[
                  { value: "asc", label: t("mock.category.mostExpensive") },
                  { value: "desc", label: t("mock.category.cheapest") }
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
            <Text data-name="CategoryPage__FilterTotalItems">{t("labels.itemCount", { count: 24 })}</Text>
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
            <Button data-name="CategoryPage__ResultsLoadMore">{t("actions.seeMore")}</Button>
          </Block>
        </Container>
      </MobileFiltersContextProvider>

      <Footer contactNumber="(16) 3635-6304" />
    </StyledCategoryPage>
  )
}
