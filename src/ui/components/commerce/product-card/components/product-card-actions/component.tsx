import { CartIcon, SearchIcon } from "@components/icons"
import { getColorStyles, getProductCardStyles, getViewPortsStyles } from "@theme/selectors"
import { type MouseEventHandler } from "react"
import styled from "styled-components"

interface ProductCardActionProps {
  name: string
  icon: JSX.Element
  onClick?: MouseEventHandler
}

const StyledProductCardAction = styled.div`
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
  
  @media (max-width: ${props => getViewPortsStyles(props).medium}) {
    --control-width: 40px;
    --control-height: 40px;

    svg {
      width: 1rem;
      height: 1rem;
    }
  }
`

function ProductCardAction (props: ProductCardActionProps): JSX.Element {
  return (
    <StyledProductCardAction onClick={props.onClick}>
      { props.icon }
    </StyledProductCardAction>
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

  ${StyledProductCardAction}:hover svg {
    opacity: 0.5;
  }

  /*On mobile there's no hover effect*/
  @media (max-width: ${props => getViewPortsStyles(props).medium}) {
    transition: none;
    bottom: 15px;
    opacity: 1;

    ${StyledProductCardAction}:hover svg {
      opacity: 1;
    }
  }
`

function ProductCardActions ({ className = "" }: { className?: string }): JSX.Element {
  return (
    <StyledProductCardActions className={className}>
      <ProductCardAction name="AddToCart" icon={<CartIcon />}/>
      <ProductCardAction name="SeeProduct" icon={<SearchIcon />}/>
    </StyledProductCardActions>
  )
}

ProductCardActions.Styled = StyledProductCardActions

export default ProductCardActions