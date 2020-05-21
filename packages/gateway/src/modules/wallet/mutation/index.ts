import { GraphQLBoolean, GraphQLNonNull, GraphQLString } from 'graphql'
import { GraphQLWallet } from '../common/types'
import { GraphQLEnumCurrency } from '../../../common/types'
import { createWalletResolver } from './resolver'

export const createWallet = {
  type: GraphQLWallet,
  description: 'Create a wallet',
  args: {
    user_id: {
      name: 'user_id',
      type: new GraphQLNonNull(GraphQLString),
    },
    currency: {
      name: 'currency',
      type: GraphQLEnumCurrency,
    },
    master: {
      name: 'master',
      type: GraphQLBoolean,
    },
  },
  resolve: (source: any, args: any, ctx: any) =>
    createWalletResolver(args, ctx),
}
