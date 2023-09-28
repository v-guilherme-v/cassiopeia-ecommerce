import { type PropsWithChildren } from "react"
import StyledText from "@components/common/text/component.styled"
export interface TextProps extends PropsWithChildren {
  color?: string
  weight?: string
  lineHeight?: string
}

function TextLarge (props: TextProps): JSX.Element {
  return <StyledText.Large {...props}>{props.children}</StyledText.Large>
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
  return <StyledText.Normal {...props}>{props.children}</StyledText.Normal>
}

Text.Large = TextLarge
Text.Button = TextButton
Text.Caption = TextCaption
Text.StrikeLarge = TextStrikeLarge
Text.Strike = TextStrike
Text.Radio = TextRadio

Text.Styled = StyledText

export default Text