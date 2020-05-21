import * as mongoose from 'mongoose'
import { v4 as uuidv4 } from 'uuid'
import { IWallet } from '../types/wallet'

const walletSchema = new mongoose.Schema(
  {
    wallet_id: {
      unique: true,
      type: String,
      required: true,
      default: uuidv4,
    },
    user_id: {
      type: String,
      unique: false,
    },
    company_id: {
      unique: true,
      type: String,
      required: true,
      default: uuidv4,
    },
    balance: {
      type: Number,
      default: 1000,
    },
    currency: {
      type: String,
      enum: ['USD', 'GPB', 'EUR'],
      default: 'EUR',
    },
    master: {
      type: Boolean,
      default: false,
      unique: false,
    },
  },
  { timestamps: true },
)

walletSchema.statics = {
  createWallet: async function ({ currency, master, user_id }, cb) {
    const data = {
      user_id,
      currency,
      master,
    }
    const wallet = await new this(data)

    wallet.save(cb)
  },

  getWalletById: async function (wallet_id: string): Promise<IWallet> {
    return await this.findOne({ wallet_id })
  },

  getWallets: async function (user_id: string): Promise<IWallet[]> {
    return await this.find({ user_id })
  },
}

export const walletModel = mongoose.model<mongoose.Document>(
  'Wallet',
  walletSchema,
)
