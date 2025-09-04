import { useContext } from "react"
import { AnimatePresence, motion } from "motion/react"
import styled from "styled-components"
import { useTranslation } from "react-i18next";

import { Block, Text, Button } from "@components/common"
import { CartPriceIcon, ChevronIcon } from "@components/icons"
import { SummaryPriceInfo } from "@components/commerce"
import { getColorStyles } from "@theme/selectors"

import { LayoutContext, LayoutContextType } from "@ui/contexts";
import { IUseCheckoutLayoutProperties } from "@ui/hooks/checkout/use-checkout-layout"

export function CartSummaryMobile(): JSX.Element {
  const checkoutLayoutContext = useContext(LayoutContext) as
    LayoutContextType<IUseCheckoutLayoutProperties>

  const { isMobileSummaryVisible, setIsMobileSummaryVisible } = checkoutLayoutContext.properties

  const { t } = useTranslation()

  const animationVariants = { up: { y: 48 }, down: { y: 170 }}

  return (
    <StyledCartSummaryMobile>
      <motion.div data-name="CartSummary__Container" variants={animationVariants} animate={isMobileSummaryVisible ? "up" : "down"} transition={{ type: "spring", duration: 0.3, bounce: 0.20 }}>
        <Block data-name="CartSummary__Heading" >
          <Block data-name="CartSummary__DetailsAction" onClick={() => { setIsMobileSummaryVisible(v => !v) }}>
            <Button.AsIcon style={{ transform: `${isMobileSummaryVisible ? "rotate(-180deg)" : "rotate(0)"}`, transition: "transform .3s ease" }}>
              <ChevronIcon />
            </Button.AsIcon>
          </Block>
          <Block data-name="CartSummary__Title">
            <CartPriceIcon />
            <Text.Body>{t("summary.title")}</Text.Body>
            <AnimatePresence>
              {!isMobileSummaryVisible && <Text weight="medium" data-name="CartSummary__Title__Total">R$ 129,90</Text>}
            </AnimatePresence>
          </Block>
        </Block>
        <Block data-name="CartSummary__PriceInfo">
          <SummaryPriceInfo />
        </Block>
      </motion.div>
      <Block data-name="CartSummary__Actions">
        <Block id="CartSummary__StepperActions"></Block>
      </Block>
    </StyledCartSummaryMobile>
  )
}

const StyledCartSummaryMobile = styled.div<Partial<IUseCheckoutLayoutProperties>>`
  position: fixed;
  bottom: 0;
  width: 100%;

  display: flex;
  flex-direction: column;
  
  [data-name="CartSummary__Container"] {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 25.5px;
    padding-bottom: 3rem;

    background-color: ${props => getColorStyles(props).white};
    box-shadow: 3px 5px 18px rgba(103, 105, 116, .3);

    border-top: 1px solid ${props => getColorStyles(props).lightGrey};
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;

    position: relative;
    z-index: -1;
  }

  [data-name="CartSummary__Heading"] {
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    [data-name="CartSummary__Title"] {
      display: flex;
      align-items: center;
      gap: 8px;
      width: 100%;

      [data-name="CartSummary__Title__Total"] {
        margin-left: auto;
      }

      svg {
        height: 18px;
        width: 20px;
      }
    }

    [data-name="CartSummary__DetailsAction"] {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 6px;
      
      ${Button.Styled} {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 25px;
        width: 100%;

        svg {
          color: ${props => getColorStyles(props).darkGrey};
        }
      }
    }
  }

  [data-name="CartSummary__Actions"] {
    padding: 1rem;
    background-color: ${props => getColorStyles(props).white};
  }

  #CartSummary__StepperActions [data-name="StepActions"] {
    border-top: 0;
    padding: 0;
    flex-wrap: wrap-reverse;

    button {
      flex: 1;
    }
  }

  #CartSummary__StepperActions [data-name="StepActions__Prev"] {
    max-width: 35%;
  }

  ${SummaryPriceInfo.Styled} {
    margin-top: 1rem;
  }
`