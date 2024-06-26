import { type Product } from "@schemas/commerce"

export enum EProductCardAlignStyles {
  ALIGNED_LEFT = "ALIGNED_LEFT"
}

export interface IProductCardProps {
  product: Omit<Partial<Product>, "id">
  alignment?: EProductCardAlignStyles
}