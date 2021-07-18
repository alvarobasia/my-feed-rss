import { useMutation } from '@apollo/client'
import { createContext, PropsWithChildren, useState } from 'react'
import { LOGIN } from '../mutations/login'
import { setCookie } from 'nookies'

type AuthContextType = {
  isAuthenticated: boolean
  error: boolean
  loading: boolean
  user: User | null
  singIn: (email: string, password: string) => void
}

type User = {
  id: string
  username: string
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider(props: PropsWithChildren<any>) {
  const isAuthenticated = false
  const [user, setUser] = useState<User | null>(null)
  const [errorState, setErrorState] = useState(false)

  const [login, { loading }] = useMutation(LOGIN, {
    onError: () => {
      setErrorState(true)
    },
    onCompleted: ({ login }) => {
      setCookie(undefined, 'my-feed-rss-token', login.token)
      setUser(login.user)
    }
  })

  async function singIn(email: string, password: string) {
    login({
      variables: {
        email,
        password
      }
    })
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, error: errorState, loading, user, singIn }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
