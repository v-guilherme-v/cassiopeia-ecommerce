import { useTheme } from "styled-components"
import { getColorStyles } from "@theme/selectors"
import { ButtonModels } from "@components/common/button"

import type { HeroBannerProps } from "@widgets/types"

export function useHeroBannerConfig (props: HeroBannerProps): any {
  const {
    button,
    image,
    title,
    description
  } = props

  const theme = useTheme()
  const colors = getColorStyles({ theme })

  return {
    image,
    title: {
      // It means you can pass options/configs in or just a raw string
      text: typeof title === "object" ? title.text : title,
      color: typeof title === "object" ? title.color : colors.black
    },
    description: {
      text: typeof description === "object" ? description.text : description,
      color: typeof description === "object" ? description.color : colors.black
    },
    button: {
      text: typeof button === "object" ? button.text : button,
      textColor: typeof button === "object" ? button.textColor : colors.black,
      model: typeof button === "object" ? button.model : ButtonModels.PRIMARY,
      backgroundColor: typeof button === "object" ? button.backgroundColor : colors.primary
    }
  }
}