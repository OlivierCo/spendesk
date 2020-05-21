import * as express from 'express'
import * as morgan from 'morgan'
import * as chalk from 'chalk'
import * as bodyParser from 'body-parser'
import { db } from '../db'
import { router } from '../router'
import { config } from '../config'

export const start = () => {
  const app = express()

  app.use(morgan('dev'))
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())

  app.use('/api/user', router)

  db()

  app.listen(config.port, () =>
    console.log(chalk.blue(`--- http://localhost:${config.port} ---`)),
  )
}
