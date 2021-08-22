import { useLazyQuery, useMutation } from '@apollo/client'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import { PubContext } from '../../contexts/PubContext'
import { ADD_PUBLI } from '../../mutations/publisher'
import { Container, ContainerInput } from './styles'
export default function NewPub() {
  const NoSSREditor = dynamic(() => import('../../components/Editor'), { ssr: false })
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [content, setContent] = useState('')
  const { push } = useRouter()
  const { pub } = useContext(PubContext)
  const [add] = useMutation(ADD_PUBLI, {
    onCompleted: () => {
      push('/home')
    }
  })
  function handleSavePub(content: string) {
    setContent(content)
    console.log('llp', pub)

    if (pub) {
      add({
        variables: {
          title,
          description,
          content,
          idPublisher: pub?.id
        }
      })
    }
  }

  return (
    <>
      <ContainerInput>
        <input
          placeholder="Titulo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          rows={4}
          cols={80}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Digite uma descrição"
        ></textarea>
      </ContainerInput>
      <Container>
        <NoSSREditor onSavePub={handleSavePub} />
      </Container>
    </>
  )
}
