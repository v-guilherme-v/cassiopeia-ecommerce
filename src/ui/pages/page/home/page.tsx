import { useTheme } from "styled-components"

import {
  Header,
  Navigation,
  TopBar,
  BannerContainer,
  HeroBanner,
  HeroBannerCarousel,
  MiniCart,
  Footer,
  MobileNavigation
} from "@components/widgets"

import { ProductCarousel } from "@components/commerce"
import StyledHomePage from "./page.styled"

import flowersBanner from "src/assets/flowers-banner.png"
import randomFlower from "src/assets/flower-1.png"

import type { ColorStyles } from "@theme/types"
import { getColorStyles } from "@theme/selectors"

import { MiniCartContext } from "@contexts"
import { MiniCartContextProvider, MobileNavigationContextProvider } from "@providers"

import { SideMenu } from "@ui/components/common"
import { useViewPorts } from "@ui/hooks/use-viewports"

import { categoriesMock, heroBannersMock } from "@widgets/__mocks__"

export default function HomePage (): JSX.Element {
  const colors: ColorStyles = getColorStyles({ theme: useTheme() })
  const viewPorts = useViewPorts()

  return (
    <StyledHomePage>
      <MiniCartContextProvider>
        <MobileNavigationContextProvider>
          <Header>
            <TopBar />
            { viewPorts.minWidthMedium
              ? <Navigation categories={categoriesMock}/>
              : <MobileNavigation categories={categoriesMock}/>
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

      <HeroBannerCarousel heroBanners={heroBannersMock}/>

      <BannerContainer>
        <HeroBanner
          title={{ text: "Flowers", color: colors.black }}
          description={{ text: "Our flowers", color: colors.black }}
          button={{ text: "See more", backgroundColor: colors.black }}
          image={{ src: flowersBanner, alt: "Flowers banner" }}
        />
        <HeroBanner
          title={{ text: "Flowers", color: colors.black }}
          description={{ text: "Our flowers", color: colors.black }}
          button={{ text: "See more", backgroundColor: colors.black }}
          image={{
            src: flowersBanner,
            alt: "Flowers banner"
          }}
        />
      </BannerContainer>

      <ProductCarousel carouselTitle="Recommended for you"
        products={
          Array(16).fill(1).map((_, index) => ({
            id: index.toString(),
            displayName: `Flower ${index + 1}`,
            imageSource: randomFlower,
            pricing: {
              listPrice: 90.99,
              salePrice: 80.99
            }
          }))
        }/>

      <ProductCarousel carouselTitle="People have bought"
        products={
          Array(16).fill(1).map((_, index) => ({
            id: index.toString(),
            displayName: `Flower ${index + 1}`,
            imageSource: randomFlower,
            pricing: {
              listPrice: 90.99,
              salePrice: 80.99
            }
          }))
        }/>

      <Footer contactNumber="(16) 3635-6304" />
    </StyledHomePage>
  )
}