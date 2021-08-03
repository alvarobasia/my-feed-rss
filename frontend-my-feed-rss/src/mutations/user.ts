import { gql } from '@apollo/client'

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(login: { email: $email, password: $password }) {
      token
      user {
        id
        username
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
