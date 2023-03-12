import { type PropsWithChildren } from "react"
import StyledText from "@components/styled/text.styled"

export interface TextProps {
  color?: string
}

export function TextLarge (props: PropsWithChildren<TextProps>): JSX.Element {
  return <StyledText.Large {...props}>{props.children}</StyledText.Large>
}

export function TextDefault (props: PropsWithChildren<TextProps>): JSX.Element {
  return <StyledText.Default {...props}>{props.children}</StyledText.Default>
}

export function TextButton (props: PropsWithChildren<TextProps>): JSX.Element {
  return <StyledText.Button {...props}>{props.children}</StyledText.Button>
}

export function TextCaption (props: PropsWithChildren<TextProps>): JSX.Element {
  return <StyledText.Caption {...props}>{props.children}</StyledText.Caption>
}

export function TextStrikeLarge (props: PropsWithChildren<TextProps>): JSX.Element {
  return <StyledText.StrikeLarge {...props}>{props.children}</StyledText.StrikeLarge>
}

export function TextStrike (props: PropsWithChildren<TextProps>): JSX.Element {
  return <StyledText.Strike {...props}>{props.children}</StyledText.Strike>
}

const Text = (props: PropsWithChildren<TextProps>): JSX.Element =>
  <TextDefault {...props}>{props.children}</TextDefault>

Text.Large = TextLarge
Text.Button = TextButton
Text.Caption = TextCaption
Text.StrikeLarge = TextStrikeLarge
Text.Strike = TextStrike

export default Text