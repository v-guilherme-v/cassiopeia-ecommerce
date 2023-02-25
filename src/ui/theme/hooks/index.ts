import { useState } from "react"

import { light, dark } from "../index"
import { LIGHT, DARK } from "../constants"
import { ThemeType } from "../types"

export function useThemeSetup() {
  const [
    selectedTheme,
    setSelectedTheme
  ] = useState<ThemeType>(light)

  /**
   * Returns a theme object based on a theme name
   * @param { string } type 
   * @returns { ThemeType }
   */
  const getThemeConfig = (type: string): ThemeType => {
    switch (type) {
      case LIGHT:
        return light
      case DARK:
        return dark
      default:
        return light
    }
  }

  /**
   * It handles theme change in response to getThemeConfig
   * @param { string } type
   * @returns { void }
   */
  const handleThemeChange = (type: string): void => {
    const themeConfig = getThemeConfig(type)
    setSelectedTheme(themeConfig)
  }

  return {
    selectedTheme,
    handleThemeChange
  }
}