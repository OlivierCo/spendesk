import * as mongoose from 'mongoose'
import { v4 as uuidv4 } from 'uuid'
import { IUser } from '../types/user'

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    user_id: {
      unique: true,
      type: String,
      required: true,
      default: uuidv4,
    },
  },
  { timestamps: true },
)

userSchema.statics = {
  createUser: async function (data, cb) {
    const user = await new this(data)

    user.save(cb)
  },

  getUserById: async function (user_id: string): Promise<IUser> {
    return await this.findOne({ user_id })
  },

  getUsers: async function (): Promise<IUser[]> {
    return await this.find()
  },
}

export const userModel = mongoose.model<IUser & mongoose.Document>(
  'User',
  userSchema,
)
