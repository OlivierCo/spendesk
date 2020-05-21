import { GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql'
import { GraphQLWallet } from '../common/types'
import { getWalletsResolver } from './resolver'

export const getWallets = {
  type: new GraphQLList(GraphQLWallet),
  description: 'Get list of Users',
  args: {
    user_id: {
      name: 'user_id',
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: (source: any, args: any, ctx: any) => getWalletsResolver(args, ctx),
}
