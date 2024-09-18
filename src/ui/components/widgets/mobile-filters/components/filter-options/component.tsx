import { type PropsWithChildren } from "react"
import styled from "styled-components"

import { ChevronIcon } from "@components/icons"
import { Accordion, Block } from "@components/common"

import SelectableFilterTag from "../filter-tags/component"
import { getColorStyles } from "@ui/theme/selectors"
import { doNothing } from "@utils/index"

function MobileFilterOption (
  props: PropsWithChildren<{ label: string, initiallyOpen?: boolean }>
): JSX.Element {
  return (
    <Accordion
      data-name="MobileFilterOption"
      label={props.label}
      initiallyOpen={props.initiallyOpen}
      iconToOpen={
        <Block data-name="ChevronIconDown">
          <ChevronIcon />
        </Block>
      }
      iconToClose={
        <Block data-name="ChevronIconUp">
          <ChevronIcon />
        </Block>
      }
    >
      {props.children}
    </Accordion>
  )
}

const sortByFilterOptions = [
  { name: "best-sellers", label: "Best sellers" },
  { name: "popular", label: "Popular" },
  { name: "brand-new", label: "Brand new", isActive: true },
  { name: "popular-men", label: "Popular for men" },
  { name: "popular-women", label: "Popular for women" }
]

const colorFilterOptions = [
  { name: "yellow-tag", label: "Yellow", colorIndicator: "#FFD568" },
  { name: "red-tag", label: "Red", isActive: true, colorIndicator: "#F63838" },
  { name: "pink-tag", label: "Pink", colorIndicator: "#FF659C" },
  { name: "grey-tag", label: "Grey", colorIndicator: "#D9D9D9" }
]

export function MobileFilterOptions (): JSX.Element {
  return (
    <StyledMobileFilterOptions>
      <MobileFilterOption label="Sort by" initiallyOpen={sortByFilterOptions.some(o => o.isActive)}>
        {sortByFilterOptions.map(filterTag => {
          return (
            <SelectableFilterTag
              key={filterTag.name}
              name={filterTag.name}
              label={filterTag.label}
              onFilterTagClick={doNothing}
              isSelected={filterTag?.isActive}
            />
          )
        })}
      </MobileFilterOption>
      <MobileFilterOption label="Color" initiallyOpen={colorFilterOptions.some(o => o.isActive)}>
        {colorFilterOptions.map(filterTag => {
          return (
            <SelectableFilterTag
              key={filterTag.name}
              name={filterTag.name}
              label={filterTag.label}
              colorIndicator={filterTag.colorIndicator}
              isSelected={filterTag?.isActive}
            />
          )
        })}
      </MobileFilterOption>
      <MobileFilterOption label="Flower type">
        {[
          { name: "roses", label: "Roses" },
          { name: "lilies", label: "Lilies" },
          { name: "tulips", label: "Tulips" },
          { name: "orchids", label: "Orchids" },
          { name: "daisies", label: "Daisies" }
        ].map(filterTag => {
          return (
            <SelectableFilterTag
              key={filterTag.name}
              name={filterTag.name}
              label={filterTag.label}
            />
          )
        })}
      </MobileFilterOption>
      <MobileFilterOption label="Occasion">
        {[
          { name: "mothers-day", label: "Mother's day" },
          { name: "valentines", label: "Valentines" },
          { name: "first-date", label: "First date" }
        ].map(filterTag => {
          return (
            <SelectableFilterTag
              key={filterTag.name}
              name={filterTag.name}
              label={filterTag.label}
            />
          )
        })}
      </MobileFilterOption>
    </StyledMobileFilterOptions>
  )
}

const StyledMobileFilterOptions = styled.div.attrs({
  "data-name": "StyledMobileFilterOptions"
})`
  ${Block.Styled}[data-name="ChevronIconUp"] {
    transform: rotate(180deg)
  }

  ${Block.Styled}[data-name="ChevronIconUp"],
  ${Block.Styled}[data-name="ChevronIconDown"] {
    color: ${props => getColorStyles(props).black}
  }

  ${Accordion.Styled} [data-name="AccordionContent"]{
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
`