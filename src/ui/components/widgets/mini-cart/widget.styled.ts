import styled from "styled-components"
import { getColorStyles, getGeneralStyles } from "@theme/selectors"

interface MiniCartProps {
  isOpen?: boolean
}

const StyledMiniCart = styled.aside<MiniCartProps>`
  --mini-cart-width: 554px;
  --mini-cart-transition-time: 500ms;
`

const StyledMiniCartContent = styled.div<MiniCartProps>`
  position: absolute;
  top: 0;
  right: ${props => !props?.isOpen ? "calc(var(--mini-cart-width) * -1)" : "0"};
  height: 100svh;
  width: var(--mini-cart-width);
  background-color: ${props => getColorStyles(props).white};
  z-index: ${props => getGeneralStyles(props).miniCartLayer};
  transition: right var(--mini-cart-transition-time);
`

const StyledMiniCartOverlay = styled.div<MiniCartProps>`
  position: absolute;
  inset: 0;
  background: rgba(36, 36, 36, 0.38);
  visibility: ${props => props?.isOpen ? "visible" : "hidden"};
  z-index: ${props => getGeneralStyles(props).miniCartLayer - 1};
`

export default {
  Container: StyledMiniCart,
  Content: StyledMiniCartContent,
  Overlay: StyledMiniCartOverlay
}