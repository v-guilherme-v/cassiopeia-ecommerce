import { createContext, Dispatch } from "react"
import type { SwiperClass } from "swiper/react"
import type { SwiperControls, CheckoutReducerAction, IStepperActionsContext } from "@ui/types"
import { GuestUser } from "@app/types/commerce"
import { doNothing } from "@app/utils"

export const ThemeFunctionsContext = createContext({})

export interface SwiperContextType {
  swiperInstance: SwiperClass | null
  swiperControls?: SwiperControls
  onNavigationClick: (direction: string) => void
  onSwiper: (swiper: SwiperClass) => void
  onAutoplay: (swiper: SwiperClass) => void
  onTouchMove: (swiper: SwiperClass) => void
  onSliderMove: (swiper: SwiperClass) => void
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

export const StepperActionsContext = createContext<IStepperActionsContext | null>(null)

export const CheckoutReducerDispatchContext = createContext<Dispatch<CheckoutReducerAction>>(doNothing)
export const CheckoutGuestUserContext = createContext<Partial<GuestUser>>({})