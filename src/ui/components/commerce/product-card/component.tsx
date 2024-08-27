import { Title, Image } from "@components/common"
import Pricing from "@components/commerce/pricing/component"

import StyledProductCard from "./component.styled"
import ProductCardActions from "./components/product-card-actions/component"
import type { IProductCardProps } from "./types"

import { Link } from "react-router-dom"

function ProductCard (props: IProductCardProps): JSX.Element {
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

  return (
    <StyledProductCard {...props}>
      <div className="Image__Wrapper">
        <Link to="/product">
          <Image src={imageSource} alt={displayName} />
        </Link>
        <ProductCardActions />
      </div>
      <Title.Small>{displayName}</Title.Small>
      <Pricing alignment={props.alignment} { ...pricing }/>
    </StyledProductCard>
  )
}

export default ProductCard