import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLFloat,
} from 'graphql'
import { GraphQLEnumCurrency } from '../../../common/types'

export const GraphQLWallet = new GraphQLObjectType({
  name: 'GraphQLWallet',
  description: 'Wallet response',
  fields: {
    wallet_id: { type: GraphQLString },
    user_id: { type: GraphQLString },
    company_id: { type: GraphQLString },
    balance: { type: GraphQLFloat },
    currency: { type: GraphQLEnumCurrency },
    master: { type: GraphQLBoolean },
    error: { type: GraphQLString },
  },
})
