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
      max-width: max-content;
    }

    [data-name="CartLineItem__Remove"] svg {
      color: ${props => getColorStyles(props).negative};
    }
  }
`

export default StyledCartLineItem