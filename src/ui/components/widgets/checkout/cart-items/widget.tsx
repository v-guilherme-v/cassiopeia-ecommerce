import { useContext, useEffect } from "react"
import styled from "styled-components"

import { StepperActionsContext } from "@contexts"
import { doNothing } from "@app/utils"

import { Block, Text } from "@components/common"
import { CartLineItem } from "@components/commerce"
import { MiniCartPromotionEntry } from "@widgets/mini-cart/components"

import { getColorStyles, getViewPortsStyles } from "@app/ui/theme/selectors"
import { useTranslation } from "react-i18next"

export default function CheckoutCart(): JSX.Element {
  const {
    setIsNextActionDisabled = doNothing
  } = (useContext(StepperActionsContext) ?? {})

  const { t } = useTranslation()

  useEffect(() => {
    setIsNextActionDisabled(false)
  }, [])

  return (
    <StyledCheckoutCart>
      <Block data-name="CheckoutCart__Title">
        <Text.Large>{t("checkout.cart.description")}</Text.Large>
      </Block>
      <Block data-name="CheckoutCart__CartLineItems">
        <Block data-name="CheckoutCart__TableHeadings">
          <Text.Button data-name="CheckoutCart__TableHeading">{t("product.name.label")}</Text.Button>
          <Text.Button data-name="CheckoutCart__TableHeading">{t("price.name.label")}</Text.Button>
        </Block>
        <Block data-name="CheckoutCart__TableContent">
          {Array(3).fill(1).map((_, index) => {
            return <CartLineItem key={index} />
          })}
        </Block>
      </Block>
      <Block data-name="CheckoutCart__Title">
        <Text.Large>{t("cart.add.coupons")}</Text.Large>
      </Block>
      <Block data-name="CheckoutCart__PromotionEntry">
        <MiniCartPromotionEntry />
      </Block>
    </StyledCheckoutCart>
  )
}

const StyledCheckoutCart = styled.div`
  [data-name="CheckoutCart__Title"] {
    margin: 2rem 0 1rem 0;
  }

  ${Block.Styled}[data-name="CheckoutCart__CartLineItems"] {
    border: 1px solid ${props => getColorStyles(props).paleGrey};
    border-radius: 4px;
    padding: 0 1rem 1rem;

    [data-name="CheckoutCart__TableHeadings"] {
      display: flex;
      padding: .325rem 1rem;
      padding-left: calc(1rem + 85px);
      margin: 0 -1rem;
      border-bottom: 1px solid ${props => getColorStyles(props).paleGrey};

      [data-name="CheckoutCart__TableHeading"] {
        font-weight: bold;
      }
      
      [data-name="CheckoutCart__TableHeading"]:first-child {
        flex: 1;
        padding-left: 21px;
      }

      [data-name="CheckoutCart__TableHeading"]:first-child:before {
        content: "";
        display: inline;
        height: 100%;
        width: 1px;
        background-color: #000;
      }

      [data-name="CheckoutCart__TableHeading"]:last-child {
        flex: 0 0 30%;
        text-align: end;
      }
    }

    [data-name="CheckoutCart__TableContent"] {
      [data-name="CartLineItem__Name"],
      [data-name="CartLineItem__Price"],
      [data-name="CartLineItem__Quantity"] {
        font-size: 14px;
      }

      [data-name="CartLineItem"] {
        margin-top: 1rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid ${props => getColorStyles(props).paleGrey};

        [data-name="CartLineItem__Image"] {
          max-height: 85px;
          max-width: 85px;
        }
      }

      [data-name="CartLineItem"]:last-child {
        padding-bottom: 0;
        border-bottom: none;
      }
    }
  }

  ${Block.Styled}[data-name="CheckoutCart__PromotionEntry"]
  [data-name="MiniCart__PromotionEntry"] {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  [data-name="MiniCart__PromotionEntry"] button {
    flex: 1;
    height: 41px;
    min-width: 25%;
  }

  [data-name="MiniCart__PromotionEntry"] input {
    flex: 0 0 40%;
  }

  @media(max-width: ${props => getViewPortsStyles(props).medium}) {
    [data-name="CheckoutCart__Title"]:first-child {
      margin-top: 0;
    }
    ${Block.Styled}[data-name="CheckoutCart__PromotionEntry"]
    [data-name="MiniCart__PromotionEntry"] {
      gap: 8px;
    }
  }
`