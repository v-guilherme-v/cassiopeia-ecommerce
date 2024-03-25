import { useMediaQuery } from "react-responsive"

interface IUseDeviceSettings {
  isTablet: boolean
  isMobile: boolean
}

export function useDeviceSettings (): IUseDeviceSettings {
  return {
    isTablet: useMediaQuery({ maxWidth: 892 }),
    isMobile: useMediaQuery({ maxWidth: 576 })
  }
}