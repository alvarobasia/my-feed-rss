import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { GET_LINKS } from '../../query/links'
import { Container } from './styles'
import LinkInfo from './LinkInfo'
interface Link {
  link: string
  name: string
}

export default function Links() {
  const { data } = useQuery(GET_LINKS)
  const [links, setLinks] = useState<Link[]>([])
  useEffect(() => {
    if (data && data.getUserLinks) {
      setLinks(data.getUserLinks)
    }
  }, [data])
  return (
    <Container>
      {links.map((data) => {
        return <LinkInfo link={data.link} name={data.name} key={data.name} />
      })}
    </Container>
  )
}
