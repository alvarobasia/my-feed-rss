import React, { ReactNode } from 'react'
import ReactTooltip from 'react-tooltip'

type ItemListProps = {
  el: ReactNode
}

const ItemList: React.FC<ItemListProps> = ({ el }) => {
  return (
    <>
      {el} <ReactTooltip place="top" backgroundColor={'#FEBB45'} effect="solid" />
    </>
  )
}

export default ItemList
