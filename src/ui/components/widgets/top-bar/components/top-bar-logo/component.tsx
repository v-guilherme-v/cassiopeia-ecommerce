import { LogoIcon } from "@components/icons"
import StyledTopBarLogo from "./component.styled"

import { Link } from "react-router-dom"

function Logo (): JSX.Element {
  return (
    <StyledTopBarLogo>
      <Link to="/home">
        <LogoIcon />
      </Link>
    </StyledTopBarLogo>
  )
}

export default Logo