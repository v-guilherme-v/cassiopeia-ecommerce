export interface Product {
  id: string
  displayName: string
  imageSource: string
  pageRoute: string
  pricing: Partial<Price>
}

export interface Price {
  listPrice: number
  salePrice: number
}

interface GuestUser {
  fullName: string
  email: string
  cellphone: string
  errors: { [fieldName: string]: boolean }
}