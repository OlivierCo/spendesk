import * as mongoose from 'mongoose'
import { v4 as uuidv4 } from 'uuid'
import * as generator from 'creditcard-generator'

const cardSchema = new mongoose.Schema({
  wallet_id: {
    unique: true,
    type: String,
    required: true,
  },
  card_id: {
    type: String,
    unique: true,
    required: true,
    default: uuidv4,
  },
  currency: {
    type: String,
    enum: ['USD', 'GPB', 'EUR'],
    default: 'EUR',
  },
  balance: {
    type: Number,
    default: 1000,
  },
  status: {
    type: Boolean,
    default: false,
    unique: false,
  },
  ccv: {
    type: String,
    default: Math.floor(Math.random() * 898) + 101,
  },
  digits: {
    type: String,
    default: generator.GenCC()[0],
  },
  expiration_data: Date,
})

cardSchema.statics = {
  createCard: async function ({ wallet_id, currency }, cb: any) {
    if (this.exists({ wallet_id })) {
      return { message: 'Card  already exists' }
    }

    const data = {
      wallet_id,
      currency,
    }
    const card = await new this(data)

    card.save(cb)
  },

  getCardById: async function (card_id: string) {
    return await this.findOne({ card_id })
  },

  blockCard: async function (card_id: string) {
    return await this.updateOne({ card_id }, { status: true })
  },
}

export const cardModel = mongoose.model<mongoose.Document>('Card', cardSchema)
