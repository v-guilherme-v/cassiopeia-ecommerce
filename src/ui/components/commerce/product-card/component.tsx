import styled, { useTheme } from "styled-components"

import { type Product } from "@schemas/commerce"
import { Title, Image } from "@components/common"
import { getBoxShadowStyles, getProductCardStyles, getViewPortsStyles } from "@theme/selectors"

import Pricing from "../pricing/component"
import ProductCardControls from "./components/product-card-controls/component"

export enum ProductCardStyleTypes {
  ALIGNED_LEFT = "ALIGNED_LEFT"
}

export interface ProductCardProps {
  product: Omit<Partial<Product>, "id">
  alignment?: ProductCardStyleTypes
}

function ProductCard (props: ProductCardProps): JSX.Element {
  const {
    product: {
      displayName = "Name",
      imageSource = "",
      pricing = {
        listPrice: 0,
        salePrice: 0
      }
    }
  } = props

  const { productCard: productCardStyles } = useTheme()

  return (
    <StyledProductCard {...props}>
      <div className="Image__Wrapper">
        <Image
          width={productCardStyles.img.width}
          height={productCardStyles.img.height}
          src={imageSource} alt={displayName}
        />
        <ProductCardControls/>
      </div>
      <Title.Small>{displayName}</Title.Small>
      <Pricing alignment={props.alignment} { ...pricing }/>
    </StyledProductCard>
  )
}

const StyledProductCard = styled.div<ProductCardProps>`
  --card-width: ${props => getProductCardStyles(props).width};
  --img-height: ${props => getProductCardStyles(props).img.height};
  --control-width: ${props => getProductCardStyles(props).controls.width};
  --text-alignment: ${props => props.alignment === "ALIGNED_LEFT" ? "start" : "center"};
  --translate-value: ${props => "-" + getProductCardStyles(props).controls.height};

  max-width: var(--card-width);
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
  
  @media(min-width: ${props => getViewPortsStyles(props).medium}) {
    transition: box-shadow .5s,
      scale .5s;

    :hover {
      box-shadow: ${props => getBoxShadowStyles(props).lightShadow};
      scale: 1.010;

      & ${ProductCardControls.Styled} {
        opacity: 1;
        transform: translateY(calc(var(--translate-value) + -15px));
      }   
    }
  }
`

export default ProductCard