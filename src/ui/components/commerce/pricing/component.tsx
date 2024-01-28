import styled from "styled-components"
import { FlexContainer, Text } from "@components/common"
import { type Price } from "@schemas/commerce"

import { getColorStyles, getFontStyles } from "@theme/selectors"
import { toCurrency } from "@utils/commerce"

interface PriceProps extends Partial<Price> {
  alignment?: string
}

const isAlignedLeft = (alignment?: string): boolean => alignment === "ALIGNED_LEFT"

function Pricing (props: PriceProps): JSX.Element {
  const { listPrice, salePrice, alignment } = props

  const listPriceToCurrency = toCurrency(listPrice)
  const salePriceToCurrency = toCurrency(salePrice)

  const priceAlignment = !isAlignedLeft(alignment) ? "center" : "unset"

  return (
    <StyledPricing {...props}>
      {
        salePrice != null && salePrice !== 0
          ? (
            <FlexContainer
              className="Pricing" gap="1rem"
              alignItems="center" justifyContent={priceAlignment}
            >
              <Text.Button className="SalePrice">
                { salePriceToCurrency }
              </Text.Button>
              <Text.Strike className="ListingPrice PreviousPrice">
                { listPriceToCurrency }
              </Text.Strike>
            </FlexContainer>)
          : (
            <Text.Button className="ListingPrice">
              { listPriceToCurrency }
            </Text.Button>)
      }
    </StyledPricing>
  )
}

const StyledPricing = styled.div<PriceProps>`
  padding-left: ${props => isAlignedLeft(props?.alignment) ? ".5rem" : "0"};
  margin-top: .5rem;

  .ListingPrice {
    display: block;
    text-align: center;
  }
  
  .PreviousPrice {
    font-weight: ${props => getFontStyles(props).weight.regular};
    color: ${props => getColorStyles(props).darkGrey};
  }
`

export default Pricing