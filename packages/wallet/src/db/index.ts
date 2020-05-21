import * as chalk from 'chalk'
import * as mongoose from 'mongoose'
import { config } from '../config'

export const db = () => {
  mongoose
    .connect(config.mongoDBURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true,
    })
    .catch((err) => {
      throw Error(err)
    })
  const db = mongoose.connection

  db.on('connected', function () {
    console.log(
      chalk.green('Mongoose default connection is open to ', config.mongoDBURL),
    )
  })

  db.on(
    'error',
    () => new Error(chalk.red('Connection error with the mongoDB')),
  )

  db.once('open', () => {
    console.log(chalk.green('--- Connection opened! ---'))
  })

  process.on('SIGINT', function () {
    mongoose.connection.close(function () {
      console.log(
        chalk.bold.magenta(
          'Mongoose default connection is disconnected due to application termination',
        ),
      )
      process.exit(0)
    })
  })

  return db
}
