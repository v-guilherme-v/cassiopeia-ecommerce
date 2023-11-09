import { type PropsWithChildren, useState } from "react"
import { type SwiperClass } from "swiper/react"

import { SwiperContext } from "../contexts"
import { type SwiperControls } from "@schemas/ui"

export function SwiperContextProvider ({ children }: PropsWithChildren): JSX.Element {
  const [ swiperInstance, setSwiperInstance ] = useState<SwiperClass | null>(null)
  const [ swiperControls, setSwiperControls ] = useState<SwiperControls>({ isBeginning: true, isEnd: false })

  const updateControlsAttributes = (swiper: SwiperClass | null): void => {
    if (swiper !== null) {
      setSwiperControls({
        isBeginning: swiper?.isBeginning,
        isEnd: swiper?.isEnd
      })
    }
  }

  const onNavigationClick = (direction: string): void => {
    if (direction === "prev") {
      swiperInstance?.slidePrev()
      updateControlsAttributes(swiperInstance)
    } else {
      swiperInstance?.slideNext()
      updateControlsAttributes(swiperInstance)
    }
  }

  const onAutoplay = (swiper: SwiperClass): void => {
    updateControlsAttributes(swiper)
  }

  const onSwiper = (swiperInstance: SwiperClass): void => {
    setSwiperInstance(swiperInstance)
  }

  const swiperContextValue = {
    swiperInstance,
    swiperControls,
    onNavigationClick,
    onAutoplay,
    onSwiper
  }

  return (
    <SwiperContext.Provider value={swiperContextValue}>{children}</SwiperContext.Provider>
  )
}