import type {
  ThemeType,
  ViewportMedias,
  ColorStyles,
  FontStyles,
  ProductCardStyles,
  FallbackImageStyles,
  BoxShadowStyles,
  TextStyles,
  TitleStyles
} from "@theme/types"

export const getPropsTheme = (props: { theme: ThemeType }): ThemeType => props.theme

interface ViewportMediasAsNumbers {
  extraLarge?: number
  large?: number
  medium?: number
  small?: number
}

/**
 * Filters the given theme to a single object
 * holding view ports that can be extracted
 * as integers by the configs.asNumbers property.
 *
 * @note View ports object is naturally exported with "px"
 * appended to its value, because values are represented in pixels.
 *
 * @param { theme: ThemeType } props
 * @param { asNumbers?: boolean } configs
 * @returns { ViewportMedias | ViewportMediasAsNumbers }
 */
export const getViewPortsStyles = (
  props: { theme: ThemeType },
  configs?: { asNumbers?: boolean }
): ViewportMedias | ViewportMediasAsNumbers => {
  if (configs?.asNumbers !== undefined) {
    const viewPortsInPx = getPropsTheme(props).viewPorts

    /**
     * Reducing every pixel view port to an
     * integer value/type by replacing appended
     * "px" matches to nothing and parsing to int.
     */
    const reducePixelsToNumber = (viewPortsAsNumber: ViewportMediasAsNumbers, curr: string): ViewportMediasAsNumbers => {
      type viewPortKey = keyof ViewportMedias
      type numViewPortKey = keyof ViewportMediasAsNumbers

      if (curr !== null) {
        viewPortsAsNumber[curr as viewPortKey] = Number(viewPortsInPx[curr as numViewPortKey].replace("px", ""))
      }

      return viewPortsAsNumber
    }

    return Object.keys(viewPortsInPx).reduce<ViewportMediasAsNumbers>(reducePixelsToNumber, {})
  }

  return getPropsTheme(props).viewPorts
}

export const getColorStyles = (props: { theme: ThemeType }): ColorStyles => getPropsTheme(props).color
export const getFontStyles = (props: { theme: ThemeType }): FontStyles => getPropsTheme(props).font
export const getTextStyles = (props: { theme: ThemeType }): TextStyles => getPropsTheme(props).text
export const getTitleStyles = (props: { theme: ThemeType }): TitleStyles => getPropsTheme(props).title
export const getBoxShadowStyles = (props: { theme: ThemeType }): BoxShadowStyles => getPropsTheme(props).boxShadow
export const getProductCardStyles = (props: { theme: ThemeType }): ProductCardStyles => getPropsTheme(props).productCard
export const getFallbackImageStyles = (props: { theme: ThemeType }): FallbackImageStyles => getPropsTheme(props).fallbackImage