import { ThemeProvider } from "styled-components"
import { useThemeSetup } from "@theme/hooks"

import { Home } from "@pages/index"
import { ThemeFunctionsContext } from "@contexts"

import StyledRoot from "./root.styled"

export default function Root (): JSX.Element {
  const { selectedTheme, handleThemeChange } = useThemeSetup()

  return (
    <ThemeProvider theme={selectedTheme}>
      <ThemeFunctionsContext.Provider value={{ handleThemeChange }}>
        <StyledRoot>
          <Home />
        </StyledRoot>
      </ThemeFunctionsContext.Provider>
    </ThemeProvider>
  )
}