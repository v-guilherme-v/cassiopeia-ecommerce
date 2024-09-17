import { useContext, useEffect } from "react"
import { MobileFiltersContext, type MobileFiltersContextType } from "@contexts"

import {
  MobileFiltersContainer,
  MobileFiltersOverlay,
  MobileFiltersContent,
  MobileFiltersHeading,
  MobileFilterOptions,
  MobileFilterActions
} from "./components"

import { Block } from "@ui/components/common"

function MobileFilters (): JSX.Element {
  const mobileFiltersContext = useContext<MobileFiltersContextType | null>(MobileFiltersContext)

  useEffect(() => {
    if (document !== null &&
      mobileFiltersContext?.isFilterMenuOpen === true) {
      document.body.style.overflow = "hidden"
    }

    return () => {
      if (document !== null) {
        document.body.style.overflow = "auto"
      }
    }
  }, [ mobileFiltersContext?.isFilterMenuOpen ])

  return (
    <Block data-name="MobileFilters">
      <MobileFiltersOverlay />
      <MobileFiltersContainer>
        <Block data-name="MobileFiltersContainer__Wrapper">
          <MobileFiltersHeading />
          <MobileFiltersContent>
            <MobileFilterOptions />
          </MobileFiltersContent>
          <MobileFilterActions />
        </Block>
      </MobileFiltersContainer>
    </Block>
  )
}

export default MobileFilters