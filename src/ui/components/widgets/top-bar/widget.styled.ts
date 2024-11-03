import styled from "styled-components"
import { getColorStyles, getViewPortsStyles } from "@ui/theme/selectors"

const StyledNormalTopBar = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1160px;
  min-height: 52px;

  background-color: ${props => getColorStyles(props).white};

  @media (max-width: ${props => getViewPortsStyles(props).medium}) {
    height: 72px;
  }
`

const StyledLogoOnlyTopBar = styled(StyledNormalTopBar)`
  justify-content: center;
`

const StyledSocialMediasTopBar = styled(StyledNormalTopBar)``

export default {
  Normal: StyledNormalTopBar,
  LogoOnly: StyledLogoOnlyTopBar,
  SocialMedias: StyledSocialMediasTopBar
}