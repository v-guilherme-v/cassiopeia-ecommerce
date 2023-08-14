import { Text } from "@components/common"
import { MarkerIcon } from "@components/icons"

import StyledCitySelector from "./component.styled"

function CitySelector (): JSX.Element {
  return (
    <StyledCitySelector>
      <MarkerIcon />
      <Text.Button>City</Text.Button>
    </StyledCitySelector>
  )
}

export default CitySelector