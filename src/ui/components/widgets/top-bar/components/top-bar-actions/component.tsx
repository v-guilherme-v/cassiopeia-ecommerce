import { CartIcon, SearchIcon } from "@components/icons"
import StyledTopBarActions from "./component.styled"

function TopBarActions (): JSX.Element {
  return (
    <StyledTopBarActions>
      <div className="TopBar__Search">
        <SearchIcon />
      </div>
      <div className="TopBar__MiniCart">
        <CartIcon />
      </div>
    </StyledTopBarActions>
  )
}

export default TopBarActions