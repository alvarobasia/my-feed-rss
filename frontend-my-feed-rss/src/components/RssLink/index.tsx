import React from 'react'
import { RssInput, RssAdd } from './styles'
import { BsPlus } from 'react-icons/bs'
import ReactTooltip from 'react-tooltip'

export default function RssLink() {
  return (
    <>
      <RssInput placeholder="Adicione um link RSS" />
      <RssAdd data-tip="Adicionar">
        <BsPlus size={35} />
      </RssAdd>
      <ReactTooltip place="top" backgroundColor={'#FEBB45'} effect="solid" />
    </>
  )
}
