/* eslint-disable indent */
import styled from "styled-components"

import { Block, Button } from "@ui/components/common"
import { getColorStyles } from "@ui/theme/selectors"
import { ButtonModels } from "@ui/components/common/button"

export function MobileFilterActions (): JSX.Element {
  return (
    <StyledMobileFilterActions>
      <Block data-name="MobileFilterActions">
        <Button model={ButtonModels.OUTLINED}>Clean</Button>
        <Button>Apply</Button>
      </Block>
    </StyledMobileFilterActions>
  )
}

const StyledMobileFilterActions = styled.div.attrs({
  "data-name": "StyledMobileFilterActions"
})`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 0 26px;
  background-color: ${props => getColorStyles(props).white};

  ${Block.Styled}[data-name="MobileFilterActions"] {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: var(--mobile-filters-actions-height);

    ${Button.Styled.Normal} {
      flex: 0 0 calc(50% - 9px);
    }
  }
`