import styled from "styled-components"
import { getProductCardStyles, getViewPortsStyles } from "@theme/selectors"
import { Title, Image } from "@components/common"
import { Pricing } from "@components/commerce"

import ProductCardActions from "./components/product-card-actions/component";
import type { IProductCardProps } from "@components/commerce/product-card/types";

const StyledProductCard = styled.div<IProductCardProps>`
  --card-width: ${(props) => getProductCardStyles(props).width};
  --img-height: ${(props) => getProductCardStyles(props).img.height};
  --control-width: ${(props) => getProductCardStyles(props).controls.width};
  --text-alignment: ${(props) => props.alignment === "ALIGNED_LEFT" ? "start" : "center"};
  --translate-value: ${(props) => "-" + getProductCardStyles(props).controls.height};

  width: var(--card-width);
  padding-bottom: 38px;

  .Image__Wrapper {
    position: relative;
    overflow: hidden;
  }

  ${Image.Styled} img {
      height: var(--img-height);
      width: var(--card-width);
      object-fit: cover;
      border-radius: 4px;
  }

  ${Title.Styled.Small} {
    margin-top: 1.25rem;
    padding: 0 0.5rem;
    text-align: var(--text-alignment);
  }

  /* Only desktop */
  @media (min-width: ${(props) => getViewPortsStyles(props).medium}) {
    :hover {
      & ${ProductCardActions.Styled} {
        transform: translateY(calc(var(--translate-value) + -15px));
        opacity: 1;
      }
    }
  }

  /* Only mobile */
  @media (max-width: ${props => getViewPortsStyles(props).medium}) {
    --card-width: ${(props) => getProductCardStyles(props).mobile.width};
    --img-height: ${(props) => getProductCardStyles(props).mobile.img.height};

    ${Title.Styled.Small} {
      font-size: 14px;
      line-height: 12px;
      font-weight: 600;
      margin-top: 13px;
    }

    ${Pricing.Styled} [data-name*="ListingPrice"],
    ${Pricing.Styled} [data-name*="SalePrice"] {
      line-height: 12px;
    }
  }
`

export default StyledProductCard