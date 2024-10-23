import { type ReactNode, useId } from "react"
import { Swiper, SwiperSlide, type SwiperProps } from "swiper/react"

import styled from "styled-components"
import { getColorStyles } from "@ui/theme/selectors"

import { SwiperContext } from "@ui/contexts"
import { SwiperContextProvider } from "@ui/providers"

import "swiper/css"
import "swiper/css/pagination"

interface ICarouselProps extends SwiperProps {
  children: ReactNode[]
  navigationControls?: ReactNode
}

export default function Carousel (props: ICarouselProps): JSX.Element | null {
  if (
    props.children === null ||
    props.children === undefined ||
    props.children.length === 0
  ) {
    return null
  }

  const randomId = useId()

  const swiperProps = {...props}
  delete swiperProps.navigationControls

  return (
    <StyledCarousel>
      <SwiperContextProvider>
        <SwiperContext.Consumer>
          {swiperContext => (
            <Swiper
              onSwiper={swiperContext?.onSwiper}
              onAutoplay={swiperContext?.onAutoplay}
              onTouchMove={swiperContext?.onTouchMove}
              onSliderMove={swiperContext?.onSliderMove}
              { ...swiperProps }
            >
              {props.children.map((child, index) => (
                <SwiperSlide key={`${randomId}-${index}`}>
                  { child }
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </SwiperContext.Consumer>

        { props.navigationControls !== null &&
          props.navigationControls !== undefined &&
          props.navigationControls
        }
      </SwiperContextProvider>
    </StyledCarousel>
  )
}

const StyledCarousel = styled.div`
  // Absolute elements will live in it
  position: relative;
  --swiper-pagination-bottom: 10px;
  --swiper-pagination-color: ${props => getColorStyles(props).accent}
`