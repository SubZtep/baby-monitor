import { defineConfig } from "vite-plugin-windicss"
import plugin from "windicss/plugin"
import type { DeepNestObject } from "windicss/types/interfaces"
import colors from "windicss/colors"

export default defineConfig({
  shortcuts: {
    row: "flex justify-between content-center",
  },
  plugins: [
    plugin(({ addComponents }) => {
      const buttons: DeepNestObject = {
        ".btn": {
          padding: "0.5rem 1rem",
          borderWidth: "0.25rem",
          borderStyle: "outset",
          borderRadius: "0.5rem",
          color: colors.white,
          backgroundColor: colors.blueGray[500],
          "&:hover": {
            borderStyle: "solid",
            transform: "translate(-1px, -1px)",
          },
          "&:active": {
            borderStyle: "inset",
            transform: "translate(2px, 2px)",
          },
          "&:disabled": {
            borderStyle: "ridge",
            cursor: "not-allowed",
            opacity: "0.5",
          },
        },
      }
      addComponents(buttons)
    }),
  ],
  extract: {
    include: [
      "index.html",
      "src/**/*.{vue,ts,html}",
      "public/**/*.{vue,ts,html}",
    ],
  },
})
