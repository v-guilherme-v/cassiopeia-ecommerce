import { ThemeProvider } from "styled-components"
import { useThemeSetup } from "@theme/hooks"

import { ProductPage } from "@pages"
import { ThemeFunctionsContext } from "@contexts"

import StyledRoot from "./root.styled"

export default function Root (): JSX.Element {
  const { selectedTheme, handleThemeChange } = useThemeSetup()

  return (
    <ThemeProvider theme={selectedTheme}>
      <ThemeFunctionsContext.Provider value={{ handleThemeChange }}>
        <StyledRoot>
          <ProductPage />
        </StyledRoot>
      </ThemeFunctionsContext.Provider>
    </ThemeProvider>
  )
}