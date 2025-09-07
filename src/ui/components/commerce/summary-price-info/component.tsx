import styled from "styled-components"
import { Block, Text } from "@components/common"
import { getColorStyles } from "@app/ui/theme/selectors"
import { useTranslation } from "react-i18next";

function SummaryPriceInfo (): JSX.Element {
  const { t } = useTranslation()

  return (
    <StyledSummaryPriceInfo>
      <Block data-name="SummaryPriceInfo">
        <Block data-name="SummaryPriceInfo__Item">
          <Text>{t("labels.discounts")}</Text>
          <Text weight="medium">R$ 15,00</Text>
        </Block>
        <Block data-name="SummaryPriceInfo__Item">
          <Text>{t("labels.total")}</Text>
          <Text weight="medium">R$ 129,90</Text>
        </Block>
      </Block>
    </StyledSummaryPriceInfo>
  )
}

const StyledSummaryPriceInfo = styled.div`
  ${Block.Styled}[data-name="SummaryPriceInfo__Item"] {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid ${props => getColorStyles(props).paleGrey};
    padding: 18px 0 14px;
  }

  ${Block.Styled}[data-name="SummaryPriceInfo__Item"]:last-child {
    border-bottom: 1px solid ${props => getColorStyles(props).paleGrey};
  }
`

SummaryPriceInfo.Styled = StyledSummaryPriceInfo

export default SummaryPriceInfo