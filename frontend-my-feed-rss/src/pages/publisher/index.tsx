import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { CREATE_PUBLISHER } from '../../mutations/publisher'
import { HeaderStyle, Container, InputStyle, Button } from './styles'

export default function Publisher() {
  const { push } = useRouter()
  const [add, { loading }] = useMutation(CREATE_PUBLISHER, {
    onCompleted: () => {
      push('/home')
    }
  })

  const [name, setName] = useState('')
  const [link, setLink] = useState('')

  function handleSave() {
    add({
      variables: {
        name,
        avatar: link
      }
    })
  }
  return (
    <>
      <HeaderStyle>Criar publicadora</HeaderStyle>
      <Container>
        <InputStyle
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
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
