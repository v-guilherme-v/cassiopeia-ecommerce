import { useRef, useEffect } from "react"
import { useTheme } from "styled-components"
import StyledProductPage from "./page.styled"

import {
  Block,
  Button,
  Container,
  Text,
  Title,
  Counter,
  SideMenu
} from "@components/common"

import {
  Header,
  Breadcrumbs,
  Navigation,
  TopBar,
  Footer,
  MiniCart,
  ProductImage,
  ProductTags,
  ProductColorSelector,
  MobileNavigation,
  ProductDescription
} from "@components/widgets"

import { MiniCartContext } from "@contexts"

import {
  MiniCartContextProvider,
  MobileNavigationContextProvider
} from "@providers"

import { CartIcon } from "@components/icons"
import { ButtonModels, ButtonSizes } from "@components/common/button"

import { ScrollRestoration } from "react-router-dom"
import randomFlower from "src/assets/flower-1.png"

import { toCurrency } from "@utils/commerce"
import { doNothing } from "@utils/index"

import { useViewPorts } from "@ui/hooks/use-viewports"
import { categoriesMock } from "@widgets/__mocks__"
import { useTranslation } from "react-i18next"

const breadcrumbs = [
  { name: "Level 1" },
  { name: "Level 2" },
  { name: "Level 3" },
  { name: "Level 4" }
]

export default function ProductPage (): JSX.Element {
  const theme = useTheme()
  const { t } = useTranslation()

  const footerRef = useRef<HTMLDivElement>(null)
  const cartActionsRef = useRef<HTMLDivElement>(null)

  const viewPorts = useViewPorts()

  useEffect(() => {
    function onScroll (): void {
      if (
        footerRef.current !== null &&
        cartActionsRef.current !== null
      ) {
        const footerElement = footerRef.current
        const cartActionsElement = cartActionsRef.current

        if (footerElement !== null && cartActionsElement !== null) {
          const footerRect = footerElement.getBoundingClientRect()
          if ((footerRect.y + cartActionsElement.getBoundingClientRect().height) <= window.innerHeight) {
            cartActionsElement.style.position = "static"
            cartActionsElement.style.padding = "0"
            cartActionsElement.style.marginTop = "50px"
          } else if (footerRect.y > window.innerHeight) {
            cartActionsElement.style.position = "fixed"
            cartActionsElement.style.padding = "25px"
            cartActionsElement.style.marginTop = "0"
          }
        }
      }
    }

    if (viewPorts.maxWidthMedium) {
      window.addEventListener("scroll", onScroll)
    }

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [ viewPorts ])

  return (
    <StyledProductPage>
      <ScrollRestoration />

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

      <Container>
        <Block data-name="ProductPage__Heading">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </Block>
        <Block data-name="ProductPage__Content">
          <Block data-name="ProductPage__ImageSection">
            <ProductImage imageURL={randomFlower} imageAltText={t("mock.product.altName")}/>
            {viewPorts.minWidthMedium && (
              <ProductTags tags={[
                { icon: <CartIcon />, name: t("labels.benefitsDescription") },
                { icon: <CartIcon />, name: t("labels.benefitsDescription") },
                { icon: <CartIcon />, name: t("labels.benefitsDescription") }
              ]} />
            )}
          </Block>
          <Block data-name="ProductPage__ActionSection">
            <Block data-name="Product__Identification">
              <Title data-name="ProductName">{t("mock.product.name")}</Title>
              <Block data-name="ProductPricing">
                <Title.Large data-name="ProductCurrentPrice">
                  { toCurrency(80.99) }
                </Title.Large>
                <Text.StrikeLarge data-name="ProductOldPrice">
                  { toCurrency(90.99) }
                </Text.StrikeLarge>
              </Block>
            </Block>
            <Block data-name="Product__QuantityCounter">
              <Text.Large data-name="Product__QuantityLabel">{t("labels.quantity")}</Text.Large>
              <Counter onQuantityChange={doNothing}/>
            </Block>
            <Block data-name="Product__ColorSelector">
              <Text.Large data-name="Product__ColorSelectorLabel">{t("labels.color")}</Text.Large>
              <ProductColorSelector
                initialColor="purple"
                colorOptions={[
                  { id: "purple", value: theme.color.active },
                  { id: "green", value: theme.color.positive }
                ]} />
            </Block>
            <Block ref={cartActionsRef} data-name="Product__CartActions">
              <Button
                data-name="Checkout"
              >
                {t("actions.checkout")}
              </Button>
              <Button
                data-name="AddToCart"
                size={ButtonSizes.ICON}
                model={ButtonModels.OUTLINED}
                icon={{ element: <CartIcon /> }}
              />
            </Block>
            <ProductDescription />
          </Block>
        </Block>
      </Container>
      <Footer ref={footerRef}/>
    </StyledProductPage>
  )
}
