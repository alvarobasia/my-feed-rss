import { gql } from '@apollo/client'

export const CREATE_PUBLISHER = gql`
  mutation publisher($name: String!, $avatar: String!) {
    createPublisher(createPublisherInput: { name: $name, avatarLink: $avatar }) {
      id
    }
  }
`
