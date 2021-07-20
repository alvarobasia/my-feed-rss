import { GetServerSideProps } from 'next'
import RssLink from '../../components/RssLink'
import SideBar from '../../components/SideBar'
import { HomeDiv, Content } from './styles'
export default function Home() {
  return (
    <>
      <HomeDiv>
        <SideBar />
        <Content>
          <RssLink />
        </Content>
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
