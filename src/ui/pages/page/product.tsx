import styled, { useTheme } from "styled-components"

import {
  Block,
  Button,
  Container,
  Text,
  Title,
  Counter
} from "@components/common"

import {
  Header,
  Breadcrumbs,
  Navigation,
  TopBar,
  Footer,
  ProductImage,
  ProductTags,
  ProductColorSelector
} from "@components/widgets"

import { CartIcon } from "@components/icons"
import { getColorStyles } from "@theme/selectors"
import { ButtonModels, ButtonSizes } from "@components/common/button"

const breadcrumbs = [
  { name: "Level 1" },
  { name: "Level 2" },
  { name: "Level 3" },
  { name: "Level 4" }
]

export default function ProductPage (): JSX.Element {
  const theme = useTheme()

  return (
    <StyledProductPage>
      <Header>
        <TopBar />
        <Navigation />
      </Header>
      <Container>
        <Block data-name="ProductPage__Heading">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </Block>
        <Block data-name="ProductPage__Content">
          <Block data-name="ProductPage__ImageSection">
            <ProductImage />
            <ProductTags tags={[
              { icon: <CartIcon />, name: "Benefits description" },
              { icon: <CartIcon />, name: "Benefits description" },
              { icon: <CartIcon />, name: "Benefits description" }
            ]} />
          </Block>
          <Block data-name="ProductPage__ActionSection">
            <Block data-name="Product__Identification">
              <Title data-name="ProductName">Product name</Title>
              <Block data-name="ProductPricing">
                <Title.Large data-name="ProductCurrentPrice">Price</Title.Large>
                <Text.StrikeLarge data-name="ProductOldPrice">Oldprice</Text.StrikeLarge>
              </Block>
            </Block>
            <Block data-name="Product__QuantityCounter">
              <Text.Large data-name="Product__QuantityLabel">Quantity</Text.Large>
              <Counter onQuantityChange={newQty => { console.log("new qty is ", newQty) }}/>
            </Block>
            <Block data-name="Product__ColorSelector">
              <Text.Large data-name="Product__ColorSelectorLabel">Color</Text.Large>
              <ProductColorSelector
                initialColor="purple"
                colorOptions={[
                  { id: "purple", value: theme.color.active },
                  { id: "green", value: theme.color.positive }
                ]} />
            </Block>
            <Block data-name="Product__CartActions">
              <Button data-name="GoToCart">Add to cart</Button>
              <Button
                data-name="AddToCart"
                size={ButtonSizes.ICON}
                model={ButtonModels.OUTLINED}
                icon={{ element: <CartIcon /> }}
              />
            </Block>
          </Block>
        </Block>
      </Container>
      <Footer />
    </StyledProductPage>
  )
}

const StyledProductPage = styled.section`
  display: flex;
  flex-direction: column;
  height: 100dvh;

  ${Container.Styled} {
    flex: 1;
  }
  
  ${Block.Styled}[data-name="ProductPage__Content"] {
    display: flex;
    gap: 70px;

    ${Block.Styled}[data-name="ProductPage__ActionSection"] {
      flex: 1;
      max-width: 518px;

      ${Block.Styled}[data-name="Product__Identification"] {
        padding-bottom: 15px;
        border-bottom: 1px solid ${props => getColorStyles(props).lightGrey};

        ${Title.Styled}[data-name="ProductName"] {
          font-weight: 400;
          line-height: 24px;
          margin-bottom: 20px;
        }

        ${Block.Styled}[data-name="ProductPricing"] {
          display: flex;
          gap: 20px;

          ${Title.Styled.Large}[data-name="ProductCurrentPrice"] {
            font-weight: 500;
            line-height: 28px;
          }

          ${Text.Styled.StrikeLarge}[data-name="ProductOldPrice"] {
            color: ${props => getColorStyles(props).darkGrey};
            font-weight: 500;
            line-height: 22px;
            align-self: end;
          }
        }
      }

      ${Block.Styled}[data-name="Product__QuantityCounter"],
      ${Block.Styled}[data-name="Product__ColorSelector"] {
        display: flex;
        flex-direction: column;
        margin-top: 40px;
        gap: 24.5px;

        ${Text.Styled.Large}[data-name="Product__QuantityLabel"],
        ${Text.Styled.Large}[data-name="Product__ColorSelectorLabel"] {
          line-height: 24px;
        }
      }

      ${Block.Styled}[data-name="Product__CartActions"] {
        display: flex;
        margin-top: 50px;
        gap: 20px;

        ${Button.Styled}[data-name="GoToCart"] {
          max-width: 309px;
          width: 100%;
        }

        ${Button.Styled}[data-name="AddToCart"] svg {
          width: 17px;
          height: 14px;
        }
      }
    }
  }
`