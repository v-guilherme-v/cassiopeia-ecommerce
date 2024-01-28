import { useContext, useEffect } from "react"
import { MiniCartContext, type MiniCartContextType } from "@contexts"

import {
  MiniCartContainer,
  MiniCartContent,
  MiniCartCheckout,
  MiniCartHeading,
  MiniCartItems,
  MiniCartPromotionEntry,
  MiniCartSummary,
  MiniCartOverlay
} from "./components"

function MiniCart (): JSX.Element {
  const miniCartContext = useContext<MiniCartContextType | null>(MiniCartContext)

  useEffect(() => {
    if (document !== null &&
      miniCartContext?.isOpen === true) {
      document.body.style.overflow = "hidden"
    }

    return () => {
      if (document !== null) {
        document.body.style.overflow = "auto"
      }
    }
  }, [ miniCartContext?.isOpen ])

  return (
    <MiniCartContainer>
      <MiniCartContent>
        <MiniCartHeading/>
        <MiniCartItems/>
        <MiniCartPromotionEntry/>
        <MiniCartSummary/>
        <MiniCartCheckout/>
      </MiniCartContent>
      <MiniCartOverlay/>
    </MiniCartContainer>
  )
}

export default MiniCart