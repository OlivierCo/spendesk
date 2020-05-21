import { Request } from 'express'

enum Currency {
  USD = 'USD',
  EUR = 'EUR',
  GPB = 'GPB',
}

export interface IWallet {
  wallet_id: string
  balance: Number
  company_id: string
  currency: Currency
  master: boolean
}

export interface IRequestParams {
  currency: Currency
  master: boolean
  user_id: string
}

export interface CustomRequest<T> extends Request {
  body: T
}
