import styled from "styled-components"
import { getViewPorts } from "@theme/selectors"

import type { ThemeType, ViewportMedias } from "@theme/types"
import type { FlexContainerProps, FlexContainerOptions } from "./component"

function mediaQueryPropertyMapper(props: { theme: ThemeType } & FlexContainerProps, viewPortKey: string) {
  return {
    gap: (props[viewPortKey as keyof FlexContainerProps] as FlexContainerOptions) ?.gap ?? null,
    flexDirection: (props[viewPortKey as keyof FlexContainerProps] as FlexContainerOptions) ?.direction ?? null,
    justifyContent: (props[viewPortKey as keyof FlexContainerProps] as FlexContainerOptions) ?.justifyContent ?? null
  }
}

function mountMediaQueries(props: { theme: ThemeType } & FlexContainerProps): string {
  const viewPorts = getViewPorts(props)

  const mediaQueries = Object.keys(viewPorts).map((viewPortKey) => {
    const { gap, flexDirection, justifyContent } = mediaQueryPropertyMapper(props, viewPortKey)

    return `
      @media(max-width: ${viewPorts[
        viewPortKey as keyof ViewportMedias
      ]}) {
        flex-direction: ${flexDirection};
        justify-content: ${justifyContent};
        gap: ${gap};
      }
    `
  })

  return mediaQueries.join("\n")
}

export default styled.div<FlexContainerProps>`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  flex-direction: ${(props) => props.direction};
  gap: ${(props) => (props.gap)};

  ${props => mountMediaQueries(props)}
`