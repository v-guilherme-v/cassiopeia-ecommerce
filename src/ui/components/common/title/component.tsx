import { type PropsWithChildren } from "react"
import StyledTitle from "./component.styled"

export interface TitleProps extends PropsWithChildren {
  weight?: string
}

function ExtraLargeTitle (props: TitleProps): JSX.Element {
  return <StyledTitle.ExtraLarge>{props.children}</StyledTitle.ExtraLarge>
}

function LargeTitle (props: TitleProps): JSX.Element {
  return <StyledTitle.Large {...props}>{props.children}</StyledTitle.Large>
}

function MediumTitle (props: TitleProps): JSX.Element {
  return <StyledTitle.Medium>{props.children}</StyledTitle.Medium>
}

function SmallTitle (props: TitleProps): JSX.Element {
  return <StyledTitle.Small>{props.children}</StyledTitle.Small>
}

function ExtraSmallTitle (props: TitleProps): JSX.Element {
  return <StyledTitle.ExtraSmall>{props.children}</StyledTitle.ExtraSmall>
}

/** @todo do follow the text example */
const Title = (): JSX.Element => <>Raw title</>

Title.ExtraLarge = ExtraLargeTitle
Title.Large = LargeTitle
Title.Medium = MediumTitle
Title.Small = SmallTitle
Title.ExtraSmall = ExtraSmallTitle

Title.Styled = StyledTitle

export default Title