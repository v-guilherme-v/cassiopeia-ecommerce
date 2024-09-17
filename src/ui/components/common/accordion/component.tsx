import { type ReactNode, type PropsWithChildren } from "react"
import styled from "styled-components"

import { getColorStyles } from "@theme/selectors"
import Text from "../text"
import Block from "../block"
import Button from "../button"

interface AccordionProps {
  label: string
  initiallyOpen?: boolean
  iconToOpen?: ReactNode
  iconToClose?: ReactNode
}

function Accordion (props: PropsWithChildren<AccordionProps>): JSX.Element {
  return (
    <StyledAccordion {...props}>
      <details data-name="AccordionDetails" open={props.initiallyOpen}>
        <summary data-name="AccordionSummary">
          <Text.Button data-name="AccordionSummary__Text">
            { props.label }
          </Text.Button>
          <Button.AsIcon data-name="AccordionActionOpen">{props.iconToOpen ?? "+"}</Button.AsIcon>
          <Button.AsIcon data-name="AccordionActionClose">{props.iconToClose ?? "-"}</Button.AsIcon>
        </summary>
        <Block data-name="AccordionContent">
          { props.children }
        </Block>
      </details>
    </StyledAccordion>
  )
}

const StyledAccordion = styled.div`
  /* To hide marker on Safari */
  summary::-webkit-details-marker {
    display: none;
  }
  
  summary[data-name="AccordionSummary"] {
    list-style: none;
    position: relative;
    user-select: none;
    cursor: pointer;
    padding: 19px 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    ${Text.Styled.Button}[data-name="AccordionSummary__Text"] {
      line-height: 20px;
    }
  }

  ${Button.Styled.AsIcon}[data-name="AccordionActionOpen"],
  ${Button.Styled.AsIcon}[data-name="AccordionActionClose"] {
    pointer-events: none;
  }

  ${Button.Styled.AsIcon}[data-name="AccordionActionClose"] {
    display: none;
  }

  details[data-name="AccordionDetails"] {
    border-bottom: 1px solid ${props => getColorStyles(props).paleGrey};
  }

  details[data-name="AccordionDetails"][open] {
    padding-bottom: 19px;

    ${Button.Styled.AsIcon}[data-name="AccordionActionOpen"] {
      display: none;
    }
    
    ${Button.Styled.AsIcon}[data-name="AccordionActionClose"] {
      display: block;
    }
  }
`

Accordion.Styled = StyledAccordion

export default Accordion