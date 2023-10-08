import { type PropsWithChildren } from "react"
import StyledTitle from "./component.styled"

export interface TitleProps extends PropsWithChildren {
  className?: string
  weight?: string
  lineHeight?: string
}

function ExtraLargeTitle (props: TitleProps): JSX.Element {
  return <StyledTitle.ExtraLarge {...props}>{props.children}</StyledTitle.ExtraLarge>
}

function LargeTitle (props: TitleProps): JSX.Element {
  return <StyledTitle.Large {...props}>{props.children}</StyledTitle.Large>
}

function SmallTitle (props: TitleProps): JSX.Element {
  return <StyledTitle.Small {...props}>{props.children}</StyledTitle.Small>
}

function ExtraSmallTitle (props: TitleProps): JSX.Element {
  return <StyledTitle.ExtraSmall {...props}>{props.children}</StyledTitle.ExtraSmall>
}

function Title (props: TitleProps): JSX.Element {
  return <StyledTitle.Normal {...props}>{props.children}</StyledTitle.Normal>
}

Title.ExtraLarge = ExtraLargeTitle
Title.Large = LargeTitle
Title.Small = SmallTitle
Title.ExtraSmall = ExtraSmallTitle

Title.Styled = StyledTitle

export default Title