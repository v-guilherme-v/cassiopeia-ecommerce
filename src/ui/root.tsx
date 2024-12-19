import { ThemeProvider } from "styled-components"
import { useThemeSetup } from "@theme/hooks"

import {
  HomePage,
  ProductPage,
  NotFoundPage,
  CategoryPage,
  CheckoutPage
} from "@pages"

import { ThemeFunctionsContext } from "@contexts"

import StyledRoot from "./root.styled"

import {
  createHashRouter,
  RouterProvider
} from "react-router-dom"

export default function Root (): JSX.Element {
  const { selectedTheme, handleThemeChange } = useThemeSetup()

  // Using hash router till i host it somewhere else than github
  const router = createHashRouter([
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
      path: "/category/:categoryId",
      element: <CategoryPage />
    },
    {
      path: "/checkout",
      element: <CheckoutPage />
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