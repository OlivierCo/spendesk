import { Response, Request, NextFunction } from 'express'
import { walletModel } from '../models/wallet'
import { IWallet, IRequestParams, CustomRequest } from '../types/wallet'

export const createWalletController = (
  req: CustomRequest<IRequestParams>,
  res: Response,
) => {
  const newWallet = {
    currency: req.body.currency,
    master: req.body.master,
    user_id: req.body.user_id,
  }

  return (
    walletModel
      //@ts-ignore
      .createWallet(newWallet, (err: Error, wallet) => {
        if (err) {
          return res.status(500).json({ error: err })
        }

        res.status(201).json({
          ...wallet?._doc,
          balance: wallet?._doc?.balance?.toString(),
          message: `Wallet ${wallet._doc.wallet_id}: created successfully`,
        })
      })
  )
}

export const getWalletsController = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  return (
    walletModel
      //@ts-ignore
      .getWallets(req.params.user_id)
      .then((wallets: IWallet[]) => {
        res.status(200).json(wallets)
      })
      .catch((err) => {
        res.status(500).json({ error: err })
      })
  )
}
