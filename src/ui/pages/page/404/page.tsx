import styled, { useTheme } from "styled-components"

import {
  Header,
  Navigation,
  TopBar,
  MiniCart,
  Footer,
  MobileNavigation
} from "@components/widgets"

import { Block, Button, SideMenu, Title } from "@components/common"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"

import { MiniCartContext } from "@contexts"
import {
  MiniCartContextProvider,
  MobileNavigationContextProvider
} from "@providers"

import { ThinArrowIcon } from "@components/icons"
import { ButtonIconPositions } from "@components/common/button"
import { useViewPorts } from "@ui/hooks/use-viewports"

import { categoriesMock } from "@widgets/__mocks__"

export default function NotFoundPage (): JSX.Element {
  const goTo = useNavigate()
  const viewPorts = useViewPorts()
  const { t } = useTranslation()

  return (
    <StyledNotFound>
      <MiniCartContextProvider>
        <MobileNavigationContextProvider>
          <Header>
            <TopBar />
            { viewPorts.minWidthMedium
              ? <Navigation categories={categoriesMock} />
              : <MobileNavigation categories={categoriesMock} />
            }
          </Header>
        </MobileNavigationContextProvider>

        <MiniCartContext.Consumer>
          {miniCartContext => (
            <SideMenu isOpen={miniCartContext?.isOpen}>
              <MiniCart />
            </SideMenu>
          )}
        </MiniCartContext.Consumer>
      </MiniCartContextProvider>

      <Block data-name="NotFoundPage">
        <Title>{t("message.404")}</Title>
        <Button
          icon={{
            element: <ThinArrowIcon />,
            position: ButtonIconPositions.PREPEND
          }}
          backgroundColor={useTheme().color.black}
          onClick={() => { goTo("/home") }}
        >
          {t("actions.backToHome")}
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
