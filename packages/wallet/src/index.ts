import * as chalk from 'chalk'
import { start } from './server'

const log = console.log

log(chalk.green('--- Wallet Service ---'))

start()

log(chalk.green('--- Server started succesfully  ---'))
