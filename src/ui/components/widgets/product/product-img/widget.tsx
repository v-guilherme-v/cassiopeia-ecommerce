import { Image } from "@components/common"
import styled from "styled-components"

import randomFlower from "src/assets/flower-1.png"

export default function ProductImage (): JSX.Element {
  return (
    <StyledProductImage>
      <Image src={randomFlower} alt="No img"/>
    </StyledProductImage>
  )
}

const StyledProductImage = styled.div`
  & ${Image.Styled} img {
    max-width: 568px;
    width: 100%;
  }
`