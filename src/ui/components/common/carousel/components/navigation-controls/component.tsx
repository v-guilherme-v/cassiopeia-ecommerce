import { useContext } from "react"
import styled from "styled-components"

import { ThinArrowIcon } from "@components/icons"
import { Button, Block } from "@components/common"
import { getColorStyles } from "@theme/selectors"

import { SwiperContext, type SwiperContextType } from "@contexts"

function CarouselNavigationControls (): JSX.Element {
  const swiperContext = useContext<SwiperContextType | null>(SwiperContext)

  return (
    <StyledCarouselNavigationControls>
      <Block data-name="CarouselNavigationControls">
        <Button.AsIcon data-name="CarouselPrev__Control"
          disabled={swiperContext?.swiperControls?.isBeginning}
          onClick={() => { swiperContext?.onNavigationClick("prev") }}
        >
          <ThinArrowIcon />
        </Button.AsIcon>
        <Button.AsIcon data-name="CarouselNext__Control"
          disabled={swiperContext?.swiperControls?.isEnd}
          onClick={() => { swiperContext?.onNavigationClick("next") }}
        >
          <ThinArrowIcon />
        </Button.AsIcon>
      </Block>
    </StyledCarouselNavigationControls>
  )
}

const StyledCarouselNavigationControls = styled.div`
  color: ${props => getColorStyles(props).black};

  ${Block.Styled} {
    display: flex;
    gap: 1.25rem;
  }

  ${Button.Styled.AsIcon}:first-child svg {
    transform: rotate(-180deg);
  }

  ${Button.Styled.AsIcon}:is(:disabled) {
    cursor: not-allowed;
    
    & svg {
      color: ${props => getColorStyles(props).lightGrey};
    }
  }
`

CarouselNavigationControls.Styled = StyledCarouselNavigationControls

export default CarouselNavigationControls