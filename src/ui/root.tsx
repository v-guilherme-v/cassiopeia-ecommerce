import { ThemeProvider } from "styled-components"
import { useThemeSetup } from "@theme/hooks"

import { HomePage, ProductPage, NotFoundPage } from "@pages"
import { ThemeFunctionsContext } from "@contexts"

import StyledRoot from "./root.styled"

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

export default function Root (): JSX.Element {
  const { selectedTheme, handleThemeChange } = useThemeSetup()

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/home",
      element: <HomePage />
    },
    {
      path: "/product",
      element: <ProductPage />
    },
    {
      path: "*",
      element: <NotFoundPage />
    }
  ])

  return (
    <ThemeProvider theme={selectedTheme}>
      <ThemeFunctionsContext.Provider value={{ handleThemeChange }}>
        <StyledRoot>
          <RouterProvider router={router} />
        </StyledRoot>
      </ThemeFunctionsContext.Provider>
    </ThemeProvider>
  )
}