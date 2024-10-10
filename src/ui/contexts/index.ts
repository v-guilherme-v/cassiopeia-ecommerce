import { createContext } from "react"
import { type SwiperClass } from "swiper/react"
import { type SwiperControls } from "@schemas/ui"

export const ThemeFunctionsContext = createContext({})

export interface SwiperContextType {
  swiperInstance: SwiperClass | null
  swiperControls?: SwiperControls
  onNavigationClick: (direction: string) => void
  onSwiper: (swiper: SwiperClass) => void
  onAutoplay: (swiper: SwiperClass) => void
}
export const SwiperContext = createContext<SwiperContextType | null>(null)

export interface MiniCartContextType {
  isOpen: boolean
  toggleMiniCart: () => void
}
export const MiniCartContext = createContext<MiniCartContextType | null>(null)

export interface MobileFiltersContextType {
  isFilterMenuOpen: boolean
  toggleMobileFilters: () => void
}
export const MobileFiltersContext = createContext<MobileFiltersContextType | null>(null)

export interface MobileNavContextType {
  isMobileNavOpen: boolean
  toggleMobileNavigation: () => void
}
export const MobileNavContext = createContext<MobileNavContextType | null>(null)