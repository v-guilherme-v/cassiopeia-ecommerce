import styled from "styled-components"
import { getColorStyles } from "@theme/selectors"
import { Block, Button } from "@components/common"

interface IStyledMobileFiltersProps {
  isOpen?: boolean
}

export const StyledMobileFilters = styled.aside<IStyledMobileFiltersProps>`
  --mobile-filters-heading-height: 76px;
  --mobile-filters-actions-height: 130px;

  height: 100dvh;

  background-color: ${props => getColorStyles(props).white};

  ${Block.Styled}[data-name="MobileFiltersContainer"]{
    position: relative;
    height: 100%;
  }

  ${Block.Styled}[data-name="MobileFilters__Heading"]{
    display: flex;
    align-items: center;
    height: var(--mobile-filters-heading-height);

    ${Button.Styled.AsIcon} {
      display: flex;
      align-items: center;
      gap: 23px;
      margin-left: 26px;
      color: ${props => getColorStyles(props).black};
    }

    ${Button.Styled.AsIcon} svg {
      width: 14px;
      height: 14px;
    }
  }
` 

export const StyledMobileFiltersContent = styled.div<IStyledMobileFiltersProps>`
  padding: 0 26px;
  overflow-y: auto;
  height: calc(100% - var(--mobile-filters-heading-height) - var(--mobile-filters-actions-height));
`