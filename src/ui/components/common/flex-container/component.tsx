import { type PropsWithChildren } from "react"
import StyledFlexContainer from "./component.styled"

export interface FlexContainerOptions {
  gap?: string
  direction?: string
  alignItems?: string
  justifyContent?: string
}

export interface FlexContainerProps extends FlexContainerOptions {
  className?: string
  extraLarge?: FlexContainerOptions
  large?: FlexContainerOptions
  medium?: FlexContainerOptions
  small?: FlexContainerOptions
}

function FlexContainer (props: PropsWithChildren<FlexContainerProps>): JSX.Element {
  return (
    <StyledFlexContainer {...props}>
      {props.children}
    </StyledFlexContainer>
  )
}

FlexContainer.Styled = StyledFlexContainer

export default FlexContainer