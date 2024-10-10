import { type PropsWithChildren, useState } from "react"
import { MiniCartContext } from "@contexts"

export function MiniCartContextProvider (props: PropsWithChildren): JSX.Element {
  const [ isMiniCartOpen, setIsMiniCartOpen ] = useState<boolean>(false)

  const miniCartContextValue = {
    isOpen: isMiniCartOpen,
    toggleMiniCart: () => {
      setIsMiniCartOpen(c => !c)
    }
  }

  return (
    <MiniCartContext.Provider value={miniCartContextValue}>
      {props.children}
    </MiniCartContext.Provider>
  )
}