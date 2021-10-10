import twilio from "twilio"
import { config } from "dotenv"
config()
const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE } = process.env

export async function call(to: string, url: string) {
  const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
  await client.calls.create({ to, from: TWILIO_PHONE!, url })
}
