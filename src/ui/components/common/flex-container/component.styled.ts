import styled from "styled-components"
import { getViewPortsStyles } from "@theme/selectors"

import type { ThemeType, ViewportMedias } from "@theme/types"
import type { FlexContainerProps, FlexContainerOptions } from "./component"

function mediaQueryPropertyMapper(props: { theme: ThemeType } & FlexContainerProps, viewPortKey: string) {
  return {
    gap: (props[viewPortKey as keyof FlexContainerProps] as FlexContainerOptions) ?.gap ?? null,
    flexDirection: (props[viewPortKey as keyof FlexContainerProps] as FlexContainerOptions) ?.direction ?? null,
    alignItems: (props[viewPortKey as keyof FlexContainerProps] as FlexContainerOptions) ?.alignItems ?? null,
    justifyContent: (props[viewPortKey as keyof FlexContainerProps] as FlexContainerOptions) ?.justifyContent ?? null
  }
}

function mountMediaQueries(props: { theme: ThemeType } & FlexContainerProps): string {
  const viewPorts = getViewPortsStyles(props)

  const mediaQueries = Object.keys(viewPorts).map((viewPortKey) => {
    const { gap, flexDirection, alignItems, justifyContent } = mediaQueryPropertyMapper(props, viewPortKey)

    return `
      @media(max-width: ${viewPorts[
        viewPortKey as keyof ViewportMedias
      ]}) {
        flex-direction: ${flexDirection};
        align-items: ${alignItems};
        justify-content: ${justifyContent};
        gap: ${gap};
      }
    `
  })

  return mediaQueries.join("\n")
}

export default styled.div<FlexContainerProps>`
  display: flex;
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  flex-direction: ${(props) => props.direction};
  gap: ${(props) => (props.gap)};

  ${props => mountMediaQueries(props)}
`