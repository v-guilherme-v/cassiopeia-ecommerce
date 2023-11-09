import { type FooterInfoProps } from "../../types"

import { Text } from "@components/common"
import { InstagramIcon, WhatsappIcon, FacebookIcon } from "@components/icons"

import StyleFooterInfo from "./component.styled"

function FooterInfo ({ title = "Follow us", contactNumber = "+NNNNNNN" }: FooterInfoProps): JSX.Element {
  return (
    <StyleFooterInfo>
      <Text.Large lineHeight="24px">
        { title }
      </Text.Large>
      <Text.Caption weight="semibold">
        { contactNumber }
      </Text.Caption>
      <div className="Footer__SocialMedias">
        <div className="SocialMedia__Instagram">
          <InstagramIcon />
        </div>
        <div className="SocialMedia__Whatsapp">
          <WhatsappIcon />
        </div>
        <div className="SocialMedia__Facebook">
          <FacebookIcon />
        </div>
      </div>
    </StyleFooterInfo>
  )
}

export default FooterInfo