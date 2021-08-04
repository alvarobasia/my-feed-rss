import { FollowCardDiv } from './styles'
type FollowCardProps = {
  text: string
  info: number
}
export default function FollowCard({ info, text }: FollowCardProps) {
  return (
    <FollowCardDiv>
      <h3>{text}</h3>
      <span>{info}</span>
    </FollowCardDiv>
  )
}
