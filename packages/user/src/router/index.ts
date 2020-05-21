import { Router, Request, Response, NextFunction } from 'express'
import {
  createUserController,
  getUsersController,
  getUserByIdController,
} from '../controller'

export const router = Router()

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Welcome to user service!')
  next()
})
router.get('/all-user', getUsersController)
router.get('/:user_id', getUserByIdController)

router.post('/create-user', createUserController)
