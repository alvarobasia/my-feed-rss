import { useLazyQuery, useQuery } from '@apollo/client'
import { createContext, PropsWithChildren, useState, useEffect } from 'react'
import { GET_FEED } from '../query/feed'

export interface Element {
  content: string
  title: string
  isoDate: Date
  link: string
}

export interface Feed {
  elements: Element[]
  rssLink: string
  name: string
}

type FeedContextType = {
  feed: Feed[]
  loading: boolean
  h: any
  refetch: any
}

export const FeedContext = createContext({} as FeedContextType)

export function FeedProvider(props: PropsWithChildren<any>) {
  const [feed, setFeed] = useState<Feed[]>([])
  const [c, { data, loading, refetch }] = useLazyQuery(GET_FEED)

  function h() {
    c()
  }
  useEffect(() => {
    const userFeed: Feed[] = []
    if (data) {
      data.getFeed.forEach(({ elements, rssLink }: any) => {
        userFeed.push({
          elements,
          rssLink: rssLink.link,
          name: rssLink.name
        })
      })
      setFeed(userFeed)
    }
  }, [data])

  return (
    <FeedContext.Provider value={{ feed, loading, h, refetch }}>
      {props.children}
    </FeedContext.Provider>
  )
}
