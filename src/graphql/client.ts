import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.GRAPHCMS_API_HOST || ''

const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHCMS_API_TOKEN}`
  }
})

export default client
