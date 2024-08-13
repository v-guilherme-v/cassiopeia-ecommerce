import { Image } from "@components/common"
import styled from "styled-components"

export default function ProductImage (): JSX.Element {
  return (
    <StyledProductImage>
      <Image src="" alt="No img"/>
    </StyledProductImage>
  )
}

const StyledProductImage = styled.div`
  & ${Image.Styled} img {
    max-width: 568px;
    width: 100%;
  }
`