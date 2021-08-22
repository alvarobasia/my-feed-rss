import { gql } from '@apollo/client'

export const CREATE_PUBLISHER = gql`
  mutation publisher($name: String!, $avatar: String!) {
    createPublisher(createPublisherInput: { name: $name, avatarLink: $avatar }) {
      id
    }
  }
`

export const UNFOLLOW_PUB = gql`
  mutation unfollowPub($id: String!) {
    unfollowPublisher(id: { id: $id }) {
      id
    }
  }
`
export const FOLLOW_PUB = gql`
  mutation followPub($id: String!) {
    followPublisher(id: { id: $id }) {
      id
    }
  }
`
export const ADD_PUBLI = gql`
  mutation addPubli(
    $title: String!
    $description: String!
    $content: String!
    $idPublisher: String!
  ) {
    createPublication(
      createPublicationInput: {
        title: $title
        description: $description
        content: $content
        idPublisher: $idPublisher
      }
    ) {
      id
    }
  }
`
