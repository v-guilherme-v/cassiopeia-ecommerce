import styled from "styled-components"
import { Block, Text } from "@components/common"
import { getColorStyles } from "@app/ui/theme/selectors"

function CartPriceInfo (): JSX.Element {
  return (
    <StyledCartPriceInfo>
      <Block data-name="CartPriceInfo">
        <Block data-name="CartPriceInfo__Item">
          <Text>Discounts</Text>
          <Text weight="medium">R$ 15,00</Text>
        </Block>
        <Block data-name="CartPriceInfo__Item">
          <Text>Total</Text>
          <Text weight="medium">R$ 129,90</Text>
        </Block>
      </Block>
    </StyledCartPriceInfo>
  )
}

const StyledCartPriceInfo = styled.div`
  ${Block.Styled}[data-name="CartPriceInfo__Item"] {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid ${props => getColorStyles(props).paleGrey};
    padding: 18px 0 14px;
  }
`

export default CartPriceInfo