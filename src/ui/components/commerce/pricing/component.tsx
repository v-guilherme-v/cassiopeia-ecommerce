import styled from "styled-components"
import { Block, Text } from "@components/common"
import { type Price } from "@app/types/commerce"

import { getColorStyles, getFontStyles } from "@theme/selectors"
import { toCurrency } from "@utils/commerce"

interface PriceProps extends Partial<Price> {
  alignment?: string
}

const isAlignedLeft = (alignment?: string): boolean => alignment === "ALIGNED_LEFT"

function Pricing (props: PriceProps): JSX.Element {
  const { listPrice, salePrice } = props

  const listPriceToCurrency = toCurrency(listPrice)
  const salePriceToCurrency = toCurrency(salePrice)

  return (
    <StyledPricing {...props}>
      {
        salePrice != null && salePrice !== 0
          ? (
            <Block data-name="Pricing">
              <Text.Button data-name="SalePrice">
                { salePriceToCurrency }
              </Text.Button>
              <Text.Strike data-name="ListingPrice PreviousPrice">
                { listPriceToCurrency }
              </Text.Strike>
            </Block>)
          : (
            <Text.Button data-name="ListingPrice">
              { listPriceToCurrency }
            </Text.Button>)
      }
    </StyledPricing>
  )
}

const StyledPricing = styled.div<PriceProps>`
  margin-top: .5rem;
  padding-left: ${props => isAlignedLeft(props?.alignment) ? ".5rem" : "0"};

  [data-name="Pricing"] {
    display: flex;
    align-items: center;
    justify-content: ${props => isAlignedLeft(props?.alignment) ? "unset" : "center"};
    gap: 1rem;
  }

  [data-name*="ListingPrice"] {
    display: block;
    text-align: center;
  }
  
  [data-name*="PreviousPrice"] {
    font-weight: ${props => getFontStyles(props).weight.regular};
    color: ${props => getColorStyles(props).darkGrey};
  }
`

Pricing.Styled = StyledPricing

export default Pricing