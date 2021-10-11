import type { Handler } from "vite-plugin-mix"
import { config } from "dotenv"
import twilio from "twilio"

config()
const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE } = process.env

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

      const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
      await client.calls.create({ to: phone, from: TWILIO_PHONE!, url: `${origin}/alerted` })
    })
    return res.end("OK")
  }

  if (req.path === "/alerted") {
    console.log("ALERTED", req)
  }

  next()
}
