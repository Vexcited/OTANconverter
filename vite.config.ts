import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import unocss from "unocss/vite"
import icons from "unplugin-icons/vite"

export default defineConfig({
  plugins: [icons({
    compiler: "solid"
  }), unocss(), solid()],
})
