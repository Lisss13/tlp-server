const express = require("express")
const next = require("next")
const compression = require("compression")

const nextI18NextMiddleware = require("next-i18next/middleware")

const nextI18next = require("./i18n")

const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()
const port = 3000

app
  .prepare()
  .then(() => {
    const server = express()
    // support gzip
    server.use(compression())

    try {
      server.use(nextI18NextMiddleware(nextI18next))
    } catch (e) {
      throw e
    }

    server.get("*", (req, res) => {
      return handle(req, res)
    })

    server.listen(port, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
