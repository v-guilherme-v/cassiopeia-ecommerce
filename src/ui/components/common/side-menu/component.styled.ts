import styled from "styled-components"
import { getColorStyles, getSideMenuStyles } from "@theme/selectors"

export const StyledSideMenuContainer = styled.div`
  position: fixed;
  overflow-y: auto;
  top: 0;

  height: 100dvh;
  max-width: ${props => getSideMenuStyles(props).width};
  width: 100%;

  background-color: ${props => getColorStyles(props).white};
  z-index: ${props => getSideMenuStyles(props).zIndex};
  will-change: transform;
  
  /* Anchor to the side based on desired animation direction */
  left: ${props => props?.animationDirection === 'left' ? 0 : 'unset'};
  right: ${props => props?.animationDirection === 'right' ? 0 : 'unset'};
`;

export const StyledSideMenuOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(36, 36, 36, 0.38);
  visibility: ${props => props?.isOpen ? "visible" : "hidden"};
  pointer-events: ${props => props?.isOpen ? "auto" : "none"};
  z-index: ${props => getSideMenuStyles(props).zIndex - 1};
`
