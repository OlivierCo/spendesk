import { Response } from 'express'
import { userModel } from '../models/user'
import { IUser } from '../types/user'

export const createUserController = (req: any, res: Response) => {
  const newUser = { username: req.body.username }

  return (
    userModel
      //@ts-ignore
      .createUser(newUser, (err: Error, user) => {
        if (err) {
          return res.status(500).json({ error: err })
        }

        res.status(201).json({
          ...user._doc,
          message: `User ${newUser.username}: created successfully`,
        })
      })
  )
}

export const getUsersController = (req: any, res: Response) => {
  //@ts-ignore
  return userModel.getUsers().then((user: IUser[]) => {
    res.json(user)
  })
}

export const getUserByIdController = (req: any, res: Response) => {
  return (
    userModel
      //@ts-ignore
      .getUserById(req.params.user_id)
      .then((user: IUser[]) => {
        res.json(user)
      })
  )
}
