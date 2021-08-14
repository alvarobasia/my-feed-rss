import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { CREATE_PUBLISHER } from '../../mutations/publisher'
import { ADD_USER } from '../../mutations/user'
import { HeaderStyle, Container, InputStyle, Button } from './styles'
// name: "alvaro2",
//       username: "alvaro2",
//       email: "alvaro2@mail.com",
//       password: "123",
//       link_avatar: "https://avatars.githubusercontent.com/u/43068788?v=4"
//     }
export default function NewUser() {
  const { push } = useRouter()
  const [add, { loading }] = useMutation(ADD_USER, {
    onCompleted: () => {
      push('/login')
    }
  })

  const [name, setName] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [link, setLink] = useState('')

  function handleSave() {
    add({
      variables: {
        name,
        username: userName,
        password,
        email,
        link
      }
    })
  }
  return (
    <>
      <HeaderStyle>Criar usuário</HeaderStyle>
      <Container>
        <InputStyle
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
        />
        <InputStyle
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Nome de usuário"
        />
        <InputStyle
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <InputStyle
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Senha"
        />
        <InputStyle
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Avatar link"
        />
        <Button onClick={handleSave}>Criar</Button>
      </Container>
    </>
  )
}
