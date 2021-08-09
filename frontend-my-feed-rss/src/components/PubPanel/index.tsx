import { StyledPanel, Head, Avatar, ButtonStyle, Owner, Content } from './styles'
import Tab from '../Tab'
export default function PubPanel() {
  return (
    <StyledPanel>
      <Head>
        <span>Better coding</span>
        <ButtonStyle right={35}>Seguir</ButtonStyle>
        <ButtonStyle right={180}>Entrar</ButtonStyle>
        <Owner>
          <div>
            <img
              src="https://avatars.githubusercontent.com/u/43068788?v=4"
              width="100%"
            />
          </div>
          <p>Criador: alvaro</p>
        </Owner>
      </Head>
      <Avatar>
        <img
          src="https://miro.medium.com/fit/c/64/64/1*TyRLQdZO7NdPATwSeut8gg.png"
          width="100%"
        />
      </Avatar>
      <Content>
        <Tab />
      </Content>
    </StyledPanel>
  )
}
