import styled from "styled-components"
import { Button, Text } from "@components/common"
import { getColorStyles } from "@app/ui/theme/selectors"

const StyledCartLineItem = styled.div`
  display: flex;
  gap: 21px;
  max-height: 102px;

  [data-name="CartLineItem__Image"] {
    max-width: 102px;
    overflow: hidden;
    border-radius: 4px;

    & img {
      width: 100%;
    }
  }

  [data-name="CartLineItem__Container"] {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 17px;
  }

  [data-name="CartLineItem__Row"] {
    display: flex;
    align-items: center;
    gap: 1rem;

    [data-name="CartLineItem__Name"] {
      line-height: 24px;
      flex: 1;
    }

    [data-name="CartLineItem__Price"] {
      line-height: 22px;
      text-align: end;
      flex: 0 0 30%;
    }
  }

  [data-name="CartLineItem__Actions"]{
    display: flex;
    max-height: 27px;

    [data-name="CartLineItem__Remove"] {
      margin-left: auto;
      flex: 0 0 30%;
      text-align: end;
    }

    [data-name="CartLineItem__Remove"] svg {
      color: ${props => getColorStyles(props).negative};
    }
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