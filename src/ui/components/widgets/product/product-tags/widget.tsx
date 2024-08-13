import styled from "styled-components"
import type { ReactElement } from "react"
import { Block, Text } from "@components/common"
import { getColorStyles } from "@theme/selectors"

interface IProductTagProps {
  icon: ReactElement
  name: string
}
function ProductTag (tag: IProductTagProps): JSX.Element {
  return (
    <StyledProductTag>
      <Block data-name="ProductTag__Icon">{ tag.icon }</Block>
      <Block data-name="ProductTag__Name">
        <Text.Caption>{ tag.name }</Text.Caption>
      </Block>
    </StyledProductTag>
  )
}

const StyledProductTag = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  & ${Block.Styled}[data-name="ProductTag__Icon"] {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 46px;
    height: 46px;
    border: 1px solid ${props => getColorStyles(props).black};
    border-radius: 50%;
  }

  & ${Block.Styled}[data-name="ProductTag__Name"] {
    max-width: 86px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
interface IProductTagsProps {
  tags: IProductTagProps[]
}
export default function ProductTags ({ tags }: IProductTagsProps): JSX.Element {
  return (
    <StyledProductTags>
      { tags.map((tag, index) => <ProductTag key={index} {...tag} />) }
    </StyledProductTags>
  )
}

const StyledProductTags = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem 40px;
  margin: 20px 0;
`