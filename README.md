# baby-monitor

[![CodeQL](https://github.com/SubZtep/baby-monitor/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/SubZtep/baby-monitor/actions/workflows/codeql-analysis.yml)

Concept app that runs on an old phone in the baby's room, once mic detects noise for a little while it rings your phone.

## Steps to run



1. Create `.env` file in project root including [Twilio](https://www.twilio.com/) keys.
   ```ini
   TWILIO_ACCOUNT_SID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   TWILIO_AUTH_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   TWILIO_PHONE=+00000000000
   ```
2. ```sh
   $ npm run build
   ```
3. ```sh
   $ npm run serve
   ```

## Known issues

- [ ] No proper validations.
- [ ] Better not to skip calls because Twilio keeps redialing until pick up.

## Demo

Deployed [here](https://lili.digital/) for personal usage.
