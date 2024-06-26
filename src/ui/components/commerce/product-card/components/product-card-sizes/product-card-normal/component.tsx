import { ThemeConsumer } from "styled-components"

import Pricing from "@components/commerce/pricing/component"
import { Title, Image } from "@components/common"

import StyledProductCardNormal from "./component.styled"
import ProductCardActions from "../../product-card-actions/component"
import type { IProductCardProps } from "../../../types"

export default function ProductCardNormal (props: IProductCardProps): JSX.Element {
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
    <ThemeConsumer>
      {(theme) => (
        <StyledProductCardNormal {...props}>
          <div className="Image__Wrapper">
            <Image
              width={theme.productCard.img.width}
              height={theme.productCard.img.height }
              src={imageSource} alt={displayName}
            />
            <ProductCardActions />
          </div>
          <Title.Small>{displayName}</Title.Small>
          <Pricing alignment={props.alignment} { ...pricing }/>
        </StyledProductCardNormal>
      )}
    </ThemeConsumer>
  )
}