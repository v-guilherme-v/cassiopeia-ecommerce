import styled, { useTheme } from "styled-components"

import {
  Header,
  Navigation,
  TopBar,
  MiniCart,
  Footer
} from "@components/widgets"

import { Block, Button, Title } from "@components/common"
import { useNavigate } from "react-router-dom"

import { MiniCartContextProvider } from "@providers"
import { ThinArrowIcon } from "@components/icons"
import { ButtonIconPositions } from "@components/common/button"

export default function NotFoundPage (): JSX.Element {
  const goTo = useNavigate()

  return (
    <StyledNotFound>
      <MiniCartContextProvider>
        <Header>
          <TopBar />
          <Navigation />
        </Header>

        <MiniCart />
      </MiniCartContextProvider>

      <Block data-name="NotFoundPage">
        <Title>Sorry, we couldn&apos;t find it for you now</Title>
        <Button
          icon={{
            element: <ThinArrowIcon />,
            position: ButtonIconPositions.PREPEND
          }}
          backgroundColor={useTheme().color.black}
          onClick={() => { goTo("/home") }}
        >
          Back to home
        </Button>
      </Block>

      <Footer />
    </StyledNotFound>
  )
}

const StyledNotFound = styled.section`
  display: flex;
  flex-direction: column;
  height: 100dvh;
  height: 100vh;

  ${Block.Styled}[data-name="NotFoundPage"] {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-height: 250px;
    padding: 0 1rem;
    flex: 1;
    gap: 16px;

    ${Title.Styled.Normal} {
      font-weight: 400;
    }

    ${Button.Styled.Normal} {
      min-width: 150px;

      & svg {
        transform: rotate(-180deg);
      }
    }
  }
`