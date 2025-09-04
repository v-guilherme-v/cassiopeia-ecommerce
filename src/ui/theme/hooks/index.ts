import { useState } from "react"

import { theme } from "../index"
import { type ThemeType } from "../types"

interface IUseThemeSetup {
  selectedTheme: ThemeType
  handleThemeChange: (type: TThemeVariations) => void
}

type TThemeVariations = "default" | "dark"

export function useThemeSetup (): IUseThemeSetup {
  const [ selectedTheme, setSelectedTheme ] = useState<ThemeType>(theme)

  /**
   * Returns a theme object based on a theme name
   * @param { "default | dark" } type
   * @returns { ThemeType }
   */
  const getThemeConfig = (type: TThemeVariations): ThemeType => {
    switch (type) {
      case "default":
        return theme
      default:
        return theme
    }
  }

  /**
   * It handles theme change in response to getThemeConfig
   * @param { string } type
   * @returns { void }
   */
  const handleThemeChange = (type: TThemeVariations): void => {
    const themeConfig = getThemeConfig(type)
    setSelectedTheme(themeConfig)
  }

  return {
    selectedTheme,
    handleThemeChange
  }
}