import { GetServerSideProps } from 'next'
import LastFeed from '../../components/LastFeed'
import RssLink from '../../components/RssLink'
// import SideBar from '../../components/SideBar'
import { HomeDiv, ContentHeader, Main } from './styles'

export default function Home() {
  return (
    <>
      <HomeDiv>
        {/* <SideBar /> */}
        <ContentHeader>
          <RssLink />
        </ContentHeader>
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
