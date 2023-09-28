import styled from "styled-components"

const StyledNormalTopBar = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1160px;
  min-height: 52px;

  background-color: ${({ theme }) => theme.color.white};
`

const StyledSocialMediasTopBar = styled(StyledNormalTopBar)``

export default {
  Normal: StyledNormalTopBar,
  SocialMedias: StyledSocialMediasTopBar
}