import styled from "styled-components"

const StyledNormalTopBar = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8.75rem;
  min-height: 52px;

  position: sticky;
  top: 0;
  left: 0;
  right: 0;

  background-color: ${({ theme }) => theme.color.white};
`

const StyledSocialMediasTopBar = styled(StyledNormalTopBar)``

export default {
  Normal: StyledNormalTopBar,
  SocialMedias: StyledSocialMediasTopBar
}