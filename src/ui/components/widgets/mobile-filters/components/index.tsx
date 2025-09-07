import { MobileFiltersContext } from "@contexts"
import { useTranslation } from "react-i18next"

import { CloseIcon } from "@components/icons"
import { Title, Block, Button } from "@components/common"

export function MobileFiltersHeading (): JSX.Element {
  const { t } = useTranslation()
  return (
    <MobileFiltersContext.Consumer>
      {mobileFiltersContext => (
        <Block data-name="MobileFilters__Heading">
          <Button.AsIcon
            data-name="MobileFilters__Action"
            onClick={() => { mobileFiltersContext?.toggleMobileFilters() }}
          >
            <CloseIcon />
            <Title.ExtraSmall>
              {t("label.filters")}
            </Title.ExtraSmall>
          </Button.AsIcon>
        </Block>
      )}
    </MobileFiltersContext.Consumer>
  )
}

export * from "./filter-options/component"
export * from "./filter-actions/component"
