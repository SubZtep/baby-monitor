import path from "path"
import { defineConfig } from "vite"
import Vue from "@vitejs/plugin-vue"
import Components from "unplugin-vue-components/vite"
import AutoImport from "unplugin-auto-import/vite"
import WindiCSS from "vite-plugin-windicss"

export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        "~/": `${path.resolve(__dirname, "src")}/`,
      },
    },
    plugins: [
      Vue(),
      Components({
        dirs: ["src/components"],
        extensions: ["vue", "ts"],
        dts: "src/types/components.d.ts",
      }),
      AutoImport({
        include: [/\.[tj]sx?$/, /\.vue\??/],
        imports: ["vue", "@vueuse/core", { "@vueuse/core": ["get", "set"] }],
        dts: "src/types/auto-imports.d.ts",
      }),
      WindiCSS(),
    ],
    server: {
      fs: {
        allow: [".."],
      },
    },
  }
})
