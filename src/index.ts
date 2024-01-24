import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
const appRouter = require('./router/route')
dotenv.config()

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(bodyParser.json())
app.use(appRouter)
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})