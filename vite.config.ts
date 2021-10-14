import path from "path"
import { defineConfig } from "vite"
import Vue from "@vitejs/plugin-vue"
import Components from "unplugin-vue-components/vite"
import AutoImport from "unplugin-auto-import/vite"
import WindiCSS from "vite-plugin-windicss"
import Mix from "vite-plugin-mix"
import { VitePWA } from "vite-plugin-pwa"

export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        "~/": `${path.resolve(__dirname, "src")}/`,
      },
    },
    plugins: [
      Vue(),
      VitePWA(),
      Components({
        dirs: ["src/components"],
        extensions: ["vue", "ts"],
        dts: "src/types/components.d.ts",
      }),
      AutoImport({
        include: [/\.[tj]sx?$/, /\.vue\??/],
        imports: ["vue", "@vueuse/core", { "@vueuse/core": ["get", "set", "and", "not"] }],
        dts: "src/types/auto-imports.d.ts",
      }),
      WindiCSS(),
      Mix({
        handler: "./handler.ts",
      }),
    ],
  }
})
