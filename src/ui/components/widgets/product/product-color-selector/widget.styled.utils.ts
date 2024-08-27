import { type ThemeType } from "@theme/types"
import { type ColorSelectionOptionProps } from "./widget"
import { getColorStyles } from "@theme/selectors"

export function getOptionStyleRules (
  props: { theme: ThemeType } & Omit<ColorSelectionOptionProps, "onColorOptionSelected">
): { outline: string, border: string } {
  if (
    props.selected !== null &&
    props.selected !== undefined &&
    props.selected
  ) {
    const outlineColor: string = getColorStyles(props).black
    const borderColor: string = getColorStyles(props).white

    return {
      outline: `2px solid ${outlineColor}`,
      border: `2px solid ${borderColor}`
    }
  } else {
    return {
      outline: "0",
      border: "0"
    }
  }
}