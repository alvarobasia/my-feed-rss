import { gql } from '@apollo/client'

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(login: { email: $email, password: $password }) {
      token
      user {
        id
        name
        username
        email
        link_avatar
      }
    }
  }
`

export const ADD_LINK = gql`
  mutation addLink($link: String!, $name: String!) {
    addLink(addLink: { link: $link, name: $name }) {
      link
      name
    }
  }
`

export const ADD_USER = gql`
  mutation createUser(
    $name: String!
    $username: String!
    $email: String!
    $password: String!
    $link: String!
  ) {
    createUser(
      createUser: {
        name: $name
        username: $username
        email: $email
        password: $password
        link_avatar: $link
      }
    ) {
      id
    }
  }
`

export const UNFOLLOW_USER = gql`
  mutation unfollow($id: String!) {
    unfollow(id: { id: $id }) {
      id
    }
  }
`
export const FOLLOW_USER = gql`
  mutation followUser($id: String!) {
    followUser(id: { id: $id }) {
      id
    }
  }
`
