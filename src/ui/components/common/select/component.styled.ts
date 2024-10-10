import styled from "styled-components";
import { Block, Text } from "@components/common";
import { getColorStyles, getViewPortsStyles } from "@ui/theme/selectors";

export default styled.div.attrs({
  "data-name": "StyledSelect"
})<{ isSelectOpen: boolean }>`
  --select-padding-y: 8px;
  --select-padding-x: 12px;

  position: relative;
  cursor: pointer;

  ${Block.Styled}[data-name="Select__Box"] {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  
    min-width: 135px;
    width: 100%;
    padding: var(--select-padding-y) var(--select-padding-x);
    border-radius: 6px;
    border: 1px solid ${props => getColorStyles(props).lightGrey
    };
  
    ${Text.Styled.Caption}[data-name="Select__Placeholder"],
    ${Text.Styled.Caption}[data-name="Select__SelectedOption"] {
      user-select: none;
      line-height: 26px;
    }
  
    ${Block.Styled}[data-name="Select__ToggleAction"] {
      display: flex;
      color: ${props => getColorStyles(props).black};
    }
  
    ${Block.Styled}[data-name="Select__SelectedOptions"] {
      display: flex;

      ${Block.Styled}[data-name="MultiOptionsCrumbs"] {
        display: flex;
        gap: .5rem;
        
        ${Block.Styled}[data-name="MultiOptionsCrumbs__Crumb"] {
          display: flex;
          align-items: center;
          border-radius: 4px;
          padding: 5px;
          background-color: ${props => getColorStyles(props).primary};
        }
      }
    }
  }

  ${Block.Styled}[data-name="Select__SelectOptions"] {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    z-index: 1;
    left: 0;
    top: calc(100% + 8px);
    background-color: ${props => getColorStyles(props).white};
    border: 1px solid ${props => getColorStyles(props).lightGrey};
    border-radius: 6px;

    ${Text.Styled.Caption}[data-name="Select__SelectOption"] {
      line-height: 26px;
      padding: calc(var(--select-padding-y) / 2) 1rem;

      @media(min-width: ${props => getViewPortsStyles(props).medium}) {
        cursor: pointer;

        &:hover {
          color: ${props => getColorStyles(props).primary}
        }
      }
    }

    ${Text.Styled.Caption}[data-name="Select__SelectOption"]:first-child {
      padding-top: calc(var(--select-padding-y));
    }

    ${Text.Styled.Caption}[data-name="Select__SelectOption"]:last-child {
      padding-bottom: calc(var(--select-padding-y));
    }
  }

  @media(max-width: ${props => getViewPortsStyles(props).medium}) {
    ${Text.Styled.Caption}[data-name="Select__SelectOption"] {
      padding: calc(var(--select-padding-y)) 0;
    }
  }
`