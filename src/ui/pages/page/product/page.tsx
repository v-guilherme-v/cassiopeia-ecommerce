import { useState, useRef, useEffect } from "react"
import { useTheme } from "styled-components"
import StyledProductPage from "./page.styled"

import {
  Accordion,
  Block,
  Button,
  Container,
  Text,
  Title,
  Counter
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
  ProductColorSelector
} from "@components/widgets"

import { MiniCartContext } from "@contexts"

import { CartIcon } from "@components/icons"
import { ButtonModels, ButtonSizes } from "@components/common/button"

import { ScrollRestoration } from "react-router-dom"
import randomFlower from "src/assets/flower-1.png"

import { toCurrency } from "@utils/commerce"
import { doNothing } from "@utils/index"

import { useViewPorts } from "@ui/hooks/use-viewports"

const breadcrumbs = [
  { name: "Level 1" },
  { name: "Level 2" },
  { name: "Level 3" },
  { name: "Level 4" }
]

export default function ProductPage (): JSX.Element {
  const theme = useTheme()

  const footerRef = useRef<HTMLDivElement>(null)
  const cartActionsRef = useRef<HTMLDivElement>(null)
  const [ isMiniCartOpen, setIsMiniCartOpen ] = useState<boolean>(false)

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

        <MiniCart />
      </MiniCartContext.Provider>

      <Container>
        <Block data-name="ProductPage__Heading">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </Block>
        <Block data-name="ProductPage__Content">
          <Block data-name="ProductPage__ImageSection">
            <ProductImage imageURL={randomFlower} imageAltText="Random flower"/>
            <ProductTags tags={[
              { icon: <CartIcon />, name: "Benefits description" },
              { icon: <CartIcon />, name: "Benefits description" },
              { icon: <CartIcon />, name: "Benefits description" }
            ]} />
          </Block>
          <Block data-name="ProductPage__ActionSection">
            <Block data-name="Product__Identification">
              <Title data-name="ProductName">Flower</Title>
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
              <Text.Large data-name="Product__QuantityLabel">Quantity</Text.Large>
              <Counter onQuantityChange={doNothing}/>
            </Block>
            <Block data-name="Product__ColorSelector">
              <Text.Large data-name="Product__ColorSelectorLabel">Color</Text.Large>
              <ProductColorSelector
                initialColor="purple"
                colorOptions={[
                  { id: "purple", value: theme.color.active },
                  { id: "green", value: theme.color.positive }
                ]} />
            </Block>
            <Block ref={cartActionsRef} data-name="Product__CartActions">
              <Button
                data-name="GoToCart"
                backgroundColor={theme.color.black}
              >
                Add to cart
              </Button>
              <Button
                data-name="AddToCart"
                size={ButtonSizes.ICON}
                model={ButtonModels.OUTLINED}
                icon={{ element: <CartIcon /> }}
              />
            </Block>
            <Block data-name="Product__Description">
              <Accordion label="Description">
                <Text.Caption>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi autem ab magni laudantium iste soluta aspernatur iure sunt, dolore in laborum, est ipsum aperiam optio aliquid, deleniti ullam maxime quo.
                </Text.Caption>
              </Accordion>
              <Accordion label="Description">
                <Text.Caption>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi autem ab magni laudantium iste soluta aspernatur iure sunt, dolore in laborum, est ipsum aperiam optio aliquid, deleniti ullam maxime quo.
                </Text.Caption>
              </Accordion>
              <Accordion label="Description">
                <Text.Caption>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi autem ab magni laudantium iste soluta aspernatur iure sunt, dolore in laborum, est ipsum aperiam optio aliquid, deleniti ullam maxime quo.
                </Text.Caption>
              </Accordion>
            </Block>
          </Block>
        </Block>
      </Container>
      <Footer ref={footerRef}/>
    </StyledProductPage>
  )
}