import StyleFooterCopyright from "./component.styled"
import { Text } from "@components/common"

function FooterInfo (): JSX.Element {
  return (
    <StyleFooterCopyright>
      <Text.Caption color="grey">Copyright, 2020</Text.Caption>
    </StyleFooterCopyright>
  )
}

export default FooterInfo