import { MobileFiltersContext } from "@contexts"

import { CloseIcon } from "@components/icons"
import { Title, Block, Button } from "@components/common"

export function MobileFiltersHeading (): JSX.Element {
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
              Filters
            </Title.ExtraSmall>
          </Button.AsIcon>
        </Block>
      )}
    </MobileFiltersContext.Consumer>
  )
}

export * from "./filter-options/component"
export * from "./filter-actions/component"