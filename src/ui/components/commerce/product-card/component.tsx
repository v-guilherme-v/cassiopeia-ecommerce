import { ProductCardNormal, ProductCardSmall } from "./components/product-card-sizes"
import { useDeviceSettings } from "@ui/utils"
import type { IProductCardProps } from "./types"

function ProductCard (props: IProductCardProps): JSX.Element {
  const { isTablet } = useDeviceSettings()

  return !isTablet
    ? <ProductCardNormal {...props} />
    : <ProductCardSmall { ...props } />
}

export default ProductCard