import { GraphQLEnumType } from 'graphql'

export const GraphQLEnumCurrency = new GraphQLEnumType({
  name: 'GraphQLEnumCurrency',
  description: 'Currency Enum',
  values: {
    USD: { value: 'USD' },
    EUR: { value: 'EUR' },
    GPB: { value: 'GPB' },
  },
})
