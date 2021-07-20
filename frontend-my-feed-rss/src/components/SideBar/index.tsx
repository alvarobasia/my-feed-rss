import { Bar, BsPlusStyled, BsSearchStyled, FiRssStyled } from './styles'
import ItemList from './ItemList'

export default function SideBar() {
  return (
    <Bar>
      <ItemList
        el={<BsPlusStyled data-tip="Adicione um link de RSS" color={'#fff'} size={45} />}
      />
      <ItemList
        el={
          <BsSearchStyled
            data-tip="Procure por usuários ou publicações"
            color={'#fff'}
            size={22}
          />
        }
      />
      <ItemList el={<FiRssStyled data-tip="Seus RSSs" color={'#fff'} size={28} />} />
    </Bar>
  )
}
