import { type PropsWithChildren } from "react"
import StyledText from "@components/common/text/component.styled"

export interface TextProps extends PropsWithChildren {
  color?: string
}

function TextLarge (props: TextProps): JSX.Element {
  return <StyledText.Large {...props}>{props.children}</StyledText.Large>
}

function TextDefault (props: TextProps): JSX.Element {
  return <StyledText.Default {...props}>{props.children}</StyledText.Default>
}

function TextButton (props: TextProps): JSX.Element {
  return <StyledText.Button {...props}>{props.children}</StyledText.Button>
}

function TextCaption (props: TextProps): JSX.Element {
  return <StyledText.Caption {...props}>{props.children}</StyledText.Caption>
}

function TextStrikeLarge (props: TextProps): JSX.Element {
  return <StyledText.StrikeLarge {...props}>{props.children}</StyledText.StrikeLarge>
}

function TextStrike (props: TextProps): JSX.Element {
  return <StyledText.Strike {...props}>{props.children}</StyledText.Strike>
}

function TextRadio (props: TextProps): JSX.Element {
  return <StyledText.Radio {...props}>{props.children}</StyledText.Radio>
}

function Text (props: TextProps): JSX.Element {
  return <TextDefault {...props}>{props.children}</TextDefault>
}

Text.Large = TextLarge
Text.Button = TextButton
Text.Caption = TextCaption
Text.StrikeLarge = TextStrikeLarge
Text.Strike = TextStrike
Text.Radio = TextRadio

export default Text