import StyledProductCard from "./component.styled"
import { useTheme } from "styled-components"
import { type Product } from "@schemas/commerce"
import { Title, Image } from "@components/common"

import Pricing from "../pricing/component"
import ProductCardActions from "./components/product-card-actions/component"

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
        <ProductCardActions />
      </div>
      <Title.Small>{displayName}</Title.Small>
      <Pricing alignment={props.alignment} { ...pricing }/>
    </StyledProductCard>
  )
}

ProductCard.Styled = StyledProductCard

export default ProductCard