import { type PropsWithChildren } from "react"

import { ThemeContext } from "styled-components"
import LightTheme from "@theme/variations/light"

export function LightContextProvider ({ children }: PropsWithChildren): JSX.Element {
  return (
    <ThemeContext.Provider value={LightTheme}>
      { children }
    </ThemeContext.Provider>
  )
}