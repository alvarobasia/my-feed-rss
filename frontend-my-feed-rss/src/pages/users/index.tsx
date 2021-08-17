import UserCard from '../../components/UserCard'
import { Aside } from '../home/styles'
import Panel from '../../components/UserPanel'
import {
  SearchInput,
  SearchButton,
  ContainerHead,
  SearchIcon,
  UsersCardContainer,
  Container,
  Back,
  BackIcon
} from './styles'
import { useEffect, useState } from 'react'
import { GET_FEED } from '../../query/feed'
import { useLazyQuery, useMutation, useQuery } from '@apollo/client'
import { User } from '../../contexts/AuthContext'
import { SEARCH_USER } from '../../query/user'
import { useRouter } from 'next/router'
import { FOLLOW_USER, UNFOLLOW_USER } from '../../mutations/user'
export default function Users() {
  const [search, setSearch] = useState('')
  const { push } = useRouter()

  const { data, refetch } = useQuery(SEARCH_USER, {
    variables: {
      pattern: search
    }
  })
  const [follow] = useMutation(FOLLOW_USER, {
    onCompleted: () => {
      refetch()
    }
  })
  const [unfollow] = useMutation(UNFOLLOW_USER, {
    onCompleted: () => {
      refetch()
    }
  })
  function handleSearch() {}
  const [users, setUsers] = useState<User[]>([])

  function back() {
    push('/home')
  }
  useEffect(() => {
    const content: User[] = []
    if (data) {
      data.searchUser.forEach((e) => {
        content.push({
          ...e,
          linkAvatar: e.link_avatar
        })
      })
      setUsers(content)
    }
  }, [data])

  function handleFollow(id: string) {
    follow({
      variables: {
        id
      }
    })
  }

  function handleUnfollow(id: string) {
    unfollow({
      variables: {
        id
      }
    })
  }
  return (
    <Container>
      <Aside>
        <ContainerHead>
          <SearchInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Digite o nome do usuário"
          ></SearchInput>
          <SearchButton onClick={back}>
            <BackIcon />
          </SearchButton>
          {/* <Back onClick={handleSearch}>
            <SearchIcon />
          </Back> */}
        </ContainerHead>
        <UsersCardContainer>
          {users &&
            users.map((u) => {
              return (
                <UserCard
                  id={u.id}
                  callBackFollow={handleFollow}
                  callBackUnFollow={handleUnfollow}
                  key={u.id}
                  name={u.name}
                  url={u.linkAvatar}
                  follow={!!u.follow}
                />
              )
            })}
        </UsersCardContainer>
      </Aside>
      {/* <Panel /> */}
    </Container>
  )
}
