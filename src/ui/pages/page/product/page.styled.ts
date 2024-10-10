import styled from "styled-components"
import { getColorStyles, getViewPortsStyles } from "@theme/selectors"

import {
  Block,
  Button,
  Container,
  Text,
  Title
} from "@components/common"

import { Footer } from "@components/widgets"

export default styled.section`
  display: flex;
  flex-direction: column;
  height: 100dvh;

  ${Container.Styled} {
    flex: 1;
  }
  
  ${Block.Styled}[data-name="ProductPage__Content"] {
    display: flex;
    gap: 70px;

    ${Block.Styled}[data-name="ProductPage__ActionSection"] {
      flex: 1;
      max-width: 518px;

      ${Block.Styled}[data-name="Product__Identification"] {
        padding-bottom: 15px;
        border-bottom: 1px solid ${props => getColorStyles(props).lightGrey};

        ${Title.Styled.Normal}[data-name="ProductName"] {
          font-weight: 400;
          line-height: 24px;
          margin-bottom: 20px;
        }

        ${Block.Styled}[data-name="ProductPricing"] {
          display: flex;
          gap: 20px;

          ${Title.Styled.Large}[data-name="ProductCurrentPrice"] {
            font-weight: 500;
            line-height: 28px;
          }

          ${Text.Styled.StrikeLarge}[data-name="ProductOldPrice"] {
            color: ${props => getColorStyles(props).darkGrey};
            font-weight: 500;
            line-height: 22px;
            align-self: end;
          }
        }

        @media (max-width: ${props => getViewPortsStyles(props).medium}) {
          display: flex;
          justify-content: space-between;
          padding: 0;
          border: none;

          ${Title.Styled.Normal}[data-name="ProductName"] {
            font-size: 22px;
            line-height: 19px;
            margin: 0;
          }

          ${Block.Styled}[data-name="ProductPricing"] {
            gap: 9px;
            
            ${Title.Styled.Large}[data-name="ProductCurrentPrice"] {
              font-size: 22px;
              line-height: 19px;
            }

            ${Text.Styled.StrikeLarge}[data-name="ProductOldPrice"] {
              font-size: 18px;
              line-height: 19px;
            }
          }
        }        
      }

      ${Block.Styled}[data-name="Product__QuantityCounter"],
      ${Block.Styled}[data-name="Product__ColorSelector"] {
        display: flex;
        flex-direction: column;
        margin-top: 40px;
        gap: 24.5px;

        ${Text.Styled.Large}[data-name="Product__QuantityLabel"],
        ${Text.Styled.Large}[data-name="Product__ColorSelectorLabel"] {
          line-height: 24px;
        }
      }

      ${Block.Styled}[data-name="Product__CartActions"] {
        display: flex;
        margin-top: 50px;
        gap: 20px;

        ${Button.Styled.Normal}[data-name="Checkout"] {
          max-width: 309px;
          width: 100%;
        }

        ${Button.Styled.Normal}[data-name="AddToCart"] {
          min-width: 46px;

          & svg {
            width: 17px;
            height: 14px;
            color: ${props => getColorStyles(props).black}
          }
        }

        @media (max-width: ${props => getViewPortsStyles(props).medium}) {
          position: fixed;
          width: 100%;
          left: 0;
          padding: 25px;
          margin-top: 50px;
          bottom: 0;
          z-index: 1;
          background-color: ${props => getColorStyles(props).white};
        }
      }

      div[data-name="Product__Description"] {
        margin-top: 40px;
      }
    }

    @media (max-width: ${props => getViewPortsStyles(props).large}) {
      flex-direction: column;
      gap: 32px;
    }

    @media (max-width: ${props => getViewPortsStyles(props).medium}) {
      gap: 26px;
    }
  }

  ${Footer.Styled} {
    margin-top: 32px;
  }
`