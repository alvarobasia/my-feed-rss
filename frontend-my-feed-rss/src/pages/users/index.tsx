import UserCard from '../../components/UserCard'
import { Aside } from '../home/styles'
import Panel from '../../components/UserPanel'
import {
  SearchInput,
  SearchButton,
  ContainerHead,
  SearchIcon,
  UsersCardContainer,
  Container
} from './styles'
export default function Users() {
  return (
    <Container>
      <Aside>
        <ContainerHead>
          <SearchInput placeholder="Digite o nome do usuário"></SearchInput>
          <SearchButton>
            <SearchIcon />
          </SearchButton>
        </ContainerHead>
        <UsersCardContainer>
          <UserCard />
        </UsersCardContainer>
      </Aside>
      <Panel />
    </Container>
  )
}
