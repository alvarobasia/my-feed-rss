import { GetServerSideProps } from 'next'
import LastFeed from '../../components/LastFeed'
import RssLink from '../../components/RssLink'
import Links from '../../components/Links'
import { HomeDiv, ContentHeader, Main, Aside, StylePub, StyleUser } from './styles'
import UserHeadBar from '../../components/UserBar'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import HomeButton from '../../components/HomeButton'

export default function Home() {
  return (
    <>
      <HomeDiv>
        <Aside>
          <h2>Adicionar novo link</h2>
          <ContentHeader>
            <RssLink />
          </ContentHeader>
          <Links />
          <HomeButton path="/pub" title="Procurar publicadoras">
            <StylePub />
          </HomeButton>{' '}
          <HomeButton path="/publisher" title="Criar publicadora">
            <StylePub />
          </HomeButton>
          <HomeButton path="/yourpubs" title="Sua publicadora">
            <StylePub />
          </HomeButton>
          <HomeButton path="/users" title="Procurar usuário">
            <StyleUser />
          </HomeButton>
          <UserHeadBar />
        </Aside>
        <Main>
          <LastFeed />
        </Main>
      </HomeDiv>
    </>
  )
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context.req.cookies)

  return {
    props: {}
  }
}
