import { type PropsWithChildren, useState } from "react"
import { Block, Button, Input, Title } from "@components/common"
import { ButtonModels } from "@components/common/button"
import { CartLineItem, SummaryPriceInfo } from "@components/commerce"
import { CloseIcon, ThinArrowIcon } from "@components/icons"
import { MiniCartContext } from "@contexts"

import { StyledMiniCartContent } from "../widget.styled"
import { useViewPorts } from "@ui/hooks/use-viewports"

export function MiniCartContent ({ children }: PropsWithChildren): JSX.Element {
  return (
    <StyledMiniCartContent>
      { children }
    </StyledMiniCartContent>
  )
}

export function MiniCartHeading (): JSX.Element {
  const viewPorts = useViewPorts()

  return (
    <MiniCartContext.Consumer>
      {miniCartContext => (
        <Block data-name="MiniCart__Heading">
          {viewPorts.minWidthMedium
            ? (
              <>
                <Title>Your cart</Title>
                <Button.AsIcon
                  onClick={() => { miniCartContext?.toggleMiniCart() }}
                >
                  <CloseIcon />
                </Button.AsIcon>
              </>)
            : (
              <Button.AsIcon data-name="MiniCart__HeadingAction"
                onClick={() => { miniCartContext?.toggleMiniCart() }}
              >
                <CloseIcon />
                <Title.ExtraSmall>Your cart</Title.ExtraSmall>
              </Button.AsIcon>)
          }

        </Block>
      )}
    </MiniCartContext.Consumer>
  )
}

export function MiniCartPromotionEntry (): JSX.Element {
  const [ couponEntry, setCouponEntry ] = useState<string>("")

  return (
    <Block data-name="MiniCart__PromotionEntry">
      <Input
        name="CouponEntry"
        placeholder="Add promocode"
        value={couponEntry}
        onChange={(e) => { setCouponEntry(e.target.value) }}
      />
      <Button model={ButtonModels.OUTLINED} >
        Apply
      </Button>
    </Block>
  )
}

export function MiniCartSummary (): JSX.Element {
  return (
    <Block data-name="MiniCart__Summary">
      <SummaryPriceInfo />
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
    <Button
      data-name="MiniCart__Checkout"
      style={{ borderRadius: "8px" }}
      icon={{ element: <ThinArrowIcon /> }}
    >
      Checkout
    </Button>
  )
}