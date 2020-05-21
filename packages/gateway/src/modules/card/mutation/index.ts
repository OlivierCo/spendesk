import { GraphQLNonNull, GraphQLString } from 'graphql'
import { GraphQLCard } from '../common/types'
import { GraphQLEnumCurrency } from '../../../common/types'
import { createCardResolver, blockCardResolver } from './resolver'

export const createCard = {
  type: GraphQLCard,
  description: 'Create a card mutation will need wallet_id and a currency',
  args: {
    wallet_id: {
      name: 'wallet_id',
      type: new GraphQLNonNull(GraphQLString),
    },
    currency: {
      name: 'currency',
      type: GraphQLEnumCurrency,
    },
  },
  resolve: (source: any, args: any, ctx: any) => createCardResolver(args, ctx),
}

export const blockCard = {
  type: GraphQLCard,
  description: 'Block a card',
  args: {
    card_id: {
      name: 'card_id',
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: (source: any, args: any, ctx: any) => blockCardResolver(args, ctx),
}
