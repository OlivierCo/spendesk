import { Response } from 'express'
import { cardModel } from '../models/card'

export const createCardController = (req: any, res: Response) => {
  const newCard = {
    wallet_id: req.body.wallet_id,
    currency: req.body.currency,
  }

  //@ts-ignore
  return cardModel.createCard(newCard, (err: Error, card) => {
    if (err) {
      return res.status(400).json({ error: err })
    }

    res.json({
      ...card._doc,
      balance: card?._doc?.balance.toString(),
      message: `Card ${card._doc.card_id}: created successfully`,
    })
  })
}
