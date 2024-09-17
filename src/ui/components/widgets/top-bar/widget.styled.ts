import { getViewPortsStyles } from "@ui/theme/selectors"
import styled from "styled-components"

const StyledNormalTopBar = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1160px;
  min-height: 52px;

  background-color: ${({ theme }) => theme.color.white};

  @media (max-width: ${props => getViewPortsStyles(props).medium}) {
    height: 72px;
  }
`

const StyledSocialMediasTopBar = styled(StyledNormalTopBar)``

export default {
  Normal: StyledNormalTopBar,
  SocialMedias: StyledSocialMediasTopBar
}