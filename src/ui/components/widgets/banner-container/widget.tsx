import type { PropsWithChildren } from "react"
import styled from "styled-components"

function BannerContainer ({ children }: PropsWithChildren): JSX.Element {
  return (
    <StyledBannerContainer>
      Banner container
      { children }
    </StyledBannerContainer>
  )
}

const StyledBannerContainer = styled.div``

BannerContainer.Styled = StyledBannerContainer

export default BannerContainer