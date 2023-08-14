import StyledTopBarContact from "./component.styled"
import { WhatsappIcon, InstagramIcon } from "@components/icons"
import PhoneNumber from "./phone-number/component"

function TopBarContact (): JSX.Element {
  return (
    <StyledTopBarContact>
      <PhoneNumber />
      <div className="TopBarContact__Instagram">
        <InstagramIcon />
      </div>
      <div className="TopBarContact__Whatsapp">
        <WhatsappIcon />
      </div>
    </StyledTopBarContact>
  )
}

export default TopBarContact