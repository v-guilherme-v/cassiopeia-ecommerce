import type { ButtonModels } from "@components/common/button"
import type { ColorStylesValue } from "@theme/types"

export interface ICategory {
  id: string
  label: string
  route: string
  parentCategoryId: string
  children?: ICategory[]
}

export interface INavigationProps {
  categories: ICategory[]
}

interface TextCustomType {
  text: string
  color: ColorStylesValue
}

interface ButtonCustomType {
  text: string
  model?: ButtonModels
  textColor?: ColorStylesValue
  backgroundColor?: ColorStylesValue
}

interface ImageType {
  src: string
  alt: string
}

export interface HeroBannerProps {
  title: TextCustomType | string
  description: TextCustomType | string
  button?: ButtonCustomType | string
  image: ImageType
}

interface IHeroBannerCarouselProps {
  heroBanners: HeroBannerProps[]
}