import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
} from 'graphql'

export const GraphQLUser = new GraphQLObjectType({
  name: 'GraphQLUser',
  description: 'User response',
  fields: {
    user_id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    version: {
      type: new GraphQLNonNull(GraphQLInt),
      resolve: (source) => source.__v,
    },
    username: {
      type: new GraphQLNonNull(GraphQLString),
    },
    message: {
      type: GraphQLString,
    },
  },
})
