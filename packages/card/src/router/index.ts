import { Router, Request, Response, NextFunction } from 'express'
import {
  createCardController,
  getCardByIdController,
  blockCardController,
} from '../controller'

export const router = Router()

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Welcome to wallet service!')
  next()
})
router.post('/create-card/:wallet_id', createCardController)
router.put('/block-card/:card_id', blockCardController)
router.get('/:card_id', getCardByIdController)
