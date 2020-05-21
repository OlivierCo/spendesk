import { GraphQLObjectType } from 'graphql'
import { getUsers, getUserById } from '../modules/user/query'
import { getWallets } from '../modules/wallet/query'
import { getCardById } from '../modules/card/query'

export const query = new GraphQLObjectType({
  name: 'Query',
  description: 'Query schema definition',
  fields: {
    getUsers,
    getUserById,
    getWallets,
    getCardById,
  },
})
