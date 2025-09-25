import { useState } from "react"
import { Link } from "react-router-dom"
import { motion, useReducedMotion } from "motion/react"
import { useTheme } from "styled-components"

import { Title, Image } from "@components/common"
import Pricing from "@components/commerce/pricing/component"
import { getProductCardStyles } from "@ui/theme/selectors"

import StyledProductCard from "./component.styled"
import ProductCardActions from "./components/product-card-actions/component"
import type { IProductCardProps } from "./types"

// 'M' prefix should tell us this component has been enhanced with Motion framer
const MProductCardActions = motion(ProductCardActions)

function ProductCard (props: IProductCardProps): JSX.Element {
  const {
    product: {
      displayName = "Name",
      imageSource = "",
      pricing = {
        listPrice: 0,
        salePrice: 0
      }
    }
  } = props;

  const theme = useTheme();

  const [isCardOnHover, setIsCardOnHover] = useState<boolean>(false)

  const shouldReduceMotion = useReducedMotion();
  const controlsOffset = getProductCardStyles({ theme }).controls.height + 16;

  const productCardActionsAnimVariants = {
    actionsVisible: {
      y: shouldReduceMotion ? 0 : controlsOffset * -1,
      opacity: 1,
      transition: {
        y: { type: "spring", stiffness: 420, damping: 30, mass: 0.6 },
        opacity: { duration: 0.2, ease: "easeOut" },
        when: "beforeChildren",
        staggerChildren: 0.06,
        delayChildren: 0.02
      }
    },
    actionsHidden: {
      y: shouldReduceMotion ? 0 : controlsOffset,
      opacity: 0,
      transition: {
        y: { type: "spring", stiffness: 420, damping: 30, mass: 0.6 },
        opacity: { duration: 0.15, ease: "easeIn" },
        staggerChildren: 0.04,
        staggerDirection: -1
      }
    }
  }

  return (
    <StyledProductCard 
      onMouseEnter={() => { setIsCardOnHover(true) }}
      onMouseLeave={() => { setIsCardOnHover(false) }}
      {...props}
    >
      <div className="Image__Wrapper">
        <Link to="/product">
          <Image src={imageSource} alt={displayName} />
        </Link>
        <MProductCardActions
          initial="actionsHidden"
          variants={productCardActionsAnimVariants}
          animate={isCardOnHover ? "actionsVisible" : "actionsHidden"}
        />
      </div>
      <Title.Small>{displayName}</Title.Small>
      <Pricing alignment={props.alignment} { ...pricing }/>
    </StyledProductCard>
  )
}

export default ProductCard
