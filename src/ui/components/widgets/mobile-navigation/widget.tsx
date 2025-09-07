import { useState } from "react"
import { Link } from "react-router-dom"

import { MobileNavContext } from "@contexts"
import { Button, Block, SideMenu, Title, Text } from "@components/common"
import { ChevronIcon, CloseIcon, EditIcon, MarkerIcon } from "@components/icons"

import type { ICategory, INavigationProps } from "@widgets/types"

import StyledMobileNavigation from "./widget.styled"
import { useTranslation } from "react-i18next"

export default function MobileNavigation (props: INavigationProps): JSX.Element {
  const { t } = useTranslation()
  const initialCategories = props.categories
  const [ parentCategory, setParentCategory ] = useState<Partial<ICategory> | null>()
  const [ currentCategory, setCurrentCategory ] = useState<Pick<ICategory, "children">>({ children: initialCategories })

  const handleParentNavigation = (parentCategoryId: string | undefined): void => {
    interface IFindCategoriesResult {
      targetCategory?: ICategory
      targetCategorySiblings: ICategory[]
    }

    const findNavigableCategories = (
      parentCategoryId: string | undefined,
      categories: ICategory[]
    ): IFindCategoriesResult | undefined => {
      if (parentCategoryId !== undefined) {
        for (const category of categories) {
          if (category.id === parentCategoryId) {
            return {
              targetCategory: category,
              targetCategorySiblings: categories
            }
          }

          if (category?.children !== undefined) {
            const childCategories = findNavigableCategories(parentCategoryId, category.children)
            if (childCategories !== undefined && Object.keys(childCategories ?? {}).length > 0) {
              return childCategories
            }
          }
        }
      }
    }

    const parentCategoriesSearch = findNavigableCategories(parentCategoryId, initialCategories)

    if (
      parentCategoriesSearch !== undefined &&
      parentCategoriesSearch.targetCategory?.parentCategoryId === "root"
    ) {
      setParentCategory(null)
      setCurrentCategory({ children: parentCategoriesSearch.targetCategorySiblings })
    } else if (parentCategoriesSearch !== undefined) {
      const parentCategoriesParentSearch = findNavigableCategories(
        parentCategoriesSearch.targetCategory?.parentCategoryId,
        initialCategories
      )

      const {
        targetCategory: {
          children = [],
          ...restTargetCategory
        } = {}
      } = (parentCategoriesParentSearch ?? {})

      if (Object.keys(restTargetCategory ?? {}).length > 0) {
        setParentCategory(restTargetCategory)
      }

      setCurrentCategory({ children })
    }
  }

  const handleCategoryChange = (category: ICategory): void => {
    if (category.children !== undefined) {
      const { children, ...restCategory } = category
      setParentCategory(restCategory)
      setCurrentCategory({ children })
    }
  }

  return (
    <MobileNavContext.Consumer>
      {mobileNavContext => (
        <SideMenu
          animationDirection="left"
          isOpen={mobileNavContext?.isMobileNavOpen}
        >
          <StyledMobileNavigation>
            <Block data-name="MobileNavigation__Heading">
              <Button.AsIcon onClick={mobileNavContext?.toggleMobileNavigation}>
                <CloseIcon />
                <Title.ExtraSmall>{t("labels.menu")}</Title.ExtraSmall>
              </Button.AsIcon>
            </Block>
            {parentCategory !== null &&
              parentCategory !== undefined &&
              typeof parentCategory?.id === "string" && (
              <Block data-name="MobileNavigation__ParentCategory">
                <Button.AsIcon
                  aria-label={`${parentCategory.label} parent category button`}
                  onClick={() => {
                    handleParentNavigation(parentCategory?.id)
                  }}
                >
                  <ChevronIcon />
                  <Title.ExtraSmall>{parentCategory?.label}</Title.ExtraSmall>
                </Button.AsIcon>
              </Block>
            )}
            <Block data-name="MobileNavigation__Categories">
              {currentCategory.children?.map(category => (
                <Block
                  key={category.id}
                  data-name="MobileNavigation__Category"
                >
                  <Link to={category.route}>
                    {category.label}
                  </Link>
                  {category.children !== undefined &&
                    category?.children.length > 0 && (
                    <Button.AsIcon
                      aria-label={`${category.label} children button`}
                      onClick={() => { handleCategoryChange(category) }}
                    >
                      <ChevronIcon />
                    </Button.AsIcon>
                  )}
                </Block>
              ))}
            </Block>
            <Block data-name="MobileNavigation__Footer">
              <Block data-name="MobileNavigation__CitySelector">
                <Block data-name="MobileNavigation__CurrentCity">
                  <MarkerIcon />
                  <Text>{t("labels.city")}</Text>
                </Block>
                <Button.AsIcon data-name="MobileNavigation__EditCity">
                  <EditIcon />
                  <Text.Caption>{t("actions.change")}</Text.Caption>
                </Button.AsIcon>
              </Block>
              <Text data-name="MobileNavigation__Help">{t("labels.help")}</Text>
            </Block>
          </StyledMobileNavigation>
        </SideMenu>
      )}
    </MobileNavContext.Consumer>
  )
}
