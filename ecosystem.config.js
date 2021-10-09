const { join } = require("path")

module.exports = {
  name: "depth",
  script: "serve",
  watch: "dist",
  cwd: join(__dirname, "dist"),
  env: {
    PM2_SERVER_PATH: ".",
    PM2_SERVE_PORT: 2021,
  },
}
