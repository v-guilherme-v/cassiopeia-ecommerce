import { type PropsWithChildren, useState, useEffect } from "react"
import { type SwiperClass } from "swiper/react"

import { SwiperContext } from "../../contexts"
import { type SwiperControls } from "@ui/types"

export function SwiperContextProvider ({ children }: PropsWithChildren): JSX.Element {
  const [ swiperInstance, setSwiperInstance ] = useState<SwiperClass | null>(null)
  const [ swiperControls, setSwiperControls ] = useState<SwiperControls>({ isBeginning: true, isEnd: false })
  const [ isAutoPlayOn, setIsAutoPlayOn ] = useState<boolean>(false)

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

  const onTouchMove = (swiper: SwiperClass): void => {
    updateControlsAttributes(swiper)
  }

  const onSliderMove = (swiper: SwiperClass): void => {
    updateControlsAttributes(swiper)
  }

  const onSwiper = (swiperInstance: SwiperClass): void => {
    setSwiperInstance(swiperInstance)
  }

  useEffect(() => {
    if (window !== undefined) {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
      if (prefersReducedMotion.matches) {
        setIsAutoPlayOn(false)
      } else {
        setIsAutoPlayOn(true)
      }
    }
  }, [])

  useEffect(() => {
    if (swiperInstance !== null && isAutoPlayOn) {
      swiperInstance.params.autoplay = { delay: 5000 }
      swiperInstance.autoplay?.start()
    }
  }, [
    swiperInstance,
    isAutoPlayOn
  ])

  const swiperContextValue = {
    swiperInstance,
    swiperControls,
    onNavigationClick,
    onTouchMove,
    onSliderMove,
    onAutoplay,
    onSwiper
  }

  return (
    <SwiperContext.Provider value={swiperContextValue}>{children}</SwiperContext.Provider>
  )
}