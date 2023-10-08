export interface Product {
  id: string
  displayName: string
  imageSource: string
  pageRoute: string
  pricing: Price
}

export interface Price {
  listPrice: number
  salePrice: number
}