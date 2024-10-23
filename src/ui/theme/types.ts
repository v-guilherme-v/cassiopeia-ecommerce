interface ButtonStyles {
  borderRadius: string
  transition: string
}

export type ColorStylesKey = keyof ColorStyles
export interface ColorStyles {
  // Main colors
  primary: string
  primaryDark: string
  secondary: string
  accent: string

  // UI colors
  active: string
  positive: string
  warning: string
  negative: string

  // Neutral colors
  white: string
  snow: string
  paleGrey: string
  lightGrey: string
  grey: string
  darkGrey: string
  lightBlack: string
  black: string

  // Social medias
  whatsapp: string
  facebook: string
}

export type ColorStylesValue = ColorStyles[keyof ColorStyles]

interface FieldStateStyles {
  default: string
  disabled: string
  active: string
  onFocus: string
  error: string
  success: string
}

interface WeightStyles {
  regular: string
  medium: string
  semibold: string
  [index: string]: string
}

export interface FontStyles {
  family: string
  rootSize: string
  weight: WeightStyles
}

export interface BoxShadowStyles {
  lightShadow: string
  lightShadowHoverRight: string
  lightShadowHoverLeft: string
}

interface TextStyle {
  fontSize: string
  lineHeight: string
}

export interface TextStyles {
  large: TextStyle
  default: TextStyle
  button: TextStyle
  caption: TextStyle
  strikeLarge: TextStyle
  strike: TextStyle
  radio: TextStyle
}

export interface TitleStyle {
  fontSize: string
  lineHeight: string
}

export interface TitleStyles {
  extraLarge: TitleStyle
  large: TitleStyle
  medium: TitleStyle
  small: TitleStyle
  extraSmall: TitleStyle
}

export interface GeneralStyles {
  containerSize: string
  headerLayer: number
  miniCartLayer: number
  mobileFiltersLayer: number
}

export interface ViewportMedias {
  extraLarge: string
  large: string
  medium: string
  small: string
}

export interface ProductCardStyles {
  width: string
  img: {
    width: string
    height: string
  }
  controls: {
    width: string
    height: string
  }
  mobile: {
    width: string
    img: {
      width: string
      height: string
    }
  }
}

export interface FallbackImageStyles {
  backgroundColor: string
}

export interface SideMenuStyles {
  width: string
  transitionTime: string
  zIndex: number
}

export interface ThemeType {
  // Root styles
  font: FontStyles

  // All colors
  color: ColorStyles

  // Shadows
  boxShadow: BoxShadowStyles

  general: GeneralStyles
  viewPorts: ViewportMedias

  // Components Styles
  button: ButtonStyles
  text: TextStyles
  title: TitleStyles
  fieldState: FieldStateStyles
  productCard: ProductCardStyles
  fallbackImage: FallbackImageStyles
  sideMenu: SideMenuStyles
}