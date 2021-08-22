import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import FollowCard from './FollowCard'
import { Container, Avatar, LogOut } from './styles'
export default function UserHeadBar() {
  const { user } = useContext(AuthContext)

  return (
    <Container>
      <Avatar>
        <img src={user?.linkAvatar} width="100%" />
      </Avatar>
      <span>{user?.username}</span>
      {/* <FollowCard info={0} text={'Seguindo'} />
      <FollowCard info={0} text={'Seguidores'} />
      <FollowCard info={2} text={'Links'} /> */}
      <LogOut />
    </Container>
  )
}
