import type { Handler } from "vite-plugin-mix"
import { config } from "dotenv"
config()

export const handler: Handler = (req, res, next) => {
  if (req.path === "/alert") {
    let body = ""
    req.on("data", chunk => (body += chunk.toString()))
    req.on("end", () => {
      const parsed = JSON.parse(body)
      if (parsed.call) {
        console.log(parsed.call)
      }
    })
    return res.end("OK")
  }
  next()
}
