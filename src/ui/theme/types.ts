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
}

interface FontStyles {
  family: string
  rootSize: string
  weight: WeightStyles
}

interface TextStyles {
  large: {
    fontSize: string
    lineHeight: string
  }
  default: {
    fontSize: string
    lineHeight: string
  }
  button: {
    fontSize: string
    lineHeight: string
  }
  caption: {
    fontSize: string
    lineHeight: string
  }
  strikeLarge: {
    fontSize: string
    lineHeight: string
  }
  strike: {
    fontSize: string
    lineHeight: string
  }
}

interface TitleStyles {
  extraLarge: {
    fontSize: string
    lineHeight: string
  }
  large: {
    fontSize: string
    lineHeight: string
  }
  medium: {
    fontSize: string
    lineHeight: string
  }
  small: {
    fontSize: string
    lineHeight: string
  }
  extraSmall: {
    fontSize: string
    lineHeight: string
  }
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
}