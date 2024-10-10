import { type PropsWithChildren, useState } from "react"
import { MobileNavContext } from "@contexts"

export function MobileNavigationContextProvider (props: PropsWithChildren): JSX.Element {
  const [ isMobileNavOpen, setIsMobileNavOpen ] = useState<boolean>(false)

  const mobileNavContextValue = {
    isMobileNavOpen,
    toggleMobileNavigation: () => {
      setIsMobileNavOpen(c => !c)
    }
  }

  return (
    <MobileNavContext.Provider value={mobileNavContextValue}>
      {props.children}
    </MobileNavContext.Provider>
  )
}