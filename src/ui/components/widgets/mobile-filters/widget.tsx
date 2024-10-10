import {
  MobileFiltersHeading,
  MobileFilterOptions,
  MobileFilterActions
} from "./components"

import {
  StyledMobileFilters,
  StyledMobileFiltersContent
} from "./widget.styled"

import { Block } from "@components/common"

function MobileFilters (): JSX.Element {
  return (
    <StyledMobileFilters>
      <Block data-name="MobileFiltersContainer">
        <MobileFiltersHeading />
        <StyledMobileFiltersContent>
          <MobileFilterOptions />
        </StyledMobileFiltersContent>
        <MobileFilterActions />
      </Block>
    </StyledMobileFilters>
  )
}

export default MobileFilters