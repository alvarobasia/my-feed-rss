import { motion } from 'framer-motion'
import { Element } from '../../contexts/FeedContext'
import { format } from 'date-fns'
import BR from 'date-fns/locale/pt-BR'

import {
  CardStyle,
  ToolBar,
  Content,
  Logo,
  FavoriteIcon,
  ReadLater,
  External,
  NameTag,
  Actions,
  DateIcon,
  DateDiv
} from './styles'

interface CardProps {
  item: Element
  rssName: string
}
export default function Card({ item, rssName }: CardProps) {
  return (
    <CardStyle
      whileHover={{
        borderColor: '#FEBB45',
        backgroundColor: '#efefef'
      }}
    >
      <Logo>
        <motion.img src="./s.svg" width="50%" height="100%" />
      </Logo>
      <Content>
        <h1>{item.title}</h1>
        <p>{item.content}</p>
      </Content>
      <ToolBar>
        <Actions>
          <FavoriteIcon />
          <span>Favoritar</span>
        </Actions>
        <Actions>
          <ReadLater />
          <span>Ler mais tarde</span>
        </Actions>
        <Actions>
          <a
            style={{ display: 'flex', alignItems: 'center' }}
            href={item.link}
            target="_blank"
            rel="noreferrer"
          >
            <External />
            <span>Ir para post</span>
          </a>
        </Actions>
        <DateDiv>
          <DateIcon />
          <span>
            {format(new Date(item.isoDate), 'EEEEEE, d MMM y', {
              locale: BR
            })}
          </span>
        </DateDiv>
        <NameTag>
          <span>{rssName}</span>
        </NameTag>
      </ToolBar>
    </CardStyle>
  )
}
