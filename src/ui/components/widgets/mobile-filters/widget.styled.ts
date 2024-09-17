import styled from "styled-components"
import { getColorStyles, getGeneralStyles, getViewPortsStyles } from "@theme/selectors"
import { Block, Button, Title } from "@components/common"

interface IStyledMobileFiltersProps {
  isOpen?: boolean
}

const StyledMobileFiltersContainer = styled.aside<IStyledMobileFiltersProps>`
  --mobile-filters-width: 554px;
  --mobile-filters-transition-time: 500ms;
  --mobile-filters-heading-height: 76px;
  --mobile-filters-actions-height: 130px;

  visibility: ${props => props?.isOpen ? "visible" : "hidden"};

  position: fixed;
  overflow-y: auto;
  top: 0;
  right: ${props => !props?.isOpen ?
    "calc(var(--mobile-filters-width) * -1)" :
    "0"
  };

  height: 100dvh;
  max-width: var(--mobile-filters-width);
  width: 100%;

  background-color: ${props => getColorStyles(props).white};
  box-shadow: -5px 10px 52px 0px rgba(90, 92, 102, 0.06);
  z-index: ${props => getGeneralStyles(props).mobileFiltersLayer};
  transition: right var(--mobile-filters-transition-time);

  ${Block.Styled}[data-name="MobileFiltersContainer__Wrapper"]{
    position: relative;
    height: 100%;
  }

  ${Block.Styled}[data-name="MobileFilters__Heading"]{
    display: flex;
    align-items: center;
    height: var(--mobile-filters-heading-height);
    gap: 23px;

    ${Title.Styled.Normal} {
      user-select: none;
    }

    ${Button.Styled.AsIcon},
    ${Button.Styled.AsIcon} svg {
      width: 14px;
      height: 14px;
    }

    ${Button.Styled.AsIcon} {
      margin-left: 26px;
      color: ${props => getColorStyles(props).black};
    }
  }
` 

const StyledMobileFiltersOverlay = styled.div<IStyledMobileFiltersProps>`
  position: fixed;
  inset: 0;
  background: rgba(36, 36, 36, 0.38);
  visibility: ${props => props?.isOpen ? "visible" : "hidden"};
  z-index: ${props => getGeneralStyles(props).mobileFiltersLayer - 1};
`

const StyledMobileFiltersContent = styled.div<IStyledMobileFiltersProps>`
  padding: 0 26px;
  overflow-y: auto;
  height: calc(100% - var(--mobile-filters-heading-height) - var(--mobile-filters-actions-height));

  @media(max-width: ${props => getViewPortsStyles(props).medium}) {
  }
`

export default {
  Container: StyledMobileFiltersContainer,
  Content: StyledMobileFiltersContent,
  Overlay: StyledMobileFiltersOverlay
}