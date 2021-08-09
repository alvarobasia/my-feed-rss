import { Aside } from '../home/styles'
import {
  SearchInput,
  SearchButton,
  ContainerHead,
  SearchIcon,
  Container
} from '../users/styles'
import { PubCardContainer } from './styles'
import PubCard from '../../components/PubCard'
import PubPanel from '../../components/PubPanel'
export default function Pub() {
  return (
    <Container>
      <Aside>
        <ContainerHead>
          <SearchInput placeholder="Digite o nome da publicadora"></SearchInput>
          <SearchButton>
            <SearchIcon />
          </SearchButton>
        </ContainerHead>
        <PubCardContainer>
          <PubCard />
        </PubCardContainer>
      </Aside>
      <PubPanel />
    </Container>
  )
}
