import styled from "styled-components"
import { getProductCardStyles, getViewPortsStyles } from "@theme/selectors"
import { Title, Image } from "@components/common"

import ProductCardActions from "../../product-card-actions/component";
import type { IProductCardProps } from "@components/commerce/product-card/types";

const ProductCardNormal = styled.div<IProductCardProps>`
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

  ${Image.Styled} {
    max-height: var(--img-height);

    & img {
      object-fit: cover;
      border-radius: 4px;
    }
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
`

export default ProductCardNormal