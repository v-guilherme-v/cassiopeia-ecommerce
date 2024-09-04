import { getViewPortsStyles } from "@ui/theme/selectors"
import { useMediaQuery } from "react-responsive"
import { useTheme } from "styled-components"

interface IUseViewPorts {
  maxWidthSmall: boolean
  maxWidthMedium: boolean
  maxWidthLarge: boolean
  maxWidthExtraLarge: boolean
}

export function useViewPorts (): IUseViewPorts {
  const theme = useTheme()

  const maxWidthSmall = useMediaQuery({ maxWidth: getViewPortsStyles({ theme }).small })
  const maxWidthMedium = useMediaQuery({ maxWidth: getViewPortsStyles({ theme }).medium })
  const maxWidthLarge = useMediaQuery({ maxWidth: getViewPortsStyles({ theme }).large })
  const maxWidthExtraLarge = useMediaQuery({ maxWidth: getViewPortsStyles({ theme }).extraLarge })

  return {
    maxWidthSmall,
    maxWidthMedium,
    maxWidthLarge,
    maxWidthExtraLarge
  }
}