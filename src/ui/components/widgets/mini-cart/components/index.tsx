import { type PropsWithChildren, useState } from "react"
import { ThemeConsumer } from "styled-components"
import { Block, Button, Input, Text, Title } from "@components/common"
import { ButtonModels } from "@components/common/button"
import { CartLineItem } from "@components/commerce"
import { CloseIcon, ThinArrowIcon } from "@components/icons"
import { MiniCartContext } from "@contexts"

import StyledMiniCart from "../widget.styled"

export function MiniCartContainer ({ children }: PropsWithChildren): JSX.Element {
  return (
    <MiniCartContext.Consumer>
      {miniCartContext => (
        <StyledMiniCart.Container
          role="dialog"
          data-name="MiniCart__Container"
          isOpen={miniCartContext?.isOpen}
        >
          { children }
        </StyledMiniCart.Container>
      )}
    </MiniCartContext.Consumer>
  )
}

export function MiniCartContent ({ children }: PropsWithChildren): JSX.Element {
  return (
    <MiniCartContext.Consumer>
      {miniCartContext => (
        <StyledMiniCart.Content
          data-name="MiniCart__Content"
          isOpen={miniCartContext?.isOpen}
        >
          { children }
        </StyledMiniCart.Content>
      )}
    </MiniCartContext.Consumer>
  )
}

export function MiniCartOverlay (): JSX.Element {
  return (
    <MiniCartContext.Consumer>
      {miniCartContext => (
        <StyledMiniCart.Overlay
          data-name="MiniCart__Overlay"
          onClick={() => { miniCartContext?.toggleMiniCart() }}
          isOpen={miniCartContext?.isOpen}
        />
      )}
    </MiniCartContext.Consumer>
  )
}

export function MiniCartHeading (): JSX.Element {
  return (
    <MiniCartContext.Consumer>
      {miniCartContext => (
        <Block data-name="MiniCart__Heading">
          <Title>Your cart</Title>
          <Button.AsIcon
            onClick={() => { miniCartContext?.toggleMiniCart() }}
          >
            <CloseIcon />
          </Button.AsIcon>
        </Block>
      )}
    </MiniCartContext.Consumer>
  )
}

export function MiniCartPromotionEntry (): JSX.Element {
  const [ couponEntry, setCouponEntry ] = useState<string>("")

  return (
    <ThemeConsumer>
      {theme => (
        <Block data-name="MiniCart__PromotionEntry">
          <Input
            name="CouponEntry"
            placeholder="Add promocode"
            value={couponEntry}
            onChange={(e) => { setCouponEntry(e.target.value) }}
            customStyles={{
              placeholderColor: theme.color.black,
              backgroundColor: theme.color.snow
            }}
          />
          <Button
            model={ButtonModels.OUTLINED}
            customStyles={{ borderColor: theme.color.black }}
          >
            Apply
          </Button>
        </Block>
      )}
    </ThemeConsumer>
  )
}

export function MiniCartSummary (): JSX.Element {
  return (
    <Block data-name="MiniCart__Summary">
      <Block data-name="MiniCart__SummaryItem">
        <Text>Discounts</Text>
        <Text weight="medium">R$ 15,00</Text>
      </Block>
      <Block data-name="MiniCart__SummaryItem">
        <Text>Total</Text>
        <Text weight="medium">R$ 129,90</Text>
      </Block>
    </Block>
  )
}

export function MiniCartItems (): JSX.Element {
  return (
    <Block data-name="MiniCart__Items">
      {Array(3).fill(1).map((_, index) => {
        return (
          <Block data-name="MiniCart__Item" key={index}>
            <CartLineItem />
          </Block>
        )
      })}
    </Block>
  )
}

export function MiniCartCheckout (): JSX.Element {
  return (
    <ThemeConsumer>
      {theme => (
        <Button
          data-name="MiniCart__Checkout"
          backgroundColor={theme.color.black}
          customStyles={{ borderRadius: "8px" }}
          icon={{ element: <ThinArrowIcon /> }}
        >
          Checkout
        </Button>
      )}
    </ThemeConsumer>
  )
}