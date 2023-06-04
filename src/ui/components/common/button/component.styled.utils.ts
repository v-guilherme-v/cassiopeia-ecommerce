import { type ThemeType } from "@theme/types"
import { ButtonSizes, ButtonModels, type ButtonProps } from "./types"

interface ThemeTypeAsProperty { theme: ThemeType }
interface StyledButtonProps extends ButtonProps, ThemeTypeAsProperty {}

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
  const isPrimary = model === ButtonModels.PRIMARY

  if (isPrimary) return props.theme.color.primary
  else return props.theme.color.white
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

  if (isOutlined || isLink) return theme.color.black
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

  if (isOutlined && isIcon) return `1px solid ${props.theme.color.lightGrey}`
  else if (isOutlined) return `1px solid ${props.theme.color.primary}`

  return "none"
}