import { type PropsWithChildren, useEffect } from "react"

import { Block } from "@components/common"

import {
  StyledSideMenuContainer,
  StyledSideMenuOverlay
} from "./component.styled"

interface ISideMenuProps {
  isOpen?: boolean
  animationDirection?: "right" | "left"
}

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

  const animationDirection = props.animationDirection ?? "right"

  return (
    <Block data-name="SideMenu">
      <StyledSideMenuOverlay
        data-name="SideMenu__Overlay"
        isOpen={props.isOpen}
      />
      <StyledSideMenuContainer
        data-name="SideMenu__Container"
        isOpen={props.isOpen}
        animationDirection={animationDirection}
      >
        { props.children }
      </StyledSideMenuContainer>
    </Block>
  )
}

export default SideMenu