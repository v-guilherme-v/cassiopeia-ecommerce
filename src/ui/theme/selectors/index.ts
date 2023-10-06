import type { ViewportMedias, ThemeType, FallbackImage } from "@theme/types"

export const getPropsTheme = (props: { theme: ThemeType }): ThemeType => props.theme
export const getViewPorts = (props: { theme: ThemeType }): ViewportMedias => getPropsTheme(props).viewPorts
export const getFallbackImageStyles = (props: { theme: ThemeType }): FallbackImage => getPropsTheme(props).fallbackImage