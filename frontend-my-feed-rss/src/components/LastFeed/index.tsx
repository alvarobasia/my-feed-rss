import { useEffect, useState, useContext } from 'react'

import { Element, FeedContext } from '../../contexts/FeedContext'

import Card from './Card'
import { StyledDiv, Scroll } from './styles'

type FeedInnerControl = {
  el: Element
  name: string
}
export default function LastFeed() {
  const [stateFeed, setStateFeed] = useState<FeedInnerControl[]>([])
  const { feed } = useContext(FeedContext)

  useEffect(() => {
    const result: FeedInnerControl[] = []
    feed.forEach((f) => {
      f.elements.forEach((e) => {
        result.push({
          el: e,
          name: f.name
        })
      })
    })
    setStateFeed(
      result.sort(
        (a, b) => new Date(b.el.isoDate).getTime() - new Date(a.el.isoDate).getTime()
      )
    )
  }, [feed])
  return (
    <>
      <StyledDiv>
        <h2>Ultimas postagens</h2>
        <Scroll>
          {stateFeed.map((item) => {
            return <Card item={item.el} rssName={item.name} key={item.el.content} />
          })}
        </Scroll>
      </StyledDiv>
    </>
  )
}
