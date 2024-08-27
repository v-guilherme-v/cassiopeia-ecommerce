// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vite-plugin-svgr/client" />

import react from "@vitejs/plugin-react"

import { defineConfig } from "vite"
import tsconfigpaths from "vite-tsconfig-paths"
import svgr from "vite-plugin-svgr"

export default defineConfig({
  plugins: [
    react(),
    tsconfigpaths(),
    svgr({
      exportAsDefault: true
    })
  ],
  base: "/cassiopeia-ecommerce/"
})