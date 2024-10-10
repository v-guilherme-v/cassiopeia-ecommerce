import styled from "styled-components"

import { Button } from "@components/common"
import { HamburgerIcon } from "@components/icons"
import { useViewPorts } from "@ui/hooks/use-viewports"
import { MobileNavContext } from "@ui/contexts"
import { getColorStyles } from "@ui/theme/selectors"

import TopBarCitySelector from "../top-bar-city-selector/component"

function TopBarMobileNavigationToggle (): JSX.Element {
  return (
    <MobileNavContext.Consumer>
      {mobileNavContext => (
        <StyledTopBarMobileNavigationToggle>
          <Button.AsIcon onClick={mobileNavContext?.toggleMobileNavigation}>
            <HamburgerIcon />
          </Button.AsIcon>
        </StyledTopBarMobileNavigationToggle>
      )}
    </MobileNavContext.Consumer>
  )
}

const StyledTopBarMobileNavigationToggle = styled.div`
  min-width: 68px;
  
  ${Button.Styled.AsIcon} svg {
    color: ${props => getColorStyles(props).black}
  }
`

export default function TopBarLeftSideActions (): JSX.Element {
  return useViewPorts().minWidthMedium
    ? <TopBarCitySelector />
    : <TopBarMobileNavigationToggle />
}