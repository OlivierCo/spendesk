import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLFloat,
} from 'graphql'
import { GraphQLEnumCurrency } from '../../../common/types'

export const GraphQLCard = new GraphQLObjectType({
  name: 'GraphQLCard',
  description: 'Card response',
  fields: {
    wallet_id: { type: GraphQLString },
    card_id: { type: GraphQLString },
    currency: { type: GraphQLEnumCurrency },
    balance: { type: GraphQLFloat },
    status: { type: GraphQLBoolean },
    ccv: { type: GraphQLString },
    digits: { type: GraphQLString },
    error: { type: GraphQLString },
    expiration_data: { type: GraphQLString },
  },
})
