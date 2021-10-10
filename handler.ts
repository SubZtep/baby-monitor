import type { Handler } from "vite-plugin-mix"
import { config } from "dotenv"
import { join } from "path"
import { call } from "~/call"
config()

export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const handler: Handler = (req, res, next) => {
  if (req.path === "/alert") {
    const { origin } = req.headers

    if (!origin) {
      res.statusCode = 500
      return res.end()
    }

    let body = ""
    req.on("data", chunk => (body += chunk.toString()))
    req.on("end", async () => {
      const { phone } = JSON.parse(body)
      if (!phone) {
        res.statusCode = 400
        return res.end()
      }

      console.log(`Calling ${phone}`, Date.now())
      await sleep(10000)
      console.log("Call end", Date.now())
      return
      // return await call(phone, join(origin, "/alerted"))
    })
    return res.end("OK")
  }

  if (req.path === "/alerted") {
    console.log("ALERTED", req)
  }

  next()
}
