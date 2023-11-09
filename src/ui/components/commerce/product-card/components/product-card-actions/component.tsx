import { CartIcon, SearchIcon } from "@components/icons"
import { getColorStyles, getProductCardStyles, getViewPortsStyles } from "@theme/selectors"
import { type MouseEventHandler } from "react"
import styled from "styled-components"

interface ActionProps {
  name: string
  icon: JSX.Element
  onClick?: MouseEventHandler
}

function Action (props: ActionProps): JSX.Element {
  return (
    <StyledAction onClick={props.onClick}>
      { props.icon }
    </StyledAction>
  )
}

const StyledAction = styled.div`
  --control-width: ${props => getProductCardStyles(props).controls.width};
  --control-height: ${props => getProductCardStyles(props).controls.height};

  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--control-width);
  height: var(--control-height);
  border-radius: 4px;
  cursor: pointer;
  background-color: ${props => getColorStyles(props).white};
  
  svg {
    color: ${props => getColorStyles(props).black};
  }
`

function ProductCardActions ({ className = "" }: { className?: string }): JSX.Element {
  return (
    <StyledProductCardActions className={className}>
      <Action name="AddToCart" icon={<CartIcon />}/>
      <Action name="SeeProduct" icon={<SearchIcon />}/>
    </StyledProductCardActions>
  )
}

const StyledProductCardActions = styled.div`
  --control-height: ${props => "-" + getProductCardStyles(props).controls.height};

  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1.875rem;
  bottom: var(--control-height);
  /** ProductCard knows how to handle opacity */
  opacity: 0;

  transition: opacity .5s,
    transform .5s;

  ${StyledAction}:hover svg {
    opacity: 0.5;
  }

  /*On mobile there's no hover effect*/
  @media (max-width: ${props => getViewPortsStyles(props).medium}) {
    transition: none;
    bottom: 15px;
    opacity: 1;

    ${StyledAction}:hover svg {
      opacity: 1;
    }
  }
`

ProductCardActions.Styled = StyledProductCardActions

export default ProductCardActions