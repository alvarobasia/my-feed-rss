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
