import styled from "styled-components"
import { getColorStyles } from "@ui/theme/selectors"

import { Button, Block, Text } from "@components/common"

const StyledMobileNavigation = styled.div`
  position: relative;
  height: 100svh;
  padding: 0 24px;

  ${Block.Styled}[data-name="MobileNavigation__Heading"] {
    display: flex;
    align-items: center;
    height: 76px;
    
    ${Button.Styled.AsIcon} {
      display: flex;
      align-items: center;
      gap: 23px;
    }

    svg {
      width: 14px;
      height: 14px;
      color: ${props => getColorStyles(props).black}
    }
  }

  ${Block.Styled}[data-name="MobileNavigation__ParentCategory"] {
    margin-bottom: 1rem;

    ${Button.Styled.AsIcon} {
      display: flex;
      align-items: center;
      gap: 10px;

      svg {
        transform: rotate(90deg);
        color: ${props => getColorStyles(props).black}
      }
    }
  }
  

  ${Block.Styled}[data-name="MobileNavigation__Category"] {
    display: flex;
    height: 70px;
    border-bottom: 1px solid ${props => getColorStyles(props).grey};

    a,
    a:is(:active, :visited) {
      color: ${props => getColorStyles(props).black};
      text-decoration: none;
    }

    ${Button.Styled.AsIcon} {
      justify-content: flex-end;
      max-width: 20%;

      svg {
        transform: rotate(-90deg);
        color: ${props => getColorStyles(props).black}
      }
    }

    a,
    ${Button.Styled.AsIcon} {
      flex: 1;
      display: flex;
      align-items: center;
    }
  }

  ${Block.Styled}[data-name="MobileNavigation__Footer"] {
    position: absolute;
    padding-bottom: 18px;
    // Excluding external paddings
    width: calc(100% - 48px);
    background-color: ${props => getColorStyles(props).white};
    bottom: 0;

    ${Block.Styled}[data-name="MobileNavigation__CitySelector"] {
      display: flex;
      justify-content: space-between;
      padding: 18px 0;

      border-bottom: 1px solid ${props => getColorStyles(props).grey};
      
      ${Block.Styled}[data-name="MobileNavigation__CurrentCity"] {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      ${Button.Styled.AsIcon}[data-name="MobileNavigation__EditCity"] {
        display: flex;
        align-items: center;
        gap: 4px;

        color: ${props => getColorStyles(props).black};

        ${Text.Styled.Caption} {
          text-decoration: underline;
          text-underline-offset: 2px;
        }
      }
    }

    ${Text.Styled.Normal} {
      font-weight: 500;

      &[data-name="MobileNavigation__Help"] {
        display: block;
        margin-top: 14px;
      }
    }
  }
`

export default StyledMobileNavigation