import styled from "styled-components"

import { ThinArrowIcon } from "@components/icons"
import { Block, Button, Text } from "@components/common"
import { ButtonIconPositions, ButtonModels } from "@components/common/button"

import { getColorStyles, getFontStyles } from "@theme/selectors"
import { IStepActionsProps } from "../../types"

export default function StepActions (props: IStepActionsProps): JSX.Element | null {
  const {
    prevButtonLabel = "Back step",
    nextButtonLabel = "Next step"
  } = props

  if(props.isPrevButtonHidden && props.isNextButtonHidden)
    return null

  // Only optional props can be deleted
  const styledProps: Partial<IStepActionsProps> = { ...props }
  delete styledProps.onPrevButtonClick
  delete styledProps.onNextButtonClick

  return (
    <StyledStepActions { ...styledProps }>
      <Block data-name="StepActions">
        {!props.isPrevButtonHidden && (
          <Button
            data-name="StepActions__Prev"
            onClick={props.onPrevButtonClick}
            disabled={props.isPrevButtonDisabled}
            model={ButtonModels.LINK}
            icon={{
              element: <ThinArrowIcon />,
              position: ButtonIconPositions.PREPEND
            }}
          >
            { prevButtonLabel }
          </Button>
        )}
        {!props.isNextButtonHidden && (
          <Button
            data-name="StepActions__Next"
            onClick={props.onNextButtonClick}
            disabled={props.isNextButtonDisabled}
            icon={{ element: <ThinArrowIcon /> }}
            customStyles={{ borderRadius: "8px" }}
          >
            { nextButtonLabel }
          </Button>
        )}
      </Block>
    </StyledStepActions>
  )
}

const StyledStepActions = styled.div<Partial<IStepActionsProps>>`
  ${Block.Styled}[data-name="StepActions"] {
    display: flex;
    justify-content: ${props => props.isPrevButtonHidden || props.isNextButtonHidden ? "center" : "space-between"};
    padding-top: 20.5px;
    border-top: 1px solid ${props => getColorStyles(props).lightGrey};

    ${Button.Styled.Normal}[data-name="StepActions__Prev"] {
      justify-content: start;

      ${Text.Styled.Button} {
        line-height: 20px;
        font-weight: ${props => getFontStyles(props).weight.regular};
      }
      
      svg {
        transform: rotate(-180deg);
      }
    }

    ${Button.Styled.Normal}[data-name="StepActions__Next"] {
      min-width: 174px;
    }
  }
`