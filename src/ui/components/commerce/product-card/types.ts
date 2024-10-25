import { type Product } from "@app/types/commerce"

export enum EProductCardAlignStyles {
  ALIGNED_LEFT = "ALIGNED_LEFT"
}

export interface IProductCardProps {
  product: Omit<Partial<Product>, "id">
  alignment?: EProductCardAlignStyles
  // Mobile can be achieved by different window sizes
  mobileResolution?: string
}