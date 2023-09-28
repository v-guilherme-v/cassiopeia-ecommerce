interface ButtonStyles {
  borderRadius: string
  transition: string
}

interface ColorStyles {
  // Main colors
  primary: string
  primaryDark: string
  secondary: string

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
  black: string
  [index: string]: string
}

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

interface FontStyles {
  family: string
  rootSize: string
  weight: WeightStyles
}

interface TextStyle {
  fontSize: string
  lineHeight: string
}

interface TextStyles {
  large: TextStyle
  default: TextStyle
  button: TextStyle
  caption: TextStyle
  strikeLarge: TextStyle
  strike: TextStyle
  radio: TextStyle
}

interface TitleStyle {
  fontSize: string
  lineHeight: string
}

interface TitleStyles {
  extraLarge: TitleStyle
  large: TitleStyle
  medium: TitleStyle
  small: TitleStyle
  extraSmall: TitleStyle
}

interface GeneralStyles {
  containerSize: string
  headerLayer: number
}

export interface ViewportMedias {
  extraLarge: string
  large: string
  medium: string
  small: string
}

export interface ThemeType {
  // Root styles
  font: FontStyles

  // All colors
  color: ColorStyles

  // Shadows
  lightShadow: string
  lightShadowHoverRight: string
  lightShadowHoverLeft: string

  // Components Styles
  button: ButtonStyles
  text: TextStyles
  title: TitleStyles
  fieldState: FieldStateStyles
  general: GeneralStyles
  viewPorts: ViewportMedias
}