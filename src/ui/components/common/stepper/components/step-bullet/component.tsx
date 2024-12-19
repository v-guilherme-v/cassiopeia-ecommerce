import { forwardRef } from "react"
import { Block, Text } from "@components/common"
import { IStepBulletProps } from "../../types"

import StyledStepBullet from "./component.styled"

const StepBullet = forwardRef<HTMLDivElement, IStepBulletProps>((props, ref) => {
  return (
    <StyledStepBullet data-name="StyledStepBullet" state={props.state} ref={ref}>
      <Block data-name="Step" {...props}>
        <Block data-name="StepTitle" data-order={props.order}>
          <Text.Body>{props.name}</Text.Body>
        </Block>
      </Block>
    </StyledStepBullet>
  )
})

export default StepBullet