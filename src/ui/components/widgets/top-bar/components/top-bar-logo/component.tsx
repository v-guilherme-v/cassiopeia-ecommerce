import { LogoIcon } from "@components/icons"
import StyledTopBarLogo from "./component.styled"

function Logo (): JSX.Element {
  return (
    <StyledTopBarLogo href="/">
      <LogoIcon />
    </StyledTopBarLogo>
  )
}

export default Logo