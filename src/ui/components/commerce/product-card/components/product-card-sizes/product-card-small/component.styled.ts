import styled from "styled-components"
import { getProductCardStyles } from "@theme/selectors"
import { Pricing } from "@components/commerce"
import { Title, Image } from "@components/common"

import type { IProductCardProps } from "@components/commerce/product-card/types";

const ProductCardSmall = styled.div<IProductCardProps>`
  --card-width: ${(props) => getProductCardStyles(props).mobile.width};
  --img-height: ${(props) => getProductCardStyles(props).mobile.img.height};
  --text-alignment: ${(props) => props.alignment === "ALIGNED_LEFT" ? "start" : "center"};

  width: var(--card-width);

  .Image__Wrapper {
    position: relative;
    overflow: hidden;
  }

  ${Image.Styled} {
    max-height: var(--img-height);

    & img {
      object-fit: cover;
      border-radius: 4px;
    }
  }

  ${Title.Styled.Small} {
    font-size: 14px;
    line-height: 12px;
    font-weight: 600;
    margin-top: 13px;
    padding: 0 0.5rem;
    text-align: var(--text-alignment);
  }

  ${Pricing.Styled} [data-name*="ListingPrice"],
  ${Pricing.Styled} [data-name*="SalePrice"] {
    line-height: 12px;
  }
`

export default ProductCardSmall;