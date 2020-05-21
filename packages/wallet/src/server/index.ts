import * as express from 'express'
import helmet from 'helmet'
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
  app.use(helmet())
  app.use(
    (
      err: any,
      req: express.Request,
      res: express.Response,
      next: express.NextFunction,
    ) => {
      new Error(`Something went wrong!, err: ${err}`)
      res.status(500).send('Something went wrong!')
    },
  )

  app.use('/api/wallet', router)

  db()

  app.listen(config.port, () =>
    console.log(chalk.blue(`--- http://localhost:${config.port} ---`)),
  )
}
