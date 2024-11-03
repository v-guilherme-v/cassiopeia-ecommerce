import { PropsWithChildren } from "react"

import { Block, Text } from "@components/common"
import { IStepBulletProps } from "../../types"

import StyledStepBullet from "./component.styled"

export default function StepBullet (props: PropsWithChildren<IStepBulletProps>): JSX.Element {
  return (
    <StyledStepBullet data-name="StyledStepBullet" {...props}>
      <Block data-name="Step">
        <Block data-name="StepTitle" data-order={props.order}>
          <Text.Body>{props.name}</Text.Body>
        </Block>
      </Block>
    </StyledStepBullet>
  )
}