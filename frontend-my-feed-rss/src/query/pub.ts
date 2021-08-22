import { gql } from '@apollo/client'

export const GET_PUBS = gql`
  query {
    getPubs {
      id
      name
    }
  }
`

export const GET_PUBLICATIONS = gql`
  query getPublications($id: String!) {
    getPublications(id: { id: $id }) {
      content
    }
  }
`
