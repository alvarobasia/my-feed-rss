import Card from './Card'
import { StyledDiv, Scroll } from './styles'
export default function LastFeed() {
  return (
    <>
      <StyledDiv>
        <h2>Ultimas atualizações</h2>
        <Scroll>
          {[1, 2].map((i) => {
            return <Card key={i} />
          })}
        </Scroll>
      </StyledDiv>
    </>
  )
}
