import { useContext, useEffect } from "react"
import StyledMiniCart from "./widget.styled"
import { MiniCartContext, type MiniCartContextType } from "@contexts"

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

  const styledProps = {
    isOpen: miniCartContext?.isOpen
  }

  return (
    <StyledMiniCart.Container>
      <StyledMiniCart.Content {...styledProps}>
        Content
      </StyledMiniCart.Content>
      <StyledMiniCart.Overlay
        onClick={() => { miniCartContext?.toggleMiniCart() }}
        {...styledProps}
      />
    </StyledMiniCart.Container>
  )
}

export default MiniCart