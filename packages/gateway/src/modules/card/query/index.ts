import { GraphQLNonNull, GraphQLString } from 'graphql'
import { GraphQLCard } from '../common/types'
import { getCardByIdResolver } from './resolver'

export const getCardById = {
  type: GraphQLCard,
  description: 'Get Card by ID',
  args: {
    card_id: {
      name: 'card_id',
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: (source: any, args: any, ctx: any) =>
    getCardByIdResolver(args.card_id, ctx),
}
