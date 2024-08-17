import { type PropsWithChildren } from "react"
import styled from "styled-components"

import { getColorStyles } from "@theme/selectors"
import Text from "../text"
import Block from "../block/component"

interface AccordionProps {
  label: string
}

function Accordion (props: PropsWithChildren<AccordionProps>): JSX.Element {
  return (
    <StyledAccordion {...props}>
      <details data-name="AccordionDetails">
        <summary data-name="AccordionSummary">
          <Text.Button data-name="AccordionSummary__Text">
            { props.label }
          </Text.Button>
        </summary>
        <Block data-name="AccordionContent">
          { props.children }
        </Block>
      </details>
    </StyledAccordion>
  )
}

const StyledAccordion = styled.div`
  summary[data-name="AccordionSummary"] {
    list-style: none;
    position: relative;
    user-select: none;
    cursor: pointer;
    padding: 19px 0;

    ${Text.Styled.Button}[data-name="AccordionSummary__Text"] {
      line-height: 20px;
    }
  }

  summary[data-name="AccordionSummary"]::before {
    content: "+";
    position: absolute;
    right: 0;
    font-size: 18px;
  }

  details[data-name="AccordionDetails"] {
    border-bottom: 1px solid ${props => getColorStyles(props).paleGrey};
  }

  details[data-name="AccordionDetails"][open] {
    padding-bottom: 19px;
    
    summary[data-name="AccordionSummary"]::before {
      content: "-";
    }
  }
`

Accordion.Styled = StyledAccordion

export default Accordion