import { ApolloServer } from 'apollo-server'
import { GraphQLError } from 'graphql'
import depthLimit from 'graphql-depth-limit'
import { schema } from '../graphql/schema'
import { getApolloConfig } from '../config'

export const init = (): ApolloServer => {
  const apolloServer = new ApolloServer({
    schema,
    ...getApolloConfig(),
    validationRules: [depthLimit(5)],
    formatError: (err: GraphQLError) => {
      const { originalError, ...rest } = err
      return {
        ...rest,
        code: (originalError as any)?.code ?? 500,
      }
    },
  })

  process.on('beforeExit', () => {
    apolloServer.stop()
  })

  return apolloServer
}
