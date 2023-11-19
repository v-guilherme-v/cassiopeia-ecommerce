import type { PropsWithChildren } from "react"
import styled from "styled-components"
import { Container } from "@components/common"
import { getViewPortsStyles } from "@theme/selectors"

function BannerContainer (props: PropsWithChildren): JSX.Element {
  return (
    <StyledBannerContainer>
      { props.children }
    </StyledBannerContainer>
  )
}

const StyledBannerContainer = styled(Container.Styled)`
  display: grid;
  --column-size: calc(50% - 20px);
  grid-template-columns: repeat(2, var(--column-size));
  justify-content: space-between;

  ${Container.Styled} {
    padding: 0;
  }

  @media(max-width: ${props => getViewPortsStyles(props).medium}) {
    display: none;
  }
`

BannerContainer.Styled = StyledBannerContainer

export default BannerContainer