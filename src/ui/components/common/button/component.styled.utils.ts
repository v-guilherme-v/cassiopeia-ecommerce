import { type ThemeType } from "@theme/types"
import { ButtonSizes, ButtonModels, type ButtonProps } from "./types"
import { getColorStyles } from "@theme/selectors"

// Auxialiary type to represent the theme in button type
interface ThemeTypeAsProperty { theme: ThemeType }

// A styled button has its own props and the theme in it
interface StyledButtonProps
  extends ButtonProps, ThemeTypeAsProperty {}

/**
 * Defines a size based on `ButtonSizes` component prop
 * @param { ButtonSizes } size
 * @returns { string } the size itself
 *
 * @todo tie these sizes to a type, so i can reference elsewhere
 */
export function getButtonSize (size: ButtonSizes | undefined): string {
  switch (size) {
    case ButtonSizes.ICON:
      return "46px"
    case ButtonSizes.LARGE:
      return "200px"
    default:
      return "138px"
  }
}

/**
 * Returns a background color
 * based in some component props
 * @param props
 * @returns { string }
 */
export function getBgColor (props: StyledButtonProps): string {
  const { model = ButtonModels.PRIMARY } = props
  const themeColors = getColorStyles(props)

  // custom background
  if (
    props.backgroundColor !== null &&
    props.backgroundColor !== undefined
  ) {
    return props.backgroundColor
  }

  // default colors
  switch (model) {
    case ButtonModels.PRIMARY:
      return themeColors.primary
    case ButtonModels.OUTLINED:
      return themeColors.white
    case ButtonModels.LINK:
      return "transparent"
  }
}

/**
 * Define the font color to the component
 * @param props component props
 * @returns { string } the css hex color
 */
export function getFontColor (props: StyledButtonProps): string {
  const { model, theme } = props
  const isOutlined = model === ButtonModels.OUTLINED
  const isLink = model === ButtonModels.LINK

  if (isOutlined || isLink) return theme.color.primary
  else return theme.color.white
}

/**
 * Returns a border style rule based on component props
 * @param props component props
 * @returns { string } the entire css border rule
 */
export function getBorderColor (props: StyledButtonProps): string {
  const { model, size } = props
  const isIcon = size === ButtonSizes.ICON
  const isOutlined = model === ButtonModels.OUTLINED

  if (props?.customStyles?.borderColor !== null &&
    props?.customStyles?.borderColor !== undefined) return `1px solid ${props.customStyles.borderColor}`
  else if (isOutlined && isIcon) return `1px solid ${props.theme.color.lightGrey}`
  else if (isOutlined) return `1px solid ${props.theme.color.primary}`

  return "none"
}