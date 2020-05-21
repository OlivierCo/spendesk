import { Response } from 'express'
import { cardModel } from '../models/card'

export const blockCardController = (req: any, res: Response) => {
  return (
    cardModel
      //@ts-ignore
      .blockCard(req.params.card_id)
      .then(() => {
        //@ts-ignore
        return cardModel.getCardById(req.params.card_id).then((card) => {
          res.status(200).json(card)
        })
      })
      .catch((error: any) => {
        res.status(500).json({ message: 'Card not found', error })
        throw new Error('Card not found')
      })
  )
}
