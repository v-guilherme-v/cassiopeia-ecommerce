import styled, { DefaultTheme } from "styled-components"
import { Block, Text } from "@components/common"
import { getTextStyles } from "@theme/selectors"

import { IStepBulletProps } from "../../types"

interface IGetStatusColor {
  borderColor: string
  backgroundColor: string
  orderTextColor: string
  titleTextColor: string
}

function getStatusColor({ state }: Pick<IStepBulletProps, "state">, theme: DefaultTheme) : IGetStatusColor {
  if(state === "complete") {
    return {
      borderColor: theme.color.accent,
      backgroundColor: theme.color.accent,
      orderTextColor: theme.color.white,
      titleTextColor: theme.color.accent
    }
  } else if(state === "current") {
    return {
      borderColor: theme.color.accent,
      backgroundColor: theme.color.white,
      orderTextColor: theme.color.black,
      titleTextColor: theme.color.black
    }
  } else {
    return {
      borderColor: theme.color.grey,
      backgroundColor: theme.color.white,
      orderTextColor: theme.color.grey,
      titleTextColor: theme.color.grey
    }
  }

}

export default styled.div<IStepBulletProps>`
  display: flex;
  align-items: center;

  &:not(:first-child)::before {
    content: "";
    display: inline-flex;
    width: 60px;
    height: 2px;
    background-color: ${props => getStatusColor({ state: props.state }, props.theme).titleTextColor};
    margin-inline: 20px;
  }
  
  ${Block.Styled}[data-name="StepTitle"]::before {
    content: attr(data-order);
    font-size: ${props => getTextStyles(props).caption.fontSize};
    line-height: ${props => getTextStyles(props).caption.lineHeight};

    display: inline-flex;
    align-items: center;
    justify-content: center;

    width: 24px;
    height: 24px;
    color: ${props => getStatusColor({ state: props.state }, props.theme).orderTextColor};

    border: 1px solid ${props => getStatusColor({ state: props.state }, props.theme).borderColor};
    background-color: ${props => getStatusColor({ state: props.state }, props.theme).backgroundColor};
    border-radius: 50%;
    margin-right: 8px;
  }

  ${Block.Styled}[data-name="StepTitle"] {
    display: flex;
    align-items: center;

    ${Text.Styled.Body} {
      color: ${props => getStatusColor({ state: props.state }, props.theme).titleTextColor};
      user-select: none;
    }
  }
`