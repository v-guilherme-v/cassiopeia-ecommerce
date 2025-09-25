import { forwardRef, type MouseEventHandler } from "react"
import { motion } from "motion/react"
import styled from "styled-components"

import { CartIcon, SearchIcon } from "@components/icons"
import { getColorStyles, getProductCardStyles, getViewPortsStyles } from "@theme/selectors"
import { animationConfig } from "@ui/config"

interface ProductCardActionProps {
  name: string
  icon: JSX.Element
  onClick?: MouseEventHandler
}

const StyledProductCardAction = styled.div`
  --control-width: ${props => `${getProductCardStyles(props).controls.width}px`};
  --control-height: ${props => `${getProductCardStyles(props).controls.height}px`};

  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--control-width);
  height: var(--control-height);
  border-radius: 4px;
  cursor: pointer;
  background-color: ${props => getColorStyles(props).white};
  transform-origin: center bottom;
  
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

const MProductCardAction = motion(StyledProductCardAction);

function ProductCardAction(props: ProductCardActionProps): JSX.Element {
  return (
    <MProductCardAction
      variants={{
        actionsVisible: { opacity: 1, scale: 1 },
        actionsHidden: { opacity: 0, scale: 0.96 }
      }}
      transition={{
        scale: { type: "spring", stiffness: 500, damping: 28, mass: 0.5 },
        opacity: { duration: 0.15, ease: "easeOut" }
      }}
      whileTap={animationConfig.buttons.whileTap}
      onClick={props.onClick}
    >
      {props.icon}
    </MProductCardAction>
  )
}

const StyledProductCardActions = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1.875rem;

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

const ProductCardActions = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <StyledProductCardActions ref={ref}>
      <ProductCardAction name="AddToCart" icon={<CartIcon />} />
      <ProductCardAction name="SeeProduct" icon={<SearchIcon />} />
    </StyledProductCardActions>
  )
}
)

ProductCardActions.displayName = "ProductCardActions"
  ; (ProductCardActions as any).Styled = StyledProductCardActions

export default ProductCardActions
