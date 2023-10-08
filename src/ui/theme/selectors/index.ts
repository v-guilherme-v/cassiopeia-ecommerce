import type {
  ThemeType,
  ViewportMedias,
  ColorStyles,
  FontStyles,
  ProductCardStyles,
  FallbackImageStyles,
  BoxShadowStyles
} from "@theme/types"

export const getPropsTheme = (props: { theme: ThemeType }): ThemeType => props.theme
export const getViewPortsStyles = (props: { theme: ThemeType }): ViewportMedias => getPropsTheme(props).viewPorts
export const getColorStyles = (props: { theme: ThemeType }): ColorStyles => getPropsTheme(props).color
export const getFontStyles = (props: { theme: ThemeType }): FontStyles => getPropsTheme(props).font
export const getBoxShadowStyles = (props: { theme: ThemeType }): BoxShadowStyles => getPropsTheme(props).boxShadow
export const getProductCardStyles = (props: { theme: ThemeType }): ProductCardStyles => getPropsTheme(props).productCard
export const getFallbackImageStyles = (props: { theme: ThemeType }): FallbackImageStyles => getPropsTheme(props).fallbackImage