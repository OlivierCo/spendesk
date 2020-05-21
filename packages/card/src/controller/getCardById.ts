import { Response } from 'express'
import { cardModel } from '../models/card'

export const getCardByIdController = (req: any, res: Response) => {
  return (
    cardModel
      //@ts-ignore
      .getCardById(req.params.card_id)
      .then((card) => {
        res.json(card)
      })
      .catch((error: any) => {
        res.json({ message: 'Card not found', error })
        throw new Error('Card not found')
      })
  )
}
