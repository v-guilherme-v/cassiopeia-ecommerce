import { ThemeProvider } from "styled-components"
import { useThemeSetup } from "@theme/hooks"

import { Home } from "@pages/index"
import { ThemeFunctionsContext } from "@contexts/index"

import StyledRoot from "./Root.styled"
import StyledGlobal from "./Global.styled"

export default function Root(){
  const { selectedTheme, handleThemeChange } = useThemeSetup()

  return (
    <ThemeProvider theme={selectedTheme}>
      <ThemeFunctionsContext.Provider value={{handleThemeChange}}>
          <StyledGlobal />
          <StyledRoot className="App">
            <Home />
          </StyledRoot>
      </ThemeFunctionsContext.Provider>
    </ThemeProvider>
  )
}
