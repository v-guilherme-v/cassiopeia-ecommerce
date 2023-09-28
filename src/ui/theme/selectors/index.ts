import type { ViewportMedias, ThemeType } from "@theme/types"

export const getPropsTheme = (props: { theme: ThemeType }): ThemeType => props.theme
export const getViewPorts = (props: { theme: ThemeType }): ViewportMedias => getPropsTheme(props).viewPorts