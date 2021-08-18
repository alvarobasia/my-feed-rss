import { gql } from '@apollo/client'

export const GET_PUBS = gql`
  query {
    getPubs {
      id
      name
    }
  }
`
