import { useContext, useEffect } from 'react'
import { Container } from './styles'
import LinkInfo from './LinkInfo'
import { FeedContext } from '../../contexts/FeedContext'
import { useMutation } from '@apollo/client'
import { DELETE_LINK } from '../../mutations/user'
import { useRouter } from 'next/router'

export default function Links() {
  const { feed, h, refetch } = useContext(FeedContext)
  // const { reload } = useRouter()
  useEffect(() => {
    h()
  }, [])
  const [deleteLink] = useMutation(DELETE_LINK, {
    onCompleted: () => {
      refetch()
    }
  })
  function handleDelete(link: string) {
    deleteLink({
      variables: {
        link
      }
    })
  }
  return (
    <Container>
      {feed.map((data) => {
        return (
          <LinkInfo
            callBackOnRemove={handleDelete}
            link={data.rssLink}
            name={data.name}
            key={data.name}
          />
        )
      })}
    </Container>
  )
}
