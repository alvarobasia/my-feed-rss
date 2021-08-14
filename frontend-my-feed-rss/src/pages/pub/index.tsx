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
import { AuthContext, User } from '../../contexts/AuthContext'
import { useContext, useState } from 'react'

export type PubType = {
  name: string
  avatarLink: string
  owner: User | null
  members: string[]
  followers: string[]
}

export default function Pub() {
  const [currentPub, setCurrentPub] = useState<PubType | null>(null)
  const { user } = useContext(AuthContext)
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
          <PubCard
            pub={{
              avatarLink:
                'https://miro.medium.com/fit/c/64/64/1*TyRLQdZO7NdPATwSeut8gg.png',
              name: 'Bett',
              owner: user,
              followers: [],
              members: []
            }}
          />
        </PubCardContainer>
      </Aside>
      <PubPanel />
    </Container>
  )
}
