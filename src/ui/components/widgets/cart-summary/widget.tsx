import styled from "styled-components"
import { useTranslation } from "react-i18next";

import { Block, Title, Text } from "@components/common"
import { SummaryPriceInfo } from "@components/commerce"
import { getColorStyles } from "@ui/theme/selectors"
import { useViewPorts } from "@ui/hooks/use-viewports"

import { CartSummaryMobile } from "./mobile/widget"

export default function CartSummary(): JSX.Element {
  const { maxWidthMedium } = useViewPorts()

  const { t } = useTranslation()

  return !maxWidthMedium ? (
    <StyledCartSummary>
      <Title.Small>{t("summary.title")}</Title.Small>
      <SummaryPriceInfo />
      <Block id="CartSummary__Actions"></Block>
    </StyledCartSummary>
  ) : <CartSummaryMobile />
}

const StyledCartSummary = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid ${props => getColorStyles(props).paleGrey};
  border-radius: 8px;
  padding: 20px 25.5px;

  [data-name="CartSummary__Heading"] {
    display: flex;
    flex-direction: column;

    ${Text.Styled.Caption}{
      color: ${props => getColorStyles(props).accent};
      font-weight: bold;
    }
  }

  #CartSummary__Actions [data-name="StepActions"] {
    padding-top: 18px;
    border-top: 1px solid ${props => getColorStyles(props).paleGrey};

    button {
      flex: 1;
    }
  }

  #CartSummary__Actions [data-name="StepActions__Prev"] {
    max-width: 35%;
  }

  ${SummaryPriceInfo.Styled} {
    margin-top: 32px;
  }
`