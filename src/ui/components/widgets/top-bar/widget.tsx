import StyledTopBar from "./widget.styled"

import TopBarActions from "./components/top-bar-actions/component"
import TopBarCitySelector from "./components/top-bar-city-selector/component"
import TopBarLogo from "./components/top-bar-logo/component"
import TopBarContact from "./components/top-bar-contact/component"

function TopBar (): JSX.Element {
  return (
    <StyledTopBar.Normal>
      <TopBarCitySelector />
      <TopBarLogo />
      <TopBarActions />
    </StyledTopBar.Normal>
  )
}

function TopBarSocialMedias (): JSX.Element {
  return (
    <StyledTopBar.SocialMedias>
      <TopBarCitySelector />
      <TopBarContact />
    </StyledTopBar.SocialMedias>
  )
}

TopBar.SocialMedias = TopBarSocialMedias

export default TopBar