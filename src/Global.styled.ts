import { createGlobalStyle } from "styled-components"
import { type ThemeType } from "@theme/types"

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}

const Global = createGlobalStyle`
  * { 
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  :root {
    font-family: ${(props) => props.theme.font.family};
    font-size: ${(props) => props.theme.font.rootSize};
    line-height: 1.5;

    background-color: #fff;
    color: rgba(255, 255, 255, 0.87);

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  div#root {
    display: flex;
    place-items: center;
    height: 100vh;
  }
`

export default Global