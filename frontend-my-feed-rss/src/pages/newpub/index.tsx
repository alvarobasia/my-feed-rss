import dynamic from 'next/dynamic'
import { Container, ContainerInput } from './styles'
export default function NewPub() {
  const NoSSREditor = dynamic(() => import('../../components/Editor'), { ssr: false })
  return (
    <>
      <ContainerInput>
        <input placeholder="Titulo" />
        <textarea rows={4} cols={80} placeholder="Digite uma descrição"></textarea>
      </ContainerInput>
      <Container>
        <NoSSREditor />
      </Container>
    </>
  )
}
