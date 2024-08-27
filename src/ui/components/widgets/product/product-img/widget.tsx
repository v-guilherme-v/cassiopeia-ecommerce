import { Image } from "@components/common"
import styled from "styled-components"

interface IProductImageProps {
  imageURL: string
  imageAltText: string
}

export default function ProductImage (props: IProductImageProps): JSX.Element {
  return (
    <StyledProductImage>
      <Image src={props.imageURL} alt={props.imageAltText}/>
    </StyledProductImage>
  )
}

const StyledProductImage = styled.div`
  & ${Image.Styled} img {
    max-width: 568px;
    width: 100%;
  }
`