import {
  MiniCartContent,
  MiniCartCheckout,
  MiniCartHeading,
  MiniCartItems,
  MiniCartPromotionEntry,
  MiniCartSummary
} from "./components"

function MiniCart (): JSX.Element {
  return (
    <MiniCartContent>
      <MiniCartHeading/>
      <MiniCartItems/>
      <MiniCartPromotionEntry/>
      <MiniCartSummary/>
      <MiniCartCheckout/>
    </MiniCartContent>
  )
}

export default MiniCart