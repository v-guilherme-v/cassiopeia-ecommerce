import { ThemeConsumer } from "styled-components"

import Pricing from "@components/commerce/pricing/component"
import { Title, Image } from "@components/common"

import StyledProductCardSmall from "./component.styled"
import type { IProductCardProps } from "../../../types"

export default function ProductCardSmall (props: IProductCardProps): JSX.Element {
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
        <StyledProductCardSmall {...props}>
          <div className="Image__Wrapper">
            <Image
              width={theme.productCard.mobile.img.width}
              height={theme.productCard.mobile.img.height}
              src={imageSource} alt={displayName}
            />
          </div>
          <Title.Small>{displayName}</Title.Small>
          <Pricing alignment={props.alignment} { ...pricing }/>
        </StyledProductCardSmall>
      )}
    </ThemeConsumer>
  )
}