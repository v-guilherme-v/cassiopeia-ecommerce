import { type PropsWithChildren, useState, useCallback, useEffect } from "react"
import styled from "styled-components"
import { MinusSignIcon, PlusSignIcon } from "@components/icons"
import { getColorStyles, getTextStyles } from "@theme/selectors"

import Button from "../button/component"
import Input from "../input/component"
import { doNothing } from "@utils/index"

interface CounterActionsProps {
  ariaLabel: string
  operationType: string
  onActionClick: React.MouseEventHandler
  isActionDisabled?: boolean
}

function CounterAction (props: PropsWithChildren<CounterActionsProps>): JSX.Element {
  return (
    <StyledCounterAction>
      <Button.AsIcon
        data-name="CounterAction"
        data-action={props.operationType}
        aria-label={props.ariaLabel}
        disabled={props.isActionDisabled}
        onClick={props.onActionClick}
      >
        { props.children }
      </Button.AsIcon>
    </StyledCounterAction>
  )
}

const StyledCounterAction = styled.div`
  & button[data-name="CounterAction"] {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${props => getColorStyles(props).paleGrey};

    &:disabled {
      opacity: .3;
      cursor: not-allowed;
    }
  }
`

interface CounterProps {
  minQuantity?: number
  maxQuantity?: number
  initialQuantity?: number
  onQuantityChange: (qty: number) => void
}

function Counter (props: CounterProps): JSX.Element {
  const counterMinQty = props.minQuantity ?? 1
  const counterMaxQty = props.maxQuantity ?? 999

  function evalInitialQuantity (): number {
    const quantity = props.initialQuantity ?? 1

    if (quantity < counterMinQty) {
      return counterMinQty
    } else if (quantity > counterMaxQty) {
      return counterMaxQty
    } else {
      return quantity
    }
  }

  const counterInitialQty = evalInitialQuantity()

  const [ counterQty, setCounterQty ] = useState<number>(
    // Casting possible bool to number
    Number(counterInitialQty)
  )

  const onDiffActionClick = useCallback(() => {
    if (counterQty > counterMinQty) {
      setCounterQty(qty => qty - 1)
    }
  }, [ counterQty ])

  const onSumActionClick = useCallback(() => {
    if (counterQty < counterMaxQty) {
      setCounterQty(qty => qty + 1)
    }
  }, [ counterQty ])

  useEffect(() => {
    props.onQuantityChange(counterQty)
  }, [ counterQty ])

  return (
    <StyledCounter>
      <CounterAction
        ariaLabel="difference"
        operationType="diff"
        isActionDisabled={counterQty === counterMinQty}
        onActionClick={onDiffActionClick}
      >
        <MinusSignIcon />
      </CounterAction >
      <Input
        name="CounterQuantity"
        disabled={true}
        value={counterQty.toString()}
        onChange={doNothing}
      />
      <CounterAction
        ariaLabel="sum"
        operationType="sum"
        isActionDisabled={counterQty === counterMaxQty}
        onActionClick={onSumActionClick}
      >
        <PlusSignIcon />
      </CounterAction>
    </StyledCounter>
  )
}

const StyledCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  & ${Input.Styled} {
    max-width: max-content;
  }

  & input {
    font-size: ${props => getTextStyles(props).button.fontSize};
    line-height: ${props => getTextStyles(props).button.lineHeight};
    max-width: 49px;
    border: none;
    padding: 0;
    text-align: center;
  }
`

Counter.Styled = StyledCounter

export default Counter