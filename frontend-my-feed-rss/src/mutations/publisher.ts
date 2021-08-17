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
