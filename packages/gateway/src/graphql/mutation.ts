import { GraphQLObjectType } from 'graphql'
import { createUser } from '../modules/user/mutation'
import { createWallet } from '../modules/wallet/mutation'
import { createCard, blockCard } from '../modules/card/mutation'

export const mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Mutation schema definition',
  fields: {
    createUser,
    createWallet,
    createCard,
    blockCard,
  },
})
