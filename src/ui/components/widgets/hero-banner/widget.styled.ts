import styled from "styled-components";
import { Title, Button } from "@components/common"
import { getViewPortsStyles } from "@theme/selectors";

export const StyledHeroBannerActions = styled.div`
  position: absolute;
  top: 50%; left: 0;
  padding-left: 5rem;
  transform: translateY(-50%);

  ${Title.Styled.Small} {
    margin-top: .625rem;
  }
  
  ${Button.Styled.Normal} {
    margin-top: 1.5rem;
  }

  @media(max-width: ${props => getViewPortsStyles(props).small}) {
    padding-left: 2rem;
  }
`

export const StyledHeroBanner = styled.div`
  display: flex;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  // Otherwise buttons will look bad
  min-height: 220px;
`