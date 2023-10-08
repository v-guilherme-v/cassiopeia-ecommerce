import { CartIcon, SearchIcon } from "@components/icons"
import { getColorStyles, getProductCardStyles } from "@theme/selectors"
import { type MouseEventHandler } from "react"
import styled from "styled-components"

interface ControlProps {
  name: string
  icon: JSX.Element
  onClick?: MouseEventHandler
}

function Control (props: ControlProps): JSX.Element {
  return (
    <StyledControl onClick={props.onClick}>
      { props.icon }
    </StyledControl>
  )
}

const StyledControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => getProductCardStyles(props).controls.width};
  height: ${props => getProductCardStyles(props).controls.height};
  border-radius: 4px;
  cursor: pointer;
  background-color: ${props => getColorStyles(props).white};
`

function ProductCardControls ({ className = "" }: any): JSX.Element {
  return (
    <StyledProductCardControls className={className}>
      <Control name="AddToCart" icon={<CartIcon />}/>
      <Control name="SeeProduct" icon={<SearchIcon />}/>
    </StyledProductCardControls>
  )
}

const StyledProductCardControls = styled.div`
  --control-height: ${props => "-" + getProductCardStyles(props).controls.height};

  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1.875rem;
  bottom: var(--control-height);
  opacity: 0;

  transition: opacity .5s,
    transform .5s;

  ${StyledControl}:hover svg {
    opacity: 0.5;
  }
`

ProductCardControls.Styled = StyledProductCardControls

export default ProductCardControls