import StyledTopBar from "./widget.styled"

import TopBarLeftSideActions from "./components/top-bar-left-side-actions/component"
import TopBarRightSideActions from "./components/top-bar-right-side-actions/component"

import TopBarCitySelector from "./components/top-bar-city-selector/component"
import TopBarLogo from "./components/top-bar-logo/component"
import TopBarContact from "./components/top-bar-contact/component"

function TopBar (): JSX.Element {
  return (
    <StyledTopBar.Normal>
      <TopBarLeftSideActions />
      <TopBarLogo />
      <TopBarRightSideActions />
    </StyledTopBar.Normal>
  )
}

function TopBarLogoOnly (): JSX.Element {
  return (
    <StyledTopBar.LogoOnly>
      <TopBarLogo />
    </StyledTopBar.LogoOnly>
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

TopBar.LogoOnly = TopBarLogoOnly
TopBar.SocialMedias = TopBarSocialMedias

export default TopBar