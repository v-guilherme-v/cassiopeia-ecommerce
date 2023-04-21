import React from "react"
import { createGlobalStyle } from "styled-components"
import { type ThemeType } from "@theme/types"

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}

const RootStyles = createGlobalStyle`
  * { 
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  :root {
    font-family: ${(props) => props.theme.font.family};
    font-size: ${(props) => props.theme.font.rootSize};

    background-color: #fff;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  div#root {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100dvh;
  }
`

const StyledRoot = (props: React.PropsWithChildren): JSX.Element => {
  return (
    <React.Fragment>
      <RootStyles />
      { props.children }
    </React.Fragment>
  )
}

export default StyledRoot