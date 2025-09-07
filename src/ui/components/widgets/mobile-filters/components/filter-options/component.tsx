import { type PropsWithChildren } from "react"
import styled from "styled-components"

import { ChevronIcon } from "@components/icons"
import { Accordion, Block } from "@components/common"

import SelectableFilterTag from "../filter-tags/component"
import { getColorStyles } from "@ui/theme/selectors"
import { doNothing } from "@utils/index"
import { useTranslation } from "react-i18next"

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

export function MobileFilterOptions (): JSX.Element {
  const { t } = useTranslation()

  const sortByFilterOptions = [
    { name: "best-sellers", label: t("labels.bestSellers") },
    { name: "popular", label: t("labels.popular") },
    { name: "brand-new", label: t("labels.brandNew"), isActive: true },
    { name: "popular-men", label: t("labels.popularForMen") },
    { name: "popular-women", label: t("labels.popularForWomen") }
  ]

  const colorFilterOptions = [
    { name: "yellow-tag", label: t("mock.filter.yellow"), colorIndicator: "#FFD568" },
    { name: "red-tag", label: t("mock.filter.red"), isActive: true, colorIndicator: "#F63838" },
    { name: "pink-tag", label: t("mock.filter.pink"), colorIndicator: "#FF659C" },
    { name: "grey-tag", label: t("mock.filter.grey"), colorIndicator: "#D9D9D9" }
  ]

  return (
    <StyledMobileFilterOptions>
      <MobileFilterOption label={t("labels.sortBy")} initiallyOpen={sortByFilterOptions.some(o => o.isActive)}>
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
      <MobileFilterOption label={t("labels.color")} initiallyOpen={colorFilterOptions.some(o => o.isActive)}>
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
      <MobileFilterOption label={t("labels.flowerType")}>
        {[
          { name: "roses", label: t("mock.filter.roses") },
          { name: "lilies", label: t("mock.filter.lilies") },
          { name: "tulips", label: t("mock.filter.tulips") },
          { name: "orchids", label: t("mock.filter.orchids") },
          { name: "daisies", label: t("mock.filter.daisies") }
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
      <MobileFilterOption label={t("labels.occasion")}>
        {[
          { name: "mothers-day", label: t("labels.mothersDay") },
          { name: "valentines", label: t("labels.valentinesDay") },
          { name: "first-date", label: t("labels.firstDate") }
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
