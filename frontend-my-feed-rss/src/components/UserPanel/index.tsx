import { StyledPanel, Head, Avatar, ButtonStyle, Tip, LinksContainer } from './styles'
import InfosLinkUser from '../InfoLinksUser'
export default function Panel() {
  return (
    <StyledPanel>
      <Head>
        <span>alvaro</span>
        <ButtonStyle>Seguir</ButtonStyle>
        <Tip>Segue você</Tip>
      </Head>
      <Avatar>
        <img src="https://avatars.githubusercontent.com/u/43068788?v=4" width="100%" />
      </Avatar>
      <LinksContainer>
        <InfosLinkUser />
      </LinksContainer>
    </StyledPanel>
  )
}
