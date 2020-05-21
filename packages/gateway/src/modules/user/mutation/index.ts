import { GraphQLString, GraphQLNonNull } from 'graphql'
import { GraphQLUser } from '../common/types'
import { createUserResolver } from './resolver'

export const createUser = {
  type: GraphQLUser,
  description: 'Create a User',
  args: {
    username: {
      name: 'username',
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: (source: any, args: any, ctx: any) => createUserResolver(args, ctx),
}
