import { gql } from '@apollo/client'

export const GET_FEED = gql`
  query {
    getFeed {
      elements {
        content
        title
        isoDate
        link
      }
      rssLink {
        name
        link
      }
    }
  }
`

export const SEARCH_PUB = gql`
  query searchPub($pattern: String!) {
    searchPublisher(pattern: $pattern) {
      name
      id
      follow
    }
  }
`
