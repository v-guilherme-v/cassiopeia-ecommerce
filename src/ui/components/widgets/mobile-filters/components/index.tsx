import { type PropsWithChildren } from "react"
import { MobileFiltersContext } from "@contexts"

import { CloseIcon } from "@components/icons"
import { Title, Block, Button } from "@components/common"

import StyledMobileMenu from "../widget.styled"

export function MobileFiltersContainer ({ children }: PropsWithChildren): JSX.Element {
  return (
    <MobileFiltersContext.Consumer>
      {mobileFiltersContext => (
        <StyledMobileMenu.Container
          role="dialog"
          data-name="MobileFilters__Container"
          isOpen={mobileFiltersContext?.isFilterMenuOpen}
        >
          { children }
        </StyledMobileMenu.Container>
      )}
    </MobileFiltersContext.Consumer>
  )
}

export function MobileFiltersOverlay (): JSX.Element {
  return (
    <MobileFiltersContext.Consumer>
      {mobileFiltersContext => (
        <StyledMobileMenu.Overlay
          data-name="MobileFilters__Overlay"
          onClick={() => { mobileFiltersContext?.toggleMobileFilters() }}
          isOpen={mobileFiltersContext?.isFilterMenuOpen}
        />
      )}
    </MobileFiltersContext.Consumer>
  )
}

export function MobileFiltersContent ({ children }: PropsWithChildren): JSX.Element {
  return (
    <MobileFiltersContext.Consumer>
      {mobileMenuContext => (
        <StyledMobileMenu.Content
          data-name="MobileFilters__Content"
          isOpen={mobileMenuContext?.isFilterMenuOpen}
        >
          { children }
        </StyledMobileMenu.Content>
      )}
    </MobileFiltersContext.Consumer>
  )
}

export function MobileFiltersHeading (): JSX.Element {
  return (
    <MobileFiltersContext.Consumer>
      {mobileFiltersContext => (
        <Block data-name="MobileFilters__Heading">
          <Button.AsIcon
            onClick={() => { mobileFiltersContext?.toggleMobileFilters() }}
          >
            <CloseIcon />
          </Button.AsIcon>
          <Title.ExtraSmall data-name="MobileFilters__HeadingTitle">
            Filters
          </Title.ExtraSmall>
        </Block>
      )}
    </MobileFiltersContext.Consumer>
  )
}

export * from "./filter-options/component"
export * from "./filter-actions/component"