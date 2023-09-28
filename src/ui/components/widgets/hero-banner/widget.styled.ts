import styled from "styled-components";
import { Title, Button } from "@components/common"

export const StyledHeroBannerActions = styled.div`
  position: absolute;
  top: 50%; left: 0;
  padding-left: 5rem;
  transform: translateY(-50%);

  ${Title.Styled.Small} {
    margin-top: .625rem;
  }
  
  ${Button.Styled} {
    margin-top: 1.5rem;
  }
`

export const StyledHeroBanner = styled.div`
  display: flex;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  min-height: 220px;

  img {
    width: 100%;
    max-height: 220px;
    object-fit: cover;
  }
`