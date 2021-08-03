import { motion } from 'framer-motion'
import styled from 'styled-components'
import { MdFavorite, MdFavoriteBorder, MdDateRange } from 'react-icons/md'
import { BsBookmarkFill, BsBookmark } from 'react-icons/bs'
import { BiLinkExternal } from 'react-icons/bi'

export const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 15px 15px 30px #dcdc;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h2 {
    margin-left: 64px;
    font-family: Lato, sans-serif;
    font-weight: 800;
    font-size: 32px;
    color: ${(props) => props.theme.colors.primary};
  }
`
export const Scroll = styled(motion.div)`
  width: 100%;
  height: 90%;
  overflow-y: auto;
`

export const CardStyle = styled(motion.div)`
  width: 80%;
  display: grid;
  grid-template-rows: 72% 1fr;
  grid-template-columns: 18% 1fr;
  grid-template-areas:
    'ft cont'
    'had had';
  flex-direction: row;
  margin: 0 5% 15px;
  height: 140px;
  box-shadow: 15px 15px 30px #dcdc;
  border: 1px solid ${(props) => props.theme.colors.primaryDark};
  border-radius: 8px;
`

export const Logo = styled.div`
  grid-area: ft;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Content = styled.div`
  grid-area: cont;
  display: flex;
  flex-direction: column;
  padding: 2px;
  h1 {
    margin: 0;
    padding: 1px;
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 80%;
    color: ${(props) => props.theme.colors.secondary};
    font-family: Lato, sans-serif;
  }
  p {
    margin: 0;
    padding: 1px;
    color: #aaa;
    display: -webkit-box;
    height: 50px;
    font-size: 14px;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.625;
  }
`
export const ToolBar = styled.div`
  grid-area: had;

  margin-left: 22px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const Actions = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px 0 0;
  gap: 0.5px;
  width: auto;
  height: 100%;
  span {
    font-family: Lato, sans-serif;
    font-weight: 300;
    color: #555;
  }
  &:hover {
    span {
      color: ${(props) => props.theme.colors.primaryDark};
    }
  }
`
export const DateDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px 0 0;
  gap: 0.5px;
  width: auto;
  height: 100%;
  span {
    font-family: Lato, sans-serif;
    font-weight: 500;
    color: ${(props) => props.theme.colors.primaryDark};
  }
`
export const FavoriteIcon = styled(MdFavorite)`
  color: ${(props) => props.theme.colors.primary};
  font-size: 25px;
`

export const FavoriteIconBorder = styled(MdFavoriteBorder)`
  color: ${(props) => props.theme.colors.primary};
  font-size: 25px;
`

export const ReadLater = styled(BsBookmarkFill)`
  color: ${(props) => props.theme.colors.primary};
  font-size: 25px;
`

export const ReadLaterMark = styled(BsBookmark)`
  color: ${(props) => props.theme.colors.primary};
  font-size: 25px;
`

export const External = styled(BiLinkExternal)`
  color: ${(props) => props.theme.colors.primary};
  font-size: 25px;
`
export const NameTag = styled.div`
  width: auto;
  height: auto;
  background-color: ${(props) => props.theme.colors.primaryDark};
  /* margin-top: 10px; */
  margin-left: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  border-radius: 50px;
  span {
    color: #fff;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 150px;
  }
`
export const DateIcon = styled(MdDateRange)`
  color: ${(props) => props.theme.colors.primary};
  font-size: 25px;
`
