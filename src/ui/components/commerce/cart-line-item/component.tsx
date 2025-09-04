import { ThemeConsumer } from "styled-components"
import { toCurrency } from "@utils/commerce"

import { Block, Button, Image, Text } from "@components/common"
import { MinusSignIcon, PlusSignIcon, TrashCanIcon } from "@components/icons"
import { ButtonSizes } from "@components/common/button"

import StyledCartLineItem from "./component.styled"
import flower from "src/assets/flower-1.png"

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
              <Button
                data-name="CartLineItem__Action--diff"
                backgroundColor={theme.color.paleGrey}
                size={ButtonSizes.ICON}
                rounded={true}
                icon={{ element: <MinusSignIcon /> }}
              />
              <Text.Button data-name="CartLineItem__Quantity">N</Text.Button>
              <Button
                data-name="CartLineItem__Action--sum"
                backgroundColor={theme.color.paleGrey}
                size={ButtonSizes.ICON}
                rounded={true}
                icon={{ element: <PlusSignIcon /> }}
              />
              <Button.AsIcon data-name="CartLineItem__Remove">
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