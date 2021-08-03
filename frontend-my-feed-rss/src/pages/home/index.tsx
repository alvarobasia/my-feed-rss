import { GetServerSideProps } from 'next'
import LastFeed from '../../components/LastFeed'
import RssLink from '../../components/RssLink'
// import SideBar from '../../components/SideBar'
import { HomeDiv, ContentHeader, Main, Aside } from './styles'

export default function Home() {
  return (
    <>
      <HomeDiv>
        {/* <SideBar /> */}

        <Aside>
          <h2>Adicionar novo link</h2>
          <ContentHeader>
            <RssLink />
          </ContentHeader>
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
