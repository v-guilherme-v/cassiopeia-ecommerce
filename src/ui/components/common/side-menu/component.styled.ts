import styled, { css } from "styled-components"
import { getColorStyles, getSideMenuStyles } from "@theme/selectors"

interface IStyledSideMenuProps {
  isOpen?: boolean
  animationDirection?: "right" | "left"
}

export const StyledSideMenuContainer = styled.aside<IStyledSideMenuProps>`
  --side-menu-width: ${props => getSideMenuStyles(props).width};
  --side-menu-transition-time: ${props => getSideMenuStyles(props).transitionTime};

  visibility: ${props => props?.isOpen ? "visible" : "hidden"};

  position: fixed;
  overflow-y: auto;
  top: 0;

  ${props => (
    props.animationDirection === "right" && css`
      right: ${!props?.isOpen ? "calc(var(--side-menu-width) * -1)" : "0"};
    `
  )}

  ${props => (
    props.animationDirection === "left" && css`
      left: ${!props?.isOpen ? "calc(var(--side-menu-width) * -1)" : "0"};
    `
  )}

  height: 100dvh;
  max-width: var(--side-menu-width);
  width: 100%;

  background-color: ${props => getColorStyles(props).white};
  z-index: ${props => getSideMenuStyles(props).zIndex};
  transition: right var(--side-menu-transition-time),
    left var(--side-menu-transition-time);
` 

export const StyledSideMenuOverlay = styled.div<IStyledSideMenuProps>`
  position: fixed;
  inset: 0;
  background: rgba(36, 36, 36, 0.38);
  visibility: ${props => props?.isOpen ? "visible" : "hidden"};
  z-index: ${props => getSideMenuStyles(props).zIndex - 1};
`