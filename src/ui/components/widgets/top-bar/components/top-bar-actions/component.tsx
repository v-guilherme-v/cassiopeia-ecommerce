import { CartIcon, SearchIcon } from "@components/icons"
import StyledTopBarActions from "./component.styled"
import { useContext } from "react"
import { MiniCartContext } from "@contexts"

function TopBarActions (): JSX.Element {
  const miniCartContext = useContext(MiniCartContext)

  return (
    <StyledTopBarActions>
      <div className="TopBar__Search">
        <SearchIcon />
      </div>
      <div className="TopBar__MiniCart" onClick={miniCartContext?.toggleMiniCart}>
        <CartIcon />
      </div>
    </StyledTopBarActions>
  )
}

export default TopBarActions