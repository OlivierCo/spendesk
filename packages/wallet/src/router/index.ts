import { Router, Request, Response, NextFunction } from 'express'
import { createWalletController, getWalletsController } from '../controller'

export const router: Router = Router()

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Welcome to wallet service!')
  next()
})

router.post('/create-wallet/:user_id', createWalletController)

router.get('/all-wallet/:user_id', getWalletsController)
