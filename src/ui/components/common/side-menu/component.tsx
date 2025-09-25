import { type PropsWithChildren, useEffect } from "react"
import { motion } from "motion/react"
import { useTheme } from "styled-components"

import { Block } from "@components/common"
import { getSideMenuStyles } from "@ui/theme/selectors"

import {
  StyledSideMenuContainer,
  StyledSideMenuOverlay
} from "./component.styled"

interface ISideMenuProps {
  isOpen?: boolean
  animationDirection?: "right" | "left"
}

const MSideMenuContainer = motion(StyledSideMenuContainer);

function SideMenu (props: PropsWithChildren<ISideMenuProps>): JSX.Element {
  useEffect(() => {
    if (document !== null && props.isOpen === true) {
      document.body.style.overflow = "hidden"
    }

    return () => {
      if (document !== null) {
        document.body.style.overflow = "auto"
      }
    }
  }, [ props.isOpen ])

  const theme = useTheme()

  const animationDirection = props.animationDirection ?? "right"

  const sideMenuWidth = parseInt(getSideMenuStyles({ theme }).width)
  const sideMenuAnimationVariants = {
    open: { x: 0, opacity: 1 },
    hidden: { x: animationDirection === "left" ? sideMenuWidth * -1 : sideMenuWidth, opacity: 0 }
  }

  return (
    <Block data-name="SideMenu">
      <StyledSideMenuOverlay
        data-name="SideMenu__Overlay"
        isOpen={props.isOpen}
      />
      <MSideMenuContainer
        variants={sideMenuAnimationVariants}
        initial="hidden"
        animate={props.isOpen ? "open" : "hidden"}
        transition={{ duration: getSideMenuStyles({ theme }).transitionTime, easing: 'ease-out' }}
        data-name="SideMenu__Container"
        isOpen={props.isOpen}
        animationDirection={animationDirection}
      >
        { props.children }
      </MSideMenuContainer>
    </Block>
  )
}

export default SideMenu
