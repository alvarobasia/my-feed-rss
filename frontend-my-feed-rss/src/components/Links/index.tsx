import { useContext } from 'react'
import { Container } from './styles'
import LinkInfo from './LinkInfo'
import { FeedContext } from '../../contexts/FeedContext'

export default function Links() {
  const { feed } = useContext(FeedContext)

  return (
    <Container>
      {feed.map((data) => {
        return <LinkInfo link={data.rssLink} name={data.name} key={data.name} />
      })}
    </Container>
  )
}
