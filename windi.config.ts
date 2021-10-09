import { defineConfig } from "vite-plugin-windicss"

export default defineConfig({
  extract: {
    include: ["index.html", "src/**/*.{vue,ts,html}", "public/**/*.{vue,ts,html}"],
  },
})
