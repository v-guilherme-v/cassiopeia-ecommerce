import styled from "styled-components"

import {
  Accordion,
  Block,
  Text
} from "@components/common"

import { ChevronIcon } from "@components/icons"
import { getColorStyles, getViewPortsStyles } from "@ui/theme/selectors"

const IconToOpen = (): JSX.Element => {
  return (
    <Block data-name="ProductDescription__IconToOpen">
      <ChevronIcon />
    </Block>
  )
}

const IconToClose = (): JSX.Element => {
  return (
    <Block data-name="ProductDescription__IconToClose">
      <ChevronIcon />
    </Block>
  )
}

export default function ProductDescription (): JSX.Element {
  return (
    <StyledProductDescription
      data-name="Product__Description"
    >
      <Accordion label="Description"
        iconToOpen={<IconToOpen />}
        iconToClose={<IconToClose />}
      >
        <Text.Caption>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi autem ab magni laudantium iste soluta aspernatur iure sunt, dolore in laborum, est ipsum aperiam optio aliquid, deleniti ullam maxime quo.
        </Text.Caption>
      </Accordion>
      <Accordion label="Description"
        iconToOpen={<IconToOpen />}
        iconToClose={<IconToClose />}
      >
        <Text.Caption>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi autem ab magni laudantium iste soluta aspernatur iure sunt, dolore in laborum, est ipsum aperiam optio aliquid, deleniti ullam maxime quo.
        </Text.Caption>
      </Accordion>
      <Accordion label="Description"
        iconToOpen={<IconToOpen />}
        iconToClose={<IconToClose />}
      >
        <Text.Caption>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi autem ab magni laudantium iste soluta aspernatur iure sunt, dolore in laborum, est ipsum aperiam optio aliquid, deleniti ullam maxime quo.
        </Text.Caption>
      </Accordion>
    </StyledProductDescription>
  )
}

const StyledProductDescription = styled.div`
  ${Block.Styled}[data-name="ProductDescription__IconToOpen"],
  ${Block.Styled}[data-name="ProductDescription__IconToClose"] {
    color: ${props => getColorStyles(props).black};
  }

  ${Block.Styled}[data-name="ProductDescription__IconToClose"] {
    transform: rotate(180deg);
  }

  @media(max-width: ${props => getViewPortsStyles(props).medium}) {
    [data-name="AccordionSummary__Text"] {
      font-size: 16px;
    }

    ${Text.Styled.Caption} {
      font-size: 14px;
    }
  }
`