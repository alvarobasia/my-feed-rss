import { gql } from '@apollo/client'

export const GET_LINKS = gql`
  query {
    getUserLinks {
      link
      name
    }
  }
`
