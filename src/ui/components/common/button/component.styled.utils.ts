import { ButtonSizes, ButtonTypes } from "./types"

/**
 * Defines a size based on `ButtonSizes` component prop
 * @param { ButtonSizes | undefined } size
 * @returns { string } the size itself
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
export function getBgColor (props: any): string {
  const isPrimary = props.buttonType === ButtonTypes.PRIMARY

  if (isPrimary) return props.theme.color.primary
  else return props.theme.color.white
}

/**
 * Define the font color to the component
 * @param props component props
 * @returns { string } the css hex color
 */
export function getFontColor (props: any): string {
  const { color } = props
  const isOutlined = props.buttonType === ButtonTypes.OUTLINED
  const isLink = props.buttonType === ButtonTypes.LINK

  if (color !== null && color !== undefined) return color
  else if (isOutlined || isLink) return props.theme.color.black
  else return props.theme.color.white
}

/**
 * Returns a border style rule based on component props
 * @param props component props
 * @returns { string } the entire css border rule
 */
export function getBorderColor (props: any): string {
  const { buttonType, size } = props
  const isIcon = size === ButtonSizes.ICON
  const isOutlined = buttonType === ButtonTypes.OUTLINED

  if (isOutlined && isIcon) return `1px solid ${props.theme.color.lightGrey}`
  else if (isOutlined) return `1px solid ${props.theme.color.primary}`

  return "none"
}