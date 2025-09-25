import { ThemeConsumer } from "styled-components"
import { toCurrency } from "@ui/utils/commerce"

import { Block, Button, Counter, Image, Text } from "@components/common"
import { TrashCanIcon } from "@components/icons"

import StyledCartLineItem from "./component.styled"
import flower from "src/assets/flower-1.png"
import { noop } from "@ui/utils/generic"

interface CartLineItemProps {
  name?: string
  price?: number
  initialQty?: number
}

function CartLineItem ({ name = "Name", price = 0 }: CartLineItemProps): JSX.Element {
  const priceAsCurrency = toCurrency(price)

  return (
    <ThemeConsumer>
      {theme => (
        <StyledCartLineItem data-name="CartLineItem">
          <Block data-name="CartLineItem__Image">
            <Image src={flower} alt="flower" />
          </Block>
          <Block data-name="CartLineItem__Container">
            <Block data-name="CartLineItem__Row">
              <Text.Large data-name="CartLineItem__Name">{name}</Text.Large>
              <Text.Large data-name="CartLineItem__Price" weight="medium">{priceAsCurrency}</Text.Large>
            </Block>
            <Block data-name="CartLineItem__Actions">
              <Counter onQuantityChange={noop} />
              <Button.AsIcon data-name="CartLineItem__Remove" animate={true}>
                <TrashCanIcon />
              </Button.AsIcon>
            </Block>
          </Block>
        </StyledCartLineItem>
      )}
    </ThemeConsumer>
  )
}

export default CartLineItem