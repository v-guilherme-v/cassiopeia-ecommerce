import { Text } from "@components/common"
import { MarkerIcon } from "@components/icons"
import { useTranslation } from "react-i18next"

import StyledCitySelector from "./component.styled"

function CitySelector (): JSX.Element {
  const { t } = useTranslation()
  return (
    <StyledCitySelector>
      <MarkerIcon />
      <Text.Button>{t("labels.city")}</Text.Button>
    </StyledCitySelector>
  )
}

export default CitySelector
