import React, { useState } from 'react'
import { RssInput, RssAdd } from './styles'
import { BsPlus } from 'react-icons/bs'
import { useMutation } from '@apollo/client'
import { ADD_LINK } from '../../mutations/login'
import { ToastContainer, toast } from 'react-toastify'
import dynamic from 'next/dynamic'

export default function RssLink() {
  const ReactTooltip = dynamic(() => import('react-tooltip'), {
    ssr: false
  })
  const [addLink] = useMutation(ADD_LINK, {
    onError: () => {
      toast.error(`Não foi possível adicionar o link ${name}.`)
    },
    onCompleted: () => {
      toast.success(`Link ${name} adcionado com sucesso!`)
    }
  })
  const [name, setName] = useState('')
  const [link, setLink] = useState('')

  function handleAdd() {
    addLink({
      variables: {
        name,
        link
      }
    })
  }
  return (
    <>
      <RssInput
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <RssInput
        placeholder="Link RSS"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <RssAdd onClick={() => handleAdd()} data-tip="Adicionar">
        <BsPlus size={35} />
      </RssAdd>
      <ReactTooltip place="top" backgroundColor={'#FEBB45'} effect="solid" />
      <ToastContainer autoClose={5000} position={'bottom-center'} />
    </>
  )
}
