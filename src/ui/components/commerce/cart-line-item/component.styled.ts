import styled from "styled-components"
import { Button, Text } from "@components/common"

const StyledCartLineItem = styled.div`
  display: flex;
  gap: 21px;
  max-height: 102px;

  & [data-name="CartLineItem__Image"] {
    max-width: 102px;
    border-radius: 4px;
    overflow: hidden;

    & img {
      width: 100%;
    }
  }

  & [data-name="CartLineItem__Container"] {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 17px;
  }

  & [data-name="CartLineItem__Details"] {
    display: flex;
    align-items: baseline;
    justify-content: space-between;

    [data-name="CartLineItem__Name"] {
      line-height: 24px;
    }

    [data-name="CartLineItem__Price"] {
      line-height: 22px;
    }
  }

  & [data-name="CartLineItem__Actions"]{
    display: flex;
    max-height: 27px;
  }

  ${Button.Styled.Normal}[data-name="CartLineItem__Action--diff"]{
    width: 26px;
    height: 26px;
  }

  ${Button.Styled.Normal}[data-name="CartLineItem__Action--sum"]{
    width: 26px;
    height: 26px;
  }

  ${Text.Styled.Button}[data-name="CartLineItem__Quantity"]{
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 53px;
  }
`

export default StyledCartLineItem