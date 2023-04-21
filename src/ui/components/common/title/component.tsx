import { type PropsWithChildren } from "react"
import StyledTitle from "@components/common/title/component.styled"

function ExtraLargeTitle (props: PropsWithChildren): JSX.Element {
  return <StyledTitle.ExtraLarge>{props.children}</StyledTitle.ExtraLarge>
}

function LargeTitle (props: PropsWithChildren): JSX.Element {
  return <StyledTitle.Large>{props.children}</StyledTitle.Large>
}

function MediumTitle (props: PropsWithChildren): JSX.Element {
  return <StyledTitle.Medium>{props.children}</StyledTitle.Medium>
}

function SmallTitle (props: PropsWithChildren): JSX.Element {
  return <StyledTitle.Small>{props.children}</StyledTitle.Small>
}

function ExtraSmallTitle (props: PropsWithChildren): JSX.Element {
  return <StyledTitle.ExtraSmall>{props.children}</StyledTitle.ExtraSmall>
}

const Title = (): JSX.Element => <>Raw title</>

Title.ExtraLarge = ExtraLargeTitle
Title.Large = LargeTitle
Title.Medium = MediumTitle
Title.Small = SmallTitle
Title.ExtraSmall = ExtraSmallTitle

export default Title