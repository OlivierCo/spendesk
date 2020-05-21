import { GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql'
import { GraphQLUser } from '../common/types'
import { getUsersResolver, getUserByIdResolver } from './resolver'

const getUsers = {
  type: new GraphQLList(GraphQLUser),
  description: 'Get list of Users',
  resolve: (source: any, args: any, ctx: any) => getUsersResolver(ctx),
}

const getUserById = {
  type: GraphQLUser,
  description: 'Get User by ID',
  args: {
    user_id: {
      name: 'user_id',
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: (source: any, args: any, ctx: any) =>
    getUserByIdResolver(args.user_id, ctx),
}

export { getUsers, getUserById }
