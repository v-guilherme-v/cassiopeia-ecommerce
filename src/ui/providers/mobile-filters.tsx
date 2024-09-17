import { type PropsWithChildren, useState } from "react"
import { MobileFiltersContext } from "@contexts"

export function MobileFiltersContextProvider (props: PropsWithChildren): JSX.Element {
  const [ isFilterMenuOpen, setIsFilterMenuOpen ] = useState<boolean>(false)

  const miniCartContextValue = {
    isFilterMenuOpen,
    toggleMobileFilters: () => {
      setIsFilterMenuOpen(c => !c)
    }
  }

  return (
    <MobileFiltersContext.Provider value={miniCartContextValue}>
      {props.children}
    </MobileFiltersContext.Provider>
  )
}