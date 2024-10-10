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