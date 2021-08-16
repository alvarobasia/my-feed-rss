import { gql } from '@apollo/client'

export const SEARCH_USER = gql`
  query searchUser($pattern: String!) {
    searchUser(pattern: $pattern) {
      name
      follow
      link_avatar
      follow
      id
    }
  }
`
